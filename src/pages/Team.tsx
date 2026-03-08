import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const TEAM_GROUPS = [
  {
    label: "Founders",
    count: 2,
  },
  {
    label: "Kinesitherapeuten",
    count: 3,
  },
  {
    label: "Coaches",
    count: 3,
  },
  {
    label: "Voedingsdeskundige",
    count: 1,
  },
];

const PlaceholderCard = ({ label }: { label: string }) => (
  <div
    className="w-full aspect-[3/4] rounded-lg flex items-end relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #1A1410 0%, #0D0D0D 70%, #1A1410 100%)",
      border: "1px solid rgba(212,146,10,0.15)",
    }}
  >
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,146,10,0.5) 40px, rgba(212,146,10,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,146,10,0.5) 40px, rgba(212,146,10,0.5) 41px)",
      }}
    />

    {/* Center icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(212,146,10,0.1)" }}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#D4920A" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>

    {/* Bottom label */}
    <div
      className="relative z-10 w-full px-4 py-4"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
      }}
    >
      <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "#A09080" }}>
        Team foto
      </p>
      <p className="text-sm font-bold mt-0.5" style={{ color: "#F5F0E8" }}>
        {label}
      </p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="MEET THE TEAM"
        subtitle="Dedication · Expertise · Passion"
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#A09080" }}>
            Hier stellen we graag ons fantastische team aan je voor. Toegewijde en ervaren kinesitherapeuten, coaches en voedingsdeskundige — allemaal klaar om jou te helpen jouw doelen te bereiken.
          </p>
        </div>
      </section>

      {/* Team grid by group */}
      {TEAM_GROUPS.map((group) => (
        <section
          key={group.label}
          className="py-12 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-xl font-black uppercase tracking-widest mb-8"
              style={{ color: "#D4920A" }}
            >
              {group.label}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: group.count }).map((_, i) => (
                <PlaceholderCard key={i} label={group.label} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#111111" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Vragen?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Contacteer ons
        </h2>
        <a
          href="/#contact"
          className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase border-2 rounded transition-all duration-300"
          style={{ borderColor: "#D4920A", color: "#D4920A" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "#D4920A";
            el.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "#D4920A";
          }}
        >
          Contacteer ons
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Team;
