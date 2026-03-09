import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const CLASS_TYPES = [
  { name: "WOD", level: "All levels" },
  { name: "HIIT", level: "All levels" },
  { name: "Olympic Weightlifting", level: "All levels" },
  { name: "Gymnastics", level: "All levels" },
  { name: "Endurance", level: "All levels" },
  { name: "Kids", level: "6-12 jaar" },
  { name: "Fundamentals", level: "Beginners" },
  { name: "Personal Training", level: "1 on 1 of small group" },
];

const PRICES_LEFT = [
  { name: "Maandabonnement 9 credits", price: "€85" },
  { name: "Maandabonnement 15 credits", price: "€100" },
  { name: "Maandabonnement Unlimited", price: "€110" },
  { name: "Maandabonnement Open Gym", price: "€70" },
];

const PRICES_RIGHT = [
  { name: "Drop In", price: "€15", note: "of T-shirt voor €25" },
  { name: "10 beurtenkaart", price: "€125" },
  { name: "Fundamentals 4 sessies", price: "€250" },
  { name: "Personal Coaching", price: "€70/sessie" },
];

const SCHEDULE: Record<string, { time: string; class: string }[]> = {
  Ma: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "WOD" },
    { time: "12u00", class: "WOD" },
    { time: "17u00", class: "WOD" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "WOD" },
  ],
  Di: [
    { time: "09u00", class: "WOD" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "ENDURANCE" },
  ],
  Wo: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "WOD" },
    { time: "12u00", class: "WOD" },
    { time: "17u00", class: "WOD" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "OLY" },
    { time: "20u00", class: "WOD" },
  ],
  Do: [
    { time: "09u00", class: "WOD" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "GYMNASTICS" },
  ],
  Vr: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "WOD" },
    { time: "12u00", class: "HIIT" },
    { time: "17u00", class: "WOD" },
    { time: "18u00", class: "ENDURANCE" },
  ],
  Za: [
    { time: "09u00", class: "HIIT" },
    { time: "10u00", class: "WOD" },
    { time: "11u00", class: "OLY" },
  ],
  Zo: [
    { time: "09u30", class: "TEAMWOD" },
    { time: "10u30", class: "COMPETITION" },
  ],
};

const DAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

const Groepslessen = () => {
  const [activeDay, setActiveDay] = useState("Ma");

  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="GROEPSLESSEN"
        subtitle="WOD · HIIT · Weightlifting · Gymnastics · Endurance · Kids"
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#A09080" }}>
            Bij Uprise heb je een ruim aanbod aan groepslessen, begeleid door onze ervaren en enthousiaste coaches. Onze WOD en HIIT sessies dagen je dagelijks uit om op een leuke manier je grenzen te verleggen!
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Lesaanbod
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12" style={{ color: "#F5F0E8" }}>
            Onze lessen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLASS_TYPES.map((ct) => (
              <div
                key={ct.name}
                className="rounded-lg p-6 text-center"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.15)",
                }}
              >
                <h3 className="text-lg font-black uppercase tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
                  {ct.name}
                </h3>
                <p className="text-xs tracking-wider" style={{ color: "#D4920A" }}>
                  {ct.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video's */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Bekijk het zelf
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-10" style={{ color: "#F5F0E8" }}>
            In de praktijk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            <div className="w-full max-w-xs">
              <p className="text-sm font-semibold text-center mb-3" style={{ color: "#A09080" }}>Welke lessen zijn er?</p>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%", border: "1px solid rgba(212,146,10,0.2)" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/CMc7SkuV-9M"
                  title="Welke lessen zijn er?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="w-full max-w-xs">
              <p className="text-sm font-semibold text-center mb-3" style={{ color: "#A09080" }}>WOD voorbeeld</p>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%", border: "1px solid rgba(212,146,10,0.2)" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ct-15xWU-NM"
                  title="WOD voorbeeld"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Tarieven
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12" style={{ color: "#F5F0E8" }}>
            Prijzen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Linkerkolom */}
            <div className="flex flex-col gap-4">
              {PRICES_LEFT.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg p-5 flex items-center justify-between gap-4"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>{p.name}</p>
                  <span className="text-lg font-black flex-shrink-0" style={{ color: "#D4920A" }}>{p.price}</span>
                </div>
              ))}
            </div>
            {/* Rechterkolom */}
            <div className="flex flex-col gap-4">
              {PRICES_RIGHT.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg p-5 flex items-center justify-between gap-4"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>{p.name}</p>
                    {p.note && <p className="text-xs mt-0.5" style={{ color: "#A09080" }}>{p.note}</p>}
                  </div>
                  <span className="text-lg font-black flex-shrink-0" style={{ color: "#D4920A" }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Verzekering nota */}
          <p className="mt-6 text-xs text-center" style={{ color: "#A09080" }}>
            ⚠️ Een <span style={{ color: "#F5F0E8" }}>jaarlijkse ongevallenverzekering (€15)</span> is verplicht voor alle leden.
          </p>
        </div>
      </section>

      {/* Uurrooster */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Planning
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-10" style={{ color: "#F5F0E8" }}>
            Uurrooster
          </h2>

          {/* Day tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className="px-5 py-2 text-sm font-bold tracking-widest uppercase rounded transition-all duration-200"
                style={{
                  backgroundColor: activeDay === day ? "#D4920A" : "transparent",
                  color: activeDay === day ? "#000" : "#A09080",
                  border: `1px solid ${activeDay === day ? "#D4920A" : "rgba(212,146,10,0.2)"}`,
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule for active day */}
          <div className="space-y-3">
            {SCHEDULE[activeDay].map((slot) => (
              <div
                key={`${slot.time}-${slot.class}`}
                className="flex items-center gap-6 rounded-lg px-6 py-4"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.12)",
                }}
              >
                <span className="text-base font-black w-16 flex-shrink-0" style={{ color: "#D4920A" }}>
                  {slot.time}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#F5F0E8" }}>
                  {slot.class}
                </span>
                <span className="text-xs ml-auto" style={{ color: "#A09080" }}>
                  All levels
                </span>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-xs" style={{ color: "#A09080" }}>
            * Dit is een voorlopig uurrooster en wordt regelmatig bekeken
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#111111" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Wil je eens komen proeven?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Probeer gratis
        </h2>
        <a
          href="https://uprise.sportbitapp.nl/web/be/proeflesplanner/kalender"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
          style={{ backgroundColor: "#D4920A", color: "#000" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
          }
        >
          Boek je gratis proefles
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Groepslessen;
