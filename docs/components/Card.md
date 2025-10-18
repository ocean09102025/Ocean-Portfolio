# Card Component

## Overview
A reusable card component that provides consistent styling and structure for content containers throughout the portfolio.

## File Location
`src/components/Card.tsx`

## Props Interface
```typescript
interface CardProps {
  children: ReactNode;    // Content to be displayed inside the card
  className?: string;     // Optional additional CSS classes
}
```

## Usage
```tsx
import Card from '../components/Card'

// Basic usage
<Card>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>

// With custom styling
<Card className="bg-blue-500 text-white">
  <h2>Styled Card</h2>
  <p>This card has custom styling</p>
</Card>
```

## Styling
The component uses a base `panel` class that provides:
- Background color
- Border radius
- Padding
- Shadow effects
- Transition animations

## Examples in Use
- **Education Page**: Course cards, statistics cards
- **Projects Page**: Project showcase cards
- **Skills Page**: Skill category cards
- **About Page**: Information cards

## Customization
The component accepts a `className` prop for additional styling:
```tsx
<Card className="hover:scale-105 transition-transform">
  <h3>Interactive Card</h3>
</Card>
```

## Dependencies
- React (ReactNode type)
- Tailwind CSS (for styling)
