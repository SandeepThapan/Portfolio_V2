"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Zap,
  CreditCard,
  Workflow,
} from "lucide-react";

const roles = [
  "Scalable .NET Web APIs",
  "Payment Automation Systems",
  "CRM & GHL Integrations",
  "React / Next.js Frontends",
  "SQL Server Optimization",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 35 : 75;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

const codeLines = [
  { c: "text-violet-400", t: "public async Task<Result>" },
  { c: "text-cyan-300", t: "  ProcessPayment(Invoice invoice)" },
  { c: "text-slate-500", t: "{" },
  { c: "text-slate-300", t: "  var charge = await stripe" },
  { c: "text-slate-300", t: "    .Charges.CreateAsync(invoice);" },
  { c: "text-slate-300", t: "  await ghl.SyncPipelineAsync(charge);" },
  { c: "text-emerald-400", t: "  return Result.Success(charge);" },
  { c: "text-slate-500", t: "}" },
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* background layers */}
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute top-40 -left-32 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
      <div className="absolute top-72 -right-24 h-80 w-80 rounded-full bg-violet/15 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr] lg:px-2">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip !text-[0.8rem]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-[2.6rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Sandeep Thapan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-display text-lg font-semibold text-slate-200 sm:text-xl"
          >
            Full-Stack .NET Developer{" "}
            <span className="mx-2 text-slate-600">|</span>
            Automation &amp; Integration Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-4 flex h-8 items-center font-mono text-sm text-cyan sm:text-base"
          >
            <span className="mr-2 text-slate-500">&gt;</span>
            I build {typed}
            <span className="animate-blink ml-0.5 inline-block h-5 w-[2px] bg-cyan" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-soft"
          >
            With 4.6+ years of experience, I design scalable web applications,
            automate complex business workflows, integrate payment systems and
            CRMs, and deliver reliable backend solutions that move real
            business metrics — from 40% faster queries to fully automated
            payment pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={17} />
            </a>
            <a href="/Sandeep_Thapan_Resume.docx" download className="btn-ghost">
              <Download size={17} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-soft transition-colors hover:text-white"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {[".NET Core", "C#", "React.js", "Next.js", "SQL Server", "Stripe", "Zapier", "GoHighLevel"].map(
              (t) => (
                <span key={t} className="chip font-mono !text-xs">
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* right column — portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* code card behind */}
          <div className="glass animate-float-slow absolute -top-10 -left-6 z-0 hidden w-72 rounded-2xl p-4 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/40 sm:block">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            {codeLines.map((l, i) => (
              <div key={i} className={l.c}>
                {l.t}
              </div>
            ))}
          </div>

          {/* portrait */}
          <div className="relative z-10 mx-auto mt-6 w-64 sm:w-80">
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-primary via-violet to-cyan opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/sandeep.jpeg"
                alt="Sandeep Thapan"
                width={640}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* floating badges */}
          <div className="glass animate-float absolute top-8 -right-2 z-20 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 sm:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet/20 text-violet-300">
              <CreditCard size={17} />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Stripe & Razorpay</p>
              <p className="text-[10px] text-soft">Payment Integrations</p>
            </div>
          </div>

          <div className="glass animate-float-slow absolute bottom-24 -left-4 z-20 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 sm:-left-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
              <Zap size={17} />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Zapier + GHL</p>
              <p className="text-[10px] text-soft">Workflow Automation</p>
            </div>
          </div>

          <div className="glass animate-float absolute -bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-indigo-300">
              <Workflow size={17} />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">4.6+ Years</p>
              <p className="text-[10px] text-soft">Full-Stack Experience</p>
            </div>
          </div>

          <Sparkles
            size={22}
            className="animate-spin-slow absolute -top-2 right-10 text-violet-400/70"
          />
        </motion.div>
      </div>
    </section>
  );
}
