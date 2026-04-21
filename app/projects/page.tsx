import Link from "next/link";
import { projects } from "./data";

export const metadata = {
  title: "Projects | My Portfolio",
  description: "制作物の一覧",
};

export default function ProjectsPage() {
  return (
    <main className="grid gap-6">
      <section className="hero-shell">
        <p className="eyebrow small">Portfolio / Projects</p>
        <h1 className="hero-title" style={{ fontSize: "2rem" }}>
          制作実績
        </h1>
        <p className="hero-summary">
          ここでは、設計意図・課題解決・結果に重点を置いて制作物を整理しています。
        </p>
      </section>
      <div className="grid gap-3">
        {projects.map((project) => (
          <article key={project.slug} className="card">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <h2 className="m-0 text-xl font-semibold text-slate-900">{project.title}</h2>
                <p className="m-0 text-slate-700">{project.summary}</p>
              </div>
              <p className="m-0 text-sm" style={{ color: "#9faee6" }}>
                担当: {project.role}（{project.period}）
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="btn btn-secondary w-fit px-4 py-2"
              >
                詳細を見る
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
