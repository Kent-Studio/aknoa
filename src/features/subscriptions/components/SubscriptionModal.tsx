import { Film, X, Check } from "lucide-react";

import { services } from "@/data/services";

import { Subscription } from "@/features/subscriptions/types/subscription";
import { Plan } from "@/features/subscriptions/types/plan";
import { Service } from "@/features/subscriptions/types/service";

type Props = {
  isOpen: boolean;

  closeModal: () => void;

  editingService: Subscription | null;

  selectedService: Service | null;

  selectedPlan: Plan | null;

  subscriptions: Subscription[];

  setSelectedService: (service: Service) => void;

  setSelectedPlan: (plan: Plan) => void;

  addSubscription: () => void;

  saveEdit: () => void;
};

export default function SubscriptionModal({
  isOpen,
  closeModal,
  editingService,
  selectedService,
  selectedPlan,
  subscriptions,
  setSelectedService,
  setSelectedPlan,
  addSubscription,
  saveEdit,
}: Props) {
  return (
    <>
      {/* overlay */}
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        />
      )}

      {/* modal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 flex max-h-[90vh] flex-col rounded-t-3xl border-t border-zinc-200 bg-white p-6 pb-10 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* handle */}
        <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-zinc-300" />

        {/* header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Film size={24} className="text-cyan-600" />

              <h2 className="text-2xl font-bold">
                {editingService ? "プランを編集" : "サービスを追加"}
              </h2>
            </div>

            <p className="mt-3 text-sm text-zinc-500">
              契約中サービスを選択してください
            </p>
          </div>

          <button
            onClick={closeModal}
            className="rounded-full border border-zinc-200 p-2 transition hover:border-zinc-300 hover:bg-zinc-100"
          >
            <X size={18} className="text-zinc-500" />
          </button>
        </div>

        {/* scroll */}
        <div className="overflow-y-auto">
          {/* add mode */}
          {!editingService && !selectedService && (
            <div className="grid gap-3">
              {services.map((service) => {
                const exists = subscriptions.some(
                  (sub) => sub.id === service.id,
                );

                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    disabled={exists}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                      exists
                        ? "cursor-not-allowed border-zinc-200 bg-zinc-100 opacity-40"
                        : "border-zinc-200 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-cyan-50 p-3">
                        <Film size={18} className="text-cyan-600" />
                      </div>

                      <div>
                        <p className="text-lg font-medium">{service.name}</p>

                        <p className="mt-1 text-sm text-zinc-500">
                          動画配信サービス
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* plan select */}
          {(selectedService || editingService) && (
            <div className="space-y-3">
              <div className="mb-4">
                <p className="text-lg font-semibold">{selectedService?.name}</p>

                <p className="mt-1 text-sm text-zinc-500">
                  プランを選択してください
                </p>
              </div>

              {selectedService?.plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 transition ${
                    selectedPlan?.id === plan.id
                      ? "border-cyan-500 bg-cyan-50"
                      : "border-zinc-200 hover:border-cyan-300 hover:bg-cyan-50"
                  }`}
                >
                  <div className="text-left">
                    <p className="font-medium">{plan.name}</p>

                    <p className="mt-1 text-sm text-zinc-500">月額料金</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">
                      ¥{plan.price.toLocaleString()}
                    </p>

                    {selectedPlan?.id === plan.id && (
                      <Check size={18} className="text-cyan-600" />
                    )}
                  </div>
                </button>
              ))}

              <button
                onClick={editingService ? saveEdit : addSubscription}
                disabled={!selectedPlan}
                className="mt-6 w-full cursor-pointer rounded-2xl bg-cyan-600 py-4 font-medium text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {editingService ? "変更を保存" : "追加する"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
