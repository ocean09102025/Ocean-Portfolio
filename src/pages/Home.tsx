import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const roles = [
    "Computer Science Student",
    "Data Science Enthusiast", 
    "Future Data Engineer",
    "Machine Learning Learner",
    "Cloud Computing Explorer",
    "Database Design Student"
  ]

  const quotes = [
    "Turning data into insights, one algorithm at a time",
    "Building the future through code and curiosity",
    "Learning today, innovating tomorrow",
    "From student to solution architect",
    "Data-driven decisions, student-powered passion"
  ]

  const achievements = [
    { icon: '🏆', title: 'Academic Excellence', value: '6 HD Grades', color: 'text-yellow-400' },
    { icon: '💻', title: 'Project Portfolio', value: '10 Projects', color: 'text-blue-400' },
    { icon: '📚', title: 'Learning Journey', value: '12+ Subjects', color: 'text-green-400' },
    { icon: '🚀', title: 'Graduation Countdown', value: '6 Months Left', color: 'text-purple-400' }
  ]

  const learningGoals = [
    { skill: 'Machine Learning', progress: 85, icon: '🤖' },
    { skill: 'Cloud Computing', progress: 80, icon: '☁️' },
    { skill: 'Data Engineering', progress: 75, icon: '⚙️' },
    { skill: 'Software Development', progress: 90, icon: '💻' }
  ]

  useEffect(() => {
    setIsVisible(true)
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearInterval(roleInterval)
      clearInterval(quoteInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="space-y-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Available for Internships</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Ocean
                  </span>
                </h1>
                <div className="h-20 flex items-center">
                  <span className="text-3xl lg:text-4xl text-zinc-300 font-medium">
                    {roles[currentRole]}
                  </span>
                  <span className="animate-pulse text-blue-400 ml-3 text-4xl">|</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
                <p className="text-xl text-zinc-300 leading-relaxed relative z-10">
                  {quotes[currentQuote]}
                </p>
              </div>
              
              <p className="text-lg text-zinc-400 leading-relaxed">
                Passionate Computer Science student at Deakin University, specializing in{' '}
                <span className="text-blue-400 font-semibold">Data Science</span>. 
                Currently building expertise in{' '}
                <span className="text-green-400 font-semibold">machine learning</span>,{' '}
                <span className="text-purple-400 font-semibold">cloud computing</span>, and{' '}
                <span className="text-yellow-400 font-semibold">database engineering</span> 
                through hands-on projects and academic excellence.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-zinc-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">6</div>
                  <div className="text-sm text-zinc-500">HD Grades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">12+</div>
                  <div className="text-sm text-zinc-500">Subjects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">6</div>
                  <div className="text-sm text-zinc-500">Months Left</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                className="btn btn-primary group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25" 
                href="https://github.com/ocean09102025" 
                target="_blank"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View My Code
              </a>
              <a 
                className="btn btn-ghost group hover:scale-105 transition-all duration-300" 
                href="https://www.linkedin.com/in/ocean09102025" 
                target="_blank"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a 
                className="btn btn-ghost group hover:scale-105 transition-all duration-300" 
                href="/projects"
              >
                <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View Projects
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <Card className="group hover:scale-105 transition-all duration-500 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 animate-pulse" />
                    <div className="absolute inset-0 h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-75 animate-ping" />
                    <div className="absolute inset-2 rounded-2xl bg-black/20 flex items-center justify-center">
                      <span className="text-4xl">🎓</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">Ocean</div>
                    <div className="text-sm text-zinc-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Melbourne, VIC, Australia
                    </div>
                    <div className="text-sm text-zinc-300 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      oceanocean1205@gmail.com
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎓</span>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">Bachelor of Computer Science</div>
                      <div className="text-xs text-zinc-400">Major: Data Science • Deakin University</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
      <div>
                      <div className="text-sm font-medium text-zinc-200">Expected Graduation</div>
                      <div className="text-xs text-zinc-400">July 2026 • 6 months remaining</div>
        </div>
      </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
          <div>
                      <div className="text-sm font-medium text-zinc-200">Academic Performance</div>
                      <div className="text-xs text-zinc-400">6 High Distinctions • 78% Average</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h2 className="text-3xl font-bold">Student Achievements</h2>
          </div>
          <p className="text-zinc-400">My academic journey and learning milestones</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className="text-center group hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl font-bold ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.value}
                  </div>
                  <div className="text-sm text-zinc-400">{achievement.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Progress */}
      <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className="text-3xl font-bold">Learning Journey</h2>
              </div>
              <p className="text-zinc-400">Skills I'm actively developing through coursework and projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningGoals.map((goal, index) => (
                <div key={goal.skill} className="space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {goal.icon}
                      </span>
                      <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                        {goal.skill}
                      </span>
                    </div>
                    <span className="text-sm text-zinc-500">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1500 group-hover:shadow-lg"
                      style={{ 
                        width: isVisible ? `${goal.progress}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Academic Focus Areas */}
      <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-3xl font-bold">Academic Focus</h2>
          </div>
          <p className="text-zinc-400">Key areas I'm specializing in during my studies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Data Science & AI',
              icon: '🤖',
              description: 'Machine learning, statistical analysis, and predictive modeling',
              courses: ['Machine Learning', 'Data Wrangling', 'Computational Intelligence']
            },
            {
              title: 'Cloud Computing',
              icon: '☁️',
              description: 'AWS services, serverless architecture, and distributed systems',
              courses: ['Cloud Computing', 'Concurrent Programming', 'Database Systems']
            },
            {
              title: 'Software Development',
              icon: '💻',
              description: 'Full-stack development, algorithms, and system design',
              courses: ['Data Structures', 'OOP Development', 'Computer Networks']
            }
          ].map((area, index) => (
            <Card key={area.title} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-zinc-400 mt-2">{area.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-zinc-300">Relevant Courses:</h4>
                  <ul className="space-y-1">
                    {area.courses.map((course, idx) => (
                      <li key={idx} className="text-xs text-zinc-500 flex items-center gap-2">
                        <span className="text-blue-400">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-3xl font-bold">Ready to Learn & Collaborate?</h2>
            </div>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
              I'm actively seeking internship opportunities, collaborative projects, and mentorship experiences. 
              As a dedicated student with strong academic performance and hands-on project experience, 
              I'm excited to contribute to real-world challenges while continuing to grow my skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-primary group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </a>
              <a 
                href="/projects" 
                className="btn btn-ghost group hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View My Work
              </a>
              <a 
                href="/education" 
                className="btn btn-ghost group hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Academic Journey
              </a>
          </div>
        </div>
      </Card>
    </section>
    </div>
  )
}
