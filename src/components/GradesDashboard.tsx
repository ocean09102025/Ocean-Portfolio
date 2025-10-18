import React, { useState } from 'react'
import Card from './Card'

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

export default function GradesDashboard() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [showAllCompleted, setShowAllCompleted] = useState(false)

  const courses: Course[] = [
    // Completed Courses with Actual Grades
    {
      id: '1',
      title: 'Computational Intelligence',
      code: 'SIT215',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 87,
      semester: 'T1 2025',
      year: '2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      code: 'SIT221',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 74,
      semester: 'T1 2025',
      year: '2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3',
      title: 'Data Wrangling',
      code: 'SIT220',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 83,
      semester: 'T1 2025',
      year: '2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '4',
      title: 'Machine Learning',
      code: 'SIT307',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 80,
      semester: 'T1 2025',
      year: '2025',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: '5',
      title: 'Concurrent and Distributed Programming',
      code: 'SIT315',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 77,
      semester: 'T2 2024',
      year: '2024',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: '6',
      title: 'Linear Algebra for Data Analysis',
      code: 'SIT292',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 77,
      semester: 'T2 2024',
      year: '2024',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: '7',
      title: 'Computer Networks and Communication',
      code: 'SIT202',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 73,
      semester: 'T2 2024',
      year: '2024',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: '8',
      title: 'Professional Practice in Information Technology',
      code: 'SIT223',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 75,
      semester: 'T2 2024',
      year: '2024',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: '9',
      title: 'Object-Oriented Development',
      code: 'SIT232',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 75,
      semester: 'T1 2024',
      year: '2024',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: '10',
      title: 'Applied Algebra and Statistics',
      code: 'SIT199',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 87,
      semester: 'T1 2024',
      year: '2024',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: '11',
      title: 'Introduction to Data Science and Artificial Intelligence',
      code: 'SIT112',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 75,
      semester: 'T1 2024',
      year: '2024',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: '12',
      title: 'Cloud Computing',
      code: 'SIT233',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 83,
      semester: 'T1 2024',
      year: '2024',
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: '13',
      title: 'Discrete Mathematics',
      code: 'SIT192',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'HD',
      actualGrade: 'HD',
      actualMark: 82,
      semester: 'T2 2023',
      year: '2023',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: '14',
      title: 'Computer Systems',
      code: 'SIT111',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 77,
      semester: 'T2 2023',
      year: '2023',
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: '15',
      title: 'Introduction to Programming',
      code: 'SIT102',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'D',
      actualGrade: 'D',
      actualMark: 73,
      semester: 'T2 2023',
      year: '2023',
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: '16',
      title: 'Database Fundamentals',
      code: 'SIT103',
      credits: 15,
      progress: 100,
      status: 'Completed',
      expectedGrade: 'C',
      actualGrade: 'C',
      actualMark: 67,
      semester: 'T2 2023',
      year: '2023',
      color: 'from-zinc-500 to-gray-500'
    },
    // Current Enrolled Units (4 units you're working on)
    {
      id: '17',
      title: 'Software Architecture And Scalability',
      code: 'SIT314',
      credits: 15,
      progress: 100,
      status: 'Enrolled',
      expectedGrade: 'HD',
      semester: 'T2 2025',
      year: '2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '18',
      title: 'Advanced Algorithms',
      code: 'SIT320',
      credits: 15,
      progress: 100,
      status: 'Enrolled',
      expectedGrade: 'HD',
      semester: 'T2 2025',
      year: '2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '19',
      title: 'Advanced Network Security',
      code: 'SIT325',
      credits: 15,
      progress: 100,
      status: 'Enrolled',
      expectedGrade: 'HD',
      semester: 'T2 2025',
      year: '2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '20',
      title: 'Capstone Team Project (A)',
      code: 'SIT374/SIT764',
      credits: 15,
      progress: 100,
      status: 'Enrolled',
      expectedGrade: 'HD',
      semester: 'T2 2025',
      year: '2025',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const completedCourses = courses.filter(course => course.status === 'Completed')
  const enrolledCourses = courses.filter(course => course.status === 'Enrolled')

  return (
    <div className="space-y-8">
      {/* Enrolled Units Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Enrolled Units</h2>
          <div className="text-sm text-zinc-400">
            {enrolledCourses.length} units enrolled
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => (
            <Card
              key={course.id}
              className={`relative transition-all duration-300 hover:scale-105 cursor-pointer ${selectedCourse === course.id
                ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/25'
                : 'hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
            >
              {/* Course Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-2">{course.code}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400">{course.semester}</span>
                  </div>
                </div>

                {/* Status and Expected Grade */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 font-medium">{course.status}</span>
                  <span className="text-sm text-yellow-400 font-medium">
                    Expected: {course.expectedGrade}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(course.progress, 0)}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Completed Units Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Completed Units</h2>
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">
              {completedCourses.length} units completed
            </div>
            <button
              onClick={() => setShowAllCompleted(!showAllCompleted)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {showAllCompleted ? 'Show Less' : 'View All'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(showAllCompleted ? completedCourses : completedCourses.slice(0, 4)).map((course) => (
            <Card
              key={course.id}
              className="relative transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Course Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-2">{course.code}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400">{course.semester}</span>
                  </div>
                </div>

                {/* Status and Grade */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-400 font-medium">{course.status}</span>
                  {course.actualGrade ? (
                    <span className="text-xs text-yellow-400 font-medium">
                      Grade: {course.actualGrade}
                    </span>
                  ) : (
                    <span className="text-xs text-yellow-400 font-medium">
                      Expected: {course.expectedGrade}
                    </span>
                  )}
                </div>

                {/* Blue Bar at Bottom */}
                <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>


      {/* Unit Statistics */}
      <Card>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {courses.length}
            </div>
            <div className="text-sm text-zinc-400">Total Units</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {completedCourses.length}
            </div>
            <div className="text-sm text-zinc-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {enrolledCourses.length}
            </div>
            <div className="text-sm text-zinc-400">Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {completedCourses.filter(c => c.actualGrade === 'HD').length}
            </div>
            <div className="text-sm text-zinc-400">HD Grades</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
