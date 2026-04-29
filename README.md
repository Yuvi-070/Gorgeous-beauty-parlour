# Gorgeous Beauty Parlour & Spa

A modern Next.js website for Gorgeous Beauty Parlour, located in Bhosari, Pune. Built with Next.js App Router, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

### Step-by-step Vercel Deployment

1. **Import your repository** at [vercel.com/new](https://vercel.com/new).

2. **Configure the project settings** as follows:

   | Setting | Value |
   |---|---|
   | **Framework Preset** | Next.js |
   | **Root Directory** | `.` *(repository root — leave blank or set to `/`)* |
   | **Build Command** | `npm run build` |
   | **Output Directory** | *(leave blank — Vercel handles this automatically for Next.js)* |
   | **Install Command** | `npm install` |

3. **Click Deploy**. Vercel will detect the `vercel.json` and `next.config.ts` at the repository root and serve the Next.js app correctly.

> **Note**: If you previously deployed this project as a static site and are seeing a 404, go to your Vercel project **Settings → General** and make sure:
> - **Framework Preset** is set to **Next.js** (not "Other" or "Static")
> - **Root Directory** is empty or set to `.`
> Then trigger a **Redeploy** from the Vercel dashboard.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage – hero slider, services, testimonials |
| `/about` | About page – team, certificates, hair services |
| `/amenities` | Amenities listing |
| `/contacts` | Contact information and map |

## Project Structure

```
├── public/           # Static assets (images, favicon)
├── src/
│   ├── app/          # Next.js App Router pages and layout
│   │   ├── layout.tsx
│   │   ├── page.tsx  # Homepage
│   │   ├── about/
│   │   ├── amenities/
│   │   └── contacts/
│   └── components/   # Reusable React components
├── next.config.ts    # Next.js configuration
├── vercel.json       # Vercel deployment configuration
└── package.json
```
