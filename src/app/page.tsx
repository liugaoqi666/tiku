'use client'

import { useState } from 'react'
import Link from 'next/link'

const banks = [
  {
    id: 'api',
    name: '接口测试题库',
    description: 'JMeter、Postman、Fiddler等接口测试相关题目',
    icon: '🔌',
    color: 'from-blue-500 to-cyan-500',
    count: 53,
  },
  {
    id: 'function',
    name: '前期功能题库',
    description: '软件测试基础、数据库、面试问题等',
    icon: '📋',
    color: 'from-purple-500 to-pink-500',
    count: 73,
  },
  {
    id: 'python',
    name: 'Python题库',
    description: 'Python基础、自动化测试、Selenium等',
    icon: '🐍',
    color: 'from-green-500 to-emerald-500',
    count: 50,
  },
  {
    id: 'all',
    name: '总题库',
    description: '包含以上三种题库的所有题目',
    icon: '📚',
    color: 'from-orange-500 to-red-500',
    count: 176,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">题库练习</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">软件测试题库</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            选择题库开始练习
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            支持随机抽取题目，指定数量刷新
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banks.map((bank) => (
            <Link
              key={bank.id}
              href={`/bank/${bank.id}`}
              className="group block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${bank.color} text-white text-2xl`}>
                    {bank.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {bank.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {bank.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        共 {bank.count} 题
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        开始练习 →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>题库练习系统 - 软件测试面试题库</p>
      </footer>
    </div>
  )
}
