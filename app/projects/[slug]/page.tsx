import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";
import { getProjectContentBySlug } from "../../../lib/project-content";
import { withBasePath } from "../../../lib/base-path";
import MermaidRenderer from "../MermaidRenderer";

const CONTENT_SLUG_BY_PROJECT: Record<string, string> = {
  "42-cub3d": "cub3d",
  "42-ft-irc": "ft-irc",
  "42-minishell": "minishell",
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {
      title: "Not Found | My Portfolio",
      description: "指定されたプロジェクトは見つかりませんでした。",
    };
  }
  return {
    title: `${project.title} | My Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  const contentSlug = CONTENT_SLUG_BY_PROJECT[project.slug];
  const projectContent = contentSlug
    ? await getProjectContentBySlug(contentSlug, { stripTitle: true })
    : null;

  return (
    <main className="grid gap-6">
      <section className="grid gap-2">
        <Link href="/" className="text-sm text-blue-700 hover:text-blue-900">
          ← ホームに戻る
        </Link>
        <h1 className="hero-title" style={{ fontSize: "2rem" }}>
          {project.title}
        </h1>
        <p className="hero-summary">{project.summary}</p>
      </section>

      <section className="card">
        <h2 className="section-title">プロジェクト概要</h2>
        <p className="section-text">{project.description}</p>
        {project.demoVideo ? (
          <video
            className="demo-video"
            src={withBasePath(project.demoVideo)}
            controls
            preload="metadata"
            playsInline
          />
        ) : null}
        <p className="section-text">期間: {project.period}</p>
        <p className="section-text">役割: {project.role}</p>
      </section>

      <section className="card">
        <h2 className="section-title">使用技術</h2>
        <div className="tag-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">課題と工夫</h2>
        <ul className="ml-6 pl-5" style={{ listStyleType: "disc" }}>
          {project.challenges.map((challenge) => (
            <li key={challenge} className="text-slate-700">
              {challenge}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="section-title">成果</h2>
        <p className="section-text">{project.outcome}</p>
      </section>

      {projectContent ? (
        <section className="card article-content">
          <h2 className="section-title">技術詳細</h2>
          <p className="section-text" style={{ marginBottom: "1rem" }}>
            最終更新: {new Date(projectContent.updatedAt).toLocaleDateString("ja-JP")}
          </p>
          <MermaidRenderer />
          <div dangerouslySetInnerHTML={{ __html: projectContent.content }} />
        </section>
      ) : null}

      {project.demoUrl ? (
        <section className="flex flex-wrap gap-3">
          <a
            href={project.demoUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            デモ
          </a>
        </section>
      ) : null}
    </main>
  );
}
