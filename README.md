# byteco.dev

A modern, fully dark-themed personal website built with Astro, TypeScript, and Tailwind CSS. Features a glassmorphism design with a floating dock navigation and status panel.

## 🌟 Features

- **Modern glassmorphism UI** with enhanced blur effects and subtle borders
- **Floating dock navigation** with icon-based navigation and tooltips
- **Floating status button** with drawer panel
- **Dark-only theme** with strict grayscale (black & white) color scheme
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

### Editing Your Status

The floating status panel can be customized by editing `src/data/status.ts`:

```typescript
export const statusData: StatusData = {
  currentStatus: "Building cool things with web technologies",
  quickLinks: [
    {
      label: "Email",
      href: "mailto:hello@byteco.dev",
      icon: "Mail"
    },
    {
      label: "GitHub",
      href: "https://github.com/bytecodesky",
      icon: "Github"
    },
    {
      label: "X",
      href: "https://twitter.com",
      icon: "X"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "Linkedin"
    }
  ]
};
```

- **currentStatus**: Update your current status message
- **quickLinks**: Add, remove, or modify quick link buttons (uses Lucide icon names)

### Navigation Links

Update the dock navigation in `src/components/SidebarNav.astro` to add or remove navigation items. The dock features icon-only buttons with tooltips on hover.

### Theme Colors

Edit `src/styles/global.css` to customize the color scheme:

```css
:root {
  --color-bg-primary: 5 5 5;         /* Near-black #050505 */
  --color-glass-bg: 255 255 255;     /* White base for alpha overlays */
  --color-text-primary: 248 250 252; /* Text color */
  --color-accent: 248 250 252;       /* Grayscale accent */
  --color-accent-hover: 226 232 240; /* Grayscale hover */
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

### Social Links

Update social links in:
- `src/components/Footer.astro` - Footer social links
- `src/data/status.ts` - Status panel quick links

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
│   │   ├── NoteCard.astro
│   │   ├── RelatedPosts.astro
│   │   ├── SEO.astro
│   │   ├── SidebarNav.astro      # Floating dock navigation
│   │   ├── StatusButton.astro    # Floating status button
│   │   ├── StatusPanel.astro     # Status drawer panel
│   │   ├── TableOfContents.astro
│   │   └── TagList.astro
│   ├── content/           # Content collections
│   │   ├── blog/          # Blog posts (.mdx)
│   │   ├── notes/         # Notes (.mdx)
│   │   └── config.ts      # Content schema definitions
│   ├── data/
│   │   └── status.ts      # Status panel configuration
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
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css     # Global styles with glassmorphism utilities
│   └── utils/
│       └── helpers.ts
├── astro.config.mjs
├── package.json
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
