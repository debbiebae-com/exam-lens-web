export const LINKS = {
  githubRepo: 'https://github.com/debbiebae-com/AI-examination-attendance-system',
  githubReleases: 'https://github.com/debbiebae-com/AI-examination-attendance-system/releases',
  websiteRepo: 'https://github.com/debbiebae-com/exam-lens-web',
} as const;

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#workflow' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Preview', href: '#preview' },
  { label: 'Download', href: '#download' },
  { label: 'Source', href: '#source' },
] as const;

export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  detail: string;
  accent: 'cyan' | 'blue' | 'violet';
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'guided-enrollment',
    badge: 'Enrollment',
    title: 'Guided Student Registration',
    description:
      'Mobile-first web enrollment and local desktop capture guide candidates through structured straight, left-turn, and right-turn head poses with real-time framing feedback.',
    detail: 'Supports mobile browser intake (MediaPipe pose checks) & local OpenCV capture',
    accent: 'cyan',
  },
  {
    id: 'embedding-generation',
    badge: 'Biometric Pipeline',
    title: 'Facial Detection & Embedding Generation',
    description:
      'Detects single usable faces per frame using SCRFD and computes high-dimensional ArcFace vector embeddings so enrollment and attendance share a consistent model space.',
    detail: 'Powered by InsightFace buffalo_l / buffalo_s packs on ONNX Runtime',
    accent: 'blue',
  },
  {
    id: 'insightface-matching',
    badge: 'Recognition',
    title: 'InsightFace Facial Matching',
    description:
      'Compares live camera tracks from ByteTrack against the enrolled local gallery using configurable cosine similarity thresholds and separation margins.',
    detail: 'Multi-frame track confirmation before proposing an identity match',
    accent: 'violet',
  },
  {
    id: 'exam-management',
    badge: 'Eligibility',
    title: 'Exam & Registration Management',
    description:
      'Associates students with specific examination codes and evaluates configurable eligibility rules—such as course registration, fee clearance, and active standing—prior to marking attendance.',
    detail: 'CLI & API registration utilities plus isolated demo session mode',
    accent: 'cyan',
  },
  {
    id: 'local-attendance-db',
    badge: 'Offline Storage',
    title: 'Local SQLite Attendance Recording',
    description:
      'Persists student rosters, face embeddings, registrations, and timestamped attendance records in a local SQLite database via SQLAlchemy, preventing duplicate check-ins without needing hall Wi-Fi.',
    detail: 'Zero cloud dependency during live examination hall sessions',
    accent: 'blue',
  },
  {
    id: 'organizer-dashboard',
    badge: 'Monitoring',
    title: 'Live Organizer Dashboard',
    description:
      'A dedicated Next.js interface polls local session feeds to surface identified counts, active unknown tracks, candidate search, eligibility status, and one-click CSV attendance exports.',
    detail: 'Includes safe preview fixtures, session controls, and audit-friendly logs',
    accent: 'violet',
  },
  {
    id: 'electron-desktop',
    badge: 'Desktop Shell',
    title: 'Managed Electron Desktop Application',
    description:
      'Wraps the organizer workspace in a dedicated Windows Electron window that orchestrates local FastAPI and Next.js background services with cooperative startup and shutdown.',
    detail: 'Works alongside laptop webcams or DroidCam phone-camera feeds',
    accent: 'cyan',
  },
  {
    id: 'supabase-sync',
    badge: 'Hybrid Intake',
    title: 'Supabase Enrollment Synchronization',
    description:
      'Optional insert-only cloud inbox allows students to submit enrollment frames asynchronously from their phones; organizers later pull, embed locally on PC, and purge remote photos.',
    detail: 'Row-level insert-only intake with local embedding computation',
    accent: 'blue',
  },
];

export interface WorkflowStep {
  step: string;
  phase: string;
  title: string;
  summary: string;
  technicalNote: string;
  tag: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    phase: 'Intake',
    title: 'Guided Multi-Pose Enrollment',
    summary:
      'Students enter their name and index number on the mobile enrollment web app or desktop capture utility, then complete guided straight, left, and right head-turn prompts.',
    technicalNote: 'MediaPipe Web Worker pose guidance or local OpenCV capture',
    tag: 'Phone Web / Desktop',
  },
  {
    step: '02',
    phase: 'Sync & Embed',
    title: 'Local Sync & Embedding Extraction',
    summary:
      'Pending remote submissions are pulled from the optional Supabase inbox (or captured directly on PC). InsightFace detects faces, generates ArcFace embeddings, stores them in SQLite, and clears temporary cloud photos.',
    technicalNote: 'FastAPI + SQLAlchemy + InsightFace (buffalo_l) + ONNX Runtime',
    tag: 'Organizer PC',
  },
  {
    step: '03',
    phase: 'Verification',
    title: 'Offline Hall Entry Matching',
    summary:
      'At the exam venue, OpenCV streams frames from a webcam or DroidCam feed. SCRFD and ByteTrack follow entrants while the matcher checks gallery similarity and exam eligibility rules.',
    technicalNote: 'Threshold + margin cosine matching with duplicate-entry prevention',
    tag: 'Offline Vision Loop',
  },
  {
    step: '04',
    phase: 'Oversight',
    title: 'Live Dashboard & CSV Reporting',
    summary:
      'Inside the Electron desktop window, the Next.js organizer dashboard displays real-time recognition events, confirmed attendance totals, candidate lookup, and exportable CSV sheets.',
    technicalNote: 'Electron shell + Next.js App Router + SQLite attendance ledger',
    tag: 'Organizer Console',
  },
];

export interface TechItem {
  name: string;
  category: 'AI & Vision' | 'Backend & Data' | 'Frontend & Desktop';
  role: string;
  detail: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: 'Python',
    category: 'Backend & Data',
    role: 'Core Systems & Vision Pipeline',
    detail: 'Python 3.12 runtime powering API services, CLI workflows, sync tasks, and computer-vision workers.',
  },
  {
    name: 'FastAPI',
    category: 'Backend & Data',
    role: 'Local REST API & Enrollment Service',
    detail: 'Typed REST endpoints for enrollment, eligibility checks, live session snapshots, and local task control.',
  },
  {
    name: 'InsightFace',
    category: 'AI & Vision',
    role: 'Detection & ArcFace Embeddings',
    detail: 'Provides SCRFD face detection and buffalo_l / buffalo_s recognition embeddings (non-commercial research weights).',
  },
  {
    name: 'OpenCV',
    category: 'AI & Vision',
    role: 'Camera Capture & Frame Processing',
    detail: 'Handles low-latency webcam/DroidCam frame reading, guided capture overlays, and live scan rendering.',
  },
  {
    name: 'ONNX Runtime',
    category: 'AI & Vision',
    role: 'Cross-Platform Model Inference',
    detail: 'Executes neural network inference locally on CPU with configurable thread management.',
  },
  {
    name: 'SQLite',
    category: 'Backend & Data',
    role: 'Offline Local Attendance Store',
    detail: 'Zero-configuration local relational storage via SQLAlchemy for rosters, face samples, and attendance records.',
  },
  {
    name: 'Supabase',
    category: 'Backend & Data',
    role: 'Hybrid Enrollment Inbox',
    detail: 'Optional insert-only staging inbox for asynchronous mobile photo submissions prior to local PC sync.',
  },
  {
    name: 'React',
    category: 'Frontend & Desktop',
    role: 'Interactive User Interfaces',
    detail: 'Component architecture powering the mobile-first guided student enrollment web application.',
  },
  {
    name: 'Next.js',
    category: 'Frontend & Desktop',
    role: 'Live Organizer Dashboard',
    detail: 'App Router dashboard displaying real-time attendance metrics, activity streams, search, and CSV export.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend & Desktop',
    role: 'End-to-End UI Type Safety',
    detail: 'Strict static typing across student enrollment, pose workers, and organizer dashboard modules.',
  },
  {
    name: 'Electron',
    category: 'Frontend & Desktop',
    role: 'Managed Desktop Application',
    detail: 'Dedicated Windows desktop wrapper managing local service lifecycles, native dialogs, and isolated views.',
  },
];

export interface FictionalAttendanceRow {
  studentNo: string;
  name: string;
  programme: string;
  examCode: string;
  status: 'Marked Present' | 'Eligibility Hold' | 'Awaiting Scan';
  timestamp: string;
  source: string;
}

export const FICTIONAL_ATTENDANCE_ROWS: FictionalAttendanceRow[] = [
  {
    studentNo: 'UGS-26-001',
    name: 'Kofi Boateng (Sample)',
    programme: 'BSc Computer Science • L300',
    examCode: 'CS101',
    status: 'Marked Present',
    timestamp: '08:42:14 GMT',
    source: 'Hall Cam 01',
  },
  {
    studentNo: 'UGS-26-002',
    name: 'Esi Owusu (Sample)',
    programme: 'BSc Information Tech • L300',
    examCode: 'CS101',
    status: 'Marked Present',
    timestamp: '08:42:39 GMT',
    source: 'Hall Cam 01',
  },
  {
    studentNo: 'UGS-26-004',
    name: 'Yaw Mensah (Sample)',
    programme: 'BSc Computer Science • L300',
    examCode: 'CS101',
    status: 'Marked Present',
    timestamp: '08:43:05 GMT',
    source: 'Hall Cam 01',
  },
  {
    studentNo: 'UGS-26-013',
    name: 'Abena Asante (Sample)',
    programme: 'BSc Computer Science • L300',
    examCode: 'CS101',
    status: 'Eligibility Hold',
    timestamp: '08:43:51 GMT',
    source: 'Rule Check',
  },
  {
    studentNo: 'UGS-26-009',
    name: 'Kwame Adjei (Sample)',
    programme: 'BSc Information Tech • L300',
    examCode: 'CS101',
    status: 'Awaiting Scan',
    timestamp: '—',
    source: 'Enrolled (3 poses)',
  },
];
