import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/data";

export default function Home() {
  return (
    <main className="grid gap-8">
      <section className="hero-shell">
        <h1 className="hero-title">
          マイポートフォリオ
        </h1>
      </section>

      <section className="card">
        <h2 className="section-title">自己紹介</h2>
        <p className="section-text">
          東京理科大学（23~）（数学） /
          42 Tokyo（23/05~） Common Core修了
        </p>
        <p className="section-text">
          ここでは「やったこと」「工夫したこと」「得られた成果」がひと目で分かる構成にしています。
        </p>
        <p className="section-text">
          42 Tokyo Holy Graph / Level
        </p>
        <div className="achievement-image-grid">
          <div className="achievement-image-wrap">
            <p className="achievement-image-caption text-accent">Holy Graph</p>
            <Image
              src="/42cc.png"
              alt="42tokyo Holy Graph"
              width={1200}
              height={800}
              className="achievement-image"
            />
          </div>
          <div className="achievement-image-wrap">
            <p className="achievement-image-caption text-accent">Profile Level</p>
            <Image
              src="/42level.png"
              alt="42tokyo profile level"
              width={1200}
              height={800}
              className="achievement-image"
            />
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">開発実績</h2>
        <div className="grid gap-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card project-card"
            >
              <article className="grid gap-2">
                <h3 className="m-0 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="m-0 text-sm project-category">{project.category}</p>
                <p className="m-0 text-slate-700">{project.summary}</p>
                <p className="m-0 text-xs font-medium text-blue-700">
                  詳細へ →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
  
    </main>
  );
}
