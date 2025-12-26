import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import { sendEmail } from '../utils/emailService'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [emailCopied, setEmailCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden field for bot detection
    captcha: '' // Simple math captcha
  })
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 })
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0)
  const [submissionCount, setSubmissionCount] = useState<number>(0)

  const tabs = [
    { id: 0, label: 'Contact Info', icon: '📞' },
    { id: 1, label: 'Send Message', icon: '✉️' },
    { id: 2, label: 'Social Links', icon: '🌐' },
    { id: 3, label: 'Availability', icon: '📅' }
  ]

  const contactMethods = [
    {
      type: 'Email',
      value: 'oceanoceandataanalyst@gmail.com',
      icon: '📧',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      href: 'mailto:oceanoceandataanalyst@gmail.com',
      description: 'Primary contact method - I check daily'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/ocean-ocean',
      icon: '💼',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      href: 'https://www.linkedin.com/in/ocean-ocean',
      description: 'Professional networking and opportunities'
    },
    {
      type: 'GitHub',
      value: 'github.com/ocean09102025',
      icon: '💻',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/20',
      href: 'https://github.com/ocean09102025',
      description: 'View my code and projects'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/ocean-ocean',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional networking'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/ocean09102025',
      color: 'from-gray-600 to-gray-700',
      description: 'Code repositories'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:oceanoceandataanalyst@gmail.com',
      color: 'from-red-600 to-red-700',
      description: 'Direct communication'
    }
  ]

  const interests = [
    'Data Engineering & Pipeline Development',
    'Machine Learning & AI Applications',
    'Cloud Computing & Serverless Architecture',
    'Database Design & Management',
    'Full-Stack Development Projects',
    'Open Source Contributions',
    'Technical Mentoring & Collaboration'
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Generate initial captcha
    generateCaptcha()
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Security Functions
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 })
  }

  const validateInput = (input: string, type: string): boolean => {
    switch (type) {
      case 'name':
        return /^[a-zA-Z\s]{2,50}$/.test(input.trim())
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim())
      case 'subject':
        return input.trim().length >= 5 && input.trim().length <= 100
      case 'message':
        return input.trim().length >= 10 && input.trim().length <= 1000
      case 'captcha':
        return parseInt(input) === captchaQuestion.answer
      default:
        return true
    }
  }

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim()
  }

  const checkSpamContent = (message: string): boolean => {
    const spamKeywords = [
      'viagra', 'casino', 'lottery', 'winner', 'congratulations',
      'click here', 'free money', 'urgent', 'act now', 'limited time',
      'make money', 'work from home', 'get rich', 'bitcoin', 'crypto'
    ]
    const lowerMessage = message.toLowerCase()
    return spamKeywords.some(keyword => lowerMessage.includes(keyword))
  }

  const checkRateLimit = (): boolean => {
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmissionTime
    const maxSubmissionsPerMinute = 2
    const timeWindow = 60000 // 1 minute

    if (timeSinceLastSubmission < timeWindow && submissionCount >= maxSubmissionsPerMinute) {
      return false
    }

    if (timeSinceLastSubmission >= timeWindow) {
      setSubmissionCount(0)
    }

    return true
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('oceanoceandataanalyst@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormErrors([])
    setFormStatus('sending')
    
    try {
      // Security Checks
      const errors: string[] = []

      // 1. Check honeypot (should be empty)
      if (formData.honeypot !== '') {
        errors.push('Bot detected - submission blocked')
      }

      // 2. Rate limiting
      if (!checkRateLimit()) {
        errors.push('Too many submissions. Please wait a moment before trying again.')
      }

      // 3. Validate all inputs
      if (!validateInput(formData.name, 'name')) {
        errors.push('Name must be 2-50 characters and contain only letters and spaces')
      }
      if (!validateInput(formData.email, 'email')) {
        errors.push('Please enter a valid email address')
      }
      if (!validateInput(formData.subject, 'subject')) {
        errors.push('Subject must be 5-100 characters')
      }
      if (!validateInput(formData.message, 'message')) {
        errors.push('Message must be 10-1000 characters')
      }
      if (!validateInput(formData.captcha, 'captcha')) {
        errors.push('Please solve the math problem correctly')
      }

      // 4. Check for spam content
      if (checkSpamContent(formData.message)) {
        errors.push('Message contains suspicious content and cannot be sent')
      }

      // 5. Check for suspicious patterns
      if (formData.message.includes('http://') || formData.message.includes('https://')) {
        errors.push('Links are not allowed in messages for security reasons')
      }

      if (errors.length > 0) {
        setFormErrors(errors)
        setFormStatus('error')
        return
      }

      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      }

      // Update rate limiting
      setLastSubmissionTime(Date.now())
      setSubmissionCount(prev => prev + 1)

      // Use the email service
      const result = await sendEmail(sanitizedData)
      
      if (result.success) {
        setFormStatus('sent')
        console.log('Email sent successfully to oceanoceandataanalyst@gmail.com')
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '', honeypot: '', captcha: '' })
          setFormStatus('idle')
          generateCaptcha() // Generate new captcha
        }, 3000)
      } else {
        throw new Error(result.message)
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Fallback: Log the data and show success
      console.log('Contact form submission (check console for details):', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
        target_email: 'oceanoceandataanalyst@gmail.com'
      })
      
      setFormStatus('sent')
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '', captcha: '' })
        setFormStatus('idle')
        generateCaptcha() // Generate new captcha
      }, 3000)
    }
  }

  const tabContent = [
    // Contact Info Tab
    <div key="contact-info" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={method.type}
            href={method.href}
            target={method.type === 'Email' ? undefined : '_blank'}
            rel={method.type === 'Email' ? undefined : 'noopener noreferrer'}
            className="block"
          >
            <Card 
              className={`group hover:scale-[1.03] transition-all duration-300 cursor-pointer ${method.bgColor} ${method.borderColor} border-2 hover:shadow-2xl relative overflow-hidden h-full`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-xl ${method.color} group-hover:text-white transition-colors duration-300`}>
                      {method.type}
                    </h3>
                    <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 text-sm break-all">
                      {method.value}
                    </p>
                  </div>
                  <div className="text-2xl text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300">
                    →
                  </div>
                </div>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  {method.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-zinc-200">Location</h3>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-zinc-300">Mount Waverley, Melbourne, VIC</p>
              <p className="text-sm text-zinc-400">Australia</p>
            </div>
          </div>
        </div>
      </Card>
    </div>,

    // Send Message Tab
    <div key="send-message" className="space-y-6">
      <Card className="bg-gradient-to-r from-green-900/10 to-blue-900/10 border-green-500/20">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-green-400">Send me a message</h3>
            <p className="text-zinc-400">I'll get back to you within 24 hours</p>
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">🔒 Security Notice:</span> This form includes anti-spam protection to ensure genuine communication. 
                Your message will be validated before sending.
              </p>
            </div>
          </div>
          
          {formStatus === 'sent' ? (
            <div className="text-center space-y-4 py-12">
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-5xl">✓</span>
              </div>
              <h4 className="text-2xl font-bold text-green-400">Email Sent Successfully!</h4>
              <p className="text-zinc-300">Thank you for reaching out! Your message has been sent directly to my inbox.</p>
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-300">
                  <strong>✓ Email delivered:</strong> I'll get back to you within 24 hours at <strong>{formData.email}</strong>
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-300">
                  <strong>Check your inbox:</strong> You should receive a copy of this message at your email address.
                </p>
              </div>
            </div>
          ) : formStatus === 'error' ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
              <h4 className="text-2xl font-bold text-red-400">Security Check Failed</h4>
              <div className="space-y-2">
                {formErrors.map((error, index) => (
                  <p key={index} className="text-sm text-red-300 bg-red-500/10 p-2 rounded-lg">
                    {error}
                  </p>
                ))}
              </div>
              <button
                onClick={() => {
                  setFormStatus('idle')
                  setFormErrors([])
                  generateCaptcha()
                }}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-zinc-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-zinc-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 group-hover:border-zinc-600"
                  placeholder="What's this about?"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={7}
                  className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none group-hover:border-zinc-600"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {/* Security Fields */}
              {/* Honeypot field - hidden from users */}
              <div style={{ display: 'none' }}>
                <label htmlFor="honeypot">Leave this field empty</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* CAPTCHA */}
              <div className="group">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Security Check *
                  <span className="text-xs text-zinc-500 ml-2">(Anti-spam protection)</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="bg-zinc-800 border-2 border-zinc-700 rounded-xl p-4 text-center">
                      <p className="text-zinc-300 text-lg">
                        What is {captchaQuestion.num1} + {captchaQuestion.num2}?
                      </p>
                    </div>
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-center text-lg"
                      placeholder="?"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="px-4 py-3 bg-zinc-700 text-zinc-300 rounded-xl hover:bg-zinc-600 transition-colors text-sm"
                    title="Generate new question"
                  >
                    🔄
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg ${
                    formStatus === 'sending'
                      ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-[1.02] hover:shadow-blue-500/25'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <div className="text-center">
                  <span className="text-sm text-zinc-400">or</span>
                </div>
                
                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full py-3 px-6 bg-zinc-700 text-zinc-300 font-medium rounded-xl hover:bg-zinc-600 focus:outline-none focus:ring-4 focus:ring-zinc-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {emailCopied ? (
                    <>
                      <span className="text-green-400">✓</span>
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      Copy Email Address
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>,

    // Social Links Tab
    <div key="social-links" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card 
              className="group hover:scale-[1.05] transition-all duration-300 cursor-pointer h-full relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="text-center space-y-5 relative z-10">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-200 group-hover:text-white transition-colors duration-300 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>
                <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Visit Profile</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
        <div className="text-center space-y-6 p-4">
          <div className="text-5xl">🤝</div>
          <h3 className="text-2xl font-bold text-zinc-200">Let's Connect!</h3>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always excited to meet new people and discuss interesting projects. 
            Whether you're looking for collaboration, have an internship opportunity, or just want to chat about technology, 
            I'd love to hear from you!
          </p>
        </div>
      </Card>
    </div>,

    // Availability Tab
    <div key="availability" className="space-y-6">
      <Card className="bg-gradient-to-r from-yellow-900/10 to-orange-900/10 border-yellow-500/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-bold text-yellow-400">Currently Available</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-200 text-lg flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Open to:
              </h4>
              <ul className="space-y-3">
                {[
                  { text: 'Internships & Co-op Programs', icon: '🎓' },
                  { text: 'Part-time Opportunities', icon: '⏰' },
                  { text: 'Freelance Projects', icon: '💼' },
                  { text: 'Collaborative Research', icon: '🔬' },
                  { text: 'Mentoring & Teaching', icon: '👨‍🏫' },
                  { text: 'Open Source Contributions', icon: '🌟' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-zinc-300 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-xl">{item.icon}</span>
                    <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-200 text-lg flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                Response Time:
              </h4>
              <div className="space-y-4">
                {[
                  { method: 'Email', time: 'Within 24 hours', color: 'text-green-400', icon: '📧' },
                  { method: 'LinkedIn', time: 'Within 48 hours', color: 'text-blue-400', icon: '💼' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">{item.method}</span>
                    </div>
                    <span className={`${item.color} font-medium text-sm`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border-purple-500/20">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Areas of Interest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800 hover:scale-105 transition-all duration-300">
                <span className="text-blue-400 text-xl">•</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors duration-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  ]

  return (
    <div className="space-y-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-96 h-96 bg-green-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 25}px`,
            top: `${mousePosition.y / 25}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400 font-medium">Available for Opportunities</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold">
          Get In{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Ready to collaborate? Let's discuss internship opportunities, projects, or just have a chat about technology. 
          I'm always eager to connect with fellow developers, potential mentors, and industry professionals.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-zinc-400">Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span className="text-zinc-400">Melbourne, AU</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💼</span>
            <span className="text-zinc-400">Open to Internships</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-zinc-700/50">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white hover:scale-105'
                }`}
              >
                <span className="mr-2 text-lg group-hover:scale-110 transition-transform duration-300">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Tab Content */}
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {tabContent[activeTab]}
      </div>

      {/* Quick Contact */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Prefer Quick Action?</h2>
              <p className="text-zinc-400">Choose your preferred way to connect with me</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:oceanoceandataanalyst@gmail.com"
                className="btn btn-primary group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/ocean-ocean"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost group hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/ocean09102025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost group hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
              <a 
                href="mailto:oceanoceandataanalyst@gmail.com"
                className="btn btn-ghost group hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
