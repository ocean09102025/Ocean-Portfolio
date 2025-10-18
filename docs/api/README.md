# API Documentation

## Overview
This portfolio application uses client-side services and external APIs for functionality. No backend server is required.

## External Services

### 1. EmailJS
**Purpose**: Contact form email delivery
**Documentation**: [EmailJS Docs](https://www.emailjs.com/docs/)

**Configuration:**
```typescript
const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'
```

**Usage:**
```typescript
import { sendEmail } from '../utils/emailService'

const result = await sendEmail({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Portfolio Inquiry',
  message: 'Hello, I would like to discuss...'
})
```

## Data Sources

### 1. Academic Data
**Source**: Deakin University Statement of Results
**Type**: Static data (hardcoded)
**Location**: `src/components/GradesDashboard.tsx`

**Data Structure:**
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

### 2. Project Data
**Source**: Static data
**Type**: Hardcoded project information
**Location**: `src/pages/Projects.tsx`

### 3. Skills Data
**Source**: Static data
**Type**: Hardcoded skills and technologies
**Location**: `src/pages/Skills.tsx`

## Environment Variables

### Required Variables
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Optional Variables
```env
# Development
VITE_APP_TITLE=Ocean's Portfolio
VITE_APP_DESCRIPTION=Computer Science Student Portfolio
```

## API Integration Examples

### 1. Contact Form Submission
```typescript
// Contact form handler
const handleSubmit = async (formData: ContactFormData) => {
  try {
    const success = await sendEmail(formData)
    if (success) {
      setMessage('Message sent successfully!')
      resetForm()
    }
  } catch (error) {
    setError('Failed to send message. Please try again.')
  }
}
```

### 2. Theme Persistence
```typescript
// Theme management
const saveTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem('theme', theme)
}

const loadTheme = (): 'light' | 'dark' => {
  return localStorage.getItem('theme') as 'light' | 'dark' || 'dark'
}
```

## Error Handling

### 1. Email Service Errors
```typescript
try {
  await sendEmail(formData)
} catch (error) {
  console.error('Email service error:', error)
  // Handle error appropriately
}
```

### 2. Local Storage Errors
```typescript
try {
  localStorage.setItem('key', 'value')
} catch (error) {
  console.warn('Local storage unavailable:', error)
  // Fallback behavior
}
```

## Security Considerations

### 1. EmailJS Security
- Public key is safe to expose in client code
- Rate limiting handled by EmailJS
- No sensitive data in email templates

### 2. Data Privacy
- No personal data collection
- Local storage only for user preferences
- No tracking or analytics

## Future Enhancements

### 1. Backend Integration
- User authentication
- Dynamic content management
- Analytics tracking
- Database storage

### 2. Additional APIs
- GitHub API for project data
- LinkedIn API for professional info
- Resume/CV generation API
- Analytics services

## Troubleshooting

### Common Issues

1. **EmailJS Not Working**
   - Check service credentials
   - Verify template configuration
   - Check network connectivity

2. **Theme Not Persisting**
   - Check localStorage availability
   - Verify theme context setup
   - Check for JavaScript errors

3. **Build Errors**
   - Verify environment variables
   - Check TypeScript compilation
   - Validate import paths
