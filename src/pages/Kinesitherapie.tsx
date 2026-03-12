'use client';
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const SERVICES = [
  {
    icon: "🩹",
    title: "Revalidatie",
    text: "Heb je een (sport) acuut of aanhoudende fysieke klacht? Na een uitgebreide anamnese zorgen we voor een optimale en persoonlijke revalidatie aanpak.",
  },
  {
    icon: "🏋️",
    title: "Preventieve Oefentherapie",
    text: "Beter voorkomen dan genezen. We sporen pro-actief zwakke schakels op en werken aan mobiliteit, stabiliteit én krachtopbouw — vooraleer klachten zich ontwikkelen.",
  },
  {
    icon: "💆",
    title: "Sportmassage",
    text: "Heb je binnenkort een sportwedstrijd of zijn je spieren overtraind? Boek een sportmassage bij ons. (geen wellness massage of dry needling)",
  },
];

const AANBOD = [
  "(Sport)kinesitherapie",
  "Manuele therapie",
  "Dry needling",
  "Taping",
  "Functionele oefentherapie",
  "Blessure preventie",
  "Performance training",
  "Pre-season sportspecifieke training",
  "Pre- en postnatale begeleiding",
  "Sportmassage",
];

const PRIJZEN = [
  {
    title: "Courante pathologie",
    price: "€40",
    unit: "/ sessie",
    details: [
      { label: "Terugbetaling mutualiteit", value: "€19,05/sessie" },
      { label: "Jaarlijkse dossierkost", value: "€7,38 (terugbetaling €5,54)" },
    ],
    terugbetaling: true,
  },
  {
    title: "Fa, Fb of E pathologie",
    price: "€40",
    unit: "/ sessie",
    details: [
      { label: "Terugbetaling mutualiteit", value: "€19,61/sessie" },
      { label: "Bijkomende dossierkost", value: "€33,75 (terugbetaling €25,32)" },
    ],
    terugbetaling: true,
  },
  {
    title: "Sportmassage",
    price: "€40",
    unit: "/ 30 min",
    details: [
      { label: "60 minuten", value: "€75" },
      { label: "Terugbetaling", value: "Geen terugbetaling" },
    ],
    terugbetaling: false,
  },
];

const Kinesitherapie = () => {
  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="KINESITHERAPIE"
        subtitle="Prehab · Revalidatie · Preventie · Sportmassage"
      />

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-lg p-8 flex flex-col gap-5"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.15)",
                }}
              >
                <div className="text-4xl">{service.icon}</div>
                <h3
                  className="text-xl font-black tracking-wide uppercase"
                  style={{ color: "#F5F0E8" }}
                >
                  {service.title}
                </h3>
                <div
                  className="w-10 h-0.5 rounded-full"
                  style={{ backgroundColor: "#D4920A" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "#A09080" }}>
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-3" style={{ color: "#D4920A" }}>
            Wat we aanbieden
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-10" style={{ color: "#F5F0E8" }}>
            Aanbod
          </h2>
          <div className="flex flex-wrap gap-3">
            {AANBOD.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(212,146,10,0.1)",
                  border: "1px solid rgba(212,146,10,0.3)",
                  color: "#F5F0E8",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-3" style={{ color: "#D4920A" }}>
            Transparante tarieven
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-10" style={{ color: "#F5F0E8" }}>
            Prijzen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {PRIJZEN.map((p) => (
              <div
                key={p.title}
                className="rounded-lg p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "#1A1410",
                  border: "1px solid rgba(212,146,10,0.2)",
                }}
              >
                <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: "#A09080" }}>
                  {p.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black" style={{ color: "#D4920A" }}>
                    {p.price}
                  </span>
                  <span className="text-sm" style={{ color: "#A09080" }}>
                    {p.unit}
                  </span>
                </div>
                <div
                  className="w-8 h-0.5 rounded-full"
                  style={{ backgroundColor: "#D4920A" }}
                />
                <div className="flex flex-col gap-2">
                  {p.details.map((d) => (
                    <div key={d.label}>
                      <p className="text-xs font-medium" style={{ color: "#6B5C4C" }}>
                        {d.label}
                      </p>
                      <p className="text-sm" style={{ color: "#A09080" }}>
                        {d.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div
            className="rounded-lg p-6 flex flex-col gap-3"
            style={{
              backgroundColor: "rgba(212,146,10,0.05)",
              border: "1px solid rgba(212,146,10,0.15)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#A09080" }}>
              ⚠️ Elk consult dat niet tijdig wordt geannuleerd (min 24u op voorhand) met een geldige reden, zal worden aangerekend.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#A09080" }}>
              ℹ️ Alle terugbetalingstarieven kan u terugvinden bij jouw mutualiteit of via het RIZIV.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p
          className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
          style={{ color: "#D4920A" }}
        >
          Klaar om te starten?
        </p>
        <h2
          className="text-3xl md:text-4xl font-black uppercase mb-8"
          style={{ color: "#F5F0E8" }}
        >
          Plan je afspraak
        </h2>
        <a
          href="https://altagenda.crossuite.com/Uprise/l/n5r4v5z5j454t2e48454/o/54135474r253p2b48494944354u25464a4/t/c42384340353x274c424f4"
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
          Boek een afspraak
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Kinesitherapie;
