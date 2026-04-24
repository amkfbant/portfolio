import { marked } from "marked";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import type { Dirent } from "node:fs";

type ProjectContentMetadata = {
  slug: string;
  title: string;
  updatedAt: string;
};

type RenderedProjectContent = {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
};

const PROJECTS_ROOT = path.resolve(process.cwd(), "projects");
const MERMAID_RE = /```mermaid(?:[^\S\r\n]+[^\n]*)?\r?\n([\s\S]*?)\r?\n```/g;
const SLUG_RE = /^[a-z0-9-]+$/i;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractTitle(markdown: string, fallbackSlug: string): string {
  const m = markdown.match(/^#\s+(.+)$/m);
  if (m?.[1]) {
    return m[1].trim();
  }
  return fallbackSlug;
}

function normalizeMermaidMarkdown(markdown: string): string {
  return markdown.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+[^\n]*\n+/, "");
}

function safeProjectContentPath(slug: string): string {
  if (!SLUG_RE.test(slug)) {
    throw new Error("Invalid project slug");
  }

  return path.join(PROJECTS_ROOT, slug);
}

function renderMermaidSource(source: string): string {
  const code = source.trim();
  if (!code) {
    return '<pre class="mermaid mermaid-source"><code class="language-mermaid">(empty mermaid block)</code></pre>';
  }

  return `<pre class="mermaid mermaid-source">${escapeHtml(code)}</pre>`;
}

async function renderMarkdown(markdown: string): Promise<string> {
  const normalized = normalizeMermaidMarkdown(markdown);
  const matches = [...normalized.matchAll(MERMAID_RE)];

  if (matches.length === 0) {
    return marked.parse(normalized);
  }

  const parts: string[] = [];
  let index = 0;
  for (const match of matches) {
    const start = match.index ?? 0;
    const block = match[1] ?? "";

    parts.push(normalized.slice(index, start));
    parts.push(renderMermaidSource(block));
    index = start + match[0].length;
  }
  parts.push(normalized.slice(index));

  return marked.parse(parts.join(""));
}

async function renderProjectContent(markdown: string): Promise<string> {
  return renderMarkdown(markdown);
}

export async function getRawProjectContentBySlug(slug: string): Promise<string | null> {
  const decoded = decodeURIComponent(slug);
  if (!SLUG_RE.test(decoded)) {
    return null;
  }

  try {
    return await readFile(path.join(safeProjectContentPath(decoded), "index.md"), "utf-8");
  } catch {
    return null;
  }
}

type ProjectContentOptions = {
  stripTitle?: boolean;
};

export async function getProjectContentBySlug(
  slug: string,
  options: ProjectContentOptions = {},
): Promise<RenderedProjectContent | null> {
  const decoded = decodeURIComponent(slug);
  if (!SLUG_RE.test(decoded)) {
    return null;
  }

  const source = await getRawProjectContentBySlug(decoded);
  if (!source) {
    return null;
  }

  const sourcePath = path.join(safeProjectContentPath(decoded), "index.md");
  const body = options.stripTitle ? stripLeadingH1(source) : source;
  const [content, fileStat] = await Promise.all([
    renderProjectContent(body),
    stat(sourcePath),
  ]);

  return {
    slug: decoded,
    title: extractTitle(source, decoded),
    content,
    updatedAt: fileStat.mtime.toISOString(),
  };
}

export async function getProjectContentMetadataList(): Promise<ProjectContentMetadata[]> {
  const dirs = await readdir(PROJECTS_ROOT, { withFileTypes: true });
  const list: ProjectContentMetadata[] = [];

  for (const dir of dirs.filter((entry: Dirent) => entry.isDirectory())) {
    if (!SLUG_RE.test(dir.name)) {
      continue;
    }

    const sourcePath = path.join(safeProjectContentPath(dir.name), "index.md");
    try {
      const [content, fileStat] = await Promise.all([
        readFile(sourcePath, "utf-8"),
        stat(sourcePath),
      ]);
      list.push({
        slug: dir.name,
        title: extractTitle(content, dir.name),
        updatedAt: fileStat.mtime.toISOString(),
      });
    } catch {
      // index.md がないフォルダは対象外
    }
  }

  return list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getStaticProjectContentParams() {
  const list = await getProjectContentMetadataList();
  return list.map((item) => ({ slug: item.slug }));
}
