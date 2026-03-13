import { useQuery } from "@tanstack/react-query";
import { Check, Zap } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { calculatePromoPrice, formatPrice, getWhatsAppLink } from "@/lib/constants";
import type { PricingTier, PromoStatusResponse } from "@shared/schema";
import { MessageCircle } from "lucide-react";

interface PricingCardProps {
  tier: PricingTier;
  serviceId: string;
  serviceTitle: string;
  featured?: boolean;
}

export function PricingCard({ tier, serviceId, serviceTitle, featured }: PricingCardProps) {
  const { data: promoStatus } = useQuery<PromoStatusResponse>({
    queryKey: ["/api/promo/status"],
    refetchInterval: 30000,
  });

  const promoActive = promoStatus?.promoActive || false;
  const promoPrice = calculatePromoPrice(tier.originalPrice, promoActive);
  const hasDiscount = promoActive && promoPrice < tier.originalPrice;

  return (
    <Card className={`relative flex flex-col ${featured ? "border-primary border-2" : ""}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
        </div>
      )}
      {hasDiscount && (
        <div className="absolute -top-3 right-4">
          <Badge className="bg-accent text-accent-foreground text-xs font-semibold">
            <Zap className="w-3 h-3 mr-1" fill="currentColor" />
            50% OFF
          </Badge>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-lg">{tier.name}</CardTitle>
        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            {hasDiscount && (
              <span className="text-xl font-semibold line-through text-muted-foreground">{formatPrice(tier.originalPrice)}</span>
            )}
            <span className={`text-3xl font-bold ${hasDiscount ? "text-primary" : "text-foreground"}`}>
              {formatPrice(promoPrice)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Delivery: {tier.deliveryTime}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-2.5">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <a href={getWhatsAppLink(serviceTitle, tier.name)} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-whatsapp hover:bg-whatsapp-dark">
            <MessageCircle className="w-4 h-4 mr-2" />
            Order on WhatsApp
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
