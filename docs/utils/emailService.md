# Email Service

## Overview
A utility service that handles email functionality using EmailJS for contact form submissions without requiring a backend server.

## File Location
`src/utils/emailService.ts`

## Features
- **EmailJS Integration**: Client-side email sending
- **Contact Form Handling**: Processes form submissions
- **Error Handling**: Graceful error management
- **TypeScript Support**: Type-safe implementation
- **Promise-based**: Async/await support

## Configuration
```typescript
// EmailJS configuration
const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'
```

## API Functions

### 1. sendEmail
```typescript
export const sendEmail = async (formData: EmailFormData): Promise<boolean>
```

**Parameters:**
- `formData`: Object containing form data
  - `name`: string - Sender's name
  - `email`: string - Sender's email
  - `subject`: string - Email subject
  - `message`: string - Email message

**Returns:**
- `Promise<boolean>` - Success status

**Usage:**
```tsx
import { sendEmail } from '../utils/emailService'

const handleSubmit = async (formData) => {
  try {
    const success = await sendEmail(formData)
    if (success) {
      console.log('Email sent successfully')
    }
  } catch (error) {
    console.error('Failed to send email:', error)
  }
}
```

## Error Handling
- **Network Errors**: Handles connection issues
- **Validation Errors**: Checks required fields
- **Service Errors**: Manages EmailJS service issues
- **User Feedback**: Provides success/error messages

## Setup Requirements

### 1. EmailJS Account
- Create account at [EmailJS](https://www.emailjs.com/)
- Set up email service (Gmail, Outlook, etc.)
- Create email template
- Get service credentials

### 2. Environment Variables
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Template Configuration
```html
<!-- EmailJS Template -->
Subject: {{subject}}
From: {{name}} <{{email}}>
Message: {{message}}
```

## Dependencies
- EmailJS Browser SDK
- TypeScript

## Security Notes
- **Client-side Only**: No server-side validation
- **Rate Limiting**: EmailJS handles rate limiting
- **Public Key**: Safe to expose in client code
- **Template Validation**: Server-side template processing

## Usage Example
```tsx
import { sendEmail } from '../utils/emailService'

function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Portfolio Inquiry',
      message: 'Hello, I would like to discuss...'
    }
    
    try {
      await sendEmail(formData)
      alert('Message sent successfully!')
    } catch (error) {
      alert('Failed to send message. Please try again.')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```
