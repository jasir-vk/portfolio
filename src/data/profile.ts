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
  resumeUrl: '/Jasir_VK_Software_Developer.pdf', // served from public/; set '' to hide the Download CV buttons
  formspreeId: '', // TODO: sign up free at formspree.io, create a form, paste its ID (e.g. 'abcdwxyz') to enable the contact form
  about: [
    `I'm a full-stack developer who works deep inside
     HRMS platforms — the systems that mark attendance, run payroll and route leave requests through
     approval chains. That work taught me to care about correctness: when your code pays people's
     salaries, "mostly works" is not an option.`,
    `Outside work I like building products end to end — a dating app, a barber shop booking system,
     a credit reminder tool — owning everything from the database schema to the last hover state.`,
  ],
  education: {
    degree: 'BCA — Bachelor of Computer Applications',
    period: '2019 – 2022',
  },
  certifications: [
    { name: 'MERN Stack Development', issuer: 'LearnBuds', period: 'Sep 2024' },
    { name: 'Python Django Internship', issuer: 'One Team Solutions', period: 'Jun 2023' },
  ],
} as const

// Quick-scan credibility strip shown under the hero
export const stats = [
  { value: '2+', label: 'years experience' },
  { value: '6', label: 'projects built' },
  { value: '2', label: 'apps published to stores' },
] as const

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
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Vercel AI SDK', icon: 'vercel' },
  { name: 'Git', icon: 'git' },
] as const

export const experience = [
  {
    title: 'Full-Stack Software Developer',
    org: 'Data Nexus Labs',
    period: 'Mar 2025 — Present',
    summary:
      'Core developer on an HRMS platform used daily by HR teams and employees, plus a B2B e-commerce platform with web and mobile apps.',
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
  {
    title: 'Python Django Intern',
    org: 'One Team Solutions, Kochi',
    period: 'Jan 2022 — Dec 2023',
    summary: 'Internship focused on backend web development with Python and Django.',
    highlights: [
      {
        name: 'Django projects',
        detail: 'Built web application projects using Python and Django.',
      },
      {
        name: 'Framework fundamentals',
        detail: 'Created database models, views and templates using the Django framework.',
      },
      {
        name: 'Team workflow',
        detail: 'Learned Git, version control and team development practices.',
      },
    ],
    workflow: [],
  },
] as const

export const achievements = [
  {
    icon: 'architecture',
    title: 'Core HRMS Modules',
    detail:
      'Built core HRMS modules — payroll processing, attendance tracking, and leave request and attendance request approval workflows — and configured an AI chat assistant using the OpenAI API and Vercel AI SDK.',
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
    visual: 'barber',
    // Screenshots for the card cover + gallery popup (first = cover). Empty array falls back to the animation.
    shots: ['/shots/barber/01-dashboard.jpg', '/shots/barber/02-appointments.jpg', '/shots/barber/03-services.jpg', '/shots/barber/04-shop-page.jpg', '/shots/barber/05-my-bookings.jpg', '/shots/barber/06-register-barber.jpg'],
    private: true, // repo is private: card shows a 'code on request' note instead of a GitHub link
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
  },
  {
    visual: 'credit',
    shots: ['/shots/credit/01-dashboard.jpg', '/shots/credit/02-loans.jpg', '/shots/credit/03-loan-detail.jpg', '/shots/credit/04-reminder-settings.jpg'],
    private: true,
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
  },
  {
    visual: 'shop',
    shots: ['/shots/shop/01-product-list.jpg', '/shots/shop/02-add-product.jpg'],
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
    visual: 'dating', // picks the animated scene on the card: dating | barber | credit | shop
    shots: ['/shots/dating/01-cover.jpg', '/shots/dating/02-landing.jpg', '/shots/dating/03-home.jpg', '/shots/dating/04-chat.jpg'],
    title: 'Dating App',
    description:
      'BuddyPair — a MERN dating app with profile discovery, friend requests and matching, real-time chat between matches over Socket.io, Google sign-in and photo uploads to Cloudinary.',
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
] as const
