export interface Question {
  id: number
  category: 'api' | 'function' | 'python' | 'all'
  question: string
  answer?: string
}

// 接口测试题库
export const apiQuestions: Question[] = [
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
  { id: 25, category: 'api', question: 'fiddler如何打断点？(你在工作中什么情况下打了断点？ )' },
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
  { id: 51, category: 'api', question: '有没有手动部署过项目(tomcat部署项目？(搭建环境))?' },
  { id: 52, category: 'api', question: '测试数据准备多少？如何准备？' },
  { id: 53, category: 'api', question: '发现过什么样的性能问题，最后怎么解决的？' },
]

// 前期功能题库
export const functionQuestions: Question[] = [
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
  { id: 112, category: 'function', question: '作为软件测试工程师你觉得需要具备什么样的素质？请结合自身情况说下？' },
  { id: 113, category: 'function', question: '说下测试工作流程？' },
  { id: 114, category: 'function', question: '说下你负责项目的业务流程？' },
  { id: 115, category: 'function', question: '你负责的项目都包括哪些模块？' },
  { id: 116, category: 'function', question: '你负责的模块业务逻辑说下？' },
  { id: 117, category: 'function', question: '你们公司用的什么模型？' },
  { id: 118, category: 'function', question: '你们公司用什么管理资料的？怎么用的？版本冲突怎么解决的？' },
  { id: 119, category: 'function', question: '没有需求文档你怎么开展测试工作？' },
  { id: 120, category: 'function', question: '你们公司产品上线的标准是什么？' },
  { id: 121, category: 'function', question: '你们公司软件一般什么时候上线？' },
  { id: 122, category: 'function', question: '你觉得你工作中遇到比较困难的事情是什么？' },
  { id: 123, category: 'function', question: '如果你在我们公司工作一段时间发现胜任不了这份工作，你怎么办？' },
  { id: 124, category: 'function', question: '软件测试的生命周期？' },
  { id: 125, category: 'function', question: '什么是软件测试？' },
  { id: 126, category: 'function', question: '测试的对象是什么？' },
  { id: 127, category: 'function', question: '黑盒测试与白盒测试的区别是什么？' },
  { id: 128, category: 'function', question: '用例评审几轮？通过的标准是什么？你怎么保证能达到这个标准？' },
  { id: 129, category: 'function', question: '什么是一个缺陷？你发现bug后，怎么确认它是一个bug的？' },
  { id: 130, category: 'function', question: '缺陷的要素有哪些？' },
  { id: 131, category: 'function', question: '描述下缺陷的处理流程？' },
  { id: 132, category: 'function', question: '缺陷的严重程度/优先级怎么划分的？' },
  { id: 133, category: 'function', question: '你们测试几轮？一天能测多少条用例？' },
  { id: 134, category: 'function', question: '你一天能找几个BUG？都发现过哪些BUG？' },
  { id: 135, category: 'function', question: 'Web端与App端测试的区别是什么？' },
  { id: 136, category: 'function', question: '你们公司用的什么数据库？什么版本？' },
  { id: 137, category: 'function', question: 'MySQL与Oracle什么区别？' },
  { id: 138, category: 'function', question: '你用什么工具连你们公司的数据库？' },
  { id: 139, category: 'function', question: '工作中你都使用数据库做什么？' },
  { id: 140, category: 'function', question: '你们公司都有哪些表？（每个表都有哪些字段？）' },
  { id: 141, category: 'function', question: '常用的数据库命令有哪些？' },
  { id: 142, category: 'function', question: '多个条件筛选时，and与or的区别是什么？' },
  { id: 143, category: 'function', question: 'where与having的区别是什么？' },
  { id: 144, category: 'function', question: 'limit后那2个数字分别代表什么？' },
  { id: 145, category: 'function', question: '聚合函数有哪些？' },
  { id: 146, category: 'function', question: 'count(*)与count(字段)什么区别？' },
  { id: 147, category: 'function', question: '连表会吗？' },
  { id: 148, category: 'function', question: '内连与外连什么区别？' },
  { id: 149, category: 'function', question: '左外连接与右外连接什么区别？' },
  { id: 150, category: 'function', question: '子查询有哪几类？怎么用的？' },
  { id: 151, category: 'function', question: '如何查看20--25岁男生信息？' },
  { id: 152, category: 'function', question: '如何统计姓张的女生人数？' },
  { id: 153, category: 'function', question: '如何统计男生与女生的人数？' },
  { id: 154, category: 'function', question: '如何查看王小明的分数？' },
  { id: 155, category: 'function', question: '如何查看没有参加考试的学生信息？' },
  { id: 156, category: 'function', question: '怎么把王小明的分数修改一下？' },
  { id: 157, category: 'function', question: '如何往学生表中添加一条数据？' },
  { id: 158, category: 'function', question: '如何删除王小明的信息？' },
  { id: 159, category: 'function', question: '如何备份一个表？' },
  { id: 160, category: 'function', question: '修改表都有哪些操作？' },
  { id: 161, category: 'function', question: 'delete、truncate、drop什么区别？' },
  { id: 162, category: 'function', question: '数据类型都有哪些？' },
  { id: 163, category: 'function', question: 'char和varchar的区别？' },
  { id: 164, category: 'function', question: '约束都有哪些？作用是什么？' },
  { id: 165, category: 'function', question: '主键,外键,唯一键的区别？' },
  { id: 166, category: 'function', question: '视图的作用是什么？' },
  { id: 167, category: 'function', question: '存储过程是什么？' },
  { id: 168, category: 'function', question: '事务的特性（又称ACID特性）是什么？' },
  { id: 169, category: 'function', question: '索引的作用是什么？你知道哪些类型的索引？' },
  { id: 170, category: 'function', question: '索引失效是什么原因导致的？' },
  { id: 171, category: 'function', question: 'git冲突？' },
  { id: 172, category: 'function', question: 'app测试常见的adb命令？' },
  { id: 173, category: 'function', question: '工作中使用svn做什么？版本冲突怎么解决的？' },
]

// Python题库
export const pythonQuestions: Question[] = [
  { id: 201, category: 'python', question: 'python数据类型有哪些？' },
  { id: 202, category: 'python', question: 'python可变数据类型有哪些？' },
  { id: 203, category: 'python', question: '数据类型怎么转换，怎么打印数据类型？' },
  { id: 204, category: 'python', question: '变量的命名规则' },
  { id: 205, category: 'python', question: '列表与元组的区别' },
  { id: 206, category: 'python', question: '列表的插入方式都有哪些？' },
  { id: 207, category: 'python', question: '列表怎么去重，有哪几种方法？' },
  { id: 208, category: 'python', question: '列表和字典的区别' },
  { id: 209, category: 'python', question: '如何遍历列表，字典' },
  { id: 210, category: 'python', question: 'python的标准库有哪些（python自带的包有哪些）' },
  { id: 211, category: 'python', question: 'python中经常使用的函数' },
  { id: 212, category: 'python', question: '局部变量和全局变量的区别' },
  { id: 213, category: 'python', question: 'python中is和==的区别' },
  { id: 214, category: 'python', question: '截取字符串里面部分字符怎么做？怎么分割字符串？' },
  { id: 215, category: 'python', question: '形参和实参的区别' },
  { id: 216, category: 'python', question: '你们使用python的哪个版本？用什么软件来编写代码的？' },
  { id: 217, category: 'python', question: '冒泡排序原理' },
  { id: 218, category: 'python', question: '什么是装饰器' },
  { id: 219, category: 'python', question: 'python生成随机数' },
  { id: 220, category: 'python', question: 'json数据转换' },
  { id: 221, category: 'python', question: 'python中的浅拷贝和深拷贝' },
  { id: 222, category: 'python', question: 'python学的怎么样？（对python了解多少？）' },
  { id: 223, category: 'python', question: 'UI(web)自动化测试是怎么做的？' },
  { id: 224, category: 'python', question: '元素定位的方式有哪些？你常用的元素定位方式是哪些？' },
  { id: 225, category: 'python', question: '定位不到元素，你碰到过哪些，怎么解决？' },
  { id: 226, category: 'python', question: '如何去定位内嵌frame内的元素？（定位时遇到frame框架如何处理？）' },
  { id: 227, category: 'python', question: '如何在不同的网页窗口之间切换？（如何处理多窗口定位问题）' },
  { id: 228, category: 'python', question: '如何去操作滚动条？（滚动条怎么处理？）' },
  { id: 229, category: 'python', question: '对于不可见的元素，你如何定位，如何处理？' },
  { id: 230, category: 'python', question: 'xpath定位方法（定位策略），css定位方法（定位策略）' },
  { id: 231, category: 'python', question: '元素等待方式有哪几种？怎么使用的？' },
  { id: 232, category: 'python', question: '显示等待与隐式等待的区别？' },
  { id: 233, category: 'python', question: '如何处理弹出框？' },
  { id: 234, category: 'python', question: '如何去模拟键盘与鼠标的操作？' },
  { id: 235, category: 'python', question: 'selenium是做什么用的，工作原理，怎么使用的？' },
  { id: 236, category: 'python', question: '对pytest框架了解多少？pytest都有哪些功能？' },
  { id: 237, category: 'python', question: 'UI(web)自动化中，你是怎么做断言的？' },
  { id: 238, category: 'python', question: 'UI(web)自动化中，怎么生成测试报告的？' },
  { id: 239, category: 'python', question: '什么是po模式？' },
  { id: 240, category: 'python', question: '数据驱动(ddt)有没有了解过，怎么做的？' },
  { id: 241, category: 'python', question: 'python（自动化中）如何去操作数据库？' },
  { id: 242, category: 'python', question: 'python（自动化中）如何去读取excel表数据？' },
  { id: 243, category: 'python', question: '如何处理下拉菜单？' },
  { id: 244, category: 'python', question: 'UI(web)自动化测试过程中遇到的异常有哪些？' },
  { id: 245, category: 'python', question: '元素的状态都有哪些？怎么判断元素状态？' },
  { id: 246, category: 'python', question: 'UI(web)自动化中是如何上传文件的？' },
  { id: 247, category: 'python', question: 'UI(web)自动化用过哪些库？' },
  { id: 248, category: 'python', question: '如何缩短UI(web)自动化测试用例执行时间？(如何优化UI(web)自动化代码？)' },
  { id: 249, category: 'python', question: '你觉得做UI(web)自动化时最困难的是什么地方' },
  { id: 250, category: 'python', question: 'Python多线程？' },
]

// 总题库（合并所有题目）
export const allQuestions: Question[] = [
  ...apiQuestions,
  ...functionQuestions,
  ...pythonQuestions,
]

// 获取题库
export function getQuestionBank(type: string): Question[] {
  switch (type) {
    case 'api':
      return apiQuestions
    case 'function':
      return functionQuestions
    case 'python':
      return pythonQuestions
    case 'all':
      return allQuestions
    default:
      return []
  }
}

// 随机获取指定数量的题目
export function getRandomQuestions(type: string, count: number): Question[] {
  const bank = getQuestionBank(type)
  const shuffled = [...bank].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, bank.length))
}
