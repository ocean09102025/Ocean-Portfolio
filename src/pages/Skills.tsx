import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredSkill, setHoveredSkill] = useState<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedStat, setSelectedStat] = useState<{
    type: 'total' | 'advanced' | 'average' | 'categories' | null
    title: string
    skills: any[]
  }>({ type: null, title: '', skills: [] })

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🚀', color: 'text-zinc-400' },
    { id: 'programming', label: 'Programming', icon: '💻', color: 'text-blue-400' },
    { id: 'data', label: 'Data Science', icon: '📊', color: 'text-green-400' },
    { id: 'cloud', label: 'Cloud & DevOps', icon: '☁️', color: 'text-purple-400' },
    { id: 'database', label: 'Database', icon: '🗄️', color: 'text-yellow-400' },
    { id: 'security', label: 'Security', icon: '🔒', color: 'text-red-400' },
    { id: 'soft', label: 'Soft Skills', icon: '🤝', color: 'text-cyan-400' }
  ]

  const skills = [
    // Programming Languages
    {
      id: 'python',
      name: 'Python',
      level: 90,
      category: 'programming',
      icon: '🐍',
      color: 'from-blue-500 to-blue-600',
      description: 'Advanced Python programming with experience in data science, web development, and automation',
      projects: ['Food Remedy API', 'Data Wrangling', 'Machine Learning']
    },
    {
      id: 'sql',
      name: 'SQL',
      level: 78,
      category: 'programming',
      icon: '🗃️',
      color: 'from-green-500 to-green-600',
      description: 'Intermediate SQL skills for database querying, optimization, and data analysis',
      projects: ['Database Design', 'Query Optimization', 'Data Analysis']
    },
    {
      id: 'csharp',
      name: 'C#',
      level: 73,
      category: 'programming',
      icon: '🔷',
      color: 'from-purple-500 to-purple-600',
      description: 'Object-oriented programming with C# and Unity for game development',
      projects: ['2D Game Development', 'Unity Development', 'OOP Principles']
    },
    {
      id: 'cpp',
      name: 'C++',
      level: 78,
      category: 'programming',
      icon: '⚙️',
      color: 'from-blue-500 to-indigo-600',
      description: 'Systems programming and game development with C++ and SplashKit',
      projects: ['Lost in Space Game', 'Game Development', 'Memory Management']
    },
    {
      id: 'java',
      name: 'Java',
      level: 73,
      category: 'programming',
      icon: '☕',
      color: 'from-red-500 to-orange-600',
      description: 'Object-oriented programming and software development with Java',
      projects: ['OOP Development', 'Data Structures', 'Algorithm Implementation']
    },

    // Data Science & ML
    {
      id: 'pandas',
      name: 'Pandas',
      level: 85,
      category: 'data',
      icon: '🐼',
      color: 'from-green-500 to-emerald-500',
      description: 'Data manipulation and analysis with Pandas for large datasets',
      projects: ['Data Wrangling', 'Data Analysis', 'Data Cleaning']
    },
    {
      id: 'numpy',
      name: 'NumPy',
      level: 80,
      category: 'data',
      icon: '🔢',
      color: 'from-blue-500 to-cyan-500',
      description: 'Numerical computing and array operations for scientific computing',
      projects: ['Linear Algebra', 'Statistical Computing', 'Data Processing']
    },
    {
      id: 'scikit',
      name: 'Scikit-learn',
      level: 80,
      category: 'data',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      description: 'Machine learning algorithms for classification, regression, and clustering',
      projects: ['Machine Learning', 'Model Training', 'Predictive Analytics']
    },
    {
      id: 'matplotlib',
      name: 'Matplotlib',
      level: 78,
      category: 'data',
      icon: '📈',
      color: 'from-yellow-500 to-orange-500',
      description: 'Data visualization and plotting for insights and presentations',
      projects: ['Data Visualization', 'Charts & Graphs', 'Statistical Plots']
    },
    {
      id: 'seaborn',
      name: 'Seaborn',
      level: 73,
      category: 'data',
      icon: '📊',
      color: 'from-pink-500 to-purple-500',
      description: 'Statistical data visualization with beautiful and informative plots',
      projects: ['Statistical Visualization', 'Data Exploration', 'Correlation Analysis']
    },
    {
      id: 'xgboost',
      name: 'XGBoost',
      level: 78,
      category: 'data',
      icon: '🚀',
      color: 'from-green-500 to-teal-500',
      description: 'Gradient boosting algorithms for high-performance machine learning',
      projects: ['Heart Disease Prediction', 'Ensemble Learning', 'Model Optimization']
    },
    {
      id: 'bokeh',
      name: 'Bokeh',
      level: 73,
      category: 'data',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      description: 'Interactive data visualization for web-based analytics',
      projects: ['NHANES Data Mining', 'Interactive Dashboards', 'Data Exploration']
    },
    {
      id: 'plotly',
      name: 'Plotly',
      level: 78,
      category: 'data',
      icon: '📈',
      color: 'from-cyan-500 to-blue-500',
      description: 'Interactive plotting and data visualization for data science',
      projects: ['Stellar StackExchange Analysis', 'Geographic Visualization', 'Interactive Charts']
    },

    // Cloud & DevOps
    {
      id: 'aws',
      name: 'AWS',
      level: 80,
      category: 'cloud',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
      description: 'Amazon Web Services including Lambda, SNS, RDS, and CloudWatch',
      projects: ['Serverless Architecture', 'Cloud Computing', 'AWS Services']
    },
    {
      id: 'docker',
      name: 'Docker',
      level: 78,
      category: 'cloud',
      icon: '🐳',
      color: 'from-blue-500 to-cyan-500',
      description: 'Containerization and deployment with Docker for scalable applications',
      projects: ['Containerization', 'Deployment', 'Microservices']
    },
    {
      id: 'git',
      name: 'Git',
      level: 85,
      category: 'cloud',
      icon: '🔀',
      color: 'from-red-500 to-orange-500',
      description: 'Version control and collaboration with Git and GitHub',
      projects: ['Version Control', 'Collaboration', 'Code Management']
    },
    {
      id: 'dotnet',
      name: '.NET',
      level: 73,
      category: 'cloud',
      icon: '🔷',
      color: 'from-purple-500 to-indigo-500',
      description: 'Backend development with .NET framework and API development',
      projects: ['Food Remedy API', 'Backend Development', 'API Integration']
    },
    {
      id: 'swagger',
      name: 'Swagger',
      level: 73,
      category: 'cloud',
      icon: '📋',
      color: 'from-green-500 to-emerald-500',
      description: 'API documentation and testing with Swagger/OpenAPI',
      projects: ['API Documentation', 'REST APIs', 'API Testing']
    },
    {
      id: 'cloudwatch',
      name: 'CloudWatch',
      level: 70,
      category: 'cloud',
      icon: '📊',
      color: 'from-orange-500 to-yellow-500',
      description: 'AWS monitoring and logging for cloud applications',
      projects: ['Serverless Café', 'Application Monitoring', 'Log Analysis']
    },

    // Database
    {
      id: 'mysql',
      name: 'MySQL',
      level: 80,
      category: 'database',
      icon: '🐬',
      color: 'from-blue-500 to-blue-600',
      description: 'Relational database management and SQL query optimization',
      projects: ['Database Design', 'Query Optimization', 'Data Management']
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      level: 85,
      category: 'database',
      icon: '🍃',
      color: 'from-green-500 to-green-600',
      description: 'NoSQL database design and management for scalable applications',
      projects: ['Food Remedy API', 'Database Architecture', 'Data Modeling']
    },

    // Security
    {
      id: 'sdn',
      name: 'SDN',
      level: 78,
      category: 'security',
      icon: '🌐',
      color: 'from-red-500 to-pink-500',
      description: 'Software-Defined Networking and network security principles',
      projects: ['SDN Flow-Table Defense', 'Network Security', 'DDoS Defense']
    },
    {
      id: 'mininet',
      name: 'Mininet',
      level: 70,
      category: 'security',
      icon: '🌐',
      color: 'from-teal-500 to-cyan-600',
      description: 'Network emulation and testing for SDN environments',
      projects: ['Network Testing', 'SDN Development', 'Topology Simulation']
    },
    {
      id: 'pox',
      name: 'POX Controller',
      level: 78,
      category: 'security',
      icon: '🎮',
      color: 'from-blue-500 to-purple-600',
      description: 'SDN controller programming for network management',
      projects: ['Flow-Table Defense', 'SDN Control', 'Network Programming']
    },
    {
      id: 'mqtt',
      name: 'MQTT',
      level: 70,
      category: 'security',
      icon: '📨',
      color: 'from-green-500 to-teal-500',
      description: 'IoT messaging protocol for smart home systems',
      projects: ['IoT Smart Home', 'Device Communication', 'Protocol Implementation']
    },
    {
      id: 'cisco',
      name: 'Cisco Packet Tracer',
      level: 70,
      category: 'security',
      icon: '📡',
      color: 'from-blue-500 to-cyan-500',
      description: 'Network simulation and design for IoT systems',
      projects: ['IoT Simulation', 'Network Design', 'Protocol Testing']
    },

    // Soft Skills
    {
      id: 'leadership',
      name: 'Leadership',
      level: 85,
      category: 'soft',
      icon: '👑',
      color: 'from-yellow-500 to-orange-500',
      description: 'Team leadership and project management with proven results',
      projects: ['Database Lead', 'Team Mentoring', 'Project Management']
    },
    {
      id: 'communication',
      name: 'Communication',
      level: 90,
      category: 'soft',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500',
      description: 'Effective communication and technical documentation',
      projects: ['Technical Writing', 'Team Collaboration', 'Client Communication']
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      level: 95,
      category: 'soft',
      icon: '🧩',
      color: 'from-purple-500 to-pink-500',
      description: 'Analytical thinking and creative problem-solving abilities',
      projects: ['Complex Problem Resolution', 'Algorithm Design', 'System Optimization']
    }
  ]

  const filteredSkills = skills.filter(skill => 
    activeCategory === 'all' || skill.category === activeCategory
  )

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleStatClick = (type: 'total' | 'advanced' | 'average' | 'categories') => {
    let title = ''
    let filteredSkills: any[] = []

    switch (type) {
      case 'total':
        title = 'All Skills'
        filteredSkills = skills
        break
      case 'advanced':
        title = 'Advanced+ Skills (80%+)'
        filteredSkills = skills.filter(skill => skill.level >= 80)
        break
      case 'average':
        title = 'Skills by Proficiency Level'
        filteredSkills = skills.sort((a, b) => b.level - a.level)
        break
      case 'categories':
        title = 'Skills by Category'
        const categorySkills: any[] = []
        categories.forEach(category => {
          if (category.id !== 'all') {
            const categorySkillList = skills.filter(skill => skill.category === category.id)
            if (categorySkillList.length > 0) {
              categorySkills.push({
                category: category.label,
                icon: category.icon,
                skills: categorySkillList
              })
            }
          }
        })
        filteredSkills = categorySkills
        break
    }

    setSelectedStat({ type, title, skills: filteredSkills })
  }

  useEffect(() => {
    setIsVisible(true)
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-zinc-500">
                {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-zinc-200">{skill.level}</div>
          </div>
        </div>

        <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              boxShadow: hoveredSkill?.id === skill.id ? `0 0 20px rgba(59, 130, 246, 0.5)` : 'none'
            }}
          />
        </div>

        {hoveredSkill?.id === skill.id && (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-sm text-zinc-300">{skill.description}</p>
            <div className="flex flex-wrap gap-1">
              {skill.projects.map((project, idx) => (
                <span key={idx} className="px-2 py-1 bg-zinc-800 text-xs rounded text-zinc-400">
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      </Card>
    </div>
  )

  return (
    <div className="space-y-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 35}px`,
            top: `${mousePosition.y / 35}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl lg:text-6xl font-bold">
          Technical{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          A comprehensive overview of my technical expertise, professional capabilities, and continuous learning journey. 
          From programming languages to cloud technologies and soft skills.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span className="text-zinc-400">{skills.length} Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-zinc-400">{skills.filter(s => s.level >= 80).length} Advanced+</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-zinc-400">Continuous Learning</span>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-zinc-700/50">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white hover:scale-105'
                }`}
              >
                <span className="mr-2 text-lg group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-zinc-500">
            Showing {filteredSkills.length} of {skills.length} skills
          </div>
        </Card>
      </div>

      {/* Skills Grid */}
      <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Skills Overview</h2>
              <p className="text-zinc-400">Comprehensive analysis of technical proficiency and expertise</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div 
                className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleStatClick('total')}
              >
                <Card className="text-center p-6 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="text-4xl mb-3">💻</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{skills.length}</div>
                  <div className="text-sm text-zinc-400">Total Skills</div>
                  <div className="text-xs text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view</div>
                </Card>
              </div>
              <div 
                className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleStatClick('advanced')}
              >
                <Card className="text-center p-6 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  <div className="text-4xl mb-3">🏆</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {skills.filter(s => s.level >= 80).length}
                  </div>
                  <div className="text-sm text-zinc-400">Advanced+ Skills</div>
                  <div className="text-xs text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view</div>
                </Card>
              </div>
              <div 
                className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleStatClick('average')}
              >
                <Card className="text-center p-6 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}
                  </div>
                  <div className="text-sm text-zinc-400">Average Proficiency</div>
                  <div className="text-xs text-yellow-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view</div>
                </Card>
              </div>
              <div 
                className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleStatClick('categories')}
              >
                <Card className="text-center p-6 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <div className="text-4xl mb-3">📚</div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {new Set(skills.map(s => s.category)).size}
                  </div>
                  <div className="text-sm text-zinc-400">Skill Categories</div>
                  <div className="text-xs text-purple-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view</div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Learning Journey */}
      <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Continuous Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-zinc-200">Academic Excellence</h3>
                <p className="text-sm text-zinc-400">
                  Strong foundation through university coursework and hands-on projects
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-zinc-200">Project-Based Learning</h3>
                <p className="text-sm text-zinc-400">
                  Practical experience through real-world projects and challenges
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-zinc-200">Rapid Adaptation</h3>
                <p className="text-sm text-zinc-400">
                  Quick mastery of new technologies and frameworks
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Skills Detail Modal */}
      {selectedStat.type && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[80vh] overflow-y-auto bg-zinc-900/95 border-zinc-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedStat.title}</h2>
                <button
                  onClick={() => setSelectedStat({ type: null, title: '', skills: [] })}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedStat.type === 'categories' ? (
                <div className="space-y-6">
                  {selectedStat.skills.map((categoryGroup: any, index: number) => (
                    <div key={index} className="border border-zinc-700 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{categoryGroup.icon}</span>
                        <h3 className="text-lg font-semibold text-white">{categoryGroup.category}</h3>
                        <span className="text-sm text-zinc-400">({categoryGroup.skills.length} skills)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {categoryGroup.skills.map((skill: any) => (
                          <div key={skill.id} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg">
                            <span className="text-xl">{skill.icon}</span>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">{skill.name}</div>
                              <div className="text-xs text-zinc-400">{skill.level}% proficiency</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedStat.skills.map((skill: any) => (
                    <div key={skill.id} className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{skill.name}</h3>
                          <div className="text-sm text-zinc-400">
                            {selectedStat.type === 'average' ? `${skill.level}% proficiency` : skill.category}
                          </div>
                        </div>
                      </div>
                      
                      {skill.description && (
                        <p className="text-sm text-zinc-300 mb-3">{skill.description}</p>
                      )}
                      
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${skill.level}%`,
                            background: 'linear-gradient(to right, #1e40af, #7c3aed)',
                            boxShadow: '0 2px 4px rgba(30, 64, 175, 0.6)',
                            border: '1px solid rgba(30, 64, 175, 0.4)'
                          }}
                        />
                      </div>
                      
                      {skill.projects && skill.projects.length > 0 && (
                        <div className="mt-3">
                          <div className="text-xs text-zinc-400 mb-1">Used in:</div>
                          <div className="flex flex-wrap gap-1">
                            {skill.projects.map((project: string, idx: number) => (
                              <span key={idx} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded">
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
