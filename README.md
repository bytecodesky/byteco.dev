# byteco.dev

A modern, dark-themed personal website built with Astro, TypeScript, and Tailwind CSS. Features a blog, notes, project showcase, and tag-based content organization.

## 🌟 Features

- **Dark-only theme** with violet accent color
- **Blog & Notes** with MDX support for rich content
- **Content Collections** for type-safe content management
- **Tag system** for organizing content
- **RSS feed** for blog posts
- **SEO optimized** with OpenGraph and Twitter Card meta tags
- **Responsive design** with accessible focus styles
- **Table of contents** auto-generated from headings
- **Related posts** based on tag intersection
- **Reading time** estimates for blog posts
- **Sitemap** and robots.txt for search engines

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📝 Content Authoring

### Adding a Blog Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post"
date: 2024-01-15
tags: ["astro", "web-development"]
draft: false
pinned: false  # Optional: pin to homepage
---

## Your Content Here

Write your post content using Markdown and MDX...
```

### Adding a Note

1. Create a new `.mdx` file in `src/content/notes/`
2. Add frontmatter (notes don't require a description):

```mdx
---
title: "Your Note Title"
date: 2024-01-15
tags: ["typescript", "tips"]
draft: false
pinned: false  # Optional: pin to homepage
---

## Your Note Content

Quick notes, code snippets, and TIL moments...
```

### Content Fields

#### Blog Posts
- `title` (required): Post title
- `description` (required): Brief description for SEO and previews
- `date` (required): Publication date
- `tags` (optional): Array of tag strings
- `draft` (optional, default: false): Hide from production
- `pinned` (optional, default: false): Show in homepage pinned section

#### Notes
- `title` (required): Note title
- `date` (required): Publication date
- `tags` (optional): Array of tag strings
- `draft` (optional, default: false): Hide from production
- `pinned` (optional, default: false): Show in homepage pinned section

## 🎨 Customization

### Theme Colors

Edit `src/styles/global.css` to customize the color scheme:

```css
:root {
  --color-bg-primary: 15 23 42;      /* slate-900 */
  --color-bg-secondary: 30 41 59;    /* slate-800 */
  --color-text-primary: 248 250 252; /* slate-50 */
  --color-accent: 139 92 246;        /* violet-500 */
  --color-accent-hover: 124 58 237;  /* violet-600 */
}
```

### Site Metadata

Update `astro.config.mjs` for site URL:

```js
export default defineConfig({
  site: 'https://byteco.dev',
  // ...
});
```

Update SEO defaults in `src/components/SEO.astro`.

### Projects

Edit the projects array in `src/pages/projects.astro` to showcase your work.

### Social Links

Update social links in `src/components/Footer.astro`.

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── BlogPostCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── NoteCard.astro
│   │   ├── RelatedPosts.astro
│   │   ├── SEO.astro
│   │   ├── TableOfContents.astro
│   │   └── TagList.astro
│   ├── content/           # Content collections
│   │   ├── blog/          # Blog posts (.mdx)
│   │   ├── notes/         # Notes (.mdx)
│   │   └── config.ts      # Content schema definitions
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── content.ts     # Content utilities
│   ├── pages/             # File-based routing
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── notes/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── tags/
│   │   │   ├── [tag].astro
│   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── helpers.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚢 Deployment

### Vercel (Recommended)

This site is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Astro and configure build settings
3. Deploy with a single click

**Build Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18.x or higher

### Custom Domain

To use a custom domain:

1. Add your domain in Vercel's project settings
2. Update the `site` field in `astro.config.mjs` to your domain
3. Configure DNS records as instructed by Vercel

### Other Platforms

The site can be deployed to any static hosting platform:

```bash
npm run build
```

Then upload the `dist/` folder to your hosting provider.

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[MDX](https://mdxjs.com/)** - Markdown with components
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** - Type-safe content management

## 📄 License

MIT License - feel free to use this as a template for your own site!

## 🙏 Acknowledgments

Built with ❤️ using the amazing Astro framework and its ecosystem.
