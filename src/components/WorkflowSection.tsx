import React from 'react';
import { ArrowRight, Smartphone, RefreshCw, Camera, FileSpreadsheet } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/siteContent';

const STEP_ICONS = [Smartphone, RefreshCw, Camera, FileSpreadsheet];

export const WorkflowSection: React.FC = () => {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-heading"
      className="relative border-t border-slate-800/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
            System Architecture &amp; Dataflow
          </p>
          <h2
            id="workflow-heading"
            className="mt-2.5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            How ExamLens works from enrollment to hall check-in
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            ExamLens separates asynchronous candidate intake from latency-sensitive hall
            verification—keeping facial embeddings and attendance records strictly on the
            organizer&apos;s machine.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-obsidian-900/75 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
              End-to-End Pipeline Overview
            </span>
            <span className="font-mono text-xs text-cyan-300">
              Hybrid Cloud Intake &rarr; Local Embedding &rarr; Offline Hall Attendance
            </span>
          </div>

          <ol className="mt-8 grid gap-6 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((item, idx) => {
              const StepIcon = STEP_ICONS[idx] ?? Camera;
              return (
                <li
                  key={item.step}
                  className="relative flex flex-col justify-between rounded-xl border border-slate-800/90 bg-obsidian-950/90 p-5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-cyan-300">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-400/30">
                          {item.step}
                        </span>
                        <span className="uppercase tracking-wider text-slate-400">{item.phase}</span>
                      </span>
                      <StepIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-3.5">
                    <span className="inline-block rounded-md bg-slate-900 border border-slate-700/80 px-2 py-0.5 font-mono text-[11px] text-blue-300">
                      {item.tag}
                    </span>
                    <p className="font-mono text-[11px] text-slate-400">{item.technicalNote}</p>
                  </div>

                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-obsidian-900 text-cyan-300 shadow"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Architectural Separation Bar */}
          <div className="mt-6 grid gap-3 rounded-xl border border-slate-800/80 bg-obsidian-950/70 p-4 text-xs text-slate-300 sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                <strong className="text-white">Mobile / Desktop Capture:</strong> Guided straight,
                left &amp; right turns ensure diverse pose samples.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
              <span>
                <strong className="text-white">Privacy-Conscious Sync:</strong> Staged cloud photos
                can be wiped automatically once synced locally.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400" />
              <span>
                <strong className="text-white">Air-Gapped Hall Operation:</strong> Recognition &amp;
                SQLite attendance run locally without venue Wi-Fi.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
