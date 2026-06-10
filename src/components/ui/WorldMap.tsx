import { MapPin } from "lucide-react";

const pins = [
  { name: "USA", left: "19%", top: "39%" },
  { name: "Europe", left: "49%", top: "31%" },
  { name: "Kuwait", left: "59%", top: "43%" },
  { name: "Saudi Arabia", left: "58%", top: "52%" },
  { name: "UAE", left: "63%", top: "49%" },
  { name: "Oman", left: "65%", top: "54%" },
  { name: "Sri Lanka", left: "69%", top: "68%" },
];

export default function WorldMap() {
  return (
    <div className="map-grid relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-3xl border border-green-100 bg-muted shadow-inner">
      <svg
        aria-label="World map showing CMB Exports target markets"
        viewBox="0 0 1000 500"
        className="h-full w-full fill-primary/15 stroke-primary/30"
      >
        <path d="M75 135 160 90l95 25 55 55-32 45-70 8-15 55-55-18-28-62-48-25zM220 300l65 20 35 70-22 82-45-35-15-72zM425 125l68-32 75 23 25 42-48 22-38-18-26 28-62-12zM485 205l95-25 65 45-20 80-50 115-65-25-22-90-50-38zM590 125l135-30 145 45 70 70-52 42-80-22-55 45-72-27-42-70zM720 315l55 12 18 62-45 22-38-42zM845 365l74-10 35 40-38 40-70-22z" />
      </svg>
      {pins.map((pin) => (
        <div
          key={pin.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: pin.left, top: pin.top }}
        >
          <div className="group relative">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
            <MapPin className="relative size-6 fill-accent text-primary drop-shadow" />
            <span className="absolute left-1/2 top-7 hidden -translate-x-1/2 whitespace-nowrap rounded bg-dark px-2 py-1 text-[10px] font-bold text-white group-hover:block sm:block">
              {pin.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
