export const metadata = {
  title: "利用規約 | AKNOA",
  description: "AKNOAの利用規約",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">利用規約</h1>

      <div className="space-y-8 leading-8 text-zinc-700">
        <section>
          <p>
            本利用規約（以下、「本規約」）は、AKNOA（以下、「当サービス」）の
            利用条件を定めるものです。利用者は、本規約に同意した上で当サービスを利用するものとします。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第1条（適用）</h2>
          <p>
            本規約は、利用者と当サービスとの間の利用に関わる一切の関係に適用されます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第2条（サービス内容）</h2>
          <p>当サービスは、固定費管理や生活改善を支援する機能を提供します。</p>

          <p className="mt-3">
            当サービスは、事前の通知なく機能の追加、変更、停止または終了を行う場合があります。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第3条（禁止事項）</h2>

          <p>利用者は、以下の行為を行ってはなりません。</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>法令または公序良俗に反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サービスの運営を妨害する行為</li>
            <li>不正アクセスまたはこれを試みる行為</li>
            <li>他の利用者または第三者に不利益を与える行為</li>
            <li>その他、当サービスが不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第4条（免責事項）</h2>

          <p>
            当サービスは、提供する情報および機能について、その完全性、正確性、
            有用性を保証するものではありません。
          </p>

          <p className="mt-3">
            利用者が当サービスを利用したことにより生じた損害について、
            当サービスは責任を負わないものとします。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            第5条（サービスの変更・停止）
          </h2>

          <p>
            当サービスは、保守、障害対応、その他の理由により、
            予告なくサービス内容を変更または停止することがあります。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第6条（知的財産権）</h2>

          <p>
            当サービスに関する文章、デザイン、ロゴ、プログラムその他の知的財産権は、
            当サービスまたは正当な権利者に帰属します。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第7条（規約の変更）</h2>

          <p>
            当サービスは、必要と判断した場合、本規約を変更できるものとします。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">第8条（準拠法）</h2>

          <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
        </section>

        <div className="border-t pt-6 text-sm text-zinc-500">
          <p>制定日：2026年6月9日</p>
          <p>最終更新日：2026年6月9日</p>
        </div>
      </div>
    </main>
  );
}
