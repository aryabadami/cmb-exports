import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";

export const metadata: Metadata = {
  title: "Sona Masoori Gold Old Raw Rice",
  description:
    "Premium aged Sona Masoori Gold Old Raw Rice from South India for international buyers.",
};

export default function SonaMasooriGoldPage() {
  return (
    <ProductDetail
      name="Sona Masoori Gold Old Raw Rice"
      breadcrumbName="Sona Masoori Gold"
      tagline="Premium Aged Medium-Grain Rice from South India"
      description="Sona Masoori Gold Old Raw Rice is a premium-aged medium-grain rice sourced from the fertile regions of South India. Carefully matured before milling, it offers excellent cooking quality, soft texture, pleasant aroma, and superior grain separation. Its low starch content and easy digestibility make it a preferred choice for daily meals and traditional Indian cuisine. Widely exported to the Middle East, North America, Europe, and Asia."
      image="/products/sona-masoori-gold.png"
      features={[
        "Premium aged raw rice",
        "Soft, fluffy, non-sticky texture",
        "Mild natural aroma",
        "Low starch content",
        "Suitable for daily consumption and restaurants",
        "Export-quality processing and packaging",
      ]}
      packagingDescription="We offer flexible packaging solutions designed to serve both retail distributors and large-scale wholesale buyers. Our 25 kg bags are ideal for food service operations and retail chains, while our 50 kg options cater to bulk importers and procurement houses seeking cost-effective supply solutions."
      ctaTitle="Interested in Sona Masoori Gold?"
    />
  );
}
