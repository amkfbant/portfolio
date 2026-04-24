const repository = process.env.GITHUB_REPOSITORY ?? "";
const repo = repository.includes("/") ? repository.split("/")[1] ?? "" : "";
const isProjectPages = Boolean(repo && !repo.endsWith(".github.io"));

export const BASE_PATH = isProjectPages ? `/${repo}` : "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return `${BASE_PATH}/${path}`;
  }
  return `${BASE_PATH}${path}`;
}
