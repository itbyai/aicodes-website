'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Code2, Compass, Lightbulb, Palette, Sparkles, Workflow } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function VibeCodingPage() {
  const { t, locale } = useTranslation()

  const copy = locale === 'zh'
    ? {
        heroTitle: '让代码有“节奏感”',
        heroDesc: 'Vibe Coding 不是炫技，而是把可读性、反馈速度和工程质量组合成一种稳定产出的开发方式。',
        stats: [
          { label: '方法模块', value: '5' },
          { label: '实战案例', value: '8' },
          { label: '提效目标', value: '2x' },
        ],
        principlesTitle: '核心原则',
        principles: [
          { title: '先清晰，再聪明', desc: '优先表达意图，让团队成员能快速读懂并安全修改。' },
          { title: '短反馈闭环', desc: '每次改动都可运行、可验证，避免“攒一大坨再调试”。' },
          { title: '代码即沟通', desc: '命名、结构、注释共同组成协作语言，而不是个人风格秀场。' },
        ],
        workflowTitle: '推荐工作流',
        workflow: [
          '明确目标：一句话定义本次改动要解决的问题',
          '最小切片：拆成可独立验证的改动单元',
          '快速验证：每个单元都能跑通并通过关键测试',
          '统一风格：命名、目录、错误处理保持一致',
          '回顾沉淀：把可复用模式提炼成模板或规范',
        ],
        craftTitle: '工程手感清单',
        craft: [
          '函数职责单一，参数和返回语义明确',
          '避免隐式状态，优先纯函数和可追踪数据流',
          'UI 组件接口稳定，尽量把状态收敛在边界层',
          '错误处理可观测，日志对排障有帮助',
        ],
        projectsTitle: '练习项目建议',
        projects: [
          '把一个冗长组件拆分为“容器 + 展示 + hooks”结构',
          '给旧项目加上 lint + format + pre-commit 质量门禁',
          '把一段嵌套回调逻辑重构为清晰的数据流',
          '提炼一个可复用 UI 模块并补齐使用文档',
        ],
        antiTitle: '常见反模式',
        anti: [
          '过早抽象：还没稳定就上复杂架构',
          '沉迷新语法：可读性下降但收益不明显',
          '忽略回归验证：功能看似能跑，边界问题频出',
          '只顾个人效率：团队协作成本越来越高',
        ],
        ctaTitle: '想把你的项目改成“顺手”状态？',
        ctaDesc: '我可以帮你针对当前代码库做一次结构与开发体验优化建议。',
        ctaPrimary: '联系我做代码评估',
        ctaSecondary: '查看资源中心',
      }
    : {
        heroTitle: 'Give Your Code a Better Rhythm',
        heroDesc: 'Vibe Coding is not about showing off. It combines readability, fast feedback, and engineering quality into a sustainable workflow.',
        stats: [
          { label: 'Method Modules', value: '5' },
          { label: 'Practice Cases', value: '8' },
          { label: 'Productivity Goal', value: '2x' },
        ],
        principlesTitle: 'Core Principles',
        principles: [
          { title: 'Clarity Before Cleverness', desc: 'Make intent explicit so teammates can read and modify safely.' },
          { title: 'Short Feedback Loops', desc: 'Keep changes small, runnable, and testable at every step.' },
          { title: 'Code as Communication', desc: 'Naming, structure, and comments should help collaboration, not ego.' },
        ],
        workflowTitle: 'Recommended Workflow',
        workflow: [
          'Define the goal in one sentence',
          'Split work into independently verifiable slices',
          'Validate each slice with quick checks or tests',
          'Keep naming, structure, and error handling consistent',
          'Capture reusable patterns as templates or standards',
        ],
        craftTitle: 'Engineering Craft Checklist',
        craft: [
          'Single-responsibility functions with clear interfaces',
          'Prefer explicit state and traceable data flow',
          'Keep UI component contracts stable and predictable',
          'Make errors observable with useful logs',
        ],
        projectsTitle: 'Practice Project Ideas',
        projects: [
          'Refactor a large component into container + presentational + hooks',
          'Add lint + format + pre-commit quality gates to a legacy project',
          'Rewrite deeply nested callback logic into a clean data flow',
          'Extract a reusable UI module with usage docs',
        ],
        antiTitle: 'Common Anti-Patterns',
        anti: [
          'Premature abstraction before requirements stabilize',
          'Using new syntax that hurts readability',
          'Skipping regression checks after refactors',
          'Optimizing personal speed over team maintainability',
        ],
        ctaTitle: 'Want your codebase to feel easier to work with?',
        ctaDesc: 'I can help review your current architecture and provide practical improvements.',
        ctaPrimary: 'Contact Me for a Review',
        ctaSecondary: 'Open Resource Hub',
      }

  return (
    <div className="flex flex-col">
      <section className="container max-w-6xl py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('blog.coming.back')}
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 px-3 py-1 text-sm text-white mb-4">
            <Code2 className="h-4 w-4" />
            {t('blog.vibeCoding.title')}
          </div>
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">{copy.heroTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-4xl">{copy.heroDesc}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {copy.stats.map((item) => (
            <div key={item.label} className="rounded-lg border bg-card p-6">
              <p className="text-3xl font-bold text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            {copy.principlesTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.principles.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-6">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-6xl py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" />
                {copy.workflowTitle}
              </h2>
              <div className="space-y-3">
                {copy.workflow.map((step) => (
                  <div key={step} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                {copy.craftTitle}
              </h2>
              <div className="space-y-3">
                {copy.craft.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Compass className="h-5 w-5 text-primary" />
                {copy.projectsTitle}
              </h2>
              <div className="space-y-3">
                {copy.projects.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">{copy.antiTitle}</h2>
              <div className="space-y-3">
                {copy.anti.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container max-w-4xl py-12 md:py-16 text-center">
          <h3 className="text-2xl font-semibold mb-3">{copy.ctaTitle}</h3>
          <p className="text-muted-foreground mb-6">{copy.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {copy.ctaPrimary}
            </Link>
            <Link
              href="/resources"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl py-10">
        <div className="rounded-lg border bg-muted/50 p-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            {t('blog.vibeCoding.interested')}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t('blog.vibeCoding.interestedDesc1')}
            <Link href="/contact" className="text-primary hover:underline mx-1">
              {t('blog.vibeCoding.interestedDesc2')}
            </Link>
            {t('blog.vibeCoding.interestedDesc3')}
          </p>
        </div>
      </section>
    </div>
  )
}
