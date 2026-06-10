import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";

export const metadata: Metadata = {
  title: "Sona Masoori Silver",
  description:
    "High-quality Sona Masoori Silver non-basmati rice for global markets.",
};

export default function SonaMasooriSilverPage() {
  return (
    <ProductDetail
      name="Sona Masoori Silver"
      breadcrumbName="Sona Masoori Silver"
      tagline="High-Quality Non-Basmati Rice for Global Markets"
      description="Sona Masoori Silver is a high-quality medium-grain rice known for its lightweight grains, delicate taste, and consistent cooking performance. It cooks soft and fluffy while maintaining a pleasant texture, making it ideal for households, catering businesses, and food service industries. This variety is highly popular among international buyers seeking quality non-basmati rice from India."
      image="/products/sona-masoori-silver.png"
      features={[
        "Premium non-basmati rice",
        "Lightweight and easy to digest",
        "Soft and fluffy after cooking",
        "Uniform grain size",
        "Suitable for everyday meals",
        "International export standard quality",
      ]}
      packagingDescription="Sona Masoori Silver is available in carefully sealed 25 kg and 50 kg packaging, ensuring grain freshness and quality throughout transit. Our export-standard packaging meets international food safety and labeling requirements."
      ctaTitle="Interested in Sona Masoori Silver?"
    />
  );
}
