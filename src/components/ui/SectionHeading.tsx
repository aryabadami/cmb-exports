type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2
        className={`font-heading text-4xl font-bold leading-tight sm:text-5xl ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 leading-7 ${light ? "text-green-100" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
