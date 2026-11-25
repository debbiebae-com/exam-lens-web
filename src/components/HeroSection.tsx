import React from 'react';
import {
  Download,
  Github,
  ShieldCheck,
  Database,
  Cpu,
  Monitor,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LINKS } from '../data/siteContent';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      {/* Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/6 h-[26rem] w-[26rem] rounded-full bg-violet-600/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Product Identity & CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
              <span>Computer Vision &amp; Local Desktop Attendance System</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="block">ExamLens</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Smarter Examination Attendance. Powered by AI.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              ExamLens is an AI-powered examination attendance management system that uses computer
              vision and InsightFace facial matching technology to assist with student identity
              verification and examination attendance recording—streamlining check-ins, reducing
              manual administrative overhead, and giving organizers clear real-time oversight.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={LINKS.githubReleases}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110"
              >
                <Download className="h-5 w-5 stroke-[2.25] transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                <span>Download ExamLens</span>
              </a>

              <a
                href={LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-semibold text-slate-100 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-slate-800/90"
              >
                <Github className="h-5 w-5 text-slate-300" aria-hidden="true" />
                <span>View Source Code</span>
              </a>
            </div>

            {/* Honest Release Status Note */}
            <div className="mt-4 inline-flex items-start gap-2 rounded-lg border border-slate-800/90 bg-slate-900/55 px-3.5 py-2 text-xs text-slate-400">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-slate-200">Release status:</strong> Official
                packaged binary releases on GitHub Releases are forthcoming. Source setup and local
                launcher scripts are available directly in the repository today.
              </span>
            </div>

            {/* Key Architectural Highlights */}
            <dl className="mt-9 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-7 sm:grid-cols-4">
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Cpu className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                  Vision Engine
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-100">InsightFace + SCRFD</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Database className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                  Attendance Ledger
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-100">Offline Local SQLite</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Monitor className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
                  Organizer App
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-100">Electron + Next.js</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  Remote Intake
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-100">Supabase Sync Inbox</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Illustrative ExamLens Vision Console Mockup */}
          <div className="lg:col-span-5">
            <div
              role="img"
              aria-label="Illustrative mockup of ExamLens facial matching and attendance verification console using fictional sample data"
              className="relative rounded-2xl border border-slate-700/70 bg-gradient-to-b from-obsidian-850/95 to-obsidian-950/95 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-5"
            >
              {/* Window Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-300">
                    ExamLens Desktop • Session Feed
                  </span>
                </div>
                <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                  Illustrative Sample
                </span>
              </div>

              {/* Simulated Vision Viewport */}
              <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-800 bg-obsidian-950 p-5">
                {/* Scan Sweep Line */}
                <div
                  aria-hidden="true"
                  className="animate-scan-sweep pointer-events-none absolute inset-x-4 top-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    SCRFD + ByteTrack #04
                  </span>
                  <span>EXAM: CS101 • LOCAL DB</span>
                </div>

                {/* Stylized Synthetic Geometric Face Wireframe */}
                <div className="my-5 flex flex-col items-center justify-center py-3">
                  <div className="relative flex h-36 w-36 items-center justify-center">
                    {/* Corner brackets */}
                    <span className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
                    <span className="absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
                    <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-violet-400 rounded-bl" />
                    <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-violet-400 rounded-br" />

                    <svg
                      viewBox="0 0 120 120"
                      className="h-28 w-28 text-cyan-300/90"
                      aria-hidden="true"
                    >
                      <circle
                        cx="60"
                        cy="46"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="52" cy="43" r="2.2" fill="#22D3EE" />
                      <circle cx="68" cy="43" r="2.2" fill="#22D3EE" />
                      <path
                        d="M54 53 Q60 57 66 53"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 95 C37 78, 47 72, 60 72 C73 72, 83 78, 88 95"
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Embedding mesh lines */}
                      <line x1="52" y1="43" x2="68" y2="43" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1" />
                      <line x1="52" y1="43" x2="60" y2="50" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1" />
                      <line x1="68" y1="43" x2="60" y2="50" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-md bg-cyan-500/15 border border-cyan-400/30 px-2.5 py-0.5 font-mono text-[11px] text-cyan-200">
                      ArcFace Embedding Matched
                    </span>
                    <span className="rounded-md bg-violet-500/15 border border-violet-400/30 px-2.5 py-0.5 font-mono text-[11px] text-violet-200">
                      3 Enrolled Poses
                    </span>
                  </div>
                </div>

                {/* Candidate Match Banner (Fictional) */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/25 p-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                        Candidate Assisted Match • Fictional Demo
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-white">
                        Kofi Boateng (Sample Record)
                      </p>
                      <p className="font-mono text-xs text-slate-300">
                        Index: UGS-26-001 • Dept: Computer Science &amp; IT
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Session Metrics Footer */}
              <div className="mt-3.5 grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 px-3 py-2.5">
                  <p className="text-[11px] text-slate-400">Marked Present</p>
                  <p className="mt-0.5 font-mono text-base font-bold text-white">18 / 20</p>
                </div>
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 px-3 py-2.5">
                  <p className="text-[11px] text-slate-400">Eligibility Check</p>
                  <p className="mt-0.5 font-mono text-base font-bold text-cyan-300">Active</p>
                </div>
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 px-3 py-2.5">
                  <p className="text-[11px] text-slate-400">Network Mode</p>
                  <p className="mt-0.5 font-mono text-base font-bold text-violet-300">Offline Local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
