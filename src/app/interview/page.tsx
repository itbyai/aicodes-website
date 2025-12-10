'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Briefcase, Building2, Search, ChevronRight, Star, Clock, TrendingUp } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

const interviewData = {
  byLanguage: [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '🟨',
      count: 156,
      difficulty: { easy: 52, medium: 78, hard: 26 },
      popular: ['闭包', 'Promise', '原型链', 'ES6+', '异步编程'],
      companies: ['Google', 'Facebook', 'Amazon'],
    },
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      count: 142,
      difficulty: { easy: 48, medium: 72, hard: 22 },
      popular: ['装饰器', '生成器', 'GIL', '数据结构', 'Django/Flask'],
      companies: ['Google', 'Netflix', 'Dropbox'],
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      count: 138,
      difficulty: { easy: 45, medium: 70, hard: 23 },
      popular: ['多线程', 'JVM', '集合框架', 'Spring', '设计模式'],
      companies: ['Amazon', 'LinkedIn', 'Oracle'],
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: '🔷',
      count: 98,
      difficulty: { easy: 35, medium: 48, hard: 15 },
      popular: ['类型系统', '泛型', '装饰器', 'tsconfig', '类型推断'],
      companies: ['Microsoft', 'Airbnb', 'Slack'],
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: '🗄️',
      count: 124,
      difficulty: { easy: 42, medium: 62, hard: 20 },
      popular: ['JOIN查询', '索引优化', '窗口函数', '事务', '性能调优'],
      companies: ['所有公司'],
    },
    {
      id: 'go',
      name: 'Go',
      icon: '🔵',
      count: 86,
      difficulty: { easy: 28, medium: 44, hard: 14 },
      popular: ['Goroutine', 'Channel', '接口', '并发模式', '错误处理'],
      companies: ['Google', 'Uber', 'Docker'],
    },
  ],
  byPosition: [
    {
      id: 'frontend',
      name: '前端工程师',
      icon: '🎨',
      count: 185,
      topics: ['React', 'Vue', '性能优化', 'CSS', 'Webpack', '浏览器原理'],
      salary: 'AUD $90k - $150k',
      demand: 'high',
    },
    {
      id: 'backend',
      name: '后端工程师',
      icon: '⚙️',
      count: 198,
      topics: ['API设计', '数据库', '缓存', '微服务', '系统设计', '安全'],
      salary: 'AUD $95k - $160k',
      demand: 'high',
    },
    {
      id: 'fullstack',
      name: '全栈工程师',
      icon: '🚀',
      count: 167,
      topics: ['前后端', 'DevOps', '云服务', 'CI/CD', '数据库', 'API'],
      salary: 'AUD $100k - $170k',
      demand: 'very-high',
    },
    {
      id: 'qa',
      name: '测试工程师',
      icon: '🧪',
      count: 128,
      topics: ['自动化测试', 'Selenium', 'Pytest', 'CI/CD', '性能测试', 'API测试'],
      salary: 'AUD $85k - $140k',
      demand: 'medium',
    },
    {
      id: 'data-engineer',
      name: '数据工程师',
      icon: '📊',
      count: 145,
      topics: ['ETL', 'Spark', 'Airflow', '数据仓库', 'AWS', 'Python'],
      salary: 'AUD $100k - $165k',
      demand: 'very-high',
    },
    {
      id: 'devops',
      name: 'DevOps工程师',
      icon: '🔧',
      count: 112,
      topics: ['Kubernetes', 'Docker', 'Terraform', 'AWS/Azure', 'CI/CD', '监控'],
      salary: 'AUD $105k - $175k',
      demand: 'high',
    },
  ],
  byCompany: [
    {
      id: 'canva',
      name: 'Canva',
      logo: '🎨',
      location: 'Sydney',
      questions: 98,
      difficulty: 'Medium',
      focus: ['系统设计', 'React', 'TypeScript', '算法', '行为面试'],
      process: '4-5轮',
      tips: '注重产品思维和用户体验',
    },
    {
      id: 'atlassian',
      name: 'Atlassian',
      logo: '🔷',
      location: 'Sydney/Melbourne',
      questions: 112,
      difficulty: 'Medium-Hard',
      focus: ['系统设计', 'Java/Kotlin', '分布式系统', '算法', '团队协作'],
      process: '4-6轮',
      tips: '重视代码质量和工程实践',
    },
    {
      id: 'google',
      name: 'Google',
      logo: '🔍',
      location: 'Sydney',
      questions: 156,
      difficulty: 'Hard',
      focus: ['算法', '数据结构', '系统设计', '编程能力', '问题解决'],
      process: '5-6轮',
      tips: '需要扎实的CS基础',
    },
    {
      id: 'amazon',
      name: 'Amazon',
      logo: '📦',
      location: 'Sydney/Melbourne',
      questions: 134,
      difficulty: 'Medium-Hard',
      focus: ['Leadership Principles', '系统设计', '算法', 'OOP', 'AWS'],
      process: '4-5轮',
      tips: '熟悉14条领导力原则',
    },
    {
      id: 'seek',
      name: 'Seek',
      logo: '💼',
      location: 'Melbourne',
      questions: 76,
      difficulty: 'Medium',
      focus: ['.NET/Node.js', 'React', 'AWS', '微服务', '敏捷开发'],
      process: '3-4轮',
      tips: '强调实际项目经验',
    },
    {
      id: 'rea',
      name: 'REA Group',
      logo: '🏠',
      location: 'Melbourne',
      questions: 68,
      difficulty: 'Medium',
      focus: ['Ruby/Scala', 'React', 'TDD', '微服务', 'DevOps'],
      process: '3-4轮',
      tips: '重视测试驱动开发',
    },
  ],
}

export default function InterviewPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'language' | 'position' | 'company'>('language')
  const [searchTerm, setSearchTerm] = useState('')

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'very-high': return 'text-green-600 dark:text-green-400'
      case 'high': return 'text-blue-600 dark:text-blue-400'
      case 'medium': return 'text-yellow-600 dark:text-yellow-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Hard': return 'text-red-600 dark:text-red-400'
      case 'Medium-Hard': return 'text-orange-600 dark:text-orange-400'
      case 'Medium': return 'text-yellow-600 dark:text-yellow-400'
      default: return 'text-green-600 dark:text-green-400'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-6xl py-12 md:py-20 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 text-sm font-medium animate-float">
            <Star className="h-4 w-4" />
            <span>{t('interview.badge')}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t('interview.title')}
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {t('interview.subtitle')}
            </span>
          </h1>
          <p className="max-w-[42rem] text-lg text-muted-foreground">
            {t('interview.description')}
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-md mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('interview.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-8">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div className="hover-scale cursor-glow rounded-lg bg-card p-4 border">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                1,200+
              </div>
              <p className="text-sm text-muted-foreground mt-1">{t('interview.stats.questions')}</p>
            </div>
            <div className="hover-scale cursor-glow rounded-lg bg-card p-4 border">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                50+
              </div>
              <p className="text-sm text-muted-foreground mt-1">{t('interview.stats.companies')}</p>
            </div>
            <div className="hover-scale cursor-glow rounded-lg bg-card p-4 border">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                15+
              </div>
              <p className="text-sm text-muted-foreground mt-1">{t('interview.stats.languages')}</p>
            </div>
            <div className="hover-scale cursor-glow rounded-lg bg-card p-4 border">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient">
                {t('interview.stats.updated')}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{t('interview.stats.continuous')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-t">
        <div className="container max-w-6xl py-8">
          <div className="flex gap-2 border-b mb-8">
            <button
              onClick={() => setActiveTab('language')}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors hover-scale ${
                activeTab === 'language'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code2 className="h-4 w-4" />
              {t('interview.tab.language')}
            </button>
            <button
              onClick={() => setActiveTab('position')}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors hover-scale ${
                activeTab === 'position'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              {t('interview.tab.position')}
            </button>
            <button
              onClick={() => setActiveTab('company')}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors hover-scale ${
                activeTab === 'company'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Building2 className="h-4 w-4" />
              {t('interview.tab.company')}
            </button>
          </div>

          {/* Language Tab */}
          {activeTab === 'language' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {interviewData.byLanguage.map((lang) => (
                <Link
                  key={lang.id}
                  href={`/interview/${lang.id}`}
                  className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{lang.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {lang.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{lang.count} {t('interview.questions')}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                        {t('interview.difficulty.easy')} {lang.difficulty.easy}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                        {t('interview.difficulty.medium')} {lang.difficulty.medium}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                        {t('interview.difficulty.hard')} {lang.difficulty.hard}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">{t('interview.popularTopics')}</p>
                      <div className="flex flex-wrap gap-1">
                        {lang.popular.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {t('interview.commonCompanies')} {lang.companies.join(', ')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Position Tab */}
          {activeTab === 'position' && (
            <div className="grid gap-6 md:grid-cols-2">
              {interviewData.byPosition.map((position) => (
                <Link
                  key={position.id}
                  href={`/interview/position/${position.id}`}
                  className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{position.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {position.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{position.count} {t('interview.questions')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`h-4 w-4 ${getDemandColor(position.demand)}`} />
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">{t('interview.salaryRange')}</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {position.salary}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">{t('interview.coreTopics')}</p>
                      <div className="flex flex-wrap gap-1">
                        {position.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Company Tab */}
          {activeTab === 'company' && (
            <div className="grid gap-6 md:grid-cols-2">
              {interviewData.byCompany.map((company) => (
                <Link
                  key={company.id}
                  href={`/interview/company/${company.id}`}
                  className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{company.logo}</span>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          📍 {company.location} · {company.questions} {t('interview.questions')}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{t('interview.difficulty')}</span>
                        <span className={`font-medium ${getDifficultyColor(company.difficulty)}`}>
                          {company.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{company.process}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">{t('interview.interviewFocus')}</p>
                      <div className="flex flex-wrap gap-1">
                        {company.focus.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-yellow-500">💡</span>
                        <span>{company.tips}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 animate-gradient">
        <div className="container max-w-4xl py-16 md:py-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('interview.cta.title')}
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              {t('interview.cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/interview/javascript"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-scale"
              >
                {t('interview.cta.startPractice')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover-scale"
              >
                {t('interview.cta.getCoaching')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
