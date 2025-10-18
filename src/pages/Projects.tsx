import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'data', label: 'Data Science & ML', icon: '📊' },
    { id: 'cloud', label: 'Cloud Computing', icon: '☁️' },
    { id: 'security', label: 'Network Security', icon: '🔒' },
    { id: 'development', label: 'Software Dev', icon: '💻' },
    { id: 'algorithms', label: 'Algorithms', icon: '🧮' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Food Remedy API',
      subtitle: 'Capstone Leadership Project (2025)',
      category: 'data',
      icon: '🍽️',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Led database design and implementation for a full-stack nutrition-tracking API enabling barcode-based food recognition. Developed and automated data pipelines processing over 60,000 product records.',
      detailedDescription: 'Led database design and implementation for a full-stack nutrition-tracking API enabling barcode-based food recognition. Developed and automated data pipelines processing over 60,000 product records, implemented robust schema migrations, and integrated backend APIs for allergen detection and nutrition retrieval. Demonstrated leadership by mentoring teammates, standardizing database practices, and ensuring seamless backend integration.',
      achievements: [
        'Led database architecture for 60K+ product nutrition-tracking system',
        'Developed automated data pipelines with Python and MongoDB Atlas',
        'Implemented robust schema migrations and backend API integration',
        'Integrated allergen detection and nutrition retrieval APIs',
        'Mentored teammates and standardized database practices',
        'Ensured seamless backend integration with .NET and Swagger'
      ],
      technologies: [
        { name: '🐍 Python', color: 'bg-blue-900/30 text-blue-300', icon: '🐍' },
        { name: '💾 SQL', color: 'bg-orange-900/30 text-orange-300', icon: '💾' },
        { name: '🐳 Docker', color: 'bg-blue-900/30 text-blue-300', icon: '🐳' },
        { name: '🔷 .NET', color: 'bg-purple-900/30 text-purple-300', icon: '🔷' },
        { name: '📋 Swagger', color: 'bg-green-900/30 text-green-300', icon: '📋' },
        { name: '🍃 MongoDB Atlas', color: 'bg-green-900/30 text-green-300', icon: '🍃' },
        { name: '🔀 Git', color: 'bg-red-900/30 text-red-300', icon: '🔀' }
      ],
      challenges: [
        'Managing large-scale data migrations with 60K+ records',
        'Ensuring data consistency across distributed systems',
        'Optimizing query performance for real-time nutrition retrieval',
        'Coordinating backend integration across multiple APIs'
      ],
      learnings: [
        'Advanced MongoDB Atlas schema design and optimization',
        'Team leadership and project management in agile environment',
        'DevOps practices with Docker and CI/CD pipelines',
        'Full-stack integration between databases and .NET APIs'
      ],
      status: 'Completed',
      year: '2025',
      link: null
    },
    {
      id: 2,
      title: 'Predictive Modeling of Heart Disease',
      subtitle: 'Machine Learning Project (2025)',
      category: 'data',
      icon: '❤️',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Reproduced a published stacking ensemble for heart disease prediction using the UCI dataset and extended it with a custom PCA-based voting ensemble.',
      detailedDescription: 'Reproduced a published stacking ensemble for heart disease prediction using the UCI dataset and extended it with a custom PCA-based voting ensemble. Compared models including Logistic Regression, Random Forest, XGBoost, and KNN. Achieved 98% accuracy and 99.7% AUC, demonstrating advanced understanding of ensemble learning, feature scaling, and cross-validation for clinical data analysis.',
      achievements: [
        'Achieved 98% accuracy and 99.7% AUC on heart disease prediction',
        'Reproduced and extended published stacking ensemble model',
        'Developed custom PCA-based voting ensemble',
        'Compared multiple ML algorithms: Logistic Regression, Random Forest, XGBoost, KNN',
        'Applied advanced feature scaling and cross-validation techniques',
        'Demonstrated clinical data analysis expertise'
      ],
      technologies: [
        { name: '🐍 Python', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🤖 Scikit-learn', color: 'bg-orange-900/30 text-orange-300' },
        { name: '🚀 XGBoost', color: 'bg-green-900/30 text-green-300' },
        { name: '📊 PCA', color: 'bg-purple-900/30 text-purple-300' },
        { name: '🐼 Pandas', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📈 Matplotlib', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Balancing model complexity with interpretability',
        'Optimizing ensemble learning for clinical data',
        'Managing feature selection with PCA'
      ],
      learnings: [
        'Advanced ensemble learning techniques',
        'Clinical data analysis and validation',
        'Feature engineering and dimensionality reduction'
      ],
      status: 'Completed',
      year: '2025'
    },
    {
      id: 3,
      title: 'NHANES Data Mining Challenge',
      subtitle: 'Data Wrangling Project (2025)',
      category: 'data',
      icon: '📊',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Merged and analyzed five U.S. national health datasets to explore relationships between BMI, blood pressure, diet, and activity.',
      detailedDescription: 'Merged and analyzed five U.S. national health datasets to explore relationships between BMI, blood pressure, diet, and activity. Developed interactive Bokeh visualizations for gender-based BMI trends, hypertension prevalence, and age distributions. Ensured ethical data handling and produced actionable insights supporting public health awareness.',
      achievements: [
        'Merged and analyzed five national health datasets',
        'Explored complex relationships between BMI, blood pressure, diet, and activity',
        'Created interactive Bokeh visualizations for health trends',
        'Analyzed gender-based BMI trends and hypertension prevalence',
        'Ensured ethical data handling practices',
        'Produced actionable public health insights'
      ],
      technologies: [
        { name: '🐍 Python', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🐼 Pandas', color: 'bg-purple-900/30 text-purple-300' },
        { name: '📊 Bokeh', color: 'bg-green-900/30 text-green-300' },
        { name: '🔢 NumPy', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📈 Data Visualization', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Merging datasets with different schemas',
        'Handling missing and inconsistent health data',
        'Creating interactive visualizations for complex trends'
      ],
      learnings: [
        'Large-scale data integration and ETL processes',
        'Interactive data visualization with Bokeh',
        'Public health data analysis and ethics'
      ],
      status: 'Completed',
      year: '2025'
    },
    {
      id: 4,
      title: 'Text Analysis of Stellar StackExchange',
      subtitle: 'Data Wrangling Project (2025)',
      category: 'data',
      icon: '💬',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Performed text and behavioral analysis on the Stellar StackExchange dataset. Cleaned XML data, extracted patterns using regex, and visualized trends.',
      detailedDescription: 'Performed text and behavioral analysis on the Stellar StackExchange dataset. Cleaned XML data, extracted patterns using regex, and visualized trends in tag usage, comment length, and user geography. Created a world map of user distribution and identified dominant topics and regions driving community engagement.',
      achievements: [
        'Analyzed complete Stellar StackExchange dataset',
        'Cleaned and processed complex XML data structures',
        'Extracted patterns using advanced regex techniques',
        'Visualized tag usage and comment length trends',
        'Created interactive world map of user distribution',
        'Identified dominant topics and community engagement patterns'
      ],
      technologies: [
        { name: '🐍 Python', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🐼 Pandas', color: 'bg-purple-900/30 text-purple-300' },
        { name: '📝 XML', color: 'bg-orange-900/30 text-orange-300' },
        { name: '🔍 Regex', color: 'bg-red-900/30 text-red-300' },
        { name: '📊 Seaborn', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📈 Plotly', color: 'bg-cyan-900/30 text-cyan-300' },
        { name: '☁️ WordCloud', color: 'bg-green-900/30 text-green-300' }
      ],
      challenges: [
        'Parsing and cleaning complex XML structures',
        'Handling multilingual text data',
        'Creating meaningful geographic visualizations'
      ],
      learnings: [
        'Advanced text mining and NLP techniques',
        'XML data processing and regex mastery',
        'Geographic data visualization with Plotly'
      ],
      status: 'Completed',
      year: '2025'
    },
    {
      id: 5,
      title: 'Sorting Rule Detection',
      subtitle: 'Algorithms Project (2025)',
      category: 'algorithms',
      icon: '🧮',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Developed an algorithm to infer the sorting rule applied to multi-key datasets (Name, Age, Weight) using combinatorial comparison logic.',
      detailedDescription: 'Developed an algorithm to infer the sorting rule applied to multi-key datasets (Name, Age, Weight) using combinatorial comparison logic. Implemented efficient rule detection with six possible key orders and validated results through systematic comparisons and pseudocode design.',
      achievements: [
        'Developed intelligent sorting rule detection algorithm',
        'Implemented combinatorial comparison logic for multi-key datasets',
        'Handled six possible key sorting orders efficiently',
        'Created systematic validation through pseudocode design',
        'Optimized algorithm for performance and accuracy',
        'Applied advanced data structures and algorithmic techniques'
      ],
      technologies: [
        { name: '🔷 C#', color: 'bg-purple-900/30 text-purple-300' },
        { name: '💻 Visual Studio', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🧮 Algorithmic Design', color: 'bg-green-900/30 text-green-300' },
        { name: '📊 Data Structures', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Designing efficient combinatorial comparison logic',
        'Handling edge cases in multi-key sorting',
        'Optimizing for time complexity'
      ],
      learnings: [
        'Advanced algorithm design and analysis',
        'Combinatorial problem-solving techniques',
        'Efficient data structure implementation'
      ],
      status: 'Completed',
      year: '2025'
    },
    {
      id: 6,
      title: 'Lost in Space - 2D Game',
      subtitle: 'Programming Project (2023)',
      category: 'development',
      icon: '🎮',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Designed and implemented a 2D space exploration game with interactive power-ups, player mechanics, and collision detection.',
      detailedDescription: 'Designed and implemented a 2D space exploration game with interactive power-ups, player mechanics, and collision detection. Used structured programming principles and dynamic data structures to manage in-game elements like power-ups, HUD, and player physics. Demonstrated foundational game loop and event-driven programming techniques.',
      achievements: [
        'Designed complete 2D space exploration game from scratch',
        'Implemented interactive power-ups and player mechanics',
        'Developed robust collision detection system',
        'Applied structured programming principles',
        'Managed dynamic data structures for game elements',
        'Implemented game loop and event-driven architecture'
      ],
      technologies: [
        { name: '⚙️ C++', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🎨 SplashKit SDK', color: 'bg-purple-900/30 text-purple-300' },
        { name: '🎮 Game Development', color: 'bg-green-900/30 text-green-300' },
        { name: '💻 OOP', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Implementing smooth collision detection',
        'Managing game state and player physics',
        'Optimizing performance for 60 FPS'
      ],
      learnings: [
        'Game development fundamentals',
        'Event-driven programming patterns',
        'Dynamic memory management in C++'
      ],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 7,
      title: 'Serverless Café Architecture',
      subtitle: 'Cloud Computing Project (2024)',
      category: 'cloud',
      icon: '☁️',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Implemented a serverless data processing workflow for an automated café reporting system using AWS services.',
      detailedDescription: 'Implemented a serverless data processing workflow for an automated café reporting system. Configured AWS Lambda functions, integrated SNS for notifications, and used CloudWatch for monitoring. Demonstrated understanding of event-driven cloud architectures and troubleshooting in AWS environments.',
      achievements: [
        'Architected complete serverless workflow on AWS',
        'Configured multiple AWS Lambda functions for data processing',
        'Integrated SNS for real-time notifications',
        'Implemented CloudWatch monitoring and logging',
        'Optimized cost-efficiency with serverless architecture',
        'Demonstrated event-driven design principles'
      ],
      technologies: [
        { name: '⚡ AWS Lambda', color: 'bg-orange-900/30 text-orange-300' },
        { name: '📢 SNS', color: 'bg-red-900/30 text-red-300' },
        { name: '💾 RDS', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📊 CloudWatch', color: 'bg-purple-900/30 text-purple-300' },
        { name: '📦 S3', color: 'bg-green-900/30 text-green-300' }
      ],
      challenges: [
        'Managing serverless function dependencies',
        'Optimizing Lambda cold start times',
        'Implementing effective monitoring and alerting'
      ],
      learnings: [
        'AWS serverless architecture best practices',
        'Event-driven system design',
        'Cloud cost optimization techniques'
      ],
      status: 'Completed',
      year: '2024'
    },
    {
      id: 8,
      title: 'Mathematical Module on Equivalence Relations',
      subtitle: 'Discrete Mathematics (2023)',
      category: 'algorithms',
      icon: '📐',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Authored a comprehensive report on Equivalence Relations and Partial Orders, analyzing their properties, applications, and mathematical significance.',
      detailedDescription: 'Authored a comprehensive report on Equivalence Relations and Partial Orders, analyzing their properties, applications, and mathematical significance. Demonstrated precision in symbolic reasoning and report structuring within formal mathematics.',
      achievements: [
        'Authored comprehensive mathematical research report',
        'Analyzed Equivalence Relations and Partial Orders in depth',
        'Demonstrated advanced symbolic reasoning skills',
        'Applied formal mathematical proof techniques',
        'Structured complex mathematical concepts clearly',
        'Explored real-world applications of abstract concepts'
      ],
      technologies: [
        { name: '📝 LaTeX', color: 'bg-green-900/30 text-green-300' },
        { name: '🔬 Mathematical Modelling', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📐 Proof Writing', color: 'bg-purple-900/30 text-purple-300' },
        { name: '📊 Symbolic Logic', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Structuring complex mathematical proofs',
        'Balancing rigor with readability',
        'Creating clear mathematical diagrams'
      ],
      learnings: [
        'Advanced mathematical proof techniques',
        'LaTeX typesetting for academic work',
        'Abstract mathematical reasoning'
      ],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 9,
      title: 'Flow-Table Overloading Defense in SDN',
      subtitle: 'Network Security Project (2025)',
      category: 'security',
      icon: '🛡️',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Implemented and evaluated a peer-support mitigation strategy to defend Software-Defined Networks against flow-table overloading attacks.',
      detailedDescription: 'Implemented and evaluated a peer-support mitigation strategy to defend Software-Defined Networks (SDNs) against flow-table overloading attacks. Designed a 10-switch full-mesh topology in Mininet controlled by POX, where overloaded switches offload new flows to peer switches. Conducted extensive performance testing using holding time, CPU utilisation, and bandwidth metrics. Results showed that peer-support doubled resilience, restored 77% throughput under attack, and added only minimal CPU overhead, confirming its efficiency and scalability in SDN security contexts.',
      achievements: [
        'Implemented peer-support mitigation for SDN security',
        'Designed 10-switch full-mesh topology in Mininet',
        'Developed POX controller for flow management',
        'Doubled network resilience under attack conditions',
        'Restored 77% throughput during DDoS attacks',
        'Minimal CPU overhead (efficient implementation)',
        'Comprehensive performance analysis with multiple metrics'
      ],
      technologies: [
        { name: '🌐 Mininet', color: 'bg-green-900/30 text-green-300' },
        { name: '🐍 POX Controller', color: 'bg-blue-900/30 text-blue-300' },
        { name: '🔀 Open vSwitch', color: 'bg-purple-900/30 text-purple-300' },
        { name: '⚔️ hping3', color: 'bg-red-900/30 text-red-300' },
        { name: '📊 iperf3', color: 'bg-yellow-900/30 text-yellow-300' },
        { name: '🐧 Ubuntu 22.04', color: 'bg-orange-900/30 text-orange-300' }
      ],
      challenges: [
        'Implementing efficient flow offloading mechanism',
        'Balancing load across peer switches',
        'Minimizing performance overhead during attacks'
      ],
      learnings: [
        'Advanced SDN architecture and security',
        'Network attack mitigation strategies',
        'Performance analysis and optimization'
      ],
      status: 'Completed',
      year: '2025'
    },
    {
      id: 10,
      title: 'IoT Smart Home Simulation with MQTT',
      subtitle: 'Computer Networks Project (2024)',
      category: 'security',
      icon: '🏠',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'Designed and simulated a smart home IoT network using Cisco Packet Tracer with MQTT-based communication between devices.',
      detailedDescription: 'Designed and simulated a smart home IoT network using Cisco Packet Tracer with MQTT-based communication between devices. Integrated sensors, smart thermostats, lights, and cameras through a central MQTT broker to demonstrate publish/subscribe data exchange. Measured protocol efficiency, latency, and reliability under simulated conditions, highlighting MQTT\'s lightweight design for low-bandwidth and real-time IoT systems. Produced a demonstration video showcasing live device interaction and protocol efficiency in smart automation.',
      achievements: [
        'Designed complete smart home IoT network architecture',
        'Implemented MQTT publish/subscribe communication',
        'Integrated multiple IoT devices: sensors, thermostats, lights, cameras',
        'Configured central MQTT broker for device coordination',
        'Measured protocol efficiency, latency, and reliability',
        'Demonstrated MQTT advantages for low-bandwidth systems',
        'Created demonstration video of live system operation'
      ],
      technologies: [
        { name: '📡 Cisco Packet Tracer', color: 'bg-blue-900/30 text-blue-300' },
        { name: '📨 MQTT Protocol', color: 'bg-green-900/30 text-green-300' },
        { name: '📶 Wi-Fi', color: 'bg-purple-900/30 text-purple-300' },
        { name: '🌡️ IoT Sensors', color: 'bg-orange-900/30 text-orange-300' },
        { name: '💡 Smart Actuators', color: 'bg-yellow-900/30 text-yellow-300' }
      ],
      challenges: [
        'Configuring MQTT broker for optimal performance',
        'Managing device synchronization and timing',
        'Simulating realistic IoT network conditions'
      ],
      learnings: [
        'IoT protocols and architectures',
        'MQTT publish/subscribe patterns',
        'Smart home system design principles'
      ],
      status: 'Completed',
      year: '2024'
    }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
    if (!project) return null

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg animate-pulse`}>
                  {project.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-zinc-400 text-lg">{project.subtitle}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                      {project.status}
                    </span>
                    <span className="text-xs text-zinc-500">{project.year}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ✕
              </button>
            </div>

            <div className="space-y-8">
              {/* Description */}
              <div>
                <p className="text-zinc-300 text-lg leading-relaxed">{project.detailedDescription || project.description}</p>
              </div>

              {/* Project Stats */}
              <div>
              </div>


              {/* Key Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                  <span>✨</span> Key Achievements
                </h3>
                <Card className="p-4">
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-zinc-300 group hover:text-white transition-colors duration-300">
                        <span className="text-green-400 mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.challenges && (
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                        <span>⚡</span> Challenges
                      </h3>
                      <Card className="p-4 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20">
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2 text-zinc-300 text-sm">
                              <span className="text-yellow-400 mt-1">→</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  )}
                  {project.learnings && (
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                        <span>💡</span> Key Learnings
                      </h3>
                      <Card className="p-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
                        <ul className="space-y-2">
                          {project.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start gap-2 text-zinc-300 text-sm">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  )}
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                  <span>🛠️</span> Technologies & Tools
                </h3>
                <Card className="p-4">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} hover:scale-110 transition-transform duration-300 cursor-default`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl lg:text-6xl font-bold">
          My{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Explore my portfolio of innovative projects spanning data science, cloud computing, 
          network security, and software development. Each project represents hands-on learning 
          and real-world problem-solving experience.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-zinc-400">{projects.length} Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-zinc-400">Academic Excellence</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-zinc-700/50">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white hover:scale-105'
                }`}
              >
                <span className="mr-2 text-lg group-hover:scale-110 transition-transform duration-300">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-zinc-500">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="cursor-pointer"
            >
              <Card 
                className={`group hover:scale-[1.02] transition-all duration-500 ${project.bgColor} ${project.borderColor} border-2 hover:shadow-2xl relative overflow-hidden h-96`}
              >
              
              <div className="space-y-6 relative z-10 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">{project.subtitle}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                          {project.status}
                        </span>
                        <span className="text-xs text-zinc-500 font-medium">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300">
                    →
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {project.description}
                </p>


                {/* Technologies */}
    <div>
                  <h4 className="text-sm font-medium text-zinc-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1.5 text-xs rounded-full ${tech.color} group-hover:scale-105 transition-transform duration-300 font-medium`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1"></div>

                {/* Click to view more */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-zinc-700/50">
                  <span className="text-sm text-zinc-500 group-hover:text-blue-400 transition-colors duration-300 font-medium">
                    Click to view detailed information
                  </span>
                  <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Journey */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Learning Journey</h2>
              <p className="text-zinc-400">Key areas of growth and expertise developed through project work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">🤖</div>
                  <div className="text-lg font-bold text-blue-400 mb-2">Machine Learning</div>
                  <div className="text-sm text-zinc-400">Advanced algorithms, ensemble methods, and predictive modeling</div>
                </Card>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">☁️</div>
                  <div className="text-lg font-bold text-green-400 mb-2">Cloud Computing</div>
                  <div className="text-sm text-zinc-400">AWS services, serverless architecture, and distributed systems</div>
                </Card>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">🔒</div>
                  <div className="text-lg font-bold text-yellow-400 mb-2">Network Security</div>
                  <div className="text-sm text-zinc-400">SDN security, attack mitigation, and network defense strategies</div>
                </Card>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="text-lg font-bold text-purple-400 mb-2">Data Engineering</div>
                  <div className="text-sm text-zinc-400">Database design, data pipelines, and ETL processes</div>
                </Card>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">💻</div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">Software Development</div>
                  <div className="text-sm text-zinc-400">Full-stack development, algorithms, and system design</div>
                </Card>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <Card className="text-center p-6">
                  <div className="text-4xl mb-3">🌐</div>
                  <div className="text-lg font-bold text-pink-400 mb-2">IoT & Networks</div>
                  <div className="text-sm text-zinc-400">MQTT protocols, network simulation, and device communication</div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Project Skills Gained */}
      <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-zinc-400">Technical expertise gained through hands-on project experience</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { category: 'Data Science', skills: ['Python', 'MongoDB', 'Data Pipelines'], icon: '📊', color: 'text-blue-400' },
                { category: 'Cloud Computing', skills: ['AWS Lambda', 'RDS', 'CloudWatch'], icon: '☁️', color: 'text-green-400' },
                { category: 'Security', skills: ['POX Controller', 'DDoS Defense', 'SDN'], icon: '🔒', color: 'text-yellow-400' },
                { category: 'Development', skills: ['C#', 'Unity', 'OOP', 'API Design'], icon: '💻', color: 'text-purple-400' }
              ].map((category, index) => (
                <div key={category.category} className="group hover:scale-105 transition-transform duration-300">
                  <Card className="h-full p-6">
                    <div className="text-center space-y-3">
                      <div className="text-4xl">{category.icon}</div>
                      <h3 className={`font-semibold text-lg ${category.color}`}>{category.category}</h3>
                      <div className="space-y-1">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="text-xs text-zinc-500">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
