import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Kinesitherapie", href: "#services" },
  { label: "Groepslessen", href: "#services" },
  { label: "Performance", href: "#services" },
  { label: "Voeding", href: "#services" },
  { label: "Team", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CTA_BUTTONS = [
  {
    label: "KINÉ AFSPRAAK",
    href: "https://altagenda.crossuite.com/Uprise/l/n5r4v5z5j454t2e48454/o/54135474r253p2b48494944354u25464a4/t/c42384340353x274c424f4",
  },
  {
    label: "GRATIS PROEFLES",
    href: "https://uprise.sportbitapp.nl/web/be/proeflesplanner/kalender",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Uprise home"
          >
            <span
              className="text-xl font-black tracking-widest uppercase flex items-center gap-1"
              style={{ color: "#F5F0E8", letterSpacing: "0.18em" }}
            >
              UPRISE
              <ArrowUpRight
                className="w-5 h-5 inline-block"
                style={{ color: "#D4920A" }}
                strokeWidth={3}
              />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#A09080" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#F5F0E8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#A09080")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {CTA_BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-widest uppercase px-3 py-2 rounded transition-all duration-200"
                style={{
                  backgroundColor: "#D4920A",
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#E8A020")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#D4920A")
                }
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: "#F5F0E8" }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "#111111",
            borderColor: "rgba(212,146,10,0.2)",
          }}
        >
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-base font-medium py-2"
                style={{ color: "#F5F0E8" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3" style={{ borderColor: "rgba(212,146,10,0.2)" }}>
              {CTA_BUTTONS.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-bold tracking-widest uppercase px-4 py-3 rounded text-center transition-colors duration-200"
                  style={{ backgroundColor: "#D4920A", color: "#000" }}
                  onClick={() => setIsOpen(false)}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
