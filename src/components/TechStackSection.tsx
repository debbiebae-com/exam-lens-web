import React from 'react';
import { Cpu, Server, Layout } from 'lucide-react';
import { TECH_STACK, TechItem } from '../data/siteContent';

const CATEGORIES: Array<{
  name: TechItem['category'];
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
}> = [
  {
    name: 'AI & Vision',
    subtitle: 'Local face detection, multi-object tracking, and embedding inference',
    icon: Cpu,
    accentClass: 'text-cyan-300 border-cyan-400/30 bg-cyan-500/10',
  },
  {
    name: 'Backend & Data',
    subtitle: 'Typed REST APIs, offline SQLite storage, and hybrid cloud staging',
    icon: Server,
    accentClass: 'text-blue-300 border-blue-400/30 bg-blue-500/10',
  },
  {
    name: 'Frontend & Desktop',
    subtitle: 'Mobile enrollment web app, live organizer dashboard, and Electron shell',
    icon: Layout,
    accentClass: 'text-violet-300 border-violet-400/30 bg-violet-500/10',
  },
];

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative border-t border-slate-800/70 bg-obsidian-900/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-400">
            Technology Stack
          </p>
          <h2
            id="stack-heading"
            className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Built on proven Python vision &amp; modern TypeScript tooling
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            ExamLens pairs a Python 3.12 + FastAPI + InsightFace computer-vision backend with
            React, Next.js, TypeScript, and Electron interfaces.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const items = TECH_STACK.filter((t) => t.category === cat.name);

            return (
              <div
                key={cat.name}
                className="rounded-2xl border border-slate-800/90 bg-obsidian-950/75 p-6 sm:p-7"
              >
                <div className="flex flex-col gap-2 border-b border-slate-800/80 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${cat.accentClass}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                      <p className="text-xs text-slate-400">{cat.subtitle}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {items.length} technologies
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-xl border border-slate-800/90 bg-obsidian-900/70 p-4 transition-colors hover:border-slate-600"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-bold text-white">{tech.name}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                      </div>
                      <p className="mt-1 font-mono text-xs text-cyan-300/90">{tech.role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">{tech.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
