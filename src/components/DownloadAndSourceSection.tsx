import React from 'react';
import {
  Download,
  Github,
  Package,
  Terminal,
  FolderGit2,
  ExternalLink,
  Info,
  ShieldAlert,
} from 'lucide-react';
import { LINKS } from '../data/siteContent';

const REPO_MODULES = [
  {
    folder: 'backend/',
    stack: 'Python 3.12 • FastAPI • SQLAlchemy • InsightFace',
    description:
      'REST API, SQLite models, eligibility checks, Supabase inbox sync, guided OpenCV capture, and live hall attendance worker.',
  },
  {
    folder: 'frontend/',
    stack: 'React • Vite • TypeScript • MediaPipe WASM',
    description:
      'Mobile-first student web enrollment app with guided head-pose prompts and Web Worker landmark checks.',
  },
  {
    folder: 'dashboard/',
    stack: 'Next.js App Router • TypeScript • Tailwind CSS',
    description:
      'Local organizer recognition dashboard with live session metrics, candidate search, demo controls, and CSV export.',
  },
  {
    folder: 'desktop/',
    stack: 'Electron • Windows Service Lifecycle',
    description:
      'Dedicated desktop window wrapper that starts, monitors, and cleanly stops managed local backend and dashboard services.',
  },
];

export const DownloadAndSourceSection: React.FC = () => {
  return (
    <>
      {/* SECTION 8: DOWNLOAD SECTION */}
      <section
        id="download"
        aria-labelledby="download-heading"
        className="relative border-t border-slate-800/70 bg-obsidian-900/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-850 p-8 shadow-2xl sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-200">
                  <Package className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                  <span>Official Distribution Channel</span>
                </div>

                <h2
                  id="download-heading"
                  className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                  Get ExamLens via GitHub Releases
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  All official ExamLens software distributions, version tags, and release notes are
                  published exclusively through the project&apos;s GitHub Releases page.
                </p>

                {/* Honest Release Availability Notice */}
                <div className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-sm text-amber-100">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-white">
                        Packaged Releases Are Forthcoming
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-amber-100/90 sm:text-sm">
                        No pre-built standalone installer asset has been published yet on GitHub
                        Releases. Follow the official Releases page for upcoming tagged builds, or
                        run ExamLens directly from source today using the repository&apos;s guided
                        Windows preparation scripts (<code className="font-mono text-xs">Prepare Desktop App.cmd</code>).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <a
                    href={LINKS.githubReleases}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110"
                  >
                    <Download className="h-5 w-5 stroke-[2.25]" aria-hidden="true" />
                    <span>Download ExamLens</span>
                    <ExternalLink className="h-4 w-4 opacity-80" aria-hidden="true" />
                  </a>

                  <a
                    href={LINKS.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-base font-semibold text-slate-100 transition-all hover:border-cyan-400/50 hover:bg-slate-800"
                  >
                    <Github className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Run From Source Summary */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-800 bg-obsidian-950/95 p-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                    <span>Current Local Setup Requirements</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <span className="text-slate-400">Python Runtime</span>
                      <span className="font-mono text-xs text-white">Python 3.12 + uv</span>
                    </li>
                    <li className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <span className="text-slate-400">JavaScript Runtime</span>
                      <span className="font-mono text-xs text-white">Node.js 22.12+ &amp; npm</span>
                    </li>
                    <li className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <span className="text-slate-400">Desktop Shell</span>
                      <span className="font-mono text-xs text-white">Electron (Windows launcher)</span>
                    </li>
                    <li className="flex items-start justify-between gap-2">
                      <span className="text-slate-400">Camera Input</span>
                      <span className="font-mono text-xs text-white">PC Webcam or DroidCam</span>
                    </li>
                  </ul>
                  <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 font-mono text-xs text-slate-300">
                    <p className="text-slate-500"># Clone the official ExamLens system repo</p>
                    <p className="mt-1 break-all text-cyan-300">
                      git clone https://github.com/debbiebae-com/AI-examination-attendance-system.git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: GITHUB SOURCE-CODE SECTION */}
      <section
        id="source"
        aria-labelledby="source-heading"
        className="relative border-t border-slate-800/70 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-400">
                Open Repository Architecture
              </p>
              <h2
                id="source-heading"
                className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Inspect the complete source code on GitHub
              </h2>
              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                Explore the modular repository layout, automated test suites (pytest &amp; Vitest),
                deployment documentation, and local Electron desktop orchestration scripts.
              </p>
            </div>

            <a
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 self-start rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50 hover:bg-slate-800 lg:self-auto"
            >
              <Github className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              <span>debbiebae-com/AI-examination-attendance-system</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REPO_MODULES.map((mod) => (
              <div
                key={mod.folder}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-obsidian-900/75 p-6 transition-colors hover:border-slate-600"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                    <h3 className="font-mono text-base font-bold text-white">{mod.folder}</h3>
                  </div>
                  <p className="mt-2 font-mono text-[11px] text-blue-300">{mod.stack}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{mod.description}</p>
                </div>

                <div className="mt-5 border-t border-slate-800/80 pt-3">
                  <a
                    href={`${LINKS.githubRepo}/tree/main/${mod.folder.replace('/', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    <span>Browse {mod.folder}</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Public / Private Isolation Assurance */}
          <div className="mt-8 rounded-2xl border border-slate-800/90 bg-obsidian-900/50 p-5">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                <strong className="font-semibold text-white">Strict Security Separation:</strong>{' '}
                This public website is a standalone static informational portal. It has zero
                connection to any live organizer dashboard, local FastAPI control service, SQLite
                attendance database, facial embeddings, or student records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
