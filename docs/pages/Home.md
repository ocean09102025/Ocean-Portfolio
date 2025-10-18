# Home Page

## Overview
The landing page that introduces the portfolio with a hero section, key highlights, and call-to-action elements.

## File Location
`src/pages/Home.tsx`

## Features
- **Hero Section**: Eye-catching introduction with animated elements
- **Key Highlights**: Quick overview of achievements
- **Call-to-Action**: Navigation to other sections
- **Animated Backgrounds**: Dynamic visual effects
- **Responsive Design**: Mobile-first approach

## Sections

### 1. Hero Section
- **Name Display**: "Ocean" with gradient text effect
- **Title**: "Computer Science Student"
- **Description**: Brief introduction and key points
- **Animated Elements**: Floating particles and gradients

### 2. Key Highlights
- **Academic Achievements**: HD grades, completed units
- **Skills Overview**: Technical capabilities
- **Project Highlights**: Notable work examples
- **Contact Information**: Quick access to contact

### 3. Call-to-Action
- **Navigation Buttons**: Links to other pages
- **Contact CTA**: Direct contact encouragement
- **Social Links**: Quick access to profiles

## Styling Features
- **Gradient Text**: Eye-catching headings
- **Animated Backgrounds**: Moving particles and effects
- **Hover Animations**: Interactive button effects
- **Responsive Typography**: Scales with screen size
- **Theme Integration**: Consistent with site theme

## State Management
```typescript
const [isVisible, setIsVisible] = useState(false)
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
```

## Animation Effects
- **Fade-in Animations**: Content appears on scroll
- **Mouse-following Effects**: Background elements follow cursor
- **Hover Transitions**: Smooth button and link effects
- **Particle Animation**: Floating background elements

## Usage
```tsx
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
```

## Dependencies
- React (useState, useEffect hooks)
- Card component
- ThemeContext
- Tailwind CSS
