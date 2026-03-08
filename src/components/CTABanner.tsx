const CTABanner = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1410 0%, #0D0D0D 50%, #1A0A00 100%)",
      }}
    >
      {/* Background accent elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4920A 0%, transparent 60%), radial-gradient(circle at 80% 50%, #E8A020 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,146,10,0.4), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,146,10,0.4), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
          style={{ color: "#D4920A" }}
        >
          Start vandaag
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6"
          style={{ color: "#F5F0E8" }}
        >
          Klaar om te starten?
        </h2>
        <p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ color: "#A09080" }}
        >
          Boek je gratis proefles en ontdek Uprise.
        </p>
        <a
          href="https://uprise.sportbitapp.nl/web/be/proeflesplanner/kalender"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 text-sm font-black tracking-[0.25em] uppercase rounded transition-all duration-300"
          style={{
            backgroundColor: "#D4920A",
            color: "#000",
            boxShadow: "0 0 40px rgba(212,146,10,0.3)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "#E8A020";
            el.style.boxShadow = "0 0 60px rgba(212,146,10,0.5)";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "#D4920A";
            el.style.boxShadow = "0 0 40px rgba(212,146,10,0.3)";
            el.style.transform = "none";
          }}
        >
          Gratis proefles boeken
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
