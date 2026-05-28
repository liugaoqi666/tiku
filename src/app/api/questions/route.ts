import { NextRequest, NextResponse } from 'next/server'
import { getRandomQuestions, getQuestionBank } from '@/data/questions'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type') || 'all'
  const count = parseInt(searchParams.get('count') || '10')

  if (!['api', 'function', 'python', 'all'].includes(type)) {
    return NextResponse.json({ code: 400, message: '无效的题库类型' })
  }

  const questions = getRandomQuestions(type, count)
  const total = getQuestionBank(type).length

  return NextResponse.json({
    code: 0,
    message: 'success',
    data: {
      questions,
      total,
      count: questions.length,
      type,
    },
  })
}
