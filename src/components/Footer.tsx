import React from 'react';
import { ScanFace, Github, Download, ExternalLink } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '../data/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/90 bg-obsidian-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-violet-500/25 border border-cyan-400/35">
                <ScanFace className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                Exam<span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Lens</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Smarter Examination Attendance. Powered by AI. Computer-vision identity verification
              assistance and offline-capable attendance management.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Academic demonstration software. InsightFace pretrained model weights are subject to
              non-commercial research licensing terms.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Sections
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Project Links */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Official Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={LINKS.githubReleases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-cyan-300 hover:text-cyan-200"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download ExamLens (Releases)</span>
                  <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={LINKS.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>View Source Code</span>
                  <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`${LINKS.githubRepo}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200"
                >
                  <span>System Documentation</span>
                  <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} ExamLens Project. All sample names &amp; records shown are fictional.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Standalone Static Public Portal • Zero Private Backend Exposure
          </p>
        </div>
      </div>
    </footer>
  );
};
