import Link from "next/link";

import {
  ArrowRight,
  Wallet,
  CreditCard,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    title: "サブスク管理",
    description: "動画・音楽・アプリの固定費をシンプルに整理。",
    href: "/tools/subscription",
    icon: Wallet,
  },
  // {
  //   title: "固定費見直し",
  //   description: "毎月の支出を見直して、無駄を最適化。",
  //   href: "/tools/fixed-cost",
  //   icon: CreditCard,
  // },
  // {
  //   title: "ダイエット管理",
  //   description: "食事・体重・習慣をスマートに記録。",
  //   href: "/tools/diet",
  //   icon: Dumbbell,
  // },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* hero */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-white" />

        {/* blur */}
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          {/* badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm text-cyan-700 backdrop-blur">
            <Sparkles size={16} />
            Life Optimization Tools
          </div>

          {/* title */}
          <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            生活を、
            <br />
            もっと最適に。
          </h1>

          {/* text */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            AKNOA は、 固定費管理・健康管理・生活改善をサポートする
            便利ツールを提供します。
          </p>

          {/* buttons */}
          {/* <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-400"
            >
              ツールを見る
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/tools/subscription"
              className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              サブスク管理を開く
            </Link>
          </div> */}
        </div>
      </section>

      {/* tools */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-600">TOOLS</p>

          <h2 className="text-4xl font-bold">生活改善ツール</h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            固定費、健康、習慣。
            <br />
            日常を整えるためのツールをシンプルに。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100"
              >
                {/* icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <Icon size={24} className="text-cyan-600" />
                </div>

                {/* title */}
                <h3 className="text-2xl font-semibold">{tool.title}</h3>

                {/* description */}
                <p className="mt-4 leading-7 text-zinc-600">
                  {tool.description}
                </p>

                {/* link */}
                <div className="mt-8 flex items-center gap-2 text-cyan-600">
                  開く
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* concept */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-600">CONCEPT</p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            情報を増やすより、
            <br />
            生活を磨く。
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
            AKNOA は、 シンプルで使いやすいツールを通じて、
            日常の小さな改善をサポートします。
          </p>
        </div>
      </section>
    </main>
  );
}
