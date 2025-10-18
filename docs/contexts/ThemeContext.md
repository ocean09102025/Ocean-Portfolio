# ThemeContext

## Overview
A React context that provides theme management functionality across the entire application, allowing users to toggle between light and dark modes.

## File Location
`src/contexts/ThemeContext.tsx`

## Features
- **Theme State Management**: Centralized theme state
- **Local Storage Persistence**: Remembers user preference
- **System Theme Detection**: Respects OS theme preference
- **Context Provider**: Wraps the entire application
- **Custom Hook**: Easy access to theme functionality

## Context Structure
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
```

## Provider Component
```typescript
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // ... rest of implementation
}
```

## Custom Hook
```typescript
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

## Usage

### 1. Provider Setup
```tsx
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

### 2. Using the Hook
```tsx
import { useTheme } from './contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}
```

## Theme Persistence
- **Local Storage**: Saves theme preference
- **Initial Load**: Checks for saved preference
- **System Detection**: Falls back to system theme
- **Default Theme**: Dark mode as default

## CSS Integration
The theme context works with Tailwind CSS classes:
- **Dark Mode**: `dark:` prefix for dark theme styles
- **Light Mode**: Default classes for light theme
- **Dynamic Classes**: Applied based on current theme

## Dependencies
- React (createContext, useContext, useState, useEffect)
- Local Storage API
