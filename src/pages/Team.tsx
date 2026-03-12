'use client';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const FOUNDERS = [
  {
    name: "Laura Quirin",
    role: "Sport Physio · Headcoach",
    photo: "https://static.wixstatic.com/media/95bc3b_3cb6a7e72f494bdba992d203ea74cf9d~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/IMG-20231005-WA0015.jpg",
  },
  {
    name: "Tom Schallenbergh",
    role: "Headcoach · Performance Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_f8c111ee856f42a1acb6626f22fb83d2~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/IMG-20231005-WA0018.jpg",
  },
];

const TEAM = [
  {
    name: "Laura Markovitz",
    role: "Sport Physio & Personal Trainer",
    photo: "https://static.wixstatic.com/media/95bc3b_cc1546209ec84587a2caa6ce6abada23~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Marieke Francois",
    role: "Voedingsdeskundige",
    photo: "https://static.wixstatic.com/media/95bc3b_fab100487d9e4c5dba63ff505b527e5c~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Corry Coninckx",
    role: "Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_59d37f5dffbb4bc38f20c81d98992c63~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Ruben Goossens",
    role: "Coach · Performance Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_1c544003467b4794bdb55ea3d4727b1c~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Kenneth Franckx",
    role: "Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_1b44815ebcfc42bb99517915e9c6d2c9~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Tatjana Decaesteker",
    role: "Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_711516ddf21e47f6bec18b8e516841b3~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
  {
    name: "Glen",
    role: "Coach",
    photo: "/glen.jpg",
  },
  {
    name: "Karolina",
    role: "Pilates Instructrice",
    photo: "/karolina.jpg",
  },
  {
    name: "Maarten Verbinnen",
    role: "Coach",
    photo: "https://static.wixstatic.com/media/95bc3b_98c2a53d89004a50a9b17525d5310042~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_85/photo.jpg",
  },
];

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div
    className="rounded-lg overflow-hidden flex flex-col group transition-all duration-300"
    style={{
      backgroundColor: "#1A1410",
      border: "1px solid rgba(212,146,10,0.15)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,146,10,0.6)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,146,10,0.15)";
    }}
  >
    <div className="w-full overflow-hidden" style={{ height: "300px" }}>
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="px-5 py-4">
      <p className="text-base font-bold" style={{ color: "#F5F0E8" }}>
        {member.name}
      </p>
      <p className="text-sm mt-1" style={{ color: "#A09080" }}>
        {member.role}
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

      {/* Founders */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xl font-black uppercase tracking-widest mb-8"
            style={{ color: "#D4920A" }}
          >
            Founders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
            {FOUNDERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xl font-black uppercase tracking-widest mb-8"
            style={{ color: "#D4920A" }}
          >
            Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Vragen?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Contacteer ons
        </h2>
        <Link href="/#contact"
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
        </Link>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Team;
