import { Facebook, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://video.wixstatic.com/video/95bc3b_a490eb391d9445048af74617e21de6c7/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.62)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs font-bold tracking-[0.4em] uppercase mb-6 animate-fade-in"
          style={{ color: "#D4920A", animationDelay: "0.1s", opacity: 0 }}
        >
          Haacht · België
        </p>

        {/* Main Tagline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-6 animate-fade-in"
          style={{ color: "#F5F0E8", animationDelay: "0.3s", opacity: 0 }}
        >
          We rise by
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #D4920A, #F0B030, #D4920A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            lifting others.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl font-light tracking-wider mb-10 animate-fade-in"
          style={{ color: "#A09080", animationDelay: "0.5s", opacity: 0 }}
        >
          Kinesitherapie · Groepslessen · Reformer Pilates · Performance · Voeding
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="#services"
            className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase border-2 rounded transition-all duration-300"
            style={{
              borderColor: "#F5F0E8",
              color: "#F5F0E8",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#F5F0E8";
              el.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#F5F0E8";
            }}
          >
            Ontdek Uprise
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
            style={{ backgroundColor: "#D4920A", color: "#000" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
            }
          >
            Contacteer ons
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="flex justify-center gap-5 mt-12 animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          <a
            href="https://www.facebook.com/Uprise.be"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full border transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "#A09080",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#D4920A";
              el.style.color = "#D4920A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.color = "#A09080";
            }}
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/uprise.be/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full border transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "#A09080",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#D4920A";
              el.style.color = "#D4920A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.color = "#A09080";
            }}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "#A09080" }}
      >
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(212,146,10,0.6))",
          }}
        />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
