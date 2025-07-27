# IELTS Course Product Page

This is a Next.js project implementing a product page for the **IELTS Course by Munzereen Shahid**.  
The page is built based on the provided API, wireframe, and requirements from 10 Minute School Frontend Engineer (Level 1) assessment.

---

## Live Demo

[https://tms-one-tawny.vercel.app/](https://tms-one-tawny.vercel.app/)

---

## Features

- Server-side rendering (SSR) with Next.js
- TypeScript for type safety
- TailwindCSS for styling and responsive design
- Localization support (`en` and `bn` languages)
- Fetches product data from 10 Minute School public API with SEO headers
- Displays:
  - Product title
  - Description (rendered from HTML string)
  - Course instructors (from `sections` with type `instructor`)
  - Product trailer (YouTube embedded player from `media`)
  - Course price (defaulted to 1000 as per requirement)
  - CTA button with dynamic text
  - Course layout, learning pointers, exclusive features, course details, and checklist (optional sections)
- Incremental Static Regeneration (ISR) enabled for fast page updates
- SEO optimized metadata fetched from API
- Modular, reusable React components with code splitting

---

## Technologies Used

- [Next.js](https://nextjs.org/) (React Framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Player for embedded YouTube videos
- Axios for HTTP requests

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/yourusername/ielts-course-product-page.git
cd ielts-course-product-page
npm install
# or
yarn install

# Running Locally

Copy
Edit
npm run dev
# or
yarn dev


# Building for Production

Copy
Edit
npm run build
npm start
# or
yarn build
yarn start


# API Details
Endpoint: https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course

Headers:

X-TENMS-SOURCE-PLATFORM: web

accept: application/json

The API provides all the necessary data, including SEO metadata, product sections, media, checklist, and CTA text.
```
