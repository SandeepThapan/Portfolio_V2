"use client";

import {
  Server,
  MonitorSmartphone,
  Database,
  Plug,
  CreditCard,
  Zap,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    icon: Server,
    title: "Backend Development",
    accent: "from-indigo-500/25 to-indigo-500/5 text-indigo-300",
    skills: ["C#", ".NET / ASP.NET Core", "ASP.NET MVC", "Web API", "ADO.NET", "Entity Framework", "LINQ"],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    accent: "from-cyan-500/25 to-cyan-500/5 text-cyan-300",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Database & SQL",
    accent: "from-emerald-500/25 to-emerald-500/5 text-emerald-300",
    skills: ["SQL Server", "MySQL", "Stored Procedures", "Query Optimization", "Indexing", "Database Design"],
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    accent: "from-violet-500/25 to-violet-500/5 text-violet-300",
    skills: ["REST APIs", "Webhooks", "Third-Party APIs", "GoHighLevel / LeadConnector", "DocuSign", "Slack Integration"],
  },
  {
    icon: CreditCard,
    title: "Payment Systems",
    accent: "from-rose-500/25 to-rose-500/5 text-rose-300",
    skills: ["Stripe Integration", "Razorpay", "Payment Webhooks", "Payment Workflow Automation", "Reconciliation"],
  },
  {
    icon: Zap,
    title: "Automation Platforms",
    accent: "from-amber-500/25 to-amber-500/5 text-amber-300",
    skills: ["Zapier Automation", "CRM Automation", "Webhook-Based Systems", "Workflow Orchestration", "Lead Routing"],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    accent: "from-sky-500/25 to-sky-500/5 text-sky-300",
    skills: ["Git", "SVN", "Azure CI/CD", "Azure Blob Storage", "iTextSharp (PDF)", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-glow absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-2">
        <SectionHeading
          eyebrow="// technical skills"
          title="A toolbox built for"
          highlight="shipping real products"
          description="From database engines to payment webhooks — the technologies I use every day."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) * 0.1}
              className={i === categories.length - 1 ? "lg:col-start-2" : ""}
            >
              <div className="card-border glow-card group h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3.5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <cat.icon size={20} />
                  </span>
                  <h3 className="font-display text-base font-bold text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="chip !text-xs">
                      {s}
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
