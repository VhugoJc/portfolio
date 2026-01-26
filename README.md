# Victor Hugo Jiménez - Portfolio

A modern, responsive portfolio website for a Site Reliability Engineer and AWS Community Leader.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Bilingual Support**: English and Spanish language toggle
- **Dark Theme**: Professional dark blue gradient design
- **Interactive Sections**: Hero, About, Experience, Projects, Blog, Contact
- **AWS Certifications**: Real certification badges from Credly
- **Smooth Scrolling**: Navigation with scroll animations
- **Mobile Optimized**: Perfect experience on all devices

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Context** for state management
- **Intersection Observer API** for scroll animations

## 📁 Project Structure

```
src/
├── components/          # React components
├── contexts/           # Language context
├── data/              # Content in JSON format
├── hooks/             # Custom hooks (scroll animations)
└── styles/            # CSS files
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ✏️ Content Management

All content is stored in `/src/data/content.json` for easy updates:

- **Personal Information**: Name, title, description
- **Experience**: Job history and achievements
- **Certifications**: AWS certifications with real Credly links
- **Projects**: Featured work (currently empty for future updates)
- **Blog Posts**: Latest articles and tutorials
- **Contact Info**: Social media and professional links

## 🎨 Customization

The portfolio uses a custom Tailwind theme with:
- Dark blue gradient backgrounds
- Consistent spacing and typography
- Smooth hover effects and transitions
- Mobile-first responsive breakpoints

## 📱 Responsive Design

- **Mobile First**: Optimized for small screens
- **Tablet & Desktop**: Scales beautifully to larger screens
- **Touch Friendly**: Large buttons and easy navigation
- **Performance**: Lightweight and fast loading

## 🌍 Languages

- English (default)
- Spanish (Español)

Switch languages using the toggle in the header.

## 📄 License

This project is for personal portfolio use by Victor Hugo Jiménez.

---

**Contact**: victorhujimenez@gmail.com  
**LinkedIn**: [victorhugo-jc](https://www.linkedin.com/in/victorhugo-jc/)  
**GitHub**: [VhugoJc](https://github.com/VhugoJc/)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
