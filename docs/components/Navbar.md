# Navbar Component

## Overview
The main navigation component that provides site-wide navigation with responsive design, theme toggle, and active state management.

## File Location
`src/components/Navbar.tsx`

## Features
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Active State**: Highlights current page
- **Theme Toggle**: Switch between light and dark modes
- **Smooth Animations**: Hover effects and transitions
- **Brand Identity**: Displays name and title

## Props
No external props - uses React Router for navigation state

## Navigation Items
```typescript
const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/about', label: 'About', icon: '👤' },
  { path: '/projects', label: 'Projects', icon: '💼' },
  { path: '/skills', label: 'Skills', icon: '🛠️' },
  { path: '/education', label: 'Education', icon: '🎓' },
  { path: '/contact', label: 'Contact', icon: '📧' }
]
```

## Theme Integration
- Uses `useTheme` hook from ThemeContext
- Toggle button switches between light/dark modes
- Icon changes based on current theme

## Responsive Behavior
- **Desktop**: Horizontal navigation bar
- **Mobile**: Collapsible hamburger menu
- **Tablet**: Adaptive layout with touch-friendly buttons

## Styling
- **Background**: Semi-transparent with backdrop blur
- **Hover Effects**: Scale and color transitions
- **Active States**: Gradient background for current page
- **Typography**: Clean, readable font hierarchy

## Usage
```tsx
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Page content */}
      </main>
    </div>
  )
}
```

## Dependencies
- React Router DOM (useLocation, Link)
- ThemeContext (useTheme hook)
- Tailwind CSS
- Lucide React (icons)
