import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet">
            <Terminal size={14} className="text-white" />
          </span>
          <p className="font-display text-sm font-bold text-white">
            Sandeep<span className="gradient-text">.dev</span>
          </p>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-soft">
          © {new Date().getFullYear()} Sandeep Thapan · Built with
          <Heart size={12} className="text-rose-400" />
          using Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
