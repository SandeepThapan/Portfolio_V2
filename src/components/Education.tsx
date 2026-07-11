"use client";

import { GraduationCap, BookOpen, Languages } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const education = [
  {
    icon: GraduationCap,
    degree: "MBA — IT Management",
    school: "Lovely Professional University",
    period: "2024 — Present",
    note: "Deepening business strategy & technology management skills alongside full-time development work.",
    iconBg: "bg-violet-500/20 text-violet-300",
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Arts",
    school: "IGNOU",
    period: "2018 — 2021",
    note: "Graduated with 65% — built a strong foundation in analysis, communication, and self-driven learning.",
    iconBg: "bg-cyan-500/15 text-cyan-300",
  },
];

const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Hindi", level: "Full Professional Proficiency" },
  { name: "Punjabi", level: "Full Professional Proficiency" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// education"
          title="Learning never"
          highlight="stops"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.12}>
              <div className="card-border glow-card h-full rounded-2xl p-7">
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${e.iconBg}`}>
                    <e.icon size={22} />
                  </span>
                  <span className="font-mono text-xs text-soft">{e.period}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm font-semibold text-indigo-300">{e.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-soft">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card-border glow-card mt-5 flex flex-col items-start gap-5 rounded-2xl p-7 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
              <Languages size={22} />
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {languages.map((l) => (
                <div key={l.name}>
                  <p className="font-display text-sm font-bold text-white">{l.name}</p>
                  <p className="text-xs text-soft">{l.level}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
