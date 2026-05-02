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

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
              Onze pakketten
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
              Voedingsbegeleiding op maat
            </h2>
            <div className="w-12 h-1 mb-8 rounded-full mx-auto" style={{ backgroundColor: "#D4920A" }} />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Basis Traject */}
            <div
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: "rgba(212,146,10,0.05)",
                border: "1px solid rgba(212,146,10,0.3)",
              }}
            >
              <h3 className="text-2xl font-black uppercase mb-2" style={{ color: "#F5F0E8" }}>
                Basis Traject
              </h3>
              <p className="text-sm mb-6" style={{ color: "#A09080" }}>
                Stap voor stap naar je doelen
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                    Consulten
                  </p>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>Intake consult (1u)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€65</span>
                    </li>
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>2de consult (1u)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€65</span>
                    </li>
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>Vervolgconsult (30 min)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€35</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="p-4 rounded"
                  style={{
                    backgroundColor: "rgba(212,146,10,0.1)",
                    border: "1px solid rgba(212,146,10,0.2)",
                  }}
                >
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                    Pakket (1 jaar geldig)
                  </p>
                  <p className="text-2xl font-black" style={{ color: "#F5F0E8" }}>
                    €256
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#A09080" }}>
                    2x consult 1u + 4x vervolgconsult 30 min
                  </p>
                </div>
              </div>
            </div>

            {/* Sport Traject */}
            <div
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: "rgba(212,146,10,0.05)",
                border: "1px solid rgba(212,146,10,0.3)",
              }}
            >
              <h3 className="text-2xl font-black uppercase mb-2" style={{ color: "#F5F0E8" }}>
                Sport Traject
              </h3>
              <p className="text-sm mb-6" style={{ color: "#A09080" }}>
                Voeding voor optimale prestaties
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                    Consulten
                  </p>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>Intake consult (1u15)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€75</span>
                    </li>
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>2de consult (1u15)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€75</span>
                    </li>
                    <li className="flex justify-between text-sm" style={{ color: "#A09080" }}>
                      <span>Vervolgconsult (30 min)</span>
                      <span className="font-bold" style={{ color: "#F5F0E8" }}>€35</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="p-4 rounded"
                  style={{
                    backgroundColor: "rgba(212,146,10,0.1)",
                    border: "1px solid rgba(212,146,10,0.2)",
                  }}
                >
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#D4920A" }}>
                    Pakket (1 jaar geldig)
                  </p>
                  <p className="text-2xl font-black" style={{ color: "#F5F0E8" }}>
                    €276
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#A09080" }}>
                    2x consult 1u + 4x vervolgconsult 30 min
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meal Prep Schemas */}
          <div className="mt-12 pt-12 border-t" style={{ borderColor: "rgba(212,146,10,0.2)" }}>
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
              Op maat gemaakt
            </p>
            <h3 className="text-2xl font-black uppercase mb-6" style={{ color: "#F5F0E8" }}>
              Persoonlijke mealprep schema's
            </h3>
            <p className="text-sm mb-8" style={{ color: "#A09080" }}>
              Een persoonlijk plan, specifiek afgestemd op jouw doelen
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="p-6 rounded border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.03)",
                  border: "1px solid rgba(212,146,10,0.2)",
                }}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>
                  2-weken schema
                </h4>
                <p className="text-3xl font-black mb-2" style={{ color: "#D4920A" }}>
                  €110
                </p>
                <p className="text-sm" style={{ color: "#A09080" }}>
                  Mealprep voorbereiding
                </p>
              </div>

              <div
                className="p-6 rounded border"
                style={{
                  backgroundColor: "rgba(212,146,10,0.03)",
                  border: "1px solid rgba(212,146,10,0.2)",
                }}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>
                  4-weken schema
                </h4>
                <p className="text-3xl font-black mb-2" style={{ color: "#D4920A" }}>
                  €220
                </p>
                <p className="text-sm" style={{ color: "#A09080" }}>
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
