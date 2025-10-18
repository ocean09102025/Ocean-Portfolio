# Ocean's Portfolio - Documentation

## Project Overview
A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The portfolio showcases academic achievements, projects, skills, and contact information for a Computer Science student.

## Tech Stack
- **Frontend**: React 18.2.0 with TypeScript
- **Styling**: Tailwind CSS 3.4.13
- **Build Tool**: Vite 5.4.0
- **Routing**: React Router DOM 6.26.2
- **Icons**: Lucide React 0.460.0
- **Email Service**: EmailJS 4.4.1

## Project Structure
```
my-portfolio-template/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── GradesDashboard.tsx
│   │   └── Navbar.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── utils/
│   │   └── emailService.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── docs/
│   ├── components/
│   ├── pages/
│   └── README.md
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
```bash
npx vite
```
The application will be available at `http://localhost:5173` (or next available port)

### Build
```bash
npm run build
```

## Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes
- **Interactive Components**: Hover effects, animations, and transitions
- **Academic Dashboard**: Comprehensive grades and course tracking
- **Contact Form**: Email integration with EmailJS
- **Modern UI**: Clean, professional design with gradients and animations

## Documentation Files
- [Components Documentation](./components/)
- [Pages Documentation](./pages/)
- [API Documentation](./api/)
- [Deployment Guide](./deployment.md)

## License
MIT License - see LICENSE file for details
