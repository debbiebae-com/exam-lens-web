import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from '../App';
import { LINKS, NAV_ITEMS, TECH_STACK } from '../data/siteContent';

describe('ExamLens Public Landing Page', () => {
  it('renders the brand identity, tagline, and required sections', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /ExamLens/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(/Smarter Examination Attendance\. Powered by AI\./i).length
    ).toBeGreaterThan(0);

    // Check all section anchor targets exist
    for (const item of NAV_ITEMS) {
      const id = item.href.replace('#', '');
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it('links Download ExamLens buttons directly to the official GitHub Releases page', () => {
    render(<App />);

    const downloadLinks = screen.getAllByRole('link', { name: /Download ExamLens/i });
    expect(downloadLinks.length).toBeGreaterThanOrEqual(2);

    for (const link of downloadLinks) {
      expect(link).toHaveAttribute('href', LINKS.githubReleases);
    }
  });

  it('links View Source Code buttons directly to the original GitHub repository', () => {
    render(<App />);

    const sourceLinks = screen.getAllByRole('link', { name: /View Source Code/i });
    expect(sourceLinks.length).toBeGreaterThanOrEqual(2);

    for (const link of sourceLinks) {
      expect(link).toHaveAttribute('href', LINKS.githubRepo);
    }
  });

  it('accurately discloses that packaged binary releases are forthcoming', () => {
    render(<App />);

    expect(screen.getAllByText(/forthcoming/i).length).toBeGreaterThan(0);
  });

  it('renders all 11 core technology stack items', () => {
    render(<App />);

    for (const tech of TECH_STACK) {
      expect(screen.getAllByText(tech.name).length).toBeGreaterThan(0);
    }
  });

  it('supports accessible interactive switching across product preview tabs', () => {
    render(<App />);

    const enrollTab = screen.getByRole('tab', { name: /Guided Mobile Enrollment/i });
    fireEvent.click(enrollTab);
    expect(enrollTab).toHaveAttribute('aria-selected', 'true');
    expect(
      screen.getByText(/Zero-button guided capture right from a student's phone/i)
    ).toBeInTheDocument();

    const scannerTab = screen.getByRole('tab', { name: /Local Hall Recognition View/i });
    fireEvent.click(scannerTab);
    expect(scannerTab).toHaveAttribute('aria-selected', 'true');
    expect(
      screen.getByText(/Real-time multi-person tracking & rule enforcement/i)
    ).toBeInTheDocument();
  });

  it('does not expose private control endpoints, localhost URLs, or secret keys', () => {
    const { container } = render(<App />);
    const html = container.innerHTML;

    expect(html).not.toContain('service_role');
    expect(html).not.toContain('SUPABASE_SERVICE_KEY');
    expect(html).not.toContain('control.key');
    expect(html).not.toContain('127.0.0.1:8000');
    expect(html).not.toContain('localhost:8000');
  });
});
