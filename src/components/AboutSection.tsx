'use client';
import { MapPin } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: "#1A1410" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: "#D4920A" }}
            >
              Over Uprise
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8"
              style={{ color: "#F5F0E8" }}
            >
              De plek waar jij de beste versie van jezelf wordt
            </h2>
            <div
              className="w-12 h-1 mb-8 rounded-full"
              style={{ backgroundColor: "#D4920A" }}
            />
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "#A09080" }}
            >
              In Haacht creëerden we een unieke plek waar topsport, revalidatie en community samenkomen. Of je nu herstelt van een blessure, wil presteren of gewoon beweegt voor je gezondheid — bij Uprise vind je de juiste begeleiding.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { number: "5+", label: "Disciplines" },
                { number: "100+", label: "Leden" },
                { number: "24/7", label: "Community" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl md:text-4xl font-black"
                    style={{ color: "#D4920A" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs font-medium tracking-widest uppercase mt-1"
                    style={{ color: "#A09080" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Team CTA */}
            <div className="mb-8">
              <Link
                href="/team"
                className="inline-block px-6 py-3 text-sm font-bold tracking-[0.2em] uppercase border-2 rounded transition-all duration-300"
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
                Ontdek ons team →
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "#D4920A" }}
              />
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#F5F0E8" }}
                >
                  Stationsstraat 96, 3150 Haacht
                </p>
                <a
                  href="https://maps.google.com/?q=Stationsstraat+96+3150+Haacht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1 inline-block transition-colors duration-200"
                  style={{ color: "#D4920A" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#E8A020")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#D4920A")
                  }
                >
                  Bekijk op kaart →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Team Photo */}
          <div className="relative">
            <div
              className="w-full aspect-[4/3] rounded-lg relative overflow-hidden"
              style={{ border: "1px solid rgba(212,146,10,0.2)" }}
            >
              <img
                src="/team-foto.jpg"
                alt="Uprise team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg -z-10"
              style={{ backgroundColor: "rgba(212,146,10,0.1)" }}
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-lg -z-10"
              style={{ border: "2px solid rgba(212,146,10,0.2)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
