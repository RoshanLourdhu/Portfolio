# Roshan L. — Developer Portfolio

A personal developer portfolio website designed for a software engineering student specializing in **Data Analytics**, **Python Development**, **Data Science**, **Machine Learning**, **AI Applications**, and **Backend Systems**.

Built with a dark editorial technology aesthetic, featuring centralized data management, custom technical schematics, responsive layouts, and zero external backend dependencies.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Design Tokens**: Dark editorial palette (`#0B0D0C` background, `#111513` surface, `#151A17` card, `#B7F36B` accent)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*)
- **Icons**: [Lucide React](https://lucide.dev/) + bespoke SVG social icons

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg            # Custom initials brand mark (RL.)
│   └── resume.pdf             # Configured local PDF resume
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx # Custom pixel-perfect GitHub & LinkedIn icons
│   │   ├── Navbar.tsx         # Responsive navbar with active tracking & mobile drawer
│   │   ├── Hero.tsx           # Typographic identity + interactive telemetry console
│   │   ├── About.tsx          # Engineering methodology + academic credentials
│   │   ├── Skills.tsx         # Grouped technical competencies (no fake ratings)
│   │   ├── Projects.tsx       # Dynamic filtered projects + technical spec modal
│   │   ├── Experience.tsx     # Editorial vertical timeline for internships
│   │   ├── Achievements.tsx   # NCSS AI'26, REVA Hackathon, IEEE Publication
│   │   ├── Resume.tsx         # Resume card with direct download & preview
│   │   ├── Contact.tsx        # Direct channels + pre-configured mailto launcher
│   │   └── Footer.tsx         # Dynamic copyright + navigation back-to-top
│   ├── data/
│   │   ├── profile.ts         # Centralized profile, contact, bio, education
│   │   ├── skills.ts          # Centralized skill categories & tools
│   │   ├── projects.ts        # Verified project entries & technical highlights
│   │   ├── experience.ts      # Internship details (White & Box, Airkrit)
│   │   └── achievements.ts    # Awards, hackathons, and publications
│   ├── types/
│   │   └── portfolio.ts       # Strict TypeScript data models
│   ├── App.tsx                # Page composition & accessibility skip-link
│   ├── main.tsx               # Application mount
│   └── index.css              # Tailwind configuration & global dark theme tokens
├── index.html                 # SEO meta tags, OpenGraph, font imports
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Quick Start & Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ / v24 recommended)
- **npm**: v9.0.0 or later

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Verify Code Quality & Type Safety
```bash
# Run strict linter
npm run lint

# Run TypeScript compiler check and production build
npm run build
```

### 4. Preview the Production Build Locally
```bash
npm run preview
```
Runs the compiled assets on [http://localhost:4173](http://localhost:4173).

---

## ✏️ Centralized Content Guide

All content is managed through typed TypeScript data files in `src/data/`. You never need to touch layout components to update your information.

### 1. Updating Projects (`src/data/projects.ts`)
To add a new project, append a new object to `projectsData`:

```typescript
{
  id: 'new-project-id',
  title: 'Project Title',
  category: 'AI/ML', // 'Data Science' | 'AI/ML' | 'Backend Development' | 'Computer Vision' | 'Automation'
  displayCategory: 'AI/ML & Deep Learning',
  description: 'Concise, honest technical summary of the project.',
  technologies: ['Python', 'PyTorch', 'FastAPI'],
  githubUrl: 'https://github.com/YourUsername/repo-name', // Optional
  demoUrl: 'https://demo-url.com',                       // Optional
  isInternal: false,                                    // Set true for confidential internship repos
  featured: true,
  technicalHighlights: [
    'Key architecture accomplishment 1',
    'Key optimization or benchmark 2'
  ]
}
```
*The project category filters in the UI will automatically update based on the categories present in this file.*

### 2. Updating Skills (`src/data/skills.ts`)
Modify or add technologies under their respective category:

```typescript
{
  id: 'data-science',
  name: 'Data Science & Analytics',
  description: 'Data manipulation and predictive modeling workflows.',
  skills: [
    { name: 'Pandas' },
    { name: 'NumPy' },
    { name: 'DuckDB', note: 'Analytical SQL' }
  ]
}
```

### 3. Updating Internships & Experience (`src/data/experience.ts`)
Add or edit entries in `experienceData`:

```typescript
{
  id: 'company-slug',
  company: 'Company Name',
  role: 'Data Science Intern',
  dates: 'June 2026 – Present',
  isCurrent: true,
  location: 'Bangalore, India',
  description: 'Summary of the role responsibilities.',
  keyContributions: [
    'Developed high-throughput preprocessing scripts...',
    'Engineered analytical dashboards...'
  ],
  technologies: ['Python', 'FastAPI', 'Pandas']
}
```

### 4. Updating Profile & Education (`src/data/profile.ts`)
Update:
- `contact.email`: Target address for recruitment outreach.
- `contact.linkedin`: Your verified LinkedIn profile URL (hides gracefully if left empty).
- `education`: Update your college name, degree, and graduation dates.
- `availability`: Adjust your current internship availability status banner.

### 5. Replacing the Resume PDF
1. Export your formal resume as `resume.pdf`.
2. Place the file inside the project's `public/` directory (`public/resume.pdf`).
3. If you use a different filename, update `profileData.resume.fileName` and `profileData.resume.filePath` in `src/data/profile.ts`.

---

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub (see below).
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your `Portfolio` repository.
5. In Build and Output Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your portfolio will be live with free SSL in less than 60 seconds!

### Option 2: Uploading to GitHub

If initializing a new git repository:
```bash
git init
git add .
git commit -m "Initial release: Roshan L. developer portfolio"
git branch -M main
git remote add origin https://github.com/RoshanLourdhu/portfolio.git
git push -u origin main
```

---

## 📋 Personal Details Checklist

Before submitting to recruiters:
- [ ] **Resume**: Place your latest `resume.pdf` in `/public/resume.pdf`.
- [ ] **LinkedIn**: Add your LinkedIn profile URL in `src/data/profile.ts` (`contact.linkedin`).
- [ ] **College Name**: Update `education.institution` in `src/data/profile.ts` with your university name.
- [ ] **Achievements Verification**: If you have DOI or web links for the IEEE paper or REVA hackathon, insert the URLs into `src/data/achievements.ts`.

---

## 🧪 Summary of Tests Performed

1. **Static Analysis & Linting**: Checked via `oxlint` — 0 errors, 0 warnings.
2. **TypeScript Compilation**: Checked via `tsc -b` with `verbatimModuleSyntax` — 100% type-safe.
3. **Production Bundling**: Checked via `vite build` — bundle generated cleanly in under 300ms.
4. **Local HTTP Serving**: Validated via `vite preview` on port 4173; confirmed headers, assets, and 200 OK responses.
5. **PDF Asset Resolution**: Verified `curl -I http://localhost:4173/resume.pdf` returns `HTTP 200 OK` with `application/pdf`.
6. **Responsive Layout**: Verified breakpoints across mobile, tablet, and desktop viewports.
