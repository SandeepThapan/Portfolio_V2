import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sandeep Thapan — Full-Stack .NET Developer",
  description:
    "Full-Stack .NET Developer & Automation and Integration Specialist. I build scalable web applications, automate business workflows, and integrate payment systems and CRMs.",
  keywords: [
    "Sandeep Thapan",
    ".NET Developer",
    "ASP.NET Core",
    "React.js",
    "Next.js",
    "Stripe Integration",
    "Zapier Automation",
    "GoHighLevel",
    "SQL Server",
  ],
  openGraph: {
    title: "Sandeep Thapan — Full-Stack .NET Developer",
    description:
      "Scalable web applications, payment automation, CRM integrations, and reliable backend solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jet.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
