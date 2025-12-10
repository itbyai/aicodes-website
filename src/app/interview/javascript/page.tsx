'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Circle, BookOpen, Code, Lightbulb, Star, Building2 } from 'lucide-react'

const javascriptQuestions = [
  {
    id: 1,
    title: '什么是闭包（Closure）？',
    difficulty: 'medium',
    category: '核心概念',
    tags: ['闭包', '作用域', '函数'],
    companies: ['Google', 'Facebook', 'Amazon'],
    answer: `闭包是指有权访问另一个函数作用域中变量的函数。

**核心特点：**
1. 函数嵌套函数
2. 内部函数可以访问外部函数的变量
3. 外部函数执行完后，变量不会被销毁

**示例代码：**
\`\`\`javascript
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`

**使用场景：**
- 数据私有化
- 函数柯里化
- 回调函数
- 模块化模式`,
    relatedQuestions: [2, 5],
  },
  {
    id: 2,
    title: 'Promise 和 async/await 的区别',
    difficulty: 'medium',
    category: '异步编程',
    tags: ['Promise', 'async/await', '异步'],
    companies: ['Microsoft', 'Airbnb', 'Uber'],
    answer: `Promise 和 async/await 都用于处理异步操作，但写法不同。

**Promise：**
\`\`\`javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

**async/await：**
\`\`\`javascript
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

**主要区别：**
1. async/await 基于 Promise，是语法糖
2. async/await 代码更简洁易读
3. 错误处理：Promise 用 .catch()，async/await 用 try/catch
4. async/await 必须在 async 函数内使用`,
    relatedQuestions: [3, 7],
  },
  {
    id: 3,
    title: '解释事件循环（Event Loop）',
    difficulty: 'hard',
    category: '运行机制',
    tags: ['Event Loop', '宏任务', '微任务'],
    companies: ['Google', 'Bytedance', 'Alibaba'],
    answer: `事件循环是 JavaScript 处理异步操作的机制。

**执行顺序：**
1. 执行同步代码
2. 执行微任务队列（Promise、MutationObserver）
3. 执行宏任务队列（setTimeout、setInterval、I/O）

**示例：**
\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 输出顺序: 1, 4, 3, 2
\`\`\`

**关键点：**
- 微任务优先级高于宏任务
- 每次宏任务后会清空所有微任务
- requestAnimationFrame 在渲染前执行`,
    relatedQuestions: [2, 8],
  },
  {
    id: 4,
    title: '实现数组去重的多种方法',
    difficulty: 'easy',
    category: '数组操作',
    tags: ['数组', '去重', 'Set'],
    companies: ['所有公司'],
    answer: `**方法1: 使用 Set**
\`\`\`javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)]; // [1, 2, 3, 4, 5]
\`\`\`

**方法2: 使用 filter**
\`\`\`javascript
const unique = arr.filter((item, index) => 
  arr.indexOf(item) === index
);
\`\`\`

**方法3: 使用 reduce**
\`\`\`javascript
const unique = arr.reduce((acc, item) => 
  acc.includes(item) ? acc : [...acc, item], []
);
\`\`\`

**方法4: 使用对象（处理对象数组）**
\`\`\`javascript
const uniqueById = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
const result = Object.values(uniqueById);
\`\`\``,
    relatedQuestions: [10, 12],
  },
  {
    id: 5,
    title: 'this 关键字的指向规则',
    difficulty: 'medium',
    category: '核心概念',
    tags: ['this', '作用域', '绑定'],
    companies: ['Facebook', 'Amazon', 'Netflix'],
    answer: `this 的指向取决于函数调用方式。

**规则1: 默认绑定（独立函数调用）**
\`\`\`javascript
function foo() {
  console.log(this); // window（严格模式下是 undefined）
}
foo();
\`\`\`

**规则2: 隐式绑定（对象方法调用）**
\`\`\`javascript
const obj = {
  name: 'Alice',
  sayHi() {
    console.log(this.name); // 'Alice'
  }
};
obj.sayHi();
\`\`\`

**规则3: 显式绑定（call/apply/bind）**
\`\`\`javascript
function greet() {
  console.log(this.name);
}
greet.call({ name: 'Bob' }); // 'Bob'
\`\`\`

**规则4: new 绑定**
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const p = new Person('Charlie'); // this 指向新创建的对象
\`\`\`

**箭头函数特殊：**
箭头函数没有自己的 this，继承外层作用域的 this`,
    relatedQuestions: [1, 6],
  },
]

export default function JavaScriptInterviewPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set())

  const toggleComplete = (id: number) => {
    const newCompleted = new Set(completedQuestions)
    if (newCompleted.has(id)) {
      newCompleted.delete(id)
    } else {
      newCompleted.add(id)
    }
    setCompletedQuestions(newCompleted)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
      case 'medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30'
      case 'hard': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30'
    }
  }

  const selectedQ = selectedQuestion ? javascriptQuestions.find(q => q.id === selectedQuestion) : null

  const stats = {
    total: javascriptQuestions.length,
    completed: completedQuestions.size,
    easy: javascriptQuestions.filter(q => q.difficulty === 'easy').length,
    medium: javascriptQuestions.filter(q => q.difficulty === 'medium').length,
    hard: javascriptQuestions.filter(q => q.difficulty === 'hard').length,
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="border-b bg-muted/50">
        <div className="container max-w-6xl py-6">
          <Link
            href="/interview"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 hover-scale"
          >
            <ArrowLeft className="h-4 w-4" />
            返回面试题库
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🟨</span>
            <div>
              <h1 className="text-3xl font-bold">JavaScript 面试题</h1>
              <p className="text-muted-foreground mt-1">156 道精选题目，覆盖核心概念到高级特性</p>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rounded-lg bg-card border p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.completed}/{stats.total}</div>
              <div className="text-xs text-muted-foreground mt-1">完成进度</div>
            </div>
            <div className="rounded-lg bg-card border p-4 text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.easy}</div>
              <div className="text-xs text-muted-foreground mt-1">简单</div>
            </div>
            <div className="rounded-lg bg-card border p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.medium}</div>
              <div className="text-xs text-muted-foreground mt-1">中等</div>
            </div>
            <div className="rounded-lg bg-card border p-4 text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.hard}</div>
              <div className="text-xs text-muted-foreground mt-1">困难</div>
            </div>
            <div className="rounded-lg bg-card border p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {Math.round((stats.completed / stats.total) * 100)}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">完成率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1">
        <div className="container max-w-6xl py-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Questions List */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">题目列表</h2>
                <span className="text-sm text-muted-foreground">
                  {completedQuestions.size} / {javascriptQuestions.length}
                </span>
              </div>

              {javascriptQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => setSelectedQuestion(question.id)}
                  className={`w-full text-left rounded-lg border p-4 transition-all hover:shadow-md hover-scale ${
                    selectedQuestion === question.id ? 'border-primary bg-primary/5' : 'bg-card'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleComplete(question.id)
                      }}
                      className="mt-1"
                    >
                      {completedQuestions.has(question.id) ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">#{question.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty === 'easy' ? '简单' : question.difficulty === 'medium' ? '中等' : '困难'}
                        </span>
                      </div>
                      <h3 className="font-medium text-sm line-clamp-2">{question.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{question.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Question Detail */}
            <div className="lg:col-span-2">
              {selectedQ ? (
                <div className="rounded-lg border bg-card p-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${getDifficultyColor(selectedQ.difficulty)}`}>
                        {selectedQ.difficulty === 'easy' ? '简单' : selectedQ.difficulty === 'medium' ? '中等' : '困难'}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {selectedQ.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{selectedQ.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedQ.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>常见于: {selectedQ.companies.join(', ')}</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      <h3 className="font-semibold">答案解析</h3>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {selectedQ.answer}
                      </div>
                    </div>
                  </div>

                  {selectedQ.relatedQuestions && selectedQ.relatedQuestions.length > 0 && (
                    <div className="border-t pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">相关题目</h3>
                      </div>
                      <div className="space-y-2">
                        {selectedQ.relatedQuestions.map((relatedId) => {
                          const related = javascriptQuestions.find(q => q.id === relatedId)
                          if (!related) return null
                          return (
                            <button
                              key={relatedId}
                              onClick={() => setSelectedQuestion(relatedId)}
                              className="w-full text-left rounded-lg border p-3 hover:bg-muted transition-colors text-sm hover-scale"
                            >
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs ${getDifficultyColor(related.difficulty)}`}>
                                  {related.difficulty === 'easy' ? '简单' : related.difficulty === 'medium' ? '中等' : '困难'}
                                </span>
                                <span>{related.title}</span>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-6 flex justify-between">
                    <button
                      onClick={() => toggleComplete(selectedQ.id)}
                      className={`inline-flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-colors hover-scale ${
                        completedQuestions.has(selectedQ.id)
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {completedQuestions.has(selectedQ.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          已完成
                        </>
                      ) : (
                        <>
                          <Circle className="h-4 w-4" />
                          标记为完成
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border bg-card p-12 text-center">
                  <Code className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">选择一道题目开始练习</h3>
                  <p className="text-muted-foreground">
                    从左侧列表中选择题目查看详细解析
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
