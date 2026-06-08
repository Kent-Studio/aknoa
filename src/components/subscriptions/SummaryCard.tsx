import { Wallet } from "lucide-react";

type Props = {
  total: number;
};

export default function SummaryCard({ total }: Props) {
  return (
    <section className="mb-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-8">
      <div className="mb-4 flex items-center gap-3">
        <Wallet size={22} className="text-cyan-600" />

        <p className="text-sm text-zinc-500">月額合計</p>
      </div>

      <h2 className="text-5xl font-bold">¥{total.toLocaleString()}</h2>

      <p className="mt-4 text-zinc-500">
        年間 ¥{(total * 12).toLocaleString()}
      </p>
    </section>
  );
}
