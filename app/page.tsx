const projects = [
  {
    title: "Project One",
    desc: "短く強みが伝わる作品例を1件ずつ並べます。",
  },
  {
    title: "Project Two",
    desc: "API連携やUI実装など、実務寄りの経験を要約します。",
  },
  {
    title: "Project Three",
    desc: "継続的デリバリーを含む公開用デモを追加します。",
  },
];

export default function Home() {
  return (
    <main>
      <p className="eyebrow">Portfolio</p>
      <h1>私のポートフォリオ</h1>
      <p>
        GitHub Pages で公開する前提の、シンプルで高速なポートフォリオサイトです。
      </p>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
