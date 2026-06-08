import { useEffect, useMemo, useState } from "react";

import { Subscription } from "../types/subscription";
import { Service } from "../types/service";
import { Plan } from "../types/plan";

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  // localStorage restore
  useEffect(() => {
    const storedSubscriptions = localStorage.getItem("subscriptions");

    if (storedSubscriptions) {
      setSubscriptions(JSON.parse(storedSubscriptions));
    }
  }, []);

  // localStorage save
  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  // total
  const total = useMemo(() => {
    return subscriptions.reduce((sum, sub) => sum + sub.price, 0);
  }, [subscriptions]);

  // add
  const addSubscription = (
    selectedService: Service | null,
    selectedPlan: Plan | null,
    closeModal: () => void,
  ) => {
    if (!selectedService || !selectedPlan) return;

    const exists = subscriptions.some((sub) => sub.id === selectedService.id);

    if (exists) return;

    const newSubscription: Subscription = {
      id: selectedService.id,
      name: selectedService.name,
      category: selectedService.category,
      planId: selectedPlan.id,
      planName: selectedPlan.name,
      price: selectedPlan.price,
    };

    setSubscriptions([...subscriptions, newSubscription]);

    closeModal();
  };

  // save edit
  const saveEdit = (
    editingService: Subscription | null,
    selectedPlan: Plan | null,
    closeModal: () => void,
  ) => {
    if (!editingService || !selectedPlan) return;

    setSubscriptions(
      subscriptions.map((sub) =>
        sub.id === editingService.id
          ? {
              ...sub,
              planId: selectedPlan.id,
              planName: selectedPlan.name,
              price: selectedPlan.price,
            }
          : sub,
      ),
    );

    closeModal();
  };

  // delete
  const deleteSubscription = (id: number) => {
    setSubscriptions(subscriptions.filter((item) => item.id !== id));
  };

  return {
    subscriptions,
    total,
    addSubscription,
    saveEdit,
    deleteSubscription,
  };
}
