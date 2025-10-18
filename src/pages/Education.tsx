import React from 'react'
import Card from '../components/Card'
import GradesDashboard from '../components/GradesDashboard'
import { useState, useEffect } from 'react'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredSubject, setHoveredSubject] = useState<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const tabs = [
    { id: 0, label: 'Overview', icon: '🎓' },
    { id: 1, label: 'Grades Dashboard', icon: '📊' },
    { id: 2, label: 'Historical Grades', icon: '📈' },
    { id: 3, label: 'Coursework', icon: '📚' },
    { id: 4, label: 'Timeline', icon: '⏰' }
  ]

  const subjects = [
    // 2025 TRI-1 - Actual Grades
    { code: 'SIT215', name: 'Computational Intelligence', mark: 87, grade: 'HD', year: '2025', semester: 'TRI-1', color: 'from-green-500 to-emerald-500' },
    { code: 'SIT220', name: 'Data Wrangling', mark: 83, grade: 'HD', year: '2025', semester: 'TRI-1', color: 'from-blue-500 to-cyan-500' },
    { code: 'SIT307', name: 'Machine Learning', mark: 80, grade: 'HD', year: '2025', semester: 'TRI-1', color: 'from-indigo-500 to-purple-500' },
    { code: 'SIT221', name: 'Data Structures and Algorithms', mark: 74, grade: 'D', year: '2025', semester: 'TRI-1', color: 'from-gray-500 to-gray-600' },

    // 2024 TRI-2 - Actual Grades
    { code: 'SIT315', name: 'Concurrent and Distributed Programming', mark: 77, grade: 'D', year: '2024', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT292', name: 'Linear Algebra for Data Analysis', mark: 77, grade: 'D', year: '2024', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT202', name: 'Computer Networks and Communication', mark: 73, grade: 'D', year: '2024', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT223', name: 'Professional Practice in Information Technology', mark: 75, grade: 'D', year: '2024', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },

    // 2024 TRI-1 - Actual Grades
    { code: 'SIT233', name: 'Cloud Computing', mark: 83, grade: 'HD', year: '2024', semester: 'TRI-1', color: 'from-purple-500 to-pink-500' },
    { code: 'SIT199', name: 'Applied Algebra and Statistics', mark: 87, grade: 'HD', year: '2024', semester: 'TRI-1', color: 'from-yellow-500 to-orange-500' },
    { code: 'SIT232', name: 'Object-Oriented Development', mark: 75, grade: 'D', year: '2024', semester: 'TRI-1', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT112', name: 'Introduction to Data Science and Artificial Intelligence', mark: 75, grade: 'D', year: '2024', semester: 'TRI-1', color: 'from-gray-500 to-gray-600' },

    // 2023 TRI-2 - Actual Grades
    { code: 'SIT192', name: 'Discrete Mathematics', mark: 82, grade: 'HD', year: '2023', semester: 'TRI-2', color: 'from-red-500 to-pink-500' },
    { code: 'SIT111', name: 'Computer Systems', mark: 77, grade: 'D', year: '2023', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT102', name: 'Introduction to Programming', mark: 73, grade: 'D', year: '2023', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' },
    { code: 'SIT103', name: 'Database Fundamentals', mark: 67, grade: 'C', year: '2023', semester: 'TRI-2', color: 'from-gray-500 to-gray-600' }
  ]

  const coursework = [
    {
      category: 'Data Science & AI',
      icon: '🤖',
      color: 'text-green-400',
      subjects: [
        'Introduction to Data Science and AI',
        'Machine Learning',
        'Data Wrangling',
        'Computational Intelligence',
        'Applied Algebra and Statistics',
        'Linear Algebra for Data Analysis'
      ]
    },
    {
      category: 'Software Development',
      icon: '💻',
      color: 'text-blue-400',
      subjects: [
        'Object-Oriented Development',
        'Data Structures and Algorithms',
        'Concurrent and Distributed Programming',
        'Introduction to Programming',
        'Computer Systems'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      color: 'text-purple-400',
      subjects: [
        'Cloud Computing',
        'Computer Networks and Communication',
        'Database Fundamentals',
        'Professional Practice in IT'
      ]
    }
  ]

  const timeline = [
    {
      year: '2023',
      title: 'Started Computer Science Journey',
      description: 'Began Bachelor of Computer Science at Deakin University with focus on Data Science',
      icon: '🎓',
      color: 'bg-blue-500',
      achievements: ['First semester completed', 'Foundation subjects', 'Discrete Mathematics HD']
    },
    {
      year: '2024',
      title: 'Academic Excellence',
      description: 'Achieved multiple HD grades in Cloud Computing, Applied Algebra, and other key subjects',
      icon: '⭐',
      color: 'bg-green-500',
      achievements: ['4 HD grades', 'Cloud Computing expertise', 'Strong mathematical foundation']
    },
    {
      year: '2025',
      title: 'Capstone Leadership',
      description: 'Led database development for 60K+ products in Food Remedy API project',
      icon: '👑',
      color: 'bg-purple-500',
      achievements: ['Database Lead role', '60K+ products processed', 'Team leadership experience']
    },
    {
      year: '2026',
      title: 'Expected Graduation',
      description: 'Completing final year with focus on machine learning and advanced algorithms',
      icon: '🚀',
      color: 'bg-yellow-500',
      achievements: ['Final year completion', 'Advanced coursework', 'Career preparation']
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const tabContent = [
    // Overview Tab
    <div key="overview" className="space-y-8">
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 animate-pulse" />
          <div>
            <h3 className="text-3xl font-bold text-blue-400">Bachelor of Computer Science</h3>
            <p className="text-xl text-zinc-300">Major in Data Science</p>
            <p className="text-zinc-400">Deakin University, Melbourne</p>
            <div className="mt-4 flex justify-center gap-4 text-sm text-zinc-500">
              <span>2023 - 2026</span>
              <span>•</span>
              <span>Expected Graduation: July 2026</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'High Distinctions', value: '6', icon: '🏆', color: 'text-yellow-400' },
          { label: 'Distinctions', value: '9', icon: '🥇', color: 'text-blue-400' },
          { label: 'Units Completed', value: '16', icon: '📚', color: 'text-green-400' },
          { label: 'Average Grade', value: '78', icon: '📊', color: 'text-purple-400' }
        ].map((stat, index) => (
          <Card key={stat.label} className={`text-center group hover:scale-105 transition-all duration-300 delay-${index * 100}`}>
            <div className="space-y-2">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Academic Excellence */}
      <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-zinc-400">Key strengths and future aspirations in my academic journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">💪</div>
                    <h3 className="font-semibold text-zinc-200 text-xl group-hover:text-green-400 transition-colors duration-300">Key Strengths</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Consistent High Distinction performance in data science courses',
                      'Strong mathematical and statistical foundation',
                      'Excellent results in cloud computing and AI subjects',
                      'Proven ability in software development and algorithms',
                      'Leadership experience in capstone project',
                      'Quick adaptation to new technologies and frameworks'
                    ].map((strength, index) => (
                      <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <span className="text-green-400 mt-1 text-lg">✓</span>
                        <span className="text-zinc-300 group-hover/item:text-white transition-colors duration-300">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <h3 className="font-semibold text-zinc-200 text-xl group-hover:text-blue-400 transition-colors duration-300">Future Goals</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Complete capstone project with distinction',
                      'Maintain high academic performance through graduation',
                      'Apply knowledge to industry internship opportunities',
                      'Continue learning emerging technologies and trends',
                      'Contribute to open-source data science projects',
                      'Pursue graduate studies in machine learning or data engineering'
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <span className="text-blue-400 mt-1 text-lg">→</span>
                        <span className="text-zinc-300 group-hover/item:text-white transition-colors duration-300">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>

      {/* Academic Impact */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Academic Impact</h2>
            <p className="text-zinc-400">Quantifying my learning journey and achievements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center p-6">
                <div className="text-4xl mb-3">📖</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-sm text-zinc-400">Subjects Completed</div>
              </Card>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center p-6">
                <div className="text-4xl mb-3">⏰</div>
                <div className="text-4xl font-bold text-green-400 mb-2">3</div>
                <div className="text-sm text-zinc-400">Years of Study</div>
              </Card>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center p-6">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">78</div>
                <div className="text-sm text-zinc-400">Average Mark</div>
              </Card>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center p-6">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">2026</div>
                <div className="text-sm text-zinc-400">Expected Graduation</div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>,

    // Grades Dashboard Tab
    <div key="grades-dashboard" className="space-y-6">
      <GradesDashboard />
    </div>,

    // Historical Grades Tab
    <div key="historical-grades" className="space-y-6">
      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-400">Historical Academic Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={subject.code}
                className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group hover:scale-105 ${subject.grade === 'HD'
                  ? 'border-green-500/20 bg-green-500/5'
                  : 'border-zinc-700 bg-zinc-800/50'
                  }`}
                onMouseEnter={() => setHoveredSubject(subject)}
                onMouseLeave={() => setHoveredSubject(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-zinc-400">{subject.code}</span>
                  <span className={`px-2 py-1 text-xs rounded ${subject.grade === 'HD'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                    }`}>
                    {subject.grade}
                  </span>
                </div>
                <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {subject.name}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-zinc-300">{subject.mark}</span>
                  <span className="text-xs text-zinc-500">{subject.year} {subject.semester}</span>
                </div>
                {hoveredSubject?.code === subject.code && (
                  <div className="mt-3 pt-3 border-t border-zinc-700">
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${subject.color} rounded-full transition-all duration-500`}
                        style={{ width: `${subject.mark}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>,

    // Coursework Tab
    <div key="coursework" className="space-y-6">
      {coursework.map((category, index) => (
        <Card key={category.category} className={`group hover:scale-105 transition-all duration-300 delay-${index * 200}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{category.icon}</div>
              <h3 className={`text-xl font-semibold ${category.color}`}>{category.category}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {category.subjects.map((subject, idx) => (
                <div key={idx} className="flex items-center gap-2 text-zinc-300 group-hover:text-white transition-colors duration-300">
                  <span className="text-green-400">•</span>
                  <span className="text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>,

    // Timeline Tab
    <div key="timeline" className="space-y-6">
      <Card>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">Academic Journey</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500"></div>
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex items-start gap-6 mb-8 group">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.year}
                </div>
                <div className="flex-1 space-y-3 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-zinc-200">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zinc-800 text-xs rounded text-zinc-400">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
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
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 30}px`,
            top: `${mousePosition.y / 30}px`,
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl lg:text-6xl font-bold">
          Education &{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          My academic journey at Deakin University, showcasing consistent excellence, continuous growth,
          and a passion for learning in Computer Science and Data Science.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-zinc-400">Bachelor of Computer Science</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <span className="text-zinc-400">Data Science Major</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-zinc-400">6 HD Grades</span>
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
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${activeTab === tab.id
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
    </div>
  )
}
