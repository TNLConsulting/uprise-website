import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const FEATURES = [
  {
    icon: "🎯",
    title: "1 op 1 intake",
    text: "Jouw doelen, sportieve achtergrond, levensstijl en trainingsverleden worden uitgebreid besproken.",
  },
  {
    icon: "🧪",
    title: "2 weken performance testing",
    text: "Kracht & stabiliteit, mobiliteit & bewegingskwaliteit, conditie & uithoudingsvermogen, technische basis.",
  },
  {
    icon: "📊",
    title: "Professionele bodyscan",
    text: "Spiermassa, vetpercentage & lichaamssamenstelling volledig in kaart.",
  },
  {
    icon: "🎯",
    title: "Feedback & strategiegesprek",
    text: "Persoonlijk actieplan voor maximale progressie op korte en lange termijn.",
  },
];

const WHY_IT_WORKS = [
  "Je start met een duidelijk plan",
  "Inzicht in je lichaam en groeipunten",
  "Beperkt risico op blessures",
  "Maximaliseert vooruitgang",
  "Je coach weet exact wat jij nodig heeft",
];

const Performance = () => {
  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="PERFORMANCE"
        subtitle="Remote Coaching · Assessment · Progressie op Maat"
      />

      {/* Performance Assessment */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
              De nulmeting
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4" style={{ color: "#F5F0E8" }}>
              Performance Assessment
            </h2>
            <p className="text-lg font-light mb-6" style={{ color: "#D4920A" }}>
              Start slim. Train gericht. Groei sneller.
            </p>
            <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: "#D4920A" }} />
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#A09080" }}>
              Onze remote coaching start met een krachtige nulmeting. In één pakket brengen we jouw lichaam, niveau en doelen volledig in kaart — zodat je coaching 100% op maat kan starten.
            </p>
          </div>

          {/* Feature blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg p-8 flex gap-5"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.15)",
                }}
              >
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-wide mb-3" style={{ color: "#F5F0E8" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#A09080" }}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why it works */}
          <div
            className="rounded-lg p-8 md:p-12"
            style={{
              background: "linear-gradient(145deg, #1A1410 0%, #0D0D0D 100%)",
              border: "1px solid rgba(212,146,10,0.2)",
            }}
          >
            <h3 className="text-2xl font-black uppercase tracking-wide mb-8 text-center" style={{ color: "#F5F0E8" }}>
              Waarom dit werkt
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {WHY_IT_WORKS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#D4920A" }}
                  />
                  <span className="text-sm" style={{ color: "#A09080" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-center mt-8 text-xs font-semibold tracking-wide"
              style={{ color: "#D4920A" }}
            >
              * Het Performance Assessment is verplicht voor iedereen die start met Remote Coaching.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Interesse?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Neem contact op
        </h2>
        <a
          href="mailto:info@uprise.be"
          className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
          style={{ backgroundColor: "#D4920A", color: "#000" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
          }
        >
          Meer info
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Performance;
