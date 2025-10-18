# GradesDashboard Component

## Overview
A comprehensive dashboard component that displays academic progress, including enrolled units and completed courses with grades, progress tracking, and interactive features.

## File Location
`src/components/GradesDashboard.tsx`

## Features
- **Enrolled Units Display**: Shows current courses with progress bars
- **Completed Units Display**: Shows finished courses with actual grades
- **View All Functionality**: Toggle to show/hide additional completed units
- **Interactive Cards**: Clickable cards with selection states
- **Progress Tracking**: Visual progress bars for all units
- **Statistics Summary**: Overview of academic performance

## Props
No external props - self-contained component

## State Management
```typescript
const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
const [showAllCompleted, setShowAllCompleted] = useState(false)
```

## Data Structure
```typescript
interface Course {
  id: string
  title: string
  code: string
  credits: number
  progress: number
  status: 'In Progress' | 'Completed' | 'Enrolled'
  expectedGrade: 'HD' | 'D' | 'C' | 'P'
  actualGrade?: 'HD' | 'D' | 'C' | 'P'
  actualMark?: number
  semester: string
  year: string
  color: string
}
```

## Sections

### 1. Enrolled Units
- **Position**: Top of dashboard
- **Layout**: 2-column grid
- **Features**: 
  - Large cards with detailed information
  - Progress bars with percentages
  - Interactive selection
  - Expected grades display

### 2. Completed Units
- **Position**: Bottom of dashboard
- **Layout**: 4-column grid (compact)
- **Features**:
  - View All/Show Less toggle
  - Actual grades and marks
  - Simple blue progress bars
  - Compact card design

### 3. Statistics
- **Total Units**: Count of all units
- **Completed**: Number of finished units
- **Enrolled**: Number of current units
- **HD Grades**: Count of High Distinction grades

## Usage
```tsx
import GradesDashboard from '../components/GradesDashboard'

function EducationPage() {
  return (
    <div>
      <h1>Education</h1>
      <GradesDashboard />
    </div>
  )
}
```

## Styling
- **Consistent Colors**: Blue-to-cyan gradient for all progress bars
- **Responsive Design**: Adapts to different screen sizes
- **Hover Effects**: Scale and shadow animations
- **Selection States**: Ring highlighting for selected cards

## Data Sources
The component contains hardcoded course data including:
- 16 completed units with actual grades from Deakin University
- 4 enrolled units for T2 2025
- Real academic data from Statement of Results

## Dependencies
- React (useState hook)
- Card component
- Tailwind CSS
