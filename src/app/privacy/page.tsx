export const metadata = {
  title: "プライバシーポリシー | AKNOA",
  description: "AKNOAのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">プライバシーポリシー</h1>

      <div className="space-y-8 text-zinc-700 leading-8">
        <section>
          <p>
            AKNOA（以下、「当サービス」）は、ユーザーのプライバシーを尊重し、
            個人情報の保護に努めます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">1. 収集する情報</h2>
          <p>当サービスでは、以下の情報を収集する場合があります。</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>お問い合わせ時に入力された情報</li>
            <li>アクセス解析のために収集される情報</li>
            <li>利用状況に関する情報</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. アクセス解析ツールについて
          </h2>

          <p>
            当サービスでは、サービス改善のため Google Analytics
            を利用しています。
          </p>

          <p className="mt-3">
            Google Analytics は Cookie を利用して利用状況を収集します。
            収集される情報は匿名であり、個人を特定するものではありません。
          </p>

          <p className="mt-3">
            Google Analytics の利用規約およびプライバシーポリシーについては、
            Google が提供する情報をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">3. 利用目的</h2>

          <p>収集した情報は以下の目的で利用します。</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>サービスの改善</li>
            <li>利用状況の分析</li>
            <li>お問い合わせへの対応</li>
            <li>不正利用の防止</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">4. 第三者提供</h2>

          <p>
            法令に基づく場合を除き、取得した情報を第三者へ提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">5. Cookieについて</h2>

          <p>
            当サービスでは利便性向上およびアクセス解析のため Cookie
            を利用する場合があります。
          </p>

          <p className="mt-3">
            ユーザーはブラウザ設定により Cookie を無効化できます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">6. 免責事項</h2>

          <p>
            当サービスに掲載する情報については、可能な限り正確な情報を提供するよう努めますが、
            その正確性や安全性を保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            7. プライバシーポリシーの変更
          </h2>

          <p>本ポリシーは、必要に応じて変更する場合があります。</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">8. お問い合わせ</h2>

          <p>
            本ポリシーに関するお問い合わせは、
            当サービスのお問い合わせ窓口よりご連絡ください。
          </p>
        </section>

        <div className="border-t pt-6 text-sm text-zinc-500">
          <p>制定日：2026年6月9日</p>
          <p>最終更新日：2026年6月9日</p>
        </div>
      </div>
    </main>
  );
}
