'use client';
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

            {/* Photo Marieke */}
            <div
              className="w-full aspect-[3/4] rounded-lg relative overflow-hidden"
              style={{ border: "1px solid rgba(212,146,10,0.2)" }}
            >
              <img
                src="https://static.wixstatic.com/media/95bc3b_fab100487d9e4c5dba63ff505b527e5c~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg"
                alt="Marieke Francois — Voedingsdeskundige"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
            Voeding — Persoonlijk afgestemd
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: "#F5F0E8" }}>
            Voeding op maat van jouw doelen
          </h2>
          <div className="w-12 h-1 mb-8 rounded-full" style={{ backgroundColor: "#D4920A" }} />

          <p className="text-base leading-relaxed mb-6" style={{ color: "#A09080" }}>
            Voeding is niet one-size-fits-all. Of je nu gewicht wilt verliezen, meer energie nodig hebt, of je sportprestatie wil optimaliseren — we werken samen aan een plan dat <em>echt</em> werkt.
          </p>

          <p className="text-base leading-relaxed mb-6" style={{ color: "#A09080" }}>
            <strong style={{ color: "#F5F0E8" }}>Basis Traject</strong> is perfect als je wil starten met de basisfundamenten van gezonde voeding. Je krijgt een duidelijk schema en regelmatige opvolging.
          </p>

          <p className="text-base leading-relaxed" style={{ color: "#A09080" }}>
            <strong style={{ color: "#F5F0E8" }}>Sport Traject</strong> gaat dieper. Hier focussen we op timing, macronutriënten en specifieke aandachtspunten voor jouw sport. Ideaal voor atleten die hun voeding strategisch inzetten.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          {/* Basis Traject */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-2" style={{ color: "#F5F0E8" }}>
                Basis Traject
              </h3>
              <p className="text-sm" style={{ color: "#D4920A" }}>
                Stap voor stap naar je doelen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  Intake consult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €65
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  1 uur — Kennismaking, lichaamsmeting en assessment
                </p>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  2de consult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €65
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  1 uur — Jouw persoonlijk schema, praktisch en duurzaam
                </p>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  Vervolgconsult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €35
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  30 min — Opvolging, tweaken en motivatie
                </p>
              </div>
            </div>

            <div
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: "rgba(212,146,10,0.1)",
                border: "2px solid rgba(212,146,10,0.5)",
              }}
            >
              <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                Pakketvoeding
              </p>
              <p className="text-4xl font-black mb-2" style={{ color: "#F5F0E8" }}>
                €256
              </p>
              <p className="text-sm mb-1" style={{ color: "#A09080" }}>
                <strong style={{ color: "#F5F0E8" }}>1 jaar geldig</strong> — 2x consult 1u + 4x vervolgconsult 30 min
              </p>
              <p className="text-xs" style={{ color: "#A09080" }}>
                Meer structuur, beter resultaat.
              </p>
            </div>
          </div>

          {/* Sport Traject */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-2" style={{ color: "#F5F0E8" }}>
                Sport Traject
              </h3>
              <p className="text-sm" style={{ color: "#D4920A" }}>
                Voeding als onderdeel van je prestatie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  Intake consult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €75
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  1u15 — Diepere analyse en voedingsgewoontes
                </p>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  2de consult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €75
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  1u15 — Timing, hydratatie en sportspecifieke strategie
                </p>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#A09080" }}>
                  Vervolgconsult
                </p>
                <p className="text-2xl font-black mb-1" style={{ color: "#F5F0E8" }}>
                  €35
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  30 min — Opvolging en aanpassingen
                </p>
              </div>
            </div>

            <div
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: "rgba(212,146,10,0.1)",
                border: "2px solid rgba(212,146,10,0.5)",
              }}
            >
              <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                Pakket Sport
              </p>
              <p className="text-4xl font-black mb-2" style={{ color: "#F5F0E8" }}>
                €276
              </p>
              <p className="text-sm mb-1" style={{ color: "#A09080" }}>
                <strong style={{ color: "#F5F0E8" }}>1 jaar geldig</strong> — 2x consult 1u + 4x vervolgconsult 30 min
              </p>
              <p className="text-xs" style={{ color: "#A09080" }}>
                Het totaalpakket.
              </p>
            </div>
          </div>

          {/* Meal Prep Schemas */}
          <div className="pt-12 border-t" style={{ borderColor: "rgba(212,146,10,0.2)" }}>
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
                Op maat gemaakt
              </p>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                Persoonlijke mealprep schema's
              </h3>
              <p className="text-sm" style={{ color: "#A09080" }}>
                Wekelijks voedingsplanning + boodschappenlijst. Klaar om te starten.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>
                  2-weken schema
                </p>
                <p className="text-3xl font-black mb-2" style={{ color: "#D4920A" }}>
                  €110
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  Mealprep voorbereiding
                </p>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.05)",
                  border: "1px solid rgba(212,146,10,0.3)",
                }}
              >
                <p className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>
                  4-weken schema
                </p>
                <p className="text-3xl font-black mb-2" style={{ color: "#D4920A" }}>
                  €220
                </p>
                <p className="text-xs" style={{ color: "#A09080" }}>
                  Mealprep voorbereiding
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
