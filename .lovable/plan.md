

## Plan: Add Website Building Service

### Overview
Add a new "Website Building" service with a full dedicated page, integrated into navigation, services listings, footer, and contact form. The preview is confirmed working -- no build fix needed.

### Pricing Strategy (Starter Tiers)
Prices positioned below typical Nigerian agency rates but well above "too cheap to be real" territory. Compared to existing fix services (₦10K-60K), website building commands higher prices since it's full creation, not repair.

| Tier | Price (₦) | Delivery | Target |
|------|-----------|----------|--------|
| Landing Page | 35,000 | 3-5 days | Simple 1-3 page sites, personal brands |
| Business Standard | 75,000 | 7-10 days | 5-7 page business/service sites |
| Premium | 150,000 | 14-21 days | Full-featured sites, e-commerce, portfolios |
| Rush | 100,000 | 5-7 days | Standard scope with express delivery |

### Files to Modify

1. **`client/src/lib/constants.ts`** -- Add new service entry with `id: "website-build"`, icon `"Globe"`, and 4 pricing tiers
2. **`client/src/pages/WebsiteBuildService.tsx`** -- New full service page following the same pattern as other service pages (hero, problems/benefits, process steps, included items, pricing cards)
3. **`client/src/App.tsx`** -- Add route for `/website-build`
4. **`client/src/components/Navigation.tsx`** -- Add "Website Build" to service dropdown links
5. **`client/src/components/Footer.tsx`** -- Add link in Services column
6. **`client/src/pages/Services.tsx`** -- Add `Globe` to iconMap
7. **`client/src/pages/Home.tsx`** -- Add `Globe` to iconMap
8. **`client/src/pages/Contact.tsx`** -- Add "Website Build" option to the service-needed dropdown

### Service Page Content
- Hero: "Custom Website Building" with Globe icon
- Problems section: "Why you need a professional website" (no online presence, DIY template issues, not mobile-friendly, slow/insecure sites)
- Benefits: Reach more customers, professional credibility, mobile-first design
- Process: Consultation, Design mockup, Development, Launch & handover
- What's included per tier
- Pricing cards with WhatsApp CTA

