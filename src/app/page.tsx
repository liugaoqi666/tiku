'use client'

import { useState } from 'react'

interface Question {
  id: number
  category: string
  question: string
}

// 接口测试题库
const apiQuestions: Question[] = [
  { id: 1, category: 'api', question: 'jmeter跟postman的区别？' },
  { id: 2, category: 'api', question: 'jmeter怎么录制脚本（抓包）' },
  { id: 3, category: 'api', question: 'jmeter怎么做多接口测试' },
  { id: 4, category: 'api', question: 'jmeter里面你都用过那些内置函数' },
  { id: 5, category: 'api', question: '正则表达式中（.+？）各代表什么意思' },
  { id: 6, category: 'api', question: '你怎么判断你的响应结果是正确的' },
  { id: 7, category: 'api', question: 'jmeter组件你都用过那些' },
  { id: 8, category: 'api', question: 'jmeter怎么做接口测试' },
  { id: 9, category: 'api', question: '你都用过jmeter的哪些组件？' },
  { id: 10, category: 'api', question: '接口测试用例包含哪些要素' },
  { id: 11, category: 'api', question: '加密接口怎么测试？' },
  { id: 12, category: 'api', question: 'jmeter跨线程组关联怎么做？' },
  { id: 13, category: 'api', question: 'jmeter怎么做关联' },
  { id: 14, category: 'api', question: '参数化的作用及怎么用jmeter做参数化' },
  { id: 15, category: 'api', question: '你都用过哪些jmeter的内置函数？' },
  { id: 16, category: 'api', question: '用jmeter进行接口测试时，get请求和post请求有什么区别？' },
  { id: 17, category: 'api', question: 'charles跟fiddler的区别' },
  { id: 18, category: 'api', question: 'api文档不全面，你会怎么办?' },
  { id: 19, category: 'api', question: '接口测试流程？' },
  { id: 20, category: 'api', question: '如何去判断和定位前后端问题 ?' },
  { id: 21, category: 'api', question: 'fiddler抓不到请求，有哪些原因?' },
  { id: 22, category: 'api', question: '埋点测试怎么做？' },
  { id: 23, category: 'api', question: 'fiddler如何进行弱网测试？' },
  { id: 24, category: 'api', question: 'fiddler如何抓取移动端的包？' },
  { id: 25, category: 'api', question: 'fiddler如何打断点？' },
  { id: 26, category: 'api', question: '如果你们有一个服务或接口暂时调不通，你们是怎么处理的？' },
  { id: 27, category: 'api', question: 'fiddler都能抓到哪些内容？' },
  { id: 28, category: 'api', question: '如何快速找到你想要的那个请求？' },
  { id: 29, category: 'api', question: 'fiddler如何抓取https的包？' },
  { id: 30, category: 'api', question: 'fiddler工作原理？' },
  { id: 31, category: 'api', question: 'cookie与session的区别' },
  { id: 32, category: 'api', question: 'postman如何进行关联？' },
  { id: 33, category: 'api', question: '给你一份api文档，你如何设计接口测试用例？' },
  { id: 34, category: 'api', question: '解决关联问题的步骤？' },
  { id: 35, category: 'api', question: '关联的实质？' },
  { id: 36, category: 'api', question: 'postman如何进行参数化？' },
  { id: 37, category: 'api', question: 'postman如何做断言？' },
  { id: 38, category: 'api', question: '你们的接口文档包含哪些内容？' },
  { id: 39, category: 'api', question: '三次握手和四次挥手分别描述的什么过程？' },
  { id: 40, category: 'api', question: '常见的http状态码' },
  { id: 41, category: 'api', question: '一个完整的http请求的过程？' },
  { id: 42, category: 'api', question: '用postman进行接口测试时，get请求和post请求有什么区别？' },
  { id: 43, category: 'api', question: '已经做了功能测试，为什么还要进行接口测试？' },
  { id: 44, category: 'api', question: 'get请求和post请求有什么区别？' },
  { id: 45, category: 'api', question: 'http和https的区别？' },
  { id: 46, category: 'api', question: 'tps和qps的区别？' },
  { id: 47, category: 'api', question: '如何预估性能指标(并发数)？' },
  { id: 48, category: 'api', question: '如何提取性能测试点？' },
  { id: 49, category: 'api', question: '如何监控服务器资源占用情况？' },
  { id: 50, category: 'api', question: '如何定位性能瓶颈？' },
  { id: 51, category: 'api', question: '有没有手动部署过项目(tomcat部署项目？' },
  { id: 52, category: 'api', question: '测试数据准备多少？如何准备？' },
  { id: 53, category: 'api', question: '发现过什么样的性能问题，最后怎么解决的？' },
]

// 前期功能题库
const functionQuestions: Question[] = [
  { id: 101, category: 'function', question: '自我介绍？' },
  { id: 102, category: 'function', question: '学校相关问题' },
  { id: 103, category: 'function', question: '目前离职还是在职？什么原因离职的？' },
  { id: 104, category: 'function', question: '为什么来上海？' },
  { id: 105, category: 'function', question: '你的学历学信网可查吗？是统招的吗？' },
  { id: 106, category: 'function', question: '实际年龄和身份证年龄一致吗？为什么？' },
  { id: 107, category: 'function', question: '别人对你的评价是怎样的？' },
  { id: 108, category: 'function', question: '结婚了吗？最近两年有要小孩的打算吗？' },
  { id: 109, category: 'function', question: '能接受外包吗？' },
  { id: 110, category: 'function', question: '未来职业规划是怎么样的？' },
  { id: 111, category: 'function', question: '你们公司的人员状况？' },
  { id: 112, category: 'function', question: '作为软件测试工程师你觉得需要具备什么样的素质？' },
  { id: 113, category: 'function', question: '说下测试工作流程？' },
  { id: 114, category: 'function', question: '说下你负责项目的业务流程？' },
  { id: 115, category: 'function', question: '你负责的项目都包括哪些模块？' },
  { id: 116, category: 'function', question: '你负责的模块业务逻辑说下？' },
  { id: 117, category: 'function', question: '你们公司用的什么模型？' },
  { id: 118, category: 'function', question: '你们公司用什么管理资料的？' },
  { id: 119, category: 'function', question: '没有需求文档你怎么开展测试工作？' },
  { id: 120, category: 'function', question: '你们公司产品上线的标准是什么？' },
  { id: 121, category: 'function', question: '你们公司软件一般什么时候上线？' },
  { id: 122, category: 'function', question: '你觉得你工作中遇到比较困难的事情是什么？' },
  { id: 123, category: 'function', question: '软件测试的生命周期？' },
  { id: 124, category: 'function', question: '什么是软件测试？' },
  { id: 125, category: 'function', question: '测试的对象是什么？' },
  { id: 126, category: 'function', question: '黑盒测试与白盒测试的区别是什么？' },
  { id: 127, category: 'function', question: '缺陷的要素有哪些？' },
  { id: 128, category: 'function', question: '描述下缺陷的处理流程？' },
  { id: 129, category: 'function', question: '缺陷的严重程度/优先级怎么划分的？' },
  { id: 130, category: 'function', question: 'Web端与App端测试的区别是什么？' },
  { id: 131, category: 'function', question: '常用的数据库命令有哪些？' },
  { id: 132, category: 'function', question: 'where与having的区别是什么？' },
  { id: 133, category: 'function', question: '聚合函数有哪些？' },
  { id: 134, category: 'function', question: '内连与外连什么区别？' },
  { id: 135, category: 'function', question: 'delete、truncate、drop什么区别？' },
  { id: 136, category: 'function', question: 'char和varchar的区别？' },
  { id: 137, category: 'function', question: '主键,外键,唯一键的区别？' },
  { id: 138, category: 'function', question: '事务的特性（又称ACID特性）是什么？' },
  { id: 139, category: 'function', question: '索引的作用是什么？' },
]

// Python题库
const pythonQuestions: Question[] = [
  { id: 201, category: 'python', question: 'python数据类型有哪些？' },
  { id: 202, category: 'python', question: 'python可变数据类型有哪些？' },
  { id: 203, category: 'python', question: '数据类型怎么转换，怎么打印数据类型？' },
  { id: 204, category: 'python', question: '变量的命名规则' },
  { id: 205, category: 'python', question: '列表与元组的区别' },
  { id: 206, category: 'python', question: '列表的插入方式都有哪些？' },
  { id: 207, category: 'python', question: '列表怎么去重，有哪几种方法？' },
  { id: 208, category: 'python', question: '列表和字典的区别' },
  { id: 209, category: 'python', question: '如何遍历列表，字典' },
  { id: 210, category: 'python', question: 'python的标准库有哪些' },
  { id: 211, category: 'python', question: 'python中经常使用的函数' },
  { id: 212, category: 'python', question: '局部变量和全局变量的区别' },
  { id: 213, category: 'python', question: 'python中is和==的区别' },
  { id: 214, category: 'python', question: '截取字符串里面部分字符怎么做？' },
  { id: 215, category: 'python', question: '形参和实参的区别' },
  { id: 216, category: 'python', question: '冒泡排序原理' },
  { id: 217, category: 'python', question: '什么是装饰器' },
  { id: 218, category: 'python', question: 'python生成随机数' },
  { id: 219, category: 'python', question: 'json数据转换' },
  { id: 220, category: 'python', question: 'python中的浅拷贝和深拷贝' },
  { id: 221, category: 'python', question: '元素定位的方式有哪些？' },
  { id: 222, category: 'python', question: '如何处理弹出框？' },
  { id: 223, category: 'python', question: 'selenium是做什么用的？' },
  { id: 224, category: 'python', question: '什么是po模式？' },
  { id: 225, category: 'python', question: 'Python多线程？' },
]

const allQuestions = [...apiQuestions, ...functionQuestions, ...pythonQuestions]

const bankInfo: Record<string, { name: string; icon: string; color: string; questions: Question[] }> = {
  api: { name: '接口测试题库', icon: '🔌', color: 'from-blue-500 to-cyan-500', questions: apiQuestions },
  function: { name: '前期功能题库', icon: '📋', color: 'from-purple-500 to-pink-500', questions: functionQuestions },
  python: { name: 'Python题库', icon: '🐍', color: 'from-green-500 to-emerald-500', questions: pythonQuestions },
  all: { name: '总题库', icon: '📚', color: 'from-orange-500 to-red-500', questions: allQuestions },
}

export default function Home() {
  const [selectedBank, setSelectedBank] = useState<string | null>(null)
  const [count, setCount] = useState<number | ''>('')
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(false)

  const handleSelectBank = (bank: string) => {
    setSelectedBank(bank)
    setQuestions([])
    setCount('')
  }

  const handleRandom = () => {
    if (!selectedBank) return
    const info = bankInfo[selectedBank]
    const actualCount = count === '' ? 10 : count
    const shuffled = [...info.questions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, Math.min(actualCount, info.questions.length)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">题库练习</h1>
            </div>
            {selectedBank && (
              <button
                onClick={() => setSelectedBank(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                返回首页
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!selectedBank ? (
          /* 首页 - 选择题库 */
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">选择题库开始练习</h2>
              <p className="text-gray-600">支持随机抽取题目，指定数量刷新</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(bankInfo).map(([key, info]) => (
                <button
                  key={key}
                  onClick={() => handleSelectBank(key)}
                  className="bg-white rounded-xl shadow-sm border p-5 text-left hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{info.name}</h3>
                      <p className="text-sm text-gray-500">共 {info.questions.length} 题</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* 题库页面 */
          <div>
            <div className="bg-white rounded-xl shadow-sm border p-5 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{bankInfo[selectedBank].icon}</span>
                <div>
                  <h2 className="font-bold text-gray-900">{bankInfo[selectedBank].name}</h2>
                  <p className="text-sm text-gray-500">共 {bankInfo[selectedBank].questions.length} 题</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <label className="text-sm text-gray-700">抽题数量：</label>
                <input
                  type="number"
                  min="1"
                  max={bankInfo[selectedBank].questions.length}
                  value={count}
                  placeholder="请输入"
                  onChange={(e) => {
                    const val = e.target.value
                    if (val === '') {
                      setCount('')
                    } else {
                      const num = parseInt(val)
                      if (!isNaN(num) && num >= 1) {
                        setCount(num)
                      }
                    }
                  }}
                  className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-500">/ {bankInfo[selectedBank].questions.length}</span>
                <button
                  onClick={handleRandom}
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700"
                >
                  🎲 随机刷新
                </button>
              </div>
            </div>

            {questions.length > 0 && (
              <div className="space-y-3">
                {questions.map((q, index) => (
                  <div key={q.id} className="bg-white rounded-xl shadow-sm border p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-900">{q.question}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
