# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a stunning dark/light theme system, interactive animations, and a complete showcase of projects, skills, and achievements.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite)

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Theme** - Seamless theme switching with persistent preferences
- **Responsive Layout** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Engaging transitions and hover effects
- **Glass Morphism** - Modern UI with frosted glass effects
- **Gradient Accents** - Beautiful color gradients throughout

### 📄 **Complete Pages**
1. **Home** - Hero section with quick stats and profile overview
2. **About** - Interactive timeline, achievements, and personal journey
3. **Projects** - 10 detailed projects with filtering and modal views
4. **Skills** - 20+ skills with categories, progress bars, and interactive stats
5. **Education** - Academic records with grades and coursework details
6. **Contact** - Working contact form with Formspree integration

### 🔥 **Interactive Features**
- **Project Filtering** - Filter by category (All, Web, Data Science, Security, Cloud)
- **Skill Categories** - Filter by Programming, Data Science, Cloud, Security
- **Clickable Statistics** - Click on skill counts to view detailed breakdowns
- **Project Modals** - Detailed project views with technologies and descriptions
- **Skill Modals** - Detailed skill information with proficiency levels
- **Hover Effects** - Interactive cards and buttons with smooth transitions
- **Tab Navigation** - Multi-tab sections for organized content

### 📧 **Contact Form**
- **Formspree Integration** - Direct email sending without backend
- **Form Validation** - Built-in validation for all fields
- **Success/Error Feedback** - Clear user feedback on submission
- **Responsive Design** - Works perfectly on all devices

### 🎯 **Performance & Quality**
- **Fast Loading** - Optimized with Vite for blazing-fast performance
- **Type Safety** - Full TypeScript implementation
- **Clean Code** - Well-organized, maintainable codebase
- **No Linting Errors** - Production-ready code quality
- **SEO Friendly** - Semantic HTML and meta tags

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3** - Modern UI library with hooks
- **TypeScript 5.6** - Type-safe JavaScript
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router DOM 7.1** - Client-side routing
- **Vite 5.4** - Fast build tool and dev server

### **Tools & Services**
- **Formspree** - Contact form email delivery
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Git** - Version control

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Quick Start**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure email service (optional)**
   - Sign up at [Formspree](https://formspree.io)
   - Get your form endpoint
   - Update `src/utils/emailService.ts` with your endpoint:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

### **Build for Production**
```bash
npm run build
```
Output will be in the `dist/` directory.

### **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
my-portfolio-template/
├── public/                 # Static assets
│   └── favicon.svg        # Site favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── Card.tsx      # Card component
│   │   ├── Navbar.tsx    # Navigation bar with theme toggle
│   │   └── Footer.tsx    # Footer component
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx  # Theme management (dark/light)
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About page with timeline
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Skills.tsx    # Skills section
│   │   ├── Education.tsx # Education details
│   │   └── Contact.tsx   # Contact form
│   ├── utils/            # Utility functions
│   │   └── emailService.ts  # Email sending service
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & theme overrides
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization Guide

### **Personal Information**
Update the following files with your information:

1. **Home Page** (`src/pages/Home.tsx`)
   - Name, title, bio
   - Profile image
   - Quick statistics
   - Social links

2. **About Page** (`src/pages/About.tsx`)
   - Personal story
   - Timeline events
   - Achievements
   - Core strengths

3. **Projects** (`src/pages/Projects.tsx`)
   - Project details in the `projects` array
   - Technologies used
   - Descriptions and highlights

4. **Skills** (`src/pages/Skills.tsx`)
   - Skill list in the `skills` array
   - Proficiency levels (0-100)
   - Categories and descriptions

5. **Education** (`src/pages/Education.tsx`)
   - Degree information
   - Subjects and grades
   - Academic achievements

6. **Contact** (`src/pages/Contact.tsx`)
   - Email address
   - Social media links
   - Contact methods

### **Theme Colors**
Modify `tailwind.config.js` to change color schemes:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### **Styling**
- Component styles: Use Tailwind classes in TSX files
- Global styles: Edit `src/index.css`
- Theme overrides: Modify light theme section in `src/index.css`

## 📊 Key Features Explained

### **Theme System**
- Uses React Context API for global state
- Persists preference to localStorage
- Comprehensive light theme overrides in CSS
- Smooth transitions between themes

### **Project Filtering**
- Dynamic filtering by category
- Real-time count updates
- Maintains all project data

### **Interactive Statistics**
- Click on skill counts to view details
- Modal displays with filtered results
- Smooth animations

### **Contact Form**
- Formspree integration for direct email
- Form validation
- Success/error feedback
- No backend required

### **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes

## 🚀 Deployment

### **Vercel** (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### **Netlify**
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### **GitHub Pages**
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Environment Variables

For Formspree or other services, create a `.env` file:

```env
VITE_FORMSPREE_ENDPOINT=your_endpoint_here
```

Access in code:
```typescript
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ocean**
- GitHub: [@ocean09102025](https://github.com/ocean09102025)
- LinkedIn: [@ocean09102025](https://www.linkedin.com/in/ocean09102025)
- Email: oceanocean1205@gmail.com

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📸 Screenshots

### Dark Theme
![Dark Theme](screenshots/dark-theme.png)

### Light Theme
![Light Theme](screenshots/light-theme.png)

### Projects Page
![Projects](screenshots/projects.png)

### Skills Page
![Skills](screenshots/skills.png)

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] CMS integration
- [ ] Multilingual support
- [ ] Analytics integration
- [ ] PWA support
- [ ] Animation library integration
- [ ] More project categories

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
