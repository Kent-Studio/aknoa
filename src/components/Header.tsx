import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]">
          AKNOA
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900 transition">
            ホーム
          </Link>

          <Link href="/contact" className="hover:text-zinc-900 transition">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
