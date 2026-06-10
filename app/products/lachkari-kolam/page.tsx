import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";

export const metadata: Metadata = {
  title: "Lachkari Kolam Old Raw Rice",
  description:
    "Premium aged Lachkari Kolam Old Raw Rice for international markets.",
};

export default function LachkariKolamPage() {
  return (
    <ProductDetail
      name="Lachkari Kolam Old Raw Rice"
      breadcrumbName="Lachkari Kolam"
      tagline="Premium Aged Kolam Variety — Loved Across Global Markets"
      description="Lachkari Kolam Old Raw Rice is a premium aged Kolam variety renowned for its fine grains, rich taste, and excellent cooking characteristics. The aging process enhances aroma, texture, and grain stability, resulting in soft, fluffy rice with superior absorption of flavors. It is widely used in Indian households, hotels, and food processing industries and is highly valued in international markets for its quality and consistency."
      image="/products/lachkari-kolam.png"
      features={[
        "Premium aged Kolam rice",
        "Fine and uniform grains",
        "Soft texture with excellent taste",
        "Superior cooking performance",
        "Ideal for daily meals and food service",
        "Export-grade quality standards",
      ]}
      packagingDescription="Lachkari Kolam Old Raw Rice is packed in durable 25 kg and 50 kg bags, crafted to preserve grain integrity and freshness during long-distance international shipping. Customized labeling options are available on request."
      ctaTitle="Interested in Lachkari Kolam?"
    />
  );
}
