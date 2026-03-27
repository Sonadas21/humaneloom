# Humaneloom

A modern full-stack web application that connects people through innovative technology solutions. Built with React, TypeScript, and Express, featuring premium animations and a responsive design.

## 🌟 Live Demo

- **Production URL**: https://humaneloom.vercel.app
- **Repository**: https://github.com/Sonadas21/humaneloom

## 🚀 Features

### Core Functionality
- **Modern SPA Architecture**: Single Page Application with React Router 6
- **Full-Stack Setup**: React frontend with Express.js backend
- **TypeScript Support**: End-to-end type safety
- **Responsive Design**: Mobile-first approach with TailwindCSS

### UI/UX Features
- **Premium Animations**: Smooth transitions using Framer Motion
- **Sticky Navigation**: Fixed header with frosted glass effect
- **Interactive Components**: Hover effects and micro-interactions
- **Modern Design System**: Consistent theming and component library

### Sections & Components
- **Hero Section**: Eye-catching landing with call-to-action
- **How It Works**: Animated process explanation with floating icons
- **Our Products**: Sticky scroll navigation with highlighting
- **Services**: Comprehensive service offerings
- **Problem We Solve**: Value proposition presentation
- **Contact Section**: User-friendly contact form

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **TailwindCSS 3** - Utility-first styling
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sonadas21/humaneloom.git
   cd humaneloom
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (client + server)

# Building
npm run build        # Production build (client + server)
npm run build:client # Build client only
npm run build:server # Build server only

# Production
npm run start        # Start production server

# Testing & Quality
npm run test         # Run tests
npm run typecheck    # TypeScript validation
npm run format.fix   # Format code with Prettier
```

### Project Structure

```
humaneloom/
├── client/                   # React SPA frontend
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI component library
│   │   ├── HeroSection.tsx  # Landing hero component
│   │   ├── HowItWorks.tsx   # Process explanation
│   │   ├── OurProducts.tsx  # Product showcase
│   │   └── ...              # Other components
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Home page
│   │   ├── AboutUs.tsx      # About page
│   │   ├── Career.tsx       # Careers page
│   │   └── ...              # Other pages
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── global.css           # Global styles & theme
│   └── App.tsx              # App entry point & routing
├── server/                  # Express API backend
│   ├── index.ts             # Main server setup
│   ├── routes/              # API route handlers
│   └── node-build.ts        # Server build configuration
├── shared/                  # Types shared between client & server
│   └── api.ts               # API type definitions
├── public/                  # Static assets
├── api/                     # Vercel serverless functions
├── vercel.json              # Vercel deployment configuration
└── package.json             # Project dependencies & scripts
```

## 🚀 Deployment

### Vercel (Recommended)
The project is pre-configured for Vercel deployment:

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=8080

# API Configuration
PING_MESSAGE=ping

# Custom Configuration
# Add your environment-specific variables here
```

### Customization

#### Adding New Pages
1. Create component in `client/pages/YourPage.tsx`
2. Add route in `client/App.tsx`:
   ```typescript
   <Route path="/your-page" element={<YourPage />} />
   ```

#### Adding API Routes
1. Create handler in `server/routes/your-route.ts`
2. Register in `server/index.ts`:
   ```typescript
   app.get("/api/your-route", handleYourRoute);
   ```

#### Theme Customization
- Edit `client/global.css` for theme variables
- Update `tailwind.config.ts` for Tailwind configuration

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Project Link**: https://github.com/Sonadas21/humaneloom
- **Live Demo**: https://humaneloom.vercel.app

## 🙏 Acknowledgments

- Built with [Fusion Starter](https://github.com/your-org/fusion-starter) template
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ by the Humaneloom team**
