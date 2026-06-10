import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  IndianRupee,
  Network,
  PackageCheck,
  Ship,
} from "lucide-react";

export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/markets", label: "Markets" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export const products = [
  {
    name: "Sona Masoori Gold Old Raw Rice",
    shortName: "Sona Masoori Gold",
    slug: "sona-masoori-gold",
    description:
      "Premium old crop raw rice, ideal for export markets in UAE and the Gulf.",
    image: "/products/sona-masoori-gold.png",
    specs: [
      ["Crop", "Old crop"],
      ["Type", "Raw, non-basmati"],
      ["Grain", "Medium and lightweight"],
      ["Packing", "Custom bulk packing"],
      ["Availability", "Bulk orders"],
    ],
  },
  {
    name: "Sona Masoori Silver",
    shortName: "Sona Masoori Silver",
    slug: "sona-masoori-silver",
    description:
      "High quality Sona Masoori variety with excellent grain consistency.",
    image: "/products/sona-masoori-silver.png",
    specs: [
      ["Crop", "Selected crop"],
      ["Type", "Raw, non-basmati"],
      ["Grain", "Uniform medium grain"],
      ["Packing", "Custom bulk packing"],
      ["Availability", "Bulk orders"],
    ],
  },
  {
    name: "Lachkari Kolam Old Raw Rice",
    shortName: "Lachkari Kolam",
    slug: "lachkari-kolam",
    description:
      "Long grain Kolam variety, popular in Sri Lanka and European markets.",
    image: "/products/lachkari-kolam.png",
    specs: [
      ["Crop", "Old crop"],
      ["Type", "Raw, non-basmati"],
      ["Grain", "Slender long grain"],
      ["Packing", "Custom bulk packing"],
      ["Availability", "Bulk orders"],
    ],
  },
];

export const markets = [
  { flag: "🇦🇪", name: "UAE", detail: "Strong rice import market" },
  { flag: "🇴🇲", name: "Oman", detail: "Growing food distribution hub" },
  { flag: "🇰🇼", name: "Kuwait", detail: "Premium quality demand" },
  { flag: "🇸🇦", name: "Saudi Arabia", detail: "Large scale rice consumption" },
  { flag: "🇱🇰", name: "Sri Lanka", detail: "Regional trade opportunity" },
  { flag: "🇺🇸", name: "USA", detail: "Ethnic and retail markets" },
  { flag: "🇪🇺", name: "Europe", detail: "Diverse consumer demand" },
];

export const whyUs = [
  {
    title: "Trusted Mill Network",
    text: "Reliable procurement through established mill relationships.",
    icon: Network,
  },
  {
    title: "Quality Assurance",
    text: "Product quality and consistency checked before dispatch.",
    icon: BadgeCheck,
  },
  {
    title: "Competitive Pricing",
    text: "Transparent, market-aligned pricing for sustainable trade.",
    icon: IndianRupee,
  },
  {
    title: "Export Documentation",
    text: "Clear coordination for complete shipment documentation.",
    icon: FileCheck2,
  },
  {
    title: "Reliable Logistics",
    text: "Export-ready planning from packing through port delivery.",
    icon: Ship,
  },
  {
    title: "Buyer Focused",
    text: "Responsive communication built around buyer requirements.",
    icon: Handshake,
  },
];

export const aboutFeatures = [
  {
    title: "Quality Procurement",
    text: "Carefully selected rice from dependable sources.",
    icon: PackageCheck,
  },
  {
    title: "Export Focused",
    text: "Operations aligned to international buyer needs.",
    icon: Ship,
  },
  {
    title: "Trusted Mill Network",
    text: "Strong relationships across the rice trade.",
    icon: Network,
  },
  {
    title: "Competitive Pricing",
    text: "Practical rates backed by responsible sourcing.",
    icon: IndianRupee,
  },
];

export const certifications = [
  {
    name: "GST",
    status: "Available",
    ready: true,
    icon: ClipboardCheck,
    description: "Registered for compliant domestic business operations.",
  },
  {
    name: "IEC",
    status: "In Process",
    ready: false,
    icon: FileCheck2,
    description: "Import Export Code registration is currently underway.",
  },
  {
    name: "APEDA",
    status: "In Process",
    ready: false,
    icon: BadgeCheck,
    description: "Agricultural export registration is currently underway.",
  },
  {
    name: "Export Compliance",
    status: "Ready",
    ready: true,
    icon: Ship,
    description: "Shipment and buyer documentation workflow is prepared.",
  },
];
