import Button from "./Button";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 pt-40 text-white">
      <div className="absolute inset-0 opacity-20 map-grid" />
      <div className="container-shell relative">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-green-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100">
          {description}
        </p>
        <div className="mt-8">
          <Button href="/contact#quote">Discuss Your Requirement</Button>
        </div>
      </div>
    </section>
  );
}
