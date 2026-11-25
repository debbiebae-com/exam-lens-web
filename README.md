# ExamLens — Public Product Website

**Smarter Examination Attendance. Powered by AI.**

This repository contains the standalone static public landing page for **ExamLens**, an AI-powered examination attendance management system using computer vision and InsightFace facial matching to assist with student identity verification and local examination attendance recording.

## Official ExamLens Software Links

- **System Source Repository:** [https://github.com/debbiebae-com/AI-examination-attendance-system](https://github.com/debbiebae-com/AI-examination-attendance-system)
- **Official Releases Page:** [https://github.com/debbiebae-com/AI-examination-attendance-system/releases](https://github.com/debbiebae-com/AI-examination-attendance-system/releases)

## Website Stack

- **React 18** + **TypeScript**
- **Vite 6**
- **Tailwind CSS**
- **Vitest** + **Testing Library**

## Local Development

```bash
npm install
npm run dev
```

## Verification & Production Build

```bash
npm run typecheck
npm test
npm run build
```

## Security & Architecture Separation

This website is a purely static public informational landing page. It has **no connection** to any private organizer dashboard, FastAPI backend, local control endpoints, Supabase credentials, SQLite databases, biometric embeddings, or real student/attendance records. All UI mockups use clearly labeled fictional sample records.
