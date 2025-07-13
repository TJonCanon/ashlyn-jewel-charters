# Ashlyn Jewel Charters

A modern, responsive website for Ashlyn Jewel Charters - Family Fishing Charters in Chincoteague, Virginia. Built with Next.js, Tailwind CSS, and Supabase.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Interactive Components**: FAQ accordion, mobile navigation, smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Backend**: Supabase (ready for integration)
- **Icons**: Heroicons
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) Supabase account for backend features

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ashlyn-jewel-charters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ashlyn-jewel-charters/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   └── layout/          # Layout components (Header, Footer)
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Homepage
├── lib/
│   ├── supabase/           # Supabase configuration
│   └── utils.ts            # Utility functions
├── types/                  # TypeScript type definitions
├── public/                 # Static assets (images, icons)
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## Features Overview

### Current Features

- **Hero Section**: Eye-catching banner with call-to-action
- **Value Propositions**: Key selling points with icons
- **Trip Listings**: Horizontal scrolling trip cards
- **About Section**: Captain Todd introduction
- **FAQ Section**: Expandable frequently asked questions
- **Responsive Navigation**: Mobile-friendly menu
- **Contact Footer**: Company information and links

### Ready for Enhancement

The project is set up to easily add:
- Booking system with Supabase backend
- Customer reviews and testimonials
- Trip availability calendar
- Photo gallery
- Blog section
- Contact forms
- Payment integration

## Customization

### Colors

The design system uses these primary colors (defined in `tailwind.config.ts`):
- Primary Dark: `#1a1e18`
- Primary Teal: `#5ba8a8`
- Gray shades for text and backgrounds

### Fonts

Uses "Cina GEO" font family loaded from Google Fonts.

### Images

Replace images in the `public/` directory:
- `Logo.png` - Company logo
- `Captain_todd.png` - Captain photo
- `Photos/` - Trip photos
- `icons/` - Feature icons

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Ashlyn Jewel Charters.

## Contact

Taylor Joyner
- Website: github.com/TJonCanon
- Email taylor.joyner93@me.com

---
