import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary: "bg-accent text-white hover:bg-green-600 border-accent",
    outline: "border-white text-white hover:bg-white hover:text-primary",
    light: "bg-white text-primary hover:bg-green-50 border-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition duration-300 hover:scale-[1.03] ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
