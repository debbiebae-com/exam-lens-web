import React from 'react';
import {
  Smartphone,
  MonitorCheck,
  DatabaseZap,
  AlertTriangle,
  Target,
  CheckCircle2,
  Scale,
} from 'lucide-react';

export const AboutAndObjectivesSection: React.FC = () => {
  return (
    <>
      {/* SECTION 2: ABOUT EXAMLENS */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative border-t border-slate-800/70 bg-obsidian-900/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              About ExamLens
            </p>
            <h2
              id="about-heading"
              className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Built for practical, offline-capable examination hall attendance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              ExamLens combines guided student enrollment, local computer-vision facial matching,
              and an Electron-wrapped organizer console into one cohesive workflow. Instead of
              relying on fragile hall internet or cloud GPU inference, ExamLens computes facial
              embeddings on the organizer&apos;s PC and records attendance directly to a local
              SQLite database.
            </p>
          </div>

          {/* 3 Architectural Pillars */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-obsidian-950/80 p-6 transition-colors hover:border-cyan-500/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                Flexible Hybrid Enrollment
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Candidates can enroll ahead of time from mobile browsers using guided straight,
                left, and right head-pose prompts staged via a Supabase inbox—or enroll directly
                on-site through the desktop OpenCV guided capture utility.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-obsidian-950/80 p-6 transition-colors hover:border-blue-500/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-300">
                <DatabaseZap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                Local Vision &amp; Eligibility Engine
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Uses InsightFace (<code className="font-mono text-xs text-cyan-200">buffalo_l</code>{' '}
                / SCRFD + ArcFace) on ONNX Runtime to match camera tracks against enrolled samples,
                checking exam registration and configured student standing before logging attendance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-obsidian-950/80 p-6 transition-colors hover:border-violet-500/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-400/30 text-violet-300">
                <MonitorCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                Dedicated Organizer Workspace
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                An Electron desktop application manages the local FastAPI and Next.js services,
                presenting invigilators with live recognition activity, attendance counts, candidate
                lookup, and CSV export without command-line complexity.
              </p>
            </div>
          </div>

          {/* Transparent Scope & Research Licensing Notice */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-800/90 bg-slate-900/45 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3.5">
              <Scale className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
              <div className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                <strong className="font-semibold text-white">
                  Assistive Verification &amp; Research Scope:
                </strong>{' '}
                ExamLens is designed to assist human invigilators rather than provide guaranteed
                biometric certainty or certified anti-spoofing. Pretrained InsightFace model weights
                are subject to non-commercial academic research terms.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM STATEMENT & PROJECT OBJECTIVES */}
      <section
        id="objectives"
        aria-labelledby="objectives-heading"
        className="relative border-t border-slate-800/70 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-400">
              Context &amp; Goals
            </p>
            <h2
              id="objectives-heading"
              className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Problem statement &amp; project objectives
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Traditional paper attendance sheets and manual ID card checks create entry bottlenecks
              just when examination halls are under peak time pressure.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Problem Statement Card */}
            <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-b from-obsidian-900 to-obsidian-950 p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-200">
                <AlertTriangle className="h-4 w-4 text-rose-400" aria-hidden="true" />
                <span>The Operational Challenge</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                Why manual examination attendance struggles at scale
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <strong className="text-slate-100">Hall entry queues &amp; delays:</strong>{' '}
                    Passing around paper sign-in sheets or inspecting printed rosters line-by-line
                    consumes valuable examination time and disrupts seated candidates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <strong className="text-slate-100">Fragmented eligibility checks:</strong>{' '}
                    Invigilators rarely have instant visibility into whether an arriving student is
                    registered for that specific paper or cleared to sit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <strong className="text-slate-100">Transcription &amp; reconciliation overhead:</strong>{' '}
                    Handwritten index numbers and signatures must be manually digitized after the
                    session, introducing clerical errors and delayed reporting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span>
                    <strong className="text-slate-100">Unreliable venue connectivity:</strong>{' '}
                    Purely cloud-hosted biometric tools stall when lecture theatres have weak Wi-Fi
                    or constrained server memory budgets.
                  </span>
                </li>
              </ul>
            </div>

            {/* Project Objectives Card */}
            <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-obsidian-900 to-obsidian-950 p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                <Target className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <span>Project Objectives</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                What ExamLens is engineered to deliver
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-100">Guided, high-usability enrollment:</strong>{' '}
                    Collect multi-angle facial samples via a guided phone web interface or local
                    desktop prompt with clear pose feedback.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-100">Assistive computer-vision matching:</strong>{' '}
                    Leverage SCRFD detection, ByteTrack tracking, and InsightFace embeddings to
                    match arriving candidates quickly and prevent duplicate attendance entries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-100">Offline-first local persistence:</strong>{' '}
                    Keep embeddings, registration checks, and attendance logs in a local SQLite
                    database so live hall sessions run without internet dependency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>
                    <strong className="text-slate-100">Accessible organizer tooling:</strong>{' '}
                    Provide a clean Electron + Next.js dashboard for monitoring live recognition
                    events, managing sync/capture tasks, and exporting CSV attendance records.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
