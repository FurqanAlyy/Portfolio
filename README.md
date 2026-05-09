# Furqan Ali — Portfolio

Personal portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, JavaScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (via `next/font/google`)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Updating Your Content

All personal data lives in `/data/`. You never need to touch component files.

| File | What to update |
|------|----------------|
| `data/personal.js` | Name, bio, email, LinkedIn, GitHub, location, highlights, certifications, communities |
| `data/skills.js` | Skill categories and items |
| `data/projects.js` | Project cards (name, description, tech stack, GitHub/live URLs, featured flag) |
| `data/education.js` | Degree, institution, period, courses |
| `data/experience.js` | Work experience entries and current-focus card |

### Adding a project

Open `data/projects.js` and add a new object:

```js
{
  id: 4,
  name: 'My New Project',
  fullName: 'My New Project — Full Description',
  description: 'Short description shown on the card.',
  techStack: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/FurqanAlyy/my-new-project',
  live: 'https://my-project.vercel.app',   // null if no live demo
  featured: false,
  gradient: 'from-pink-500 to-rose-600',   // Tailwind gradient classes
},
```

### Adding work experience

When you have internship/job experience, open `data/experience.js` and add to the `experience` array:

```js
export const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'Company Name',
    location: 'Lahore, Pakistan',
    period: 'Jun 2026 – Aug 2026',
    description: 'What you did.',
    bullets: ['Achievement 1', 'Achievement 2'],
  },
];
```

### Replacing the resume PDF

Drop your actual PDF at `public/resume.pdf`. The Download Resume button will serve it automatically.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Set your custom domain in Project → Settings → Domains (optional).

No environment variables required.
