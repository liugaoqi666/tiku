'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface Question {
  id: number
  category: string
  question: string
  answer?: string
}

const bankInfo: Record<string, { name: string; icon: string; color: string; total: number }> = {
  api: { name: '接口测试题库', icon: '🔌', color: 'from-blue-500 to-cyan-500', total: 53 },
  function: { name: '前期功能题库', icon: '📋', color: 'from-purple-500 to-pink-500', total: 73 },
  python: { name: 'Python题库', icon: '🐍', color: 'from-green-500 to-emerald-500', total: 50 },
  all: { name: '总题库', icon: '📚', color: 'from-orange-500 to-red-500', total: 176 },
}

export default function BankPage() {
  const params = useParams()
  const bankType = params.type as string
  const info = bankInfo[bankType] || bankInfo.all

  const [questions, setQuestions] = useState<Question[]>([])
  const [count, setCount] = useState<number | ''>('')
  const [loading, setLoading] = useState(false)
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({})

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    const actualCount = count === '' ? 10 : count
    setLoading(true)
    try {
      const res = await fetch(`/api/questions?type=${bankType}&count=${actualCount}`)
      const data = await res.json()
      if (data.code === 0) {
        setQuestions(data.data.questions)
        setShowAnswers({})
      }
    } catch (error) {
      console.error('Failed to fetch questions:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleAnswer = (id: number) => {
    setShowAnswers(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">{info.name}</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">共 {info.total} 题</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Control Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                抽题数量：
              </label>
              <input
                type="number"
                min="1"
                max={info.total}
                value={count}
                placeholder="请输入数量"
                onChange={(e) => {
                  const val = e.target.value
                  if (val === '') {
                    setCount('')
                  } else {
                    const num = parseInt(val)
                    if (!isNaN(num) && num >= 1 && num <= info.total) {
                      setCount(num)
                    }
                  }
                }}
                className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                / {info.total} 题
              </span>
            </div>
            <button
              onClick={fetchQuestions}
              disabled={loading}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? '加载中...' : '🎲 随机刷新'}
            </button>
          </div>
        </div>

        {/* Questions List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : questions.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">暂无题目</p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-900 dark:text-white font-medium">
                        {q.question}
                      </p>
                      {q.answer && (
                        <div className="mt-4">
                          <button
                            onClick={() => toggleAnswer(q.id)}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {showAnswers[q.id] ? '收起答案' : '查看答案'}
                          </button>
                          {showAnswers[q.id] && (
                            <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <p className="text-gray-700 dark:text-gray-300">{q.answer}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/bank/api"
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            接口测试
          </Link>
          <Link
            href="/bank/function"
            className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
          >
            功能测试
          </Link>
          <Link
            href="/bank/python"
            className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
          >
            Python
          </Link>
          <Link
            href="/bank/all"
            className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
          >
            总题库
          </Link>
        </div>
      </main>
    </div>
  )
}
