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
