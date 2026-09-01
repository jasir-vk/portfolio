// ─────────────────────────────────────────────────────────────
// All personal content lives in this one file.
// Edit anything here — no component changes needed.
// Items marked TODO still need your real links.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jasir VK',
  firstName: 'Jasir',
  role: 'Software Developer',
  // Roles cycled by the hero typing animation
  rotatingRoles: ['Software Developer', 'React Developer', 'Node.js Developer', 'Full-Stack Developer'],
  tagline: '2+ years turning HR workflows and everyday problems into fast, reliable web apps.',
  location: 'India',
  email: 'jasivkmohammed@gmail.com',
  github: 'https://github.com/jasir-vk',
  linkedin: 'https://www.linkedin.com/in/jasirvk',
  resumeUrl: '', // TODO: optional — link to a hosted resume PDF to show a "Resume" button
  about: [
    `I'm a software developer with 2+ years of professional experience, most of it spent deep inside
     HRMS platforms — the systems that mark attendance, run payroll and route leave requests through
     approval chains. That work taught me to care about correctness: when your code pays people's
     salaries, "mostly works" is not an option.`,
    `Outside work I like building products end to end — a dating app, a barber shop booking system,
     a credit reminder tool — owning everything from the database schema to the last hover state.`,
  ],
  education: {
    degree: 'BCA — Bachelor of Computer Applications',
    period: '2019 – 2022',
    extra: 'Completed a Python programming course',
  },
} as const

export const skills = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Python', icon: 'python' },
  { name: 'HTML & CSS', icon: 'html' },
  { name: 'Git', icon: 'git' },
] as const

export const experience = [
  {
    title: 'Software Developer',
    org: 'HRMS Platform',
    period: '2023 — Present',
    summary:
      'Core developer on a human resource management system used daily by HR teams and employees.',
    highlights: [
      {
        name: 'Attendance management',
        detail: 'Daily check-in/check-out tracking with shift rules, late marks and monthly attendance summaries.',
      },
      {
        name: 'Payroll processing',
        detail: 'Salary computation from attendance and leave data — earnings, deductions and payslip generation.',
      },
      {
        name: 'Leave requests with approval workflow',
        detail: 'Multi-step workflow where requests move from employee to manager to HR, with balances updated automatically.',
      },
    ],
    // Rendered as the animated workflow strip in the Experience section
    workflow: ['Employee request', 'Manager review', 'HR approval', 'Payroll sync'],
  },
] as const

export const achievements = [
  {
    icon: 'architecture',
    title: 'HRMS Module Architecture',
    detail:
      'Architected core HRMS modules — payroll processing, attendance tracking, and leave request and attendance request approval workflows — and configured an AI chat assistant using the OpenAI API and Vercel AI SDK.',
  },
  {
    icon: 'google',
    title: 'Google Authentication & Integrations',
    detail:
      'Implemented Google OAuth authentication and integrated Google Meet scheduling and Google Sheets data export into product workflows using Google APIs.',
  },
  {
    icon: 'commerce',
    title: 'B2B E-commerce Application',
    detail:
      'Developing a B2B e-commerce platform with separate admin and client applications — business buyers browse catalogs and place bulk purchase orders through the client mobile app, while administrators manage products, orders and buyers from the admin panel.',
  },
  {
    icon: 'mobile',
    title: 'Mobile App Store Releases',
    detail:
      'Published mobile applications to the Google Play Store via Google Play Console and to the Apple App Store for iOS, managing listings, builds and release reviews.',
  },
] as const

export const projects = [
  {
    visual: 'dating', // picks the animated scene on the card: dating | barber | credit | shop
    title: 'Dating App',
    description:
      'A MERN dating app — swipe-style discovery with mutual matching, real-time chat between matches over Socket.io, Google sign-in and photo uploads to Cloudinary.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    stack: [
      ['Frontend', 'React + Bootstrap'],
      ['Real-time Chat', 'Socket.io'],
      ['Backend', 'Node.js + Express'],
      ['Database', 'MongoDB (Mongoose)'],
      ['Auth', 'JWT + Google OAuth (Passport)'],
      ['Media Uploads', 'Cloudinary + Multer'],
    ],
    link: 'https://github.com/jasir-vk/MERN-dating-App',
  },
  {
    visual: 'barber',
    title: 'BarberBook — Shop Booking',
    description:
      'Barber shop booking platform — customers book through a 4-step wizard, watch live queue status in real time and pay deposits with Stripe; barbers manage services, schedules and walk-in queues from their own dashboard.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
    // Detailed layer-by-layer stack, shown in the expandable "Full tech stack" on the card
    stack: [
      ['Framework', 'Next.js 16 (App Router)'],
      ['Language', 'TypeScript'],
      ['UI Components', 'shadcn/ui + Radix'],
      ['Styling', 'Tailwind CSS v4'],
      ['State', 'Zustand'],
      ['Database & Auth', 'Supabase (PostgreSQL)'],
      ['Real-time', 'Supabase Realtime'],
      ['Payments', 'Stripe'],
      ['Forms', 'React Hook Form + Zod'],
      ['Testing', 'Playwright (E2E)'],
    ],
    link: 'https://github.com/jasir-vk/Barber-Shop-Booking-System', // note: repo is currently private
  },
  {
    visual: 'shop',
    title: 'MERN E-Commerce',
    description:
      'Full-stack MERN e-commerce web app with a customer storefront and a separate admin panel built with Material UI for managing products, orders and users.',
    tech: ['React', 'Material UI', 'Express', 'MongoDB', 'JWT'],
    stack: [
      ['Storefront', 'React + React Router'],
      ['Admin Panel', 'React + Material UI'],
      ['Backend', 'Node.js + Express'],
      ['Database', 'MongoDB (Mongoose)'],
      ['Auth', 'JWT'],
      ['File Uploads', 'Multer'],
    ],
    link: 'https://github.com/jasir-vk/MERN-E-Commerce',
  },
  {
    visual: 'credit',
    title: 'Credit Reminder',
    description:
      'A personal lending tracker for "pay later" dealings — record who took cash or goods from you, attach GPay/bank receipts, set a repayment date, and a daily scheduler automatically reminds them by email, SMS or WhatsApp when payment is due.',
    tech: ['React', 'TypeScript', 'Bun', 'Hono', 'Supabase'],
    stack: [
      ['Frontend', 'React + Vite + Tailwind (shadcn/ui)'],
      ['Data Fetching', 'TanStack Query'],
      ['Backend', 'Bun + Hono (TypeScript)'],
      ['Database & Auth', 'Supabase (PostgreSQL)'],
      ['Reminders', 'Resend (email) + Twilio (SMS/WhatsApp)'],
      ['Scheduling', 'node-cron daily reminder job'],
      ['Receipts', 'Supabase Storage (signed URLs)'],
    ],
    link: 'https://github.com/jasir-vk/credit-remainer', // note: repo is currently private
  },
] as const
