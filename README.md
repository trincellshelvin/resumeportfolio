# Shelvin Trincell Resume Portfolio

A Next.js-based resume portfolio website showcasing my work as a developer.

## Features

- PDF resume download
- Grid layout for project showcase
- Links to LinkedIn and GitHub
- Project links and screen recordings
- Contact form that sends emails

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Email

To enable the contact form, set up environment variables for email:

Create a `.env.local` file with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

For Gmail, use an app password.

## Assets

Place your resume PDF at `public/resume.pdf`.

Add project images and videos in the `public/` directory and update the paths in `src/app/page.tsx`.

## Deploy

Deploy on Vercel or any Next.js compatible platform.
