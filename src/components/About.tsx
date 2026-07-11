"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "4.6+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "40%", label: "Perf. Improvement" },
  { value: "10+", label: "API Integrations" },
];

const highlights = [
  "Backend engineering with .NET Core, C# & ASP.NET Web API",
  "Frontend development with React.js, Next.js & TypeScript",
  "SQL Server design, tuning, indexing & stored procedures",
  "Stripe & Razorpay payment workflows with webhook handling",
  "CRM automation across GoHighLevel, Zapier & Slack",
  "Multi-tenant architecture & PDF generation with iTextSharp",
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// about me"
          title="Turning business problems into"
          highlight="working software"
          description="A quick look at who I am and how I work."
        />

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="dots-bg absolute -inset-6 rounded-3xl opacity-60" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/50 via-transparent to-cyan/40 blur-sm" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/sandeep.jpeg"
                  alt="Sandeep Thapan — Full-Stack Developer"
                  width={640}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl px-5 py-3 text-center shadow-xl shadow-black/40"
              >
                <p className="font-display text-sm font-bold text-white">
                  Fatehabad, Haryana 🇮🇳
                </p>
                <p className="text-[11px] text-soft">Open to remote & hybrid roles</p>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-slate-300">
                I&apos;m a results-driven full-stack developer who loves the
                moment when software starts saving people real time and money.
                Over the past{" "}
                <span className="font-semibold text-white">4.6+ years</span>{" "}
                I&apos;ve designed and delivered scalable CRM, ERP, and fintech
                platforms — building everything from complex{" "}
                <span className="font-semibold text-white">
                  loan &amp; EMI calculation engines
                </span>{" "}
                to multi-tenant systems with automated workflows.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                My sweet spot is where systems meet: connecting{" "}
                <span className="text-indigo-300">payment platforms</span>,{" "}
                <span className="text-violet-300">CRMs</span>, and{" "}
                <span className="text-cyan">automation tools</span> into
                webhook-driven pipelines that run without human intervention. I
                work end-to-end — backend, frontend, SQL Server databases,
                third-party APIs, and business automation — and I care as much
                about clean, maintainable code as I do about the business
                outcome.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="card-border glow-card rounded-2xl px-3 py-5 text-center"
                  >
                    <p className="gradient-text font-display text-2xl font-extrabold sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium tracking-wide text-soft uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
