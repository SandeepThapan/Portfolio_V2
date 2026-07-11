"use client";

import { Mail, Phone, MapPin, Download, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "sandeepthapan429@gmail.com",
    href: "mailto:sandeepthapan429@gmail.com",
    iconBg: "bg-primary/20 text-indigo-300",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97282 31429",
    href: "tel:+919728231429",
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Fatehabad, Haryana, India",
    href: undefined,
    iconBg: "bg-rose-500/15 text-rose-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something"
          highlight="great together"
          description="Have a project, a role, or an automation problem that needs solving? My inbox is always open."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.iconBg}`}>
                  <c.icon size={22} />
                </span>
                <p className="mt-4 text-xs font-medium tracking-wider text-soft uppercase">
                  {c.label}
                </p>
                <p className="mt-1 text-sm font-semibold break-all text-white">
                  {c.value}
                </p>
              </>
            );
            return (
              <Reveal key={c.label} delay={i * 0.1}>
                {c.href ? (
                  <a href={c.href} className="card-border glow-card block h-full rounded-2xl p-7">
                    {inner}
                  </a>
                ) : (
                  <div className="card-border glow-card h-full rounded-2xl p-7">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="card-border relative mt-10 overflow-hidden rounded-3xl p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-violet/10 to-cyan/10" />
            <div className="dots-bg pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to automate, integrate, and{" "}
                <span className="gradient-text">ship faster?</span>
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-soft">
                Whether it&apos;s a full-stack build, a payment pipeline, or a
                CRM automation — let&apos;s talk about how I can help.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:sandeepthapan429@gmail.com?subject=Let%27s%20work%20together"
                  className="btn-primary"
                >
                  <Send size={16} /> Say Hello
                </a>
                <a href="/Sandeep_Thapan_Resume.docx" download className="btn-ghost">
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
