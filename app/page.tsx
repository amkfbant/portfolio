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
    <main className="grid gap-6">
      <p className="eyebrow text-xs font-semibold tracking-[0.08em] uppercase text-blue-600">
        Portfolio
      </p>
      <h1 className="text-4xl font-bold">私のポートフォリオ</h1>
      <p className="text-sm text-slate-700 sm:text-base">
        GitHub Pages で公開する前提の、シンプルで高速なポートフォリオサイトです。
      </p>
      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="grid gap-3">
          {projects.map((project) => (
            <li key={project.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="m-0 mb-1 text-lg font-medium">{project.title}</h3>
              <p className="text-slate-700">{project.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
