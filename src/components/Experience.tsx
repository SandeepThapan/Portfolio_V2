"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Full Stack Developer",
    company: "Anthem Infotech",
    location: "Zirakpur, Punjab",
    period: "Jan 2023 — Present",
    current: true,
    points: [
      "Designed and delivered CRM, ERP, and automation platforms using React.js, .NET Web API, and SQL Server — serving multiple enterprise clients with multi-tenant architecture and role-based access.",
      "Built a dynamic Loan & EMI Calculation Engine with configurable interest models and auto-generated PDF agreements via iTextSharp, cutting turnaround from hours to seconds.",
      "Optimized critical SQL queries and indexes achieving up to 40% performance improvement; architected workflow automation reducing manual operations by ~35%.",
      "Integrated GoHighLevel (GHL) CRM API for lead sync & pipeline automation, and DocuSign API for end-to-end e-signature workflows.",
      "Integrated Stripe and Razorpay payment gateways with webhook handling for real-time payment status, automated receipts, and reconciliation.",
      "Deployed via Azure CI/CD with Azure Blob Storage; managed version control across teams using Git and SVN.",
    ],
    tags: [".NET Web API", "React.js", "SQL Server", "Stripe", "GHL", "Azure"],
  },
  {
    role: "Full Stack Developer",
    company: "KMA Technoware",
    location: "Hisar, Haryana",
    period: "Aug 2021 — Dec 2022",
    current: false,
    points: [
      "Built and maintained multiple web applications — CRMs, admin panels, and reporting modules — using React.js, .NET Core, and MS-SQL across diverse client requirements.",
      "Developed advanced reporting modules with drill-down filters, export capabilities, and scheduled delivery.",
      "Implemented React Native mobile UI for CRM features.",
      "Collaborated in Agile sprint cycles — requirements gathering, sprint planning, and iterative delivery.",
    ],
    tags: [".NET Core", "React.js", "MS-SQL", "React Native", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// experience"
          title="Where I've made an"
          highlight="impact"
          description="4.6+ years of building enterprise software across CRM, ERP, and fintech domains."
        />

        <div className="relative ml-3 border-l border-line pl-8 sm:ml-6 sm:pl-12">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.12} className="relative pb-14 last:pb-0">
              {/* timeline node */}
              <span className="absolute top-1 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-surface sm:-left-[59px]">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    job.current
                      ? "animate-pulse bg-gradient-to-r from-primary to-cyan"
                      : "bg-slate-500"
                  }`}
                />
              </span>

              <div className="card-border glow-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-soft">
                      <span className="flex items-center gap-1.5 font-semibold text-indigo-300">
                        <Briefcase size={14} /> {job.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </p>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium ${
                      job.current
                        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border border-line bg-white/5 text-soft"
                    }`}
                  >
                    <Calendar size={12} /> {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="chip font-mono !text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
