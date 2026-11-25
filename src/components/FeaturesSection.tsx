import React from 'react';
import {
  UserPlus,
  ScanFace,
  Sparkles,
  ClipboardCheck,
  Database,
  LayoutDashboard,
  AppWindow,
  CloudDownload,
} from 'lucide-react';
import { FEATURES, FeatureItem } from '../data/siteContent';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'guided-enrollment': UserPlus,
  'embedding-generation': ScanFace,
  'insightface-matching': Sparkles,
  'exam-management': ClipboardCheck,
  'local-attendance-db': Database,
  'organizer-dashboard': LayoutDashboard,
  'electron-desktop': AppWindow,
  'supabase-sync': CloudDownload,
};

const ACCENT_STYLES: Record<FeatureItem['accent'], { badge: string; iconWrap: string; borderHover: string }> = {
  cyan: {
    badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/25',
    iconWrap: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
    borderHover: 'hover:border-cyan-400/45',
  },
  blue: {
    badge: 'text-blue-300 bg-blue-500/10 border-blue-400/25',
    iconWrap: 'bg-blue-500/15 border-blue-400/30 text-blue-300',
    borderHover: 'hover:border-blue-400/45',
  },
  violet: {
    badge: 'text-violet-300 bg-violet-500/10 border-violet-400/25',
    iconWrap: 'bg-violet-500/15 border-violet-400/30 text-violet-300',
    borderHover: 'hover:border-violet-400/45',
  },
};

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative border-t border-slate-800/70 bg-obsidian-900/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Core Capabilities
            </p>
            <h2
              id="features-heading"
              className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Key features across enrollment, vision &amp; oversight
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400 sm:text-base">
            Every module in ExamLens maps directly to an implemented component in the open-source
            system—from mobile pose guidance to offline SQLite attendance persistence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const IconComponent = ICON_MAP[feature.id] ?? ScanFace;
            const style = ACCENT_STYLES[feature.accent];

            return (
              <article
                key={feature.id}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-obsidian-950/85 p-6 transition-all duration-200 hover:-translate-y-0.5 ${style.borderHover}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.iconWrap}`}
                    >
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${style.badge}`}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-800/80 pt-3.5">
                  <p className="font-mono text-[11px] leading-snug text-slate-400">
                    {feature.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
