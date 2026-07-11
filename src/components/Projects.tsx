"use client";

import {
  Bot,
  Zap,
  Landmark,
  Factory,
  GraduationCap,
  ShoppingCart,
  School,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    icon: Bot,
    badge: "Featured · AI Platform",
    title: "SmartLead AI",
    subtitle: "AI-Powered Lead Management & Automation Platform",
    description:
      "An AI-powered platform that helps businesses manage leads, track conversions, automate workflows, and improve customer engagement. Features smart lead scoring, AI-powered search, analytics dashboards, automation tools, and full CRM management for sales and marketing teams.",
    highlights: [
      "Smart lead scoring & AI-powered search",
      "Analytics dashboards for conversion tracking",
      "Workflow automation & customer engagement tools",
      "CRM management for sales & marketing teams",
    ],
    tags: ["AI / ML", ".NET Core", "React.js", "SQL Server", "REST APIs", "Automation"],
    gradient: "from-violet-600/30 via-primary/20 to-transparent",
    iconBg: "bg-violet-500/20 text-violet-300",
  },
  {
    icon: Zap,
    badge: "Featured · Automation",
    title: "GHL Payment Automation via Zapier",
    subtitle: "End-to-End Payment Workflow Automation",
    description:
      "A fully automated payment pipeline connecting Stripe payments to GoHighLevel (LeadConnector) through Zapier. Each payment event triggers a Zap that updates CRM pipelines, tags contacts, sends automated receipts, and posts real-time Slack notifications — zero manual steps from checkout to CRM.",
    highlights: [
      "Stripe webhook events wired into Zapier triggers",
      "Automatic GHL pipeline updates & contact tagging",
      "Automated receipts, follow-ups & Slack alerts",
      "Reliable retry & reconciliation handling",
    ],
    tags: ["Zapier", "GoHighLevel", "Stripe", "Webhooks", "Slack", "CRM Automation"],
    gradient: "from-amber-500/25 via-rose-500/15 to-transparent",
    iconBg: "bg-amber-500/20 text-amber-300",
  },
];

const projects = [
  {
    icon: Landmark,
    title: "Fintrack CRM",
    period: "2024 — Present",
    description:
      "End-to-end Lead Management & Property ERP with automated routing, lead scoring, follow-up workflows, multi-loan EMI calculators, and auto-generated PDF agreements. Two websites integrated with a single Web API backbone.",
    tags: [".NET Web API", "React.js", "iTextSharp", "SQL Server"],
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    icon: Factory,
    title: "E-Controls ERP",
    period: "2023 — Present",
    description:
      "Led migration of a legacy enterprise system to React.js + .NET Core. Built automated workflows, branch-level operations, and comprehensive reporting dashboards for enterprise-wide visibility.",
    tags: ["React.js", ".NET Core", "Workflow Automation", "Reporting"],
    iconBg: "bg-sky-500/15 text-sky-300",
  },
];

const earlier = [
  {
    icon: School,
    title: "SIP HBSE",
    description: "Full-stack admin panel for school & college data management.",
  },
  {
    icon: GraduationCap,
    title: "Admission Mantra",
    description: "Student enrollment CRM with end-to-end admission workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Swapdeal",
    description: "Complete e-commerce platform with catalog, cart & orders.",
  },
  {
    icon: BookOpen,
    title: "Gramin Shiksha",
    description: "React Native education app UI for rural learning access.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// recent projects"
          title="Work I'm"
          highlight="proud of"
          description="From AI-powered platforms to fully automated payment pipelines — real systems solving real problems."
        />

        {/* featured projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <article className="card-border glow-card group relative h-full overflow-hidden rounded-3xl">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="dots-bg pointer-events-none absolute inset-0 opacity-30" />
                <div className="relative p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${p.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                    >
                      <p.icon size={26} />
                    </span>
                    <span className="chip !text-[11px] font-mono">
                      <Sparkles size={11} /> {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-indigo-300">
                    {p.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {p.description}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-soft">
                        <ArrowUpRight size={13} className="mt-0.5 shrink-0 text-cyan" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip font-mono !text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* main projects */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <article className="card-border glow-card group h-full rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${p.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <p.icon size={22} />
                  </span>
                  <span className="font-mono text-xs text-soft">{p.period}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip font-mono !text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* earlier projects */}
        <Reveal delay={0.15}>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {earlier.map((p) => (
              <div key={p.title} className="card-border glow-card rounded-2xl p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-indigo-300">
                  <p.icon size={18} />
                </span>
                <h4 className="mt-4 font-display text-sm font-bold text-white">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-soft">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
