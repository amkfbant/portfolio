const repository = process.env.GITHUB_REPOSITORY ?? "";
const repo = repository.includes("/") ? repository.split("/")[1] ?? "" : "";
const isProjectPages = Boolean(repo && !repo.endsWith(".github.io"));
const basePath = isProjectPages ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProjectPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
