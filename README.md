# Sean Quigley Portfolio

A modern, responsive portfolio website for a Graduate AI Engineer position at Storm ID, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: System preference detection with manual toggle
- **Performance Optimized**: Lazy loading, blur placeholders, Lighthouse score 90+
- **SEO Ready**: Meta tags, OpenGraph, JSON-LD structured data
- **Accessibility**: WCAG-AA compliant, reduced motion support

## 📋 Sections

1. **Hero** - Introduction with download CV and email CTAs
2. **Current Project** - Featured LLM Personality Chatbot
3. **Project Grid** - Six projects with filtering by category
4. **Skills & Qualifications** - Education, modules, and competencies
5. **Certifications** - Azure AI-900 (70%) and DP-100 (30%) progress
6. **Currently Reading** - Three technical books with covers
7. **Mock Interview** - Embedded YouTube video
8. **About** - Bio and current tech stack
9. **Contact** - Multiple contact methods with icons

## 🛠 Setup

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
```

## 🚀 Deployment

### Netlify (Static Export)

```bash
npm run build
```

Build command: `npm run build`
Publish directory: `out`

### Vercel

```bash
npm run build
```

Build command: `npm run build`
Output directory: `out`

## 🖼 Asset Replacement

Replace placeholder assets with your own:

### Images
- `/public/images/projects/` - Project hero images (16:9 aspect ratio recommended)
- `/public/images/books/` - Book cover images (3:4 aspect ratio)
- `/public/og-image.jpg` - Open Graph image (1200x630px)

### Documents
- `/public/cv/sean-quigley-cv.pdf` - Your CV/resume

### Data Files
Update these files with your information:
- `/data/projects.ts` - Project details, links, and tech stacks
- `/data/certifications.ts` - Certification progress
- `/data/books.ts` - Currently reading list

### Contact Information
Update links in:
- `/components/Contact.tsx` - Contact methods and social links
- `/components/Hero.tsx` - Email address
- `/app/layout.tsx` - Meta tags and site info

## 🎨 Customization

### Colors
Category colors are defined in `tailwind.config.ts`:
- AI: Violet (`#8b5cf6`)
- Cloud: Teal (`#14b8a6`)
- DevOps: Orange (`#f97316`)
- Security: Red (`#ef4444`)

### Typography
The site uses Inter font. Change in `/app/layout.tsx` if needed.

### Theme
Dark/light theme toggle is included. Customize colors in `/app/globals.css`.

## 🔧 Technical Details

### Performance Features
- Image optimization with `next/image`
- Lazy loading for images and iframe
- Framer Motion animations with reduced motion support
- Static site generation for fast loading

### SEO Features
- Structured data (JSON-LD) for person schema
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- Proper heading hierarchy

### Development Tools
- ESLint + TypeScript for code quality
- Prettier for formatting
- Husky + lint-staged for pre-commit hooks
- Tailwind CSS for styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📞 Contact

- Email: sean@seanquigley.tech
- LinkedIn: [linkedin.com/in/seanquigley-tech](https://linkedin.com/in/seanquigley-tech)
- GitHub: [github.com/seanquigley](https://github.com/seanquigley)