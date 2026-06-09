import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | AKNOA",
  description: "AKNOAへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">お問い合わせ</h1>

      <div className="space-y-6 text-zinc-700 leading-8">
        <p>
          AKNOAに関するご意見、ご要望、不具合報告などがございましたら、
          以下のフォームよりお問い合わせください。
        </p>

        <Link
          href="https://forms.gle/HLMinqu126cenXaAA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:opacity-90"
        >
          お問い合わせフォームを開く
        </Link>

        <p className="text-sm text-zinc-500">
          ※ Googleフォームが別タブで開きます。
        </p>
      </div>
    </main>
  );
}
