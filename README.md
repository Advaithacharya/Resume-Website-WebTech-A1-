# Advaith Acharya's Portfolio
https://advaithresumewebsite-webtech.onrender.com

A modern, responsive personal portfolio website showcasing my work as a full-stack developer and designer. Built with cutting-edge technologies to deliver a smooth, interactive user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Theme switching capability
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Fast loading and search engine friendly
- **Accessibility**: WCAG compliant components and navigation
- **Performance**: Optimized with Vite for lightning-fast builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Beautiful, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives

### Libraries & Tools
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vite_react_shadcn_ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Usage

### Development
```bash
npm run dev
```
Starts the development server with hot reload.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── AnimatedBackground.tsx
│   ├── ui/              # Reusable UI components (ShadCN)
│   └── NavLink.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About page
│   ├── Resume.tsx       # Resume page
│   ├── Contact.tsx      # Contact page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      accent: '#your-color',
      // ... other colors
    }
  }
}
```

### Content
Edit page components in `src/pages/` to update content.

### Components
Modify or add components in `src/components/` for custom functionality.

## 📄 Pages

- **Home (/)**: Hero section, stats, services overview, and call-to-action
- **About (/about)**: Detailed information about experience and skills
- **Resume (/resume)**: Professional experience, education, and skills
- **Contact (/contact)**: Contact form and information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Advaith Acharya**
- Website: [Your website URL]
- Email: [Your email]
- LinkedIn: [Your LinkedIn profile]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
