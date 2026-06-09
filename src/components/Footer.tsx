import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm tracking-[0.3em] text-zinc-500">AKNOA</p>
        </div>

        <nav className="flex gap-6 text-sm text-zinc-500">
          <Link href="/privacy" className="transition hover:text-zinc-900">
            プライバシーポリシー
          </Link>

          <Link href="/terms" className="transition hover:text-zinc-900">
            利用規約
          </Link>

          <Link href="/contact" className="transition hover:text-zinc-900">
            お問い合わせ
          </Link>
        </nav>

        <p className="text-sm text-zinc-500">© 2026 AKNOA</p>
      </div>
    </footer>
  );
}
