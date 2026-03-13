import { useQuery } from "@tanstack/react-query";
import { Zap } from "lucide-react";
import type { PromoStatusResponse } from "@shared/schema";

export function PromoBanner() {
  const { data: promoStatus } = useQuery<PromoStatusResponse>({
    queryKey: ["/api/promo/status"],
    refetchInterval: 30000,
  });

  if (!promoStatus || !promoStatus.promoActive || promoStatus.slotsRemaining === 0) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center" data-testid="banner-promo">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <Zap className="w-4 h-4 flex-shrink-0" fill="currentColor" />
        <p className="text-sm font-medium" data-testid="text-promo-message">
          First {promoStatus.slotsRemaining === 1 ? "customer" : `${promoStatus.slotsRemaining} customers`} get 50% off
        </p>
        <span className="text-sm font-medium opacity-80" data-testid="text-slots-remaining">
          — {promoStatus.slotsRemaining} {promoStatus.slotsRemaining === 1 ? "slot" : "slots"} remaining
        </span>
      </div>
    </div>
  );
}
