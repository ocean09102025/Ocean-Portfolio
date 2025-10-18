import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentQuote, setCurrentQuote] = useState(0)
  const [showTechnologies, setShowTechnologies] = useState(false)

  const tabs = [
    { id: 0, label: 'Overview', icon: '👨‍💻' },
    { id: 1, label: 'Academic', icon: '🎓' },
    { id: 2, label: 'Experience', icon: '💼' },
    { id: 3, label: 'Goals', icon: '🚀' },
    { id: 4, label: 'Story', icon: '📖' }
  ]

  const personalQuotes = [
    "Every line of code is a step towards solving real-world problems",
    "Learning is not just about grades, it's about building the future",
    "From data to insights, from problems to solutions",
    "Technology should make life better, not just more complex",
    "The best learning happens when theory meets practice"
  ]

  const technologies = [
    { name: 'Python', category: 'Programming', level: 'Advanced', icon: '🐍' },
    { name: 'JavaScript', category: 'Web Development', level: 'Advanced', icon: '⚡' },
    { name: 'React', category: 'Frontend', level: 'Advanced', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', level: 'Intermediate', icon: '🟢' },
    { name: 'TypeScript', category: 'Programming', level: 'Intermediate', icon: '🔷' },
    { name: 'Java', category: 'Programming', level: 'Advanced', icon: '☕' },
    { name: 'C#', category: 'Programming', level: 'Intermediate', icon: '🔵' },
    { name: 'SQL', category: 'Database', level: 'Advanced', icon: '🗄️' },
    { name: 'MongoDB', category: 'Database', level: 'Intermediate', icon: '🍃' },
    { name: 'AWS', category: 'Cloud', level: 'Intermediate', icon: '☁️' },
    { name: 'Machine Learning', category: 'AI/ML', level: 'Advanced', icon: '🤖' },
    { name: 'Data Analysis', category: 'Data Science', level: 'Advanced', icon: '📊' },
    { name: 'Git', category: 'Version Control', level: 'Advanced', icon: '📝' },
    { name: 'Docker', category: 'DevOps', level: 'Intermediate', icon: '🐳' },
    { name: 'Linux', category: 'Operating System', level: 'Intermediate', icon: '🐧' }
  ]

  const achievements = [
    { title: 'High Distinction Grades', count: 6, icon: '🏆', color: 'text-yellow-400', description: 'Consistent academic excellence' },
    { title: 'Major Projects', count: 4, icon: '💻', color: 'text-blue-400', description: 'Hands-on technical experience' },
    { title: 'Technologies Mastered', count: 15, icon: '⚡', color: 'text-green-400', description: 'Versatile skill development', clickable: true },
    { title: 'Team Leadership', count: 1, icon: '👥', color: 'text-purple-400', description: 'Capstone project leadership' }
  ]

  const detailedTimeline = [
    {
      year: '2023',
      title: 'Academic Foundation',
      description: 'Began Computer Science journey at Deakin University',
      details: 'Completed foundational programming and mathematics subjects, achieving first High Distinction in Discrete Mathematics. Built core competencies in computer systems, databases, and programming fundamentals.',
      icon: '🎓',
      color: 'bg-blue-500',
      milestones: ['Discrete Mathematics HD', 'Programming fundamentals', 'Database systems intro']
    },
    {
      year: '2024',
      title: 'Technical Excellence',
      description: 'Achieved consistent High Distinctions and specialized knowledge',
      details: 'Earned HD grades in Applied Algebra and Cloud Computing, demonstrating strong mathematical foundations and cloud architecture skills. Developed expertise in object-oriented programming and data science.',
      icon: '⭐',
      color: 'bg-green-500',
      milestones: ['Applied Algebra HD', 'Cloud Computing HD', 'OOP & Data Science']
    },
    {
      year: '2025',
      title: 'Advanced Mastery & Leadership',
      description: 'Led capstone project and mastered cutting-edge technologies',
      details: 'Achieved triple HD grades in Computational Intelligence, Data Wrangling, and Machine Learning. Led Food Remedy API capstone project, managing database architecture for 60,000+ products and mentoring team members.',
      icon: '👑',
      color: 'bg-purple-500',
      milestones: ['ML & AI HD', 'Data Engineering HD', 'Project Leadership']
    },
    {
      year: '2026',
      title: 'Professional Transition',
      description: 'Completing degree and launching software development career',
      details: 'Final year focus on remaining coursework and professional development. Preparing for software engineering roles with expertise in machine learning, cloud computing, and full-stack development.',
      icon: '🚀',
      color: 'bg-cyan-500',
      milestones: ['Degree completion', 'Professional portfolio', 'Industry readiness']
    }
  ]

  const interests = [
    { name: 'Machine Learning', icon: '🤖', description: 'Exploring AI and ML algorithms', progress: 85 },
    { name: 'Cloud Computing', icon: '☁️', description: 'Building scalable cloud solutions', progress: 80 },
    { name: 'Data Visualization', icon: '📊', description: 'Creating insights from data', progress: 75 },
    { name: 'Open Source', icon: '🔓', description: 'Contributing to community projects', progress: 70 },
    { name: 'Problem Solving', icon: '🧩', description: 'Tackling complex challenges', progress: 90 },
    { name: 'Continuous Learning', icon: '📚', description: 'Always exploring new technologies', progress: 95 }
  ]

  const learningJourney = [
    {
      phase: 'Foundation',
      description: 'Building core programming and mathematical foundations',
      skills: ['Python', 'Java', 'Discrete Math', 'Linear Algebra'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Specialization',
      description: 'Diving deep into data science and cloud technologies',
      skills: ['Machine Learning', 'AWS', 'Database Design', 'Statistics'],
      color: 'from-green-500 to-green-600'
    },
    {
      phase: 'Application',
      description: 'Applying knowledge through real-world projects',
      skills: ['Project Leadership', 'API Development', 'Data Pipelines', 'Team Collaboration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      phase: 'Future',
      description: 'Preparing for professional opportunities and advanced studies',
      skills: ['Advanced ML', 'Cloud Architecture', 'Industry Best Practices', 'Professional Development'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % personalQuotes.length)
    }, 5000)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(quoteInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const tabContent = [
    // Overview Tab
    <div key="overview" className="space-y-8">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-75 animate-ping" />
            <div className="absolute inset-4 rounded-full bg-black/20 flex items-center justify-center">
              <span className="text-5xl">🎓</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Ocean - Computer Science Student</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
            <p className="text-lg text-zinc-300 leading-relaxed relative z-10">
              {personalQuotes[currentQuote]}
            </p>
          </div>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            A passionate Computer Science student at Deakin University, specializing in Data Science with
            a strong foundation in data engineering, cloud computing, and database management.
            Currently in my final year, seeking opportunities to apply my technical skills in real-world scenarios.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={achievement.title}
            className={`text-center group hover:scale-105 transition-all duration-300 hover:shadow-lg ${achievement.clickable ? 'cursor-pointer hover:shadow-green-500/25' : ''
              }`}
            onClick={achievement.clickable ? () => setShowTechnologies(true) : undefined}
          >
            <div className="space-y-4">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.count}
                </div>
                <div className="text-sm font-medium text-zinc-200">{achievement.title}</div>
                <div className="text-xs text-zinc-500">{achievement.description}</div>
                {achievement.clickable && (
                  <div className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view technologies
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* My Academic Journey - Only in Overview */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20 mt-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">My Academic Journey</h2>
            <p className="text-zinc-400">Key milestones and achievements in my Computer Science education</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 rounded-full"></div>
            {detailedTimeline.map((item, index) => (
              <div key={item.year} className="relative flex items-start gap-8 mb-12 group">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {item.year}
                </div>
                <div className="flex-1 space-y-3 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                  </div>
                  <p className="text-zinc-300 text-lg">{item.description}</p>
                  <p className="text-zinc-400">{item.details}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-zinc-300">Key Milestones:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.milestones.map((milestone, milestoneIndex) => (
                        <span key={milestoneIndex} className="px-3 py-1 bg-zinc-700 text-sm rounded-full text-zinc-300">
                          {milestone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Core Strengths & Values - Only in Overview */}
      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20 mt-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Core Strengths & Values</h2>
            <p className="text-zinc-400">What drives me as a student and future professional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Analytical & Critical Thinking',
                description: 'Strong problem-solving abilities with a data-driven approach to challenges',
                icon: '🧠',
                color: 'text-blue-400',
                bgColor: 'from-blue-500/10 to-blue-600/10'
              },
              {
                title: 'Technical Adaptability',
                description: 'Quickly master new technologies and frameworks within weeks',
                icon: '⚡',
                color: 'text-green-400',
                bgColor: 'from-green-500/10 to-green-600/10'
              },
              {
                title: 'Project Management',
                description: 'Consistently deliver milestones on time with full accountability',
                icon: '📋',
                color: 'text-purple-400',
                bgColor: 'from-purple-500/10 to-purple-600/10'
              },
              {
                title: 'Communication',
                description: 'Effective at translating technical concepts for diverse audiences',
                icon: '💬',
                color: 'text-yellow-400',
                bgColor: 'from-yellow-500/10 to-yellow-600/10'
              },
              {
                title: 'Collaboration',
                description: 'Proven ability to work effectively in team environments',
                icon: '🤝',
                color: 'text-cyan-400',
                bgColor: 'from-cyan-500/10 to-cyan-600/10'
              },
              {
                title: 'Leadership',
                description: 'Demonstrated leadership skills in capstone project management',
                icon: '👑',
                color: 'text-red-400',
                bgColor: 'from-red-500/10 to-red-600/10'
              }
            ].map((strength, index) => (
              <div key={strength.title} className="group hover:scale-105 transition-all duration-300">
                <Card className={`h-full bg-gradient-to-br ${strength.bgColor} hover:shadow-lg`}>
                  <div className="space-y-4 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {strength.icon}
                    </div>
                    <h3 className={`font-semibold text-lg ${strength.color} group-hover:text-white transition-colors duration-300`}>
                      {strength.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{strength.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>,

    // Academic Tab
    <div key="academic" className="space-y-6">
      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">Academic Journey</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h4 className="font-semibold">Bachelor of Computer Science</h4>
                <p className="text-sm text-zinc-400">Deakin University, Melbourne • 2023-2026</p>
                <p className="text-sm text-zinc-500">Major in Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-400">Academic Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">High Distinction Subjects</h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Computational Intelligence</li>
                <li>• Data Wrangling</li>
                <li>• Cloud Computing</li>
                <li>• Applied Algebra</li>
                <li>• Discrete Mathematics</li>
                <li>• Machine Learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Key Coursework</h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Data Structures & Algorithms</li>
                <li>• Object-Oriented Development</li>
                <li>• Concurrent Programming</li>
                <li>• Computer Networks</li>
                <li>• Professional Practice</li>
                <li>• Linear Algebra for Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>,

    // Experience Tab
    <div key="experience" className="space-y-6">
      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Project Leadership</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👑</span>
              </div>
              <div>
                <h4 className="font-semibold">Database Lead - Food Remedy API</h4>
                <p className="text-sm text-zinc-400">Capstone Project • 2025</p>
                <p className="text-sm text-zinc-300 mt-2">
                  Architected and developed database backbone for 60K+ products, created automated
                  ingestion pipelines, and mentored teammates while maintaining comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-400">Technical Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-zinc-200">SDN Flow-Table Defense</h4>
              <p className="text-sm text-zinc-400">Network Security • POX Controller</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-zinc-200">Serverless Café Architecture</h4>
              <p className="text-sm text-zinc-400">AWS Cloud • Lambda & SNS</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-zinc-200">2D Game Development</h4>
              <p className="text-sm text-zinc-400">Unity C# • OOP Principles</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-zinc-200">Database Management</h4>
              <p className="text-sm text-zinc-400">MySQL • MongoDB • ERDs</p>
            </div>
          </div>
        </div>
      </Card>
    </div>,

    // Goals Tab
    <div key="goals" className="space-y-8">
      <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/20">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-yellow-400">Career Aspirations</h3>
          <div className="space-y-4">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I'm actively seeking internship opportunities and entry-level positions in data engineering,
              machine learning, and cloud computing. My goal is to apply my academic knowledge to solve
              real-world problems while continuing to grow as a professional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">Short-term Goals (2025-2026)</h4>
                <ul className="text-sm text-zinc-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Secure internship in data engineering or ML
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Complete advanced ML coursework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Build portfolio of real-world projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Graduate with distinction
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400">Long-term Vision (2026+)</h4>
                <ul className="text-sm text-zinc-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span>
                    Data Engineer or ML Engineer role
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span>
                    Master advanced cloud technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span>
                    Lead technical projects and teams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span>
                    Contribute to open-source projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-cyan-400">Learning Interests & Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div key={interest.name} className="group hover:scale-105 transition-all duration-300">
                <Card className="h-full">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {interest.icon}
                      </div>
                      <h4 className="font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors duration-300">
                        {interest.name}
                      </h4>
                      <p className="text-sm text-zinc-500 mt-2">{interest.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Progress</span>
                        <span className="text-cyan-400">{interest.progress}%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div
                          className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${interest.progress}%` : '0%' }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>,

    // Story Tab
    <div key="story" className="space-y-8">
      <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-purple-400">My Learning Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningJourney.map((phase, index) => (
              <div key={phase.phase} className="group">
                <Card className="h-full hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      <h4 className="text-xl font-semibold text-zinc-200 group-hover:text-purple-400 transition-colors duration-300">
                        {phase.phase}
                      </h4>
                    </div>
                    <p className="text-zinc-400">{phase.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-zinc-300">Key Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-zinc-700 text-xs rounded-full text-zinc-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-green-400">Personal Philosophy</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-400">Learning Approach</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  I believe in learning through doing. Every project is an opportunity to apply theoretical
                  knowledge to practical problems. I'm not afraid to tackle challenges that push me beyond
                  my current comfort zone.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-green-400">Problem-Solving Mindset</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  I approach problems systematically, breaking them down into manageable components.
                  Data-driven decision making and iterative improvement are at the core of my methodology.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-400">Collaboration & Growth</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  I value teamwork and believe that the best solutions come from diverse perspectives.
                  I'm always eager to learn from others and share my knowledge with the community.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-400">Future Impact</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  My goal is to use technology to make a positive impact. Whether it's through data insights,
                  automation, or innovative solutions, I want to contribute to meaningful progress.
                </p>
              </div>
            </div>
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
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 25}px`,
            top: `${mousePosition.y / 25}px`,
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl lg:text-6xl font-bold">
          About{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Discover my journey as a Computer Science student, my achievements, learning philosophy,
          and aspirations in the world of technology and data science
        </p>
      </div>

      {/* Tab Navigation */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-zinc-700/50">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white hover:scale-105'
                  }`}
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Tab Content */}
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {tabContent[activeTab]}
      </div>

      {/* Technologies Modal */}
      {showTechnologies && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-zinc-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <h2 className="text-2xl font-bold text-green-400">Technologies Mastered</h2>
                </div>
                <button
                  onClick={() => setShowTechnologies(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-zinc-400 mt-2">15 technologies I've mastered through academic projects and self-learning</p>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {tech.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold text-zinc-200 group-hover:text-green-400 transition-colors duration-200">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-zinc-500">{tech.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${tech.level === 'Advanced'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                        }`}>
                        {tech.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-zinc-700 bg-zinc-800/50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400">
                  Total: <span className="text-green-400 font-semibold">15 technologies</span> across multiple domains
                </div>
                <button
                  onClick={() => setShowTechnologies(false)}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
