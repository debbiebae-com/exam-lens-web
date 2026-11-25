import React, { useState, useEffect } from 'react';
import { Download, Github, Menu, X, ScanFace } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '../data/siteContent';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/25'
          : 'bg-obsidian-950/55 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-400 focus:text-slate-950 focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-slate-100 focus:outline-none"
          aria-label="ExamLens home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-violet-500/25 border border-cyan-400/35 shadow-inner">
            <ScanFace className="h-5 w-5 text-cyan-300 transition-transform duration-200 group-hover:scale-105" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">
              Exam<span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Lens</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-0.5">
              AI Attendance
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/70 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800/90 hover:text-white"
          >
            <Github className="h-4 w-4 text-slate-300" aria-hidden="true" />
            <span>View Source Code</span>
          </a>
          <a
            href={LINKS.githubReleases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            <Download className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            <span>Download ExamLens</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-200 hover:border-slate-700 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-800/80 bg-obsidian-950/95 px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={LINKS.githubReleases}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              <Download className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              <span>Download ExamLens</span>
            </a>
            <a
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>View Source Code</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
