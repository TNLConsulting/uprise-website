'use client';
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactFooter from "@/components/ContactFooter";

const CLASS_TYPES = [
  { name: "Basic", level: "Beginners" },
  { name: "WOD", level: "All levels" },
  { name: "HIIT", level: "All levels" },
  { name: "Olympic Weightlifting", level: "All levels" },
  { name: "Gymnastics", level: "All levels" },
  { name: "Hybrid", level: "All levels" },
  { name: "Kids", level: "6-12 jaar" },
  { name: "Personal Coaching", level: "1 on 1 of small group" },
];

const PRICES = [
  {
    category: "Startpakket",
    name: "Fundamentals",
    price: "€249",
    description: "4 semi-private trainingen + eerste maand abonnement met 9 beurten.",
    link: "/#contact",
    featured: true,
  },
  {
    category: "Maandelijks",
    subtitle: "Abonnementen",
    items: [
      { name: "9 beurten", price: "€85", link: "https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=7" },
      { name: "15 beurten", price: "€100", link: "https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=5" },
      { name: "Unlimited", price: "€110", link: "https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=3" },
    ],
  },
  {
    category: "Flexibel",
    name: "Beurtenkaart",
    price: "€125",
    description: "10 trainingen, zonder maandelijks abonnement.",
    link: "https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?r=1",
  },
  {
    category: "Zelfstandig trainen",
    name: "Open Gym",
    price: "€70",
    description: "Maandelijks abonnement.",
    link: "https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=2",
  },
];

const SCHEDULE: Record<string, { time: string; class: string }[]> = {
  Ma: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "Hybrid" },
    { time: "12u00", class: "WOD" },
    { time: "17u00", class: "Olympic Lifting" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "WOD" },
  ],
  Di: [
    { time: "09u00", class: "WOD" },
    { time: "18u00", class: "Basic" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "Hybrid" },
  ],
  Wo: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "WOD" },
    { time: "12u00", class: "Hybrid" },
    { time: "17u00", class: "WOD" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "Olympic Lifting" },
    { time: "20u00", class: "WOD" },
  ],
  Do: [
    { time: "09u00", class: "WOD" },
    { time: "17u00", class: "HIIT" },
    { time: "18u00", class: "WOD" },
    { time: "19u00", class: "WOD" },
    { time: "20u00", class: "Gymnastics" },
  ],
  Vr: [
    { time: "07u00", class: "WOD" },
    { time: "09u00", class: "WOD" },
    { time: "12u00", class: "HIIT" },
    { time: "17u00", class: "Basic" },
    { time: "18u00", class: "Hybrid" },
  ],
  Za: [
    { time: "09u00", class: "HIIT" },
    { time: "10u00", class: "TeamWOD" },
  ],
  Zo: [
    { time: "09u30", class: "TeamWOD" },
    { time: "10u30", class: "Competition" },
  ],
};

const DAYS = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

const Groepslessen = () => {
  const [activeDay, setActiveDay] = useState("Ma");

  return (
    <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />

      <PageHero
        eyebrow="Uprise · Haacht"
        title="GROEPSLESSEN"
        subtitle="Basic · WOD · HIIT · Weightlifting · Gymnastics · Endurance · Kids"
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#A09080" }}>
            Bij Uprise ontdek je een gevarieerd aanbod aan groepslessen, begeleid door onze ervaren en enthousiaste coaches. Of je nu net begint of al jaren traint, wij dagen je uit om op jouw niveau sterker, fitter en beter te worden.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-semibold" style={{ color: "#F5F0E8" }}>
            Samen trainen, grenzen verleggen en plezier maken. Dat is Uprise.
          </p>
        </div>
      </section>

      {/* NIEUW BIJ UPRISE? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Nieuw bij Uprise?
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-4" style={{ color: "#F5F0E8" }}>
            Iedereen begint ergens
          </h2>
          <p className="text-center mb-12" style={{ color: "#A09080" }}>
            Wij helpen je graag op weg!
          </p>

          {/* 3-step grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block text-4xl font-black" style={{ color: "#D4920A" }}>01</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                Ontdek Uprise
              </h3>
              <p className="text-sm" style={{ color: "#A09080" }}>
                Maak kennis met CrossFit tijdens een gratis Basic-proefles. Onze coaches begeleiden je op jouw niveau. Ervaring is niet nodig.
              </p>
              <p className="text-xs font-semibold mt-4" style={{ color: "#D4920A" }}>
                Dinsdag 18u · Vrijdag 17u
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block text-4xl font-black" style={{ color: "#D4920A" }}>02</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                Kies jouw start
              </h3>
              <div className="text-sm space-y-3" style={{ color: "#A09080" }}>
                <div>
                  <p className="font-semibold" style={{ color: "#F5F0E8" }}>Fundamentals</p>
                  <p className="text-xs">Leer de belangrijkste CrossFit-technieken tijdens vier semi-private trainingen, inclusief je eerste maand abonnement.</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#F5F0E8" }}>Abonnement</p>
                  <p className="text-xs">Start rechtstreeks met een abonnement en bouw je ervaring geleidelijk op via onze Basic-, HIIT- en technische lessen.</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#F5F0E8" }}>Beurtenkaart</p>
                  <p className="text-xs">Train wanneer het jou uitkomt, zonder maandelijks abonnement.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-block text-4xl font-black" style={{ color: "#D4920A" }}>03</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                Word sterker, samen
              </h3>
              <p className="text-sm" style={{ color: "#A09080" }}>
                Bouw je ervaring op, ontdek onze verschillende lessen en word deel van de Uprise-community. Onze coaches helpen je bij iedere stap.
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://uprise.sportbitapp.nl/web/be/proeflesplanner/kalender"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
              style={{ backgroundColor: "#D4920A", color: "#000" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
              }
            >
              Boek je gratis proefles
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#contact"
              className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
              style={{ backgroundColor: "transparent", color: "#D4920A", border: "1px solid #D4920A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#D4920A";
              }}
            >
              Al crossfit-ervaring? Contacteer ons
            </a>
          </div>
        </div>
      </section>

      {/* Discover Classes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
            Ontdek onze groepslessen
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6" style={{ color: "#F5F0E8" }}>
            Van kracht en techniek tot conditie en uithoudingsvermogen
          </h2>
          <p className="text-base mb-8" style={{ color: "#A09080" }}>
            Ontdek welke trainingen het beste bij jou passen.
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Lesaanbod
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12" style={{ color: "#F5F0E8" }}>
            Onze lessen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLASS_TYPES.map((ct) => (
              <div
                key={ct.name}
                className="rounded-lg p-6 text-center"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.15)",
                }}
              >
                <h3 className="text-lg font-black uppercase tracking-wide mb-2" style={{ color: "#F5F0E8" }}>
                  {ct.name}
                </h3>
                <p className="text-xs tracking-wider" style={{ color: "#D4920A" }}>
                  {ct.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video's */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Bekijk het zelf
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-10" style={{ color: "#F5F0E8" }}>
            In de praktijk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            <div className="w-full max-w-xs">
              <p className="text-sm font-semibold text-center mb-3" style={{ color: "#A09080" }}>Welke lessen zijn er?</p>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%", border: "1px solid rgba(212,146,10,0.2)" }}>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/welke-lessen.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
            <div className="w-full max-w-xs">
              <p className="text-sm font-semibold text-center mb-3" style={{ color: "#A09080" }}>WOD voorbeeld</p>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%", border: "1px solid rgba(212,146,10,0.2)" }}>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/wod.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Abonnementen & Prijzen
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-4" style={{ color: "#F5F0E8" }}>
            Kies de formule die bij jouw doelstellingen en levensstijl past.
          </h2>

          {/* Pricing packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-8">
            {/* Fundamentals Featured Package */}
            <div
              className="rounded-lg p-8 md:col-span-2"
              style={{
                background: "linear-gradient(145deg, rgba(212,146,10,0.1) 0%, rgba(212,146,10,0.05) 100%)",
                border: "2px solid #D4920A",
              }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#D4920A" }}>
                Startpakket
              </p>
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-black uppercase mb-2" style={{ color: "#F5F0E8" }}>
                    Fundamentals
                  </h3>
                  <p className="text-sm" style={{ color: "#A09080" }}>
                    4 semi-private trainingen + eerste maand abonnement met 9 beurten.
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-8">
                  <span className="block text-3xl font-black mb-2" style={{ color: "#D4920A" }}>€249</span>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/#contact"
                    className="inline-block px-6 py-2 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                    style={{ backgroundColor: "#D4920A", color: "#000" }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Abonnementen */}
            <div>
              <h3 className="text-lg font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                Maandelijks Abonnementen
              </h3>
              <p className="text-xs mb-4" style={{ color: "#A09080" }}>Vanaf €85</p>
              <div className="space-y-3">
                <div
                  className="rounded-lg p-4 flex items-center justify-between"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>9 beurten</p>
                  <div className="flex items-center gap-3">
                    <span className="font-black" style={{ color: "#D4920A" }}>€85</span>
                    <a
                      href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                      style={{ backgroundColor: "#D4920A", color: "#000" }}
                    >
                      Koop
                    </a>
                  </div>
                </div>
                <div
                  className="rounded-lg p-4 flex items-center justify-between"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>15 beurten</p>
                  <div className="flex items-center gap-3">
                    <span className="font-black" style={{ color: "#D4920A" }}>€100</span>
                    <a
                      href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                      style={{ backgroundColor: "#D4920A", color: "#000" }}
                    >
                      Koop
                    </a>
                  </div>
                </div>
                <div
                  className="rounded-lg p-4 flex items-center justify-between"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>Unlimited</p>
                  <div className="flex items-center gap-3">
                    <span className="font-black" style={{ color: "#D4920A" }}>€110</span>
                    <a
                      href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                      style={{ backgroundColor: "#D4920A", color: "#000" }}
                    >
                      Koop
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexibel & Open Gym */}
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                  Flexibel
                </h3>
                <div className="space-y-3">
                  <div
                    className="rounded-lg p-4 flex items-center justify-between"
                    style={{
                      background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                      border: "1px solid rgba(212,146,10,0.12)",
                    }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>Beurtenkaart</p>
                      <p className="text-xs mt-1" style={{ color: "#A09080" }}>10 trainingen, zonder maandelijks abonnement.</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-black" style={{ color: "#D4920A" }}>€125</span>
                      <a
                        href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                        style={{ backgroundColor: "#D4920A", color: "#000" }}
                      >
                        Koop
                      </a>
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-4 flex items-center justify-between"
                    style={{
                      background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                      border: "1px solid rgba(212,146,10,0.12)",
                    }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>Personal Coaching</p>
                      <p className="text-xs mt-1" style={{ color: "#A09080" }}>1 on 1 of small group trainingen.</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-black" style={{ color: "#D4920A" }}>€72,50</span>
                      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                      <a
                        href="/#contact"
                        className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                        style={{ backgroundColor: "#D4920A", color: "#000" }}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black uppercase mb-4" style={{ color: "#F5F0E8" }}>
                  Zelfstandig trainen
                </h3>
                <div
                  className="rounded-lg p-4 flex items-center justify-between"
                  style={{
                    background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                    border: "1px solid rgba(212,146,10,0.12)",
                  }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#F5F0E8" }}>Open Gym</p>
                    <p className="text-xs mt-1" style={{ color: "#A09080" }}>Maandelijks abonnement.</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-black" style={{ color: "#D4920A" }}>€70</span>
                    <a
                      href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap?a=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200"
                      style={{ backgroundColor: "#D4920A", color: "#000" }}
                    >
                      Koop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verzekering nota */}
          <p className="text-xs text-center" style={{ color: "#A09080" }}>
            ⚠️ Een <span style={{ color: "#F5F0E8" }}>jaarlijkse ongevallenverzekering (€15)</span> is verplicht voor alle leden.
          </p>
        </div>
      </section>

      {/* Uurrooster */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center" style={{ color: "#D4920A" }}>
            Planning
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-10" style={{ color: "#F5F0E8" }}>
            Uurrooster
          </h2>

          {/* Day tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className="px-5 py-2 text-sm font-bold tracking-widest uppercase rounded transition-all duration-200"
                style={{
                  backgroundColor: activeDay === day ? "#D4920A" : "transparent",
                  color: activeDay === day ? "#000" : "#A09080",
                  border: `1px solid ${activeDay === day ? "#D4920A" : "rgba(212,146,10,0.2)"}`,
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule for active day */}
          <div className="space-y-3">
            {SCHEDULE[activeDay].map((slot) => (
              <div
                key={`${slot.time}-${slot.class}`}
                className="flex items-center gap-6 rounded-lg px-6 py-4"
                style={{
                  background: "linear-gradient(145deg, #1A1410 0%, #111111 100%)",
                  border: "1px solid rgba(212,146,10,0.12)",
                }}
              >
                <span className="text-base font-black w-16 flex-shrink-0" style={{ color: "#D4920A" }}>
                  {slot.time}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#F5F0E8" }}>
                  {slot.class}
                </span>
                <span className="text-xs ml-auto" style={{ color: "#A09080" }}>
                  All levels
                </span>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-xs" style={{ color: "#A09080" }}>
            * Dit is een voorlopig uurrooster en wordt regelmatig bekeken
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: "#111111" }}>
        <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#D4920A" }}>
          Wil je eens komen proeven?
        </p>
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8" style={{ color: "#F5F0E8" }}>
          Probeer gratis
        </h2>
        <a
          href="https://uprise.sportbitapp.nl/web/be/proeflesplanner/kalender"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded transition-all duration-300"
          style={{ backgroundColor: "#D4920A", color: "#000" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8A020")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#D4920A")
          }
        >
          Boek je gratis proefles
        </a>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Groepslessen;
