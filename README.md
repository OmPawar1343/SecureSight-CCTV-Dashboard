# SecureSight CCTV Dashboard

This project is a technical assessment for SecureSight, a fictional CCTV monitoring software. It includes a Next.js 15 frontend and backend, Prisma ORM, and SQLite database. The dashboard features:

- Navbar
- Incident Player (left)
- Incident List (right)

## Backend
- Prisma models for Camera and Incident
- Seed script to populate cameras and incidents
- API routes:
  - GET /api/incidents?resolved=false
  - PATCH /api/incidents/:id/resolve

## Frontend
- Incident Player: Large video frame (static), camera thumbnails
- Incident List: Thumbnail, type icon, camera location, time, resolve button

## Setup
1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

## Next Steps
- Add Prisma and SQLite setup
- Implement data models and seed script
- Build API routes and frontend components

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# SecureSight CCTV Dashboard

## Deployment 
securesight-cctv-dashboard.netlify.app

## Tech Decisions
- **Framework**: Next.js for server-side rendering and static site generation.
- **Database**: Prisma with MySQL for data management.
- **Styling**: Tailwind CSS for responsive design.

## If I Had More Time...
- **Feature Enhancements**: Add user authentication and role-based access control.
- **UI Improvements**: Enhance the UI with more interactive elements and animations.
- **Performance Optimization**: Implement lazy loading for videos and images.

