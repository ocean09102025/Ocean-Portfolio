# Education Page

## Overview
The Education page showcases academic achievements, course history, and academic progress through an interactive dashboard with multiple viewing modes.

## File Location
`src/pages/Education.tsx`

## Features
- **Tabbed Interface**: Multiple views of academic data
- **Grades Dashboard**: Interactive course tracking
- **Historical Grades**: Complete academic history
- **Coursework Categories**: Organized by subject areas
- **Academic Timeline**: Chronological journey
- **Statistics Overview**: Key performance metrics

## Tab Structure
```typescript
const tabs = [
  { id: 0, label: 'Overview', icon: '🎓' },
  { id: 1, label: 'Grades Dashboard', icon: '📊' },
  { id: 2, label: 'Historical Grades', icon: '📈' },
  { id: 3, label: 'Coursework', icon: '📚' },
  { id: 4, label: 'Timeline', icon: '⏰' }
]
```

## Tab Content

### 1. Overview Tab
- **Academic Summary**: Degree information and statistics
- **Key Metrics**: HD grades, distinctions, completion status
- **Academic Excellence**: Strengths and future goals
- **Impact Statistics**: Quantified achievements

### 2. Grades Dashboard Tab
- **Enrolled Units**: Current courses with progress tracking
- **Completed Units**: Finished courses with actual grades
- **View All Functionality**: Toggle for additional units
- **Interactive Cards**: Clickable with selection states

### 3. Historical Grades Tab
- **Complete Academic History**: All completed courses
- **Actual Grades**: Real marks from Statement of Results
- **Semester Organization**: Grouped by academic periods
- **Grade Distribution**: Visual representation of performance

### 4. Coursework Tab
- **Subject Categories**: Organized by academic areas
  - Data Science & AI
  - Software Development
  - Cloud & Infrastructure
- **Course Lists**: Comprehensive subject coverage

### 5. Timeline Tab
- **Academic Journey**: Chronological progression
- **Key Milestones**: Important achievements
- **Future Goals**: Upcoming objectives
- **Visual Timeline**: Interactive progression display

## Data Sources
- **Real Academic Data**: From Deakin University Statement of Results
- **16 Completed Units**: With actual grades and marks
- **4 Enrolled Units**: For T2 2025 semester
- **Accurate Statistics**: Based on real academic performance

## State Management
```typescript
const [isVisible, setIsVisible] = useState(false)
const [activeTab, setActiveTab] = useState(0)
const [hoveredSubject, setHoveredSubject] = useState<any>(null)
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
```

## Styling Features
- **Animated Backgrounds**: Mouse-following effects
- **Gradient Text**: Eye-catching headings
- **Hover Animations**: Interactive elements
- **Responsive Design**: Mobile-friendly layout
- **Theme Integration**: Consistent with site theme

## Usage
```tsx
import Education from './pages/Education'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  )
}
```

## Dependencies
- React (useState, useEffect hooks)
- Card component
- GradesDashboard component
- ThemeContext
- Tailwind CSS
