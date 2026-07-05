import { Film, Pencil, Trash2, ExternalLink } from "lucide-react";

import { Subscription } from "@/features/subscriptions/types/subscription";

type Props = {
  subscription: Subscription;
  serviceUrl: string;
  onEdit: () => void;
  onDelete: () => void;
};

export default function SubscriptionCard({
  subscription,
  serviceUrl,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-50 p-3">
          <Film size={18} className="text-cyan-600" />
        </div>

        <div>
          <p className="text-lg font-medium">{subscription.name}</p>

          <p className="mt-1 text-sm text-zinc-500">{subscription.planName}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold">
          ¥{subscription.price.toLocaleString()}
        </p>

        <div className="mt-3 flex items-center justify-end gap-2">
          <a
            href={serviceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 transition hover:text-cyan-500"
          >
            <ExternalLink size={16} />
          </a>

          <button
            onClick={onEdit}
            className="text-zinc-400 transition hover:text-cyan-600"
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={onDelete}
            className="text-zinc-400 transition hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
