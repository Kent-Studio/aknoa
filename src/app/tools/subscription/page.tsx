"use client";

import { useState } from "react";

import { Plus, CreditCard } from "lucide-react";

import { services } from "@/data/services";

import SubscriptionModal from "@/features/subscriptions/components/SubscriptionModal";
import SubscriptionCard from "@/features/subscriptions/components/SubscriptionCard";
import SummaryCard from "@/features/subscriptions/components/SummaryCard";

import { useSubscriptions } from "@/features/subscriptions/hooks/useSubscriptions";

import { Subscription } from "@/features/subscriptions/types/subscription";
import { Service } from "@/features/subscriptions/types/service";
import { Plan } from "@/features/subscriptions/types/plan";

import { useModalScrollLock } from "@/hooks/useModalScrollLock";

export default function SubscriptionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingService, setEditingService] = useState<Subscription | null>(
    null,
  );
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  useModalScrollLock(isOpen);

  // modal close
  const closeModal = () => {
    setIsOpen(false);
    setEditingService(null);
    setSelectedService(null);
    setSelectedPlan(null);
  };

  // start edit
  const startEdit = (subscription: Subscription) => {
    setEditingService(subscription);
    const service = services.find((service) => service.id === subscription.id);

    if (!service) return;

    setSelectedService(service);
    const currentPlan = service.plans.find(
      (plan) => plan.id === subscription.planId,
    );

    if (currentPlan) {
      setSelectedPlan(currentPlan);
    }

    setIsOpen(true);
  };

  const {
    subscriptions,
    total,
    addSubscription,
    saveEdit,
    deleteSubscription,
  } = useSubscriptions();

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        {/* header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <CreditCard size={32} className="text-cyan-600" />

            <h1 className="text-4xl font-bold">サブスク管理</h1>
          </div>

          <p className="mt-2 text-zinc-500">
            毎月・年間のサブスク支出をひと目で確認できます。
          </p>
        </div>

        {/* total */}
        <SummaryCard total={total} />

        {/* subscriptions */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">契約中サービス</h2>

            <p className="text-sm text-zinc-500">{subscriptions.length}件</p>
          </div>

          <div className="grid gap-4">
            {/* cards */}
            {subscriptions.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                subscription={sub}
                serviceUrl={
                  services.find((service) => service.id === sub.id)?.url ?? "#"
                }
                onEdit={() => startEdit(sub)}
                onDelete={() => deleteSubscription(sub.id)}
              />
            ))}

            {/* add button */}
            <button
              onClick={() => setIsOpen(true)}
              className="group flex h-40 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              <Plus size={36} className="mb-5 text-cyan-600" />

              <p className="text-lg font-medium text-zinc-700">
                サービスを追加
              </p>
            </button>
          </div>
        </section>
      </div>

      <SubscriptionModal
        isOpen={isOpen}
        closeModal={closeModal}
        editingService={editingService}
        selectedService={selectedService}
        selectedPlan={selectedPlan}
        subscriptions={subscriptions}
        setSelectedService={setSelectedService}
        setSelectedPlan={setSelectedPlan}
        addSubscription={() =>
          addSubscription(selectedService, selectedPlan, closeModal)
        }
        saveEdit={() => saveEdit(editingService, selectedPlan, closeModal)}
      />
    </main>
  );
}
