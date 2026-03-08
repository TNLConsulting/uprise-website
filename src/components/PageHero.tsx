interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#0D0D0D",
        minHeight: "40vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(212,146,10,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {eyebrow && (
          <p
            className="text-xs font-bold tracking-[0.4em] uppercase mb-5"
            style={{ color: "#D4920A" }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-6"
          style={{ color: "#F5F0E8" }}
        >
          {title}
        </h1>

        {/* Amber underline accent */}
        <div
          className="w-20 h-1 mx-auto mb-6 rounded-full"
          style={{ backgroundColor: "#D4920A" }}
        />

        {subtitle && (
          <p
            className="text-sm sm:text-base font-light tracking-wider"
            style={{ color: "#A09080" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
