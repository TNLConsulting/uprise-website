import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const Voeding = () => {
  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="VOEDING"
        subtitle="Persoonlijke voedingsbegeleiding door Marieke"
      />

      {/* About Marieke */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
                Jouw voedingsdeskundige
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6" style={{ color: "#F5F0E8" }}>
                Maak kennis met Marieke
              </h2>
              <div className="w-12 h-1 mb-8 rounded-full" style={{ backgroundColor: "#D4920A" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#A09080" }}>
                Bij Uprise bieden we persoonlijke voedingsbegeleiding aan door Marieke, aanwezig elke vrijdag. Met een grote interesse in voeding en sport is Marieke sinds 2017 actief met CrossFit. Haar overtuiging dat voeding een cruciale rol speelt in sportprestaties bracht haar ertoe om haar certificaat als voedingsdeskundige in sport te behalen.
              </p>

              <p className="text-base leading-relaxed mb-10" style={{ color: "#A09080" }}>
                Momenteel studeert ze voeding en dieetkunde aan de Vives Hogeschool en is lid van de VBVD (Vlaamse Beroepsvereniging van Diëtisten). Ze helpt je graag om jouw persoonlijke doelen te bereiken — gewichtsverlies, meer energie of een gezonder eetpatroon.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Aanwezig elke vrijdag", "VBVD lid", "CrossFit atleet", "Sport voedingsdeskundige"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded"
                    style={{
                      backgroundColor: "rgba(212,146,10,0.12)",
                      color: "#D4920A",
                      border: "1px solid rgba(212,146,10,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo placeholder */}
            <div
              className="w-full aspect-[3/4] rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1A1410 0%, #0D0D0D 50%, #1A1410 100%)",
                border: "1px solid rgba(212,146,10,0.2)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,146,10,0.3) 40px, rgba(212,146,10,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,146,10,0.3) 40px, rgba(212,146,10,0.3) 41px)",
                }}
              />
              <div className="relative z-10 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(212,146,10,0.15)" }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#D4920A" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#A09080" }}>
                  Foto Marieke
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Klaar om te starten?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Plan je intakegesprek
        </h2>
        <a
          href="mailto:mariekefrancois@hotmail.com"
          className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
          style={{ backgroundColor: "#D4920A", color: "#000" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
          }
        >
          Boek een intakegesprek
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Voeding;
