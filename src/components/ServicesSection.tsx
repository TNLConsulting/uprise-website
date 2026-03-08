import { Link } from "react-router-dom";
import { Activity, Users, Layers, TrendingUp, Apple } from "lucide-react";

const SERVICES = [
  {
    icon: Activity,
    title: "KINESITHERAPIE",
    description:
      "Acute en chronische blessures, revalidatie en preventief werken — onze kinesitherapeuten staan voor je klaar.",
    cta: "Meer info →",
    href: "/kinesitherapie",
    external: false,
  },
  {
    icon: Users,
    title: "GROEPSLESSEN",
    description:
      "Dagelijkse WOD, High Intensity, Weightlifting, Gymnastics en Conditioning Classes in een community-gedreven omgeving.",
    cta: "Meer info →",
    href: "/groepslessen",
    external: false,
  },
  {
    icon: Layers,
    title: "REFORMER PILATES",
    description:
      "Ontdek onze Reformer Pilates lessen bij Upform Studio — speciaal opgericht voor een optimale pilates-ervaring.",
    cta: "Boek je sessie →",
    href: "https://www.upform.be",
    external: true,
  },
  {
    icon: TrendingUp,
    title: "PERFORMANCE",
    description:
      "Sportspecifieke voorbereiding en ploegenbegeleiding — til je prestaties naar het volgende niveau.",
    cta: "Meer info →",
    href: "/performance",
    external: false,
  },
  {
    icon: Apple,
    title: "VOEDING",
    description:
      "Persoonlijk voedingsadvies afgestemd op jouw doelen, door onze gespecialiseerde diëtiste.",
    cta: "Meer info →",
    href: "/voeding",
    external: false,
  },
];

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => {
  const Icon = service.icon;

  const cardContent = (
    <div
      className="rounded-lg p-8 flex flex-col gap-5 transition-all duration-300 group h-full"
      style={{
        background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
        border: "1px solid rgba(212,146,10,0.15)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(212,146,10,0.4)";
        (e.currentTarget as HTMLElement).style.transform =
          "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 40px rgba(212,146,10,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(212,146,10,0.15)";
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(212,146,10,0.12)" }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: "#D4920A" }}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-black tracking-widest uppercase"
        style={{ color: "#F5F0E8" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "#A09080" }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <span
        className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors duration-200 mt-auto"
        style={{ color: "#D4920A" }}
      >
        {service.cta}
      </span>
    </div>
  );

  if (service.external) {
    return (
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={service.href} className="block">
      {cardContent}
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
            style={{ color: "#D4920A" }}
          >
            Ons aanbod
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: "#F5F0E8" }}
          >
            Wat bieden we aan?
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: "#D4920A" }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
