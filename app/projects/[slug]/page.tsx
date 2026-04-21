import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";

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

  return (
    <main className="grid gap-6">
      <section className="grid gap-2">
        <Link href="/projects" className="text-sm text-blue-700 hover:text-blue-900">
          ← 制作実績一覧に戻る
        </Link>
        <h1 className="hero-title" style={{ fontSize: "2rem" }}>
          {project.title}
        </h1>
        <p className="hero-summary">{project.summary}</p>
      </section>

      <section className="card">
        <h2 className="section-title">プロジェクト概要</h2>
        <p className="section-text">{project.description}</p>
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

      <section className="flex flex-wrap gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            デモ
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </section>
    </main>
  );
}
