import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/data";
import { withBasePath } from "../lib/base-path";

export default function Home() {
  return (
    <main className="grid gap-8">
      <section className="hero-shell">
        <h1 className="hero-title">マイポートフォリオ</h1>
      </section>

      <section className="card">
        <h2 className="section-title">自己紹介</h2>
        <div className="intro-stack">
          <p className="section-text">
            東京理科大学（23~）（数学） / 42 Tokyo（23/05~） Common Core修了
          </p>
          <p className="section-text">
            ここでは「やったこと」「工夫したこと」「得られた成果」がひと目で分かる構成にしています。
          </p>
          <div className="social-links">
            <a
              href="https://github.com/amkfbant"
              target="_blank"
              rel="noreferrer"
              aria-label="amkfbant の GitHub"
              className="social-link github-link"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="social-link-icon"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.5 0 12.28c0 5.42 3.44 10.01 8.2 11.63.6.12.82-.27.82-.6 0-.3-.01-1.09-.02-2.14-3.34.75-4.04-1.67-4.04-1.67-.55-1.43-1.33-1.81-1.33-1.81-1.09-.77.08-.75.08-.75 1.2.09 1.84 1.27 1.84 1.27 1.08 1.9 2.82 1.35 3.5 1.03.11-.8.42-1.35.77-1.66-2.66-.31-5.47-1.36-5.47-6.08 0-1.34.47-2.43 1.24-3.28-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.25a11.2 11.2 0 0 1 6 0c2.29-1.58 3.29-1.25 3.29-1.25.66 1.7.25 2.96.12 3.27.77.85 1.24 1.94 1.24 3.28 0 4.73-2.82 5.76-5.5 6.07.43.38.82 1.12.82 2.27 0 1.64-.01 2.96-.01 3.36 0 .33.21.72.83.6 4.75-1.63 8.18-6.21 8.18-11.63C24 5.5 18.63 0 12 0Z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="achievement-image-grid">
          <div className="achievement-image-wrap">
            <p className="achievement-image-caption text-accent">42 Tokyo Holy Graph</p>
            <Image
              src={withBasePath("/42cc.png")}
              alt="42tokyo Holy Graph"
              width={1200}
              height={800}
              className="achievement-image"
            />
          </div>
          <div className="achievement-image-wrap">
            <p className="achievement-image-caption text-accent">42 Level</p>
            <Image
              src={withBasePath("/42level.png")}
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
              className="card project-card project-card-link"
              style={{ padding: "1rem" }}
            >
              <div className="grid gap-2">
                <h3 className="m-0 text-xl font-semibold">{project.title}</h3>
                <p className="m-0 text-sm project-category">{project.category}</p>
                <p className="m-0">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
