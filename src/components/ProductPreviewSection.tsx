import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  ScanLine,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileDown,
  Search,
  Info,
} from 'lucide-react';
import { FICTIONAL_ATTENDANCE_ROWS } from '../data/siteContent';

type PreviewTab = 'dashboard' | 'enrollment' | 'scanner';

export const ProductPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTab>('dashboard');

  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="relative border-t border-slate-800/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Interactive Product Preview
            </p>
            <h2
              id="preview-heading"
              className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Explore the ExamLens interfaces
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Inspect illustrative UI mockups modeled after ExamLens&apos;s three core workspaces:
              the Electron/Next.js Organizer Dashboard, the Guided Mobile Enrollment flow, and the
              Local OpenCV Vision Scanner.
            </p>
          </div>

          {/* Fictional Data Disclosure Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-xl border border-amber-400/30 bg-amber-500/10 px-3.5 py-2 text-xs text-amber-200 lg:self-auto">
            <Info className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
            <span>Illustrative UI mockup using 100% fictional sample records</span>
          </div>
        </div>

        {/* Accessible Tab Controls */}
        <div
          role="tablist"
          aria-label="ExamLens interface previews"
          className="mt-8 inline-flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-obsidian-900/90 p-1.5"
        >
          <button
            type="button"
            role="tab"
            id="tab-dashboard"
            aria-selected={activeTab === 'dashboard'}
            aria-controls="panel-dashboard"
            onClick={() => setActiveTab('dashboard')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-violet-500/20 text-white border border-cyan-400/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>Organizer Dashboard (Electron / Next.js)</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-enrollment"
            aria-selected={activeTab === 'enrollment'}
            aria-controls="panel-enrollment"
            onClick={() => setActiveTab('enrollment')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'enrollment'
                ? 'bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-violet-500/20 text-white border border-cyan-400/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="h-4 w-4 text-blue-300" aria-hidden="true" />
            <span>Guided Mobile Enrollment</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-scanner"
            aria-selected={activeTab === 'scanner'}
            aria-controls="panel-scanner"
            onClick={() => setActiveTab('scanner')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'scanner'
                ? 'bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-violet-500/20 text-white border border-cyan-400/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ScanLine className="h-4 w-4 text-violet-300" aria-hidden="true" />
            <span>Local Hall Recognition View</span>
          </button>
        </div>

        {/* Preview Stage */}
        <div className="mt-6 rounded-2xl border border-slate-700/80 bg-obsidian-900/90 p-4 shadow-2xl sm:p-6">
          {/* PANEL 1: ORGANIZER DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div
              role="tabpanel"
              id="panel-dashboard"
              aria-labelledby="tab-dashboard"
              className="space-y-5"
            >
              {/* Mock Window Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-300">
                    ExamLens Desktop — Organizer Attendance Console (Illustrative Sample)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Session: CS101 (Sample)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-200">
                    <FileDown className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                    Export CSV
                  </span>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-obsidian-950 p-4">
                  <p className="text-xs font-medium text-slate-400">Marked Present (Saved)</p>
                  <p className="mt-1.5 font-mono text-2xl font-bold text-white">18</p>
                  <p className="mt-1 text-xs text-emerald-400">Out of 20 simulated registrants</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-obsidian-950 p-4">
                  <p className="text-xs font-medium text-slate-400">Identified This Session</p>
                  <p className="mt-1.5 font-mono text-2xl font-bold text-cyan-300">19</p>
                  <p className="mt-1 text-xs text-slate-400">Distinct confirmed tracks</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-obsidian-950 p-4">
                  <p className="text-xs font-medium text-slate-400">Unidentified Tracks Now</p>
                  <p className="mt-1.5 font-mono text-2xl font-bold text-blue-300">0</p>
                  <p className="mt-1 text-xs text-slate-400">Post grace-period camera tracks</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-obsidian-950 p-4">
                  <p className="text-xs font-medium text-slate-400">Eligibility Holds</p>
                  <p className="mt-1.5 font-mono text-2xl font-bold text-amber-300">1</p>
                  <p className="mt-1 text-xs text-slate-400">Flagged for invigilator review</p>
                </div>
              </div>

              {/* Fictional Roster Table */}
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-obsidian-950">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 px-4 py-3">
                  <span className="text-sm font-semibold text-white">
                    Simulated Examination Roster &amp; Live Log
                  </span>
                  <div className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-xs text-slate-400">
                    <Search className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Filter by index or fictional candidate name...</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-slate-800/90 bg-slate-900/60 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      <tr>
                        <th scope="col" className="px-4 py-3">Index No.</th>
                        <th scope="col" className="px-4 py-3">Candidate (Fictional)</th>
                        <th scope="col" className="px-4 py-3">Programme</th>
                        <th scope="col" className="px-4 py-3">Status</th>
                        <th scope="col" className="px-4 py-3">Recorded (GMT)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70">
                      {FICTIONAL_ATTENDANCE_ROWS.map((row) => (
                        <tr key={row.studentNo} className="hover:bg-slate-900/40">
                          <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-cyan-300">
                            {row.studentNo}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-medium text-white">
                            {row.name}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                            {row.programme}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3">
                            {row.status === 'Marked Present' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                                {row.status}
                              </span>
                            )}
                            {row.status === 'Eligibility Hold' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                                {row.status}
                              </span>
                            )}
                            {row.status === 'Awaiting Scan' && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-slate-700/40 border border-slate-600/40 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                {row.status}
                              </span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-400">
                            {row.timestamp}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PANEL 2: GUIDED MOBILE ENROLLMENT */}
          {activeTab === 'enrollment' && (
            <div
              role="tabpanel"
              id="panel-enrollment"
              aria-labelledby="tab-enrollment"
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              {/* Mobile Device Frame Mockup */}
              <div className="mx-auto w-full max-w-sm lg:col-span-5">
                <div className="rounded-[2rem] border-2 border-slate-700 bg-obsidian-950 p-4 shadow-xl">
                  <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-800" />
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>ExamLens Web Enroll</span>
                    <span className="text-cyan-300">Step 2 of 3</span>
                  </div>

                  {/* Pose Progress Pills */}
                  <div className="mt-3 grid grid-cols-3 gap-1.5 text-center font-mono text-[11px]">
                    <div className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 py-1 text-emerald-300">
                      1. Straight ✓
                    </div>
                    <div className="rounded-lg bg-cyan-500/20 border border-cyan-400/50 py-1 font-bold text-cyan-200">
                      2. Turn Left
                    </div>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 py-1 text-slate-500">
                      3. Turn Right
                    </div>
                  </div>

                  {/* Camera Guidance Ring */}
                  <div className="my-5 flex flex-col items-center rounded-2xl border border-slate-800 bg-obsidian-900/90 p-6">
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-cyan-400/70">
                      <svg viewBox="0 0 100 100" className="h-24 w-24 text-cyan-300" aria-hidden="true">
                        <circle cx="46" cy="42" r="20" fill="none" stroke="currentColor" strokeWidth="2.2" />
                        <circle cx="39" cy="39" r="2" fill="#22D3EE" />
                        <circle cx="51" cy="39" r="2" fill="#22D3EE" />
                        <path d="M40 49 Q45 52 50 49" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                        <path d="M26 82 C30 68, 38 64, 48 64 C58 64, 66 68, 70 82" fill="none" stroke="#A78BFA" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="mt-4 text-center text-sm font-bold text-white">
                      Gently turn your head to your LEFT
                    </p>
                    <p className="mt-1 text-center font-mono text-xs text-cyan-300">
                      Holding pose... 2 / 3 frames captured
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-300">
                    <div className="flex justify-between font-mono">
                      <span className="text-slate-400">Candidate (Sample):</span>
                      <span className="text-white">Ama Mensah</span>
                    </div>
                    <div className="mt-1 flex justify-between font-mono">
                      <span className="text-slate-400">Index Format:</span>
                      <span className="text-cyan-300">UGS-26-003</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="space-y-5 lg:col-span-7">
                <span className="inline-block rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300">
                  React + Vite + MediaPipe Web Worker
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Zero-button guided capture right from a student&apos;s phone
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Candidates enter their full name and index number, then follow interactive mirror
                  prompts—looking straight ahead, turning left, and turning right. Frames are
                  collected automatically when head-yaw angles stabilize inside the target zone.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span>
                      Runs pose landmark checks in a dedicated browser Web Worker to keep the live
                      camera preview responsive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span>
                      Supports asynchronous submission to an insert-only Supabase staging inbox so
                      students can enroll even while the organizer&apos;s PC is offline.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span>
                      Full-precision <code className="font-mono text-xs text-cyan-200">buffalo_l</code>{' '}
                      embeddings are computed on the organizer PC during sync so enrollment and hall
                      attendance share identical vector representations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* PANEL 3: LOCAL OPENCV SCANNER */}
          {activeTab === 'scanner' && (
            <div
              role="tabpanel"
              id="panel-scanner"
              aria-labelledby="tab-scanner"
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-800 bg-obsidian-950 p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs text-slate-400">
                    <span>OpenCV Native Window • app.vision.attend</span>
                    <span className="text-emerald-300">28.4 FPS • CPU (ONNX)</span>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {/* Track 1: Confirmed */}
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/15 p-4">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-emerald-300">TRACK #12 • CONFIRMED</span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-200">
                          PRESENT
                        </span>
                      </div>
                      <div className="my-4 flex h-24 items-center justify-center rounded-lg border border-emerald-500/30 bg-obsidian-900/80">
                        <span className="font-mono text-xs text-emerald-200">
                          [Synthetic Face BBox #12]
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white">Esi Owusu (Sample)</p>
                      <p className="font-mono text-xs text-slate-400">
                        UGS-26-002 • Eligible • Saved to SQLite
                      </p>
                    </div>

                    {/* Track 2: Eligibility Refusal Example */}
                    <div className="rounded-xl border border-amber-500/40 bg-amber-950/15 p-4">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-amber-300">TRACK #14 • IDENTIFIED</span>
                        <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-200">
                          HOLD
                        </span>
                      </div>
                      <div className="my-4 flex h-24 items-center justify-center rounded-lg border border-amber-500/30 bg-obsidian-900/80">
                        <span className="font-mono text-xs text-amber-200">
                          [Synthetic Face BBox #14]
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white">Abena Asante (Sample)</p>
                      <p className="font-mono text-xs text-slate-400">
                        UGS-26-013 • Check Registration / Clearance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 lg:col-span-5">
                <span className="inline-block rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-300">
                  SCRFD + ByteTrack + ArcFace
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Real-time multi-person tracking &amp; rule enforcement
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  During hall entry, ExamLens tracks faces across consecutive video frames via
                  ByteTrack, matches embeddings against the local gallery, and separates identity
                  recognition from attendance eligibility writes.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                    <span>Works with built-in webcams, USB cameras, or DroidCam feeds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                    <span>Prevents duplicate attendance rows when a candidate lingers in frame.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                    <span>Distinguishes confirmed matches from eligibility holds in real time.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
