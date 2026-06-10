import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-green-700 py-16 text-white">
      <div className="container-shell flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-200">
            Start A Conversation
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold">
            Looking For A Reliable Rice Export Partner?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/contact#quote" variant="light">
            Request Quote
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
