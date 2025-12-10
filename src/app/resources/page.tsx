'use client'

import Link from 'next/link'
import { Download, FileCode, Book, Wrench, Package, Star, ExternalLink, Github, Upload, FolderOpen, AlertCircle } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function ResourcesPage() {
  const { t } = useTranslation()

  const uploadInstructions = [
    {
      step: '1',
      title: t('resources.upload.step1.title'),
      description: t('resources.upload.step1.desc'),
    },
    {
      step: '2',
      title: t('resources.upload.step2.title'),
      description: t('resources.upload.step2.desc'),
    },
    {
      step: '3',
      title: t('resources.upload.step3.title'),
      description: t('resources.upload.step3.desc'),
    },
    {
      step: '4',
      title: t('resources.upload.step4.title'),
      description: t('resources.upload.step4.desc'),
    },
  ]

  const resourceCategories = [
    {
      icon: Book,
      title: '学习资料',
      description: '精选电子书、教程和学习路线图',
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          name: 'TypeScript 完全指南',
          type: 'PDF',
          size: '5.2 MB',
          description: '从基础到高级的 TypeScript 学习手册',
        },
        {
          name: 'React 最佳实践 2024',
          type: 'PDF',
          size: '3.8 MB',
          description: 'React Hooks、性能优化和设计模式',
        },
        {
          name: '软件测试自动化完整指南',
          type: 'PDF',
          size: '7.5 MB',
          description: '单元测试、集成测试、E2E 测试全覆盖',
        },
        {
          name: '数据工程学习路线图',
          type: 'Notion',
          size: '在线',
          description: '从入门到精通的完整学习计划',
        },
      ],
    },
    {
      icon: Wrench,
      title: '开发工具',
      description: '提高开发效率的工具和插件推荐',
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          name: 'VS Code 配置文件',
          type: 'JSON',
          size: '12 KB',
          description: '优化的 VS Code 设置和扩展列表',
        },
        {
          name: 'Git 工作流模板',
          type: 'Markdown',
          size: '8 KB',
          description: 'Git Flow、GitHub Flow 等最佳实践',
        },
        {
          name: 'Docker Compose 模板集',
          type: 'YAML',
          size: '45 KB',
          description: '常用开发环境 Docker 配置',
        },
        {
          name: 'ESLint + Prettier 配置',
          type: 'Config',
          size: '15 KB',
          description: '统一的代码规范配置文件',
        },
      ],
    },
    {
      icon: FileCode,
      title: '代码模板',
      description: '开箱即用的项目模板和代码片段',
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          name: 'Next.js 全栈模板',
          type: 'GitHub',
          size: '在线',
          description: 'Next.js + TypeScript + Tailwind + Prisma',
          link: 'https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss',
        },
        {
          name: 'React 组件库模板',
          type: 'GitHub',
          size: '在线',
          description: '基于 Storybook 的组件开发环境',
          link: 'https://github.com/storybookjs/react-vite-template',
        },
        {
          name: 'Python FastAPI 模板',
          type: 'GitHub',
          size: '在线',
          description: 'FastAPI + PostgreSQL + Docker',
          link: 'https://github.com/tiangolo/full-stack-fastapi-postgresql',
        },
        {
          name: 'Pytest 测试框架模板',
          type: 'GitHub',
          size: '在线',
          description: '完整的测试项目结构和示例',
          link: 'https://github.com/pytest-dev/pytest',
        },
      ],
    },
    {
      icon: Package,
      title: '工具包',
      description: '实用的工具函数库和 NPM 包',
      color: 'from-orange-500 to-red-500',
      items: [
        {
          name: 'TypeScript 工具函数库',
          type: 'NPM',
          size: '125 KB',
          description: '类型安全的常用工具函数集合',
        },
        {
          name: 'React Hooks 集合',
          type: 'NPM',
          size: '85 KB',
          description: '常用自定义 Hooks (useDebounce, useLocalStorage 等)',
        },
        {
          name: 'Python 数据处理工具',
          type: 'PyPI',
          size: '320 KB',
          description: 'ETL 和数据清洗常用函数',
        },
        {
          name: 'SQL 查询优化脚本',
          type: 'SQL',
          size: '28 KB',
          description: '性能优化和常用查询模板',
        },
      ],
    },
  ]

  const featuredResources = [
    {
      title: '完整技术栈学习路径',
      description: '从前端到后端、从测试到数据工程的完整学习路线图，包含推荐资源和实战项目',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      link: '#',
    },
    {
      title: '开源项目推荐',
      description: '精选 GitHub 优质开源项目，学习优秀代码和最佳实践',
      icon: Github,
      color: 'from-gray-700 to-gray-900',
      link: '#',
    },
    {
      title: '面试题库',
      description: '涵盖算法、系统设计、前端、后端的面试题目和详细解答',
      icon: Book,
      color: 'from-indigo-500 to-purple-500',
      link: '#',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-6xl py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            {t('resources.badge')}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {t('resources.hero.title')}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {' '}{t('resources.hero.subtitle')}
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg md:text-xl">
            {t('resources.hero.description')}
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
        <div className="container max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
            {t('resources.featured')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {featuredResources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 md:p-8 hover:shadow-lg transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative">
                    <div className={`inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-gradient-to-br ${resource.color} mb-4`}>
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{resource.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      {t('resources.viewDetails')}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
          {t('resources.categories')}
        </h2>
        <div className="space-y-12 md:space-y-16">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className={`inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} flex-shrink-0`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group rounded-lg border bg-card p-5 md:p-6 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full bg-muted px-2 py-1">
                          {item.type}
                        </span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How to Upload Resources */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container max-w-6xl px-4">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
              <Upload className="h-4 w-4" />
              <span>{t('resources.upload.badge')}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t('resources.upload.title')}
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              {t('resources.upload.description')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {uploadInstructions.map((instruction) => (
              <div key={instruction.step} className="rounded-lg border bg-card p-6">
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-xl font-bold">
                    {instruction.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{instruction.title}</h3>
                <p className="text-sm text-muted-foreground">{instruction.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">{t('resources.upload.notice.title')}</h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• {t('resources.upload.notice.platform')}</li>
                  <li>• {t('resources.upload.notice.size')}</li>
                  <li>• {t('resources.upload.notice.format')}</li>
                  <li>• {t('resources.upload.notice.github')}<a href="https://github.com/yourusername/aicodes-resources" className="underline hover:text-blue-600 dark:hover:text-blue-300">aicodes-resources</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
            {t('resources.howToUse.title')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-xl md:text-2xl font-bold mb-3 md:mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">{t('resources.howToUse.step1')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('resources.howToUse.step1.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-xl md:text-2xl font-bold mb-3 md:mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">{t('resources.howToUse.step2')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('resources.howToUse.step2.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-xl md:text-2xl font-bold mb-3 md:mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">{t('resources.howToUse.step3')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('resources.howToUse.step3.desc')}
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              {t('resources.howToUse.footer')}
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 md:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t('resources.howToUse.cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
