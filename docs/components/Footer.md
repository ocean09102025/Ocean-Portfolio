# Footer Component

## Overview
The footer component that provides site-wide footer information, social links, and copyright details.

## File Location
`src/components/Footer.tsx`

## Features
- **Social Links**: GitHub, LinkedIn, Email
- **Copyright Information**: Year and author details
- **Responsive Design**: Adapts to different screen sizes
- **Theme Integration**: Matches current theme
- **Contact Information**: Quick access to contact methods

## Props
No external props - static footer content

## Content Structure
```typescript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ocean09102025', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ocean', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:oceanocean1205@gmail.com', icon: 'Mail' }
]
```

## Layout
- **Top Section**: Social links and contact info
- **Bottom Section**: Copyright and legal information
- **Responsive Grid**: Adapts from 3 columns to single column on mobile

## Styling
- **Background**: Dark theme with subtle gradients
- **Typography**: Clean, readable text hierarchy
- **Hover Effects**: Smooth transitions on interactive elements
- **Spacing**: Consistent padding and margins

## Usage
```tsx
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </div>
  )
}
```

## Dependencies
- React
- Lucide React (icons)
- Tailwind CSS
