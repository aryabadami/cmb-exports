const whatsappHref =
  "https://wa.me/917892755421?text=Hello%2C%20I%20am%20interested%20in%20your%20rice%20export%20products";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-900/25 ring-4 ring-green-500/20 transition hover:scale-105 hover:bg-green-600"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 motion-safe:animate-ping" />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="relative size-7 fill-current"
      >
        <path d="M16.03 3.2A12.73 12.73 0 0 0 5.12 22.5L3.6 28.8l6.44-1.5A12.77 12.77 0 1 0 16.03 3.2Zm0 2.32a10.44 10.44 0 1 1-5.32 19.42l-.46-.27-3.6.84.85-3.5-.3-.48A10.44 10.44 0 0 1 16.03 5.52Zm-4.1 4.7c-.22 0-.58.08-.88.4-.3.34-1.16 1.14-1.16 2.78s1.2 3.22 1.36 3.44c.16.22 2.32 3.7 5.72 5.03 2.82 1.1 3.4.88 4.02.82.62-.06 1.98-.8 2.26-1.58.28-.78.28-1.44.2-1.58-.08-.14-.3-.22-.62-.38-.32-.16-1.98-.98-2.28-1.08-.3-.12-.52-.16-.74.16-.22.32-.86 1.08-1.06 1.3-.2.22-.4.24-.72.08-.32-.16-1.38-.5-2.62-1.6-.96-.86-1.62-1.94-1.82-2.26-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.42-.02-.58-.08-.16-.72-1.78-1.02-2.42-.26-.62-.54-.64-.8-.66l-.74-.02Z" />
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded bg-dark px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
