<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a React TypeScript portfolio single-page application for a DevOps/SRE/Cloud Architect professional.

## Project Structure

- **Framework**: React 18 with TypeScript and Vite
- **Styling**: Tailwind CSS with custom dark blue theme
- **Architecture**: Component-based with context for state management
- **Internationalization**: English/Spanish support via context
- **Content Management**: Static JSON files for easy content updates

## Key Features

- Responsive design with mobile-first approach
- Dark theme with gradient backgrounds
- Smooth scrolling navigation
- Multilingual support (EN/ES)
- Professional sections: Hero, About, Experience, Projects, Blog, Contact
- Reusable components with consistent styling
- Type-safe development with TypeScript

## Styling Guidelines

- Use the custom color palette (primary blues, dark grays)
- Apply consistent spacing with section-padding and container-max classes
- Use card class for consistent component styling
- Implement hover effects and smooth transitions
- Follow the text-gradient pattern for highlighted text

## Content Management

- All content is stored in `/src/data/content.json`
- Use the language context (`useLanguage`) to access translated content
- Content structure supports nested objects for organized data
- Easy to update without touching component code

## Component Patterns

- Each section is a standalone component
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind breakpoints
- Include accessibility attributes (aria-labels, alt text)
- Follow consistent naming conventions

## Development Notes

- The app is optimized for DevOps/SRE professional showcasing
- Focus on technical achievements and cloud architecture experience
- Emphasize automation, reliability, and scale
- Professional color scheme suitable for technical audience
