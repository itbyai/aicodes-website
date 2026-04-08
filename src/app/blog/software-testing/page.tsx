'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, FlaskConical, Gauge, Layers, ShieldCheck, Wrench } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function SoftwareTestingPage() {
  const { t, locale } = useTranslation()

  const copy = locale === 'zh'
    ? {
        heroTitle: '从“能测”到“测得好”',
        heroDesc: '这不是一个只讲工具的页面，而是一套可落地的软件测试实践地图。你可以按路线系统学习，也可以按模块快速查阅。',
        stats: [
          { label: '学习模块', value: '5' },
          { label: '实践项目', value: '6' },
          { label: '面试高频点', value: '30+' },
        ],
        pathTitle: '学习路线',
        pathSteps: [
          { title: '测试基础与思维', desc: '建立测试分层思维，理解质量成本与风险优先级。' },
          { title: '单元与集成测试', desc: '掌握可测试设计、Mock 策略、测试数据组织。' },
          { title: '接口与契约测试', desc: '围绕 API 设计稳定、可回归、可追踪的测试集。' },
          { title: 'E2E 与关键路径保障', desc: '聚焦用户旅程，减少脆弱断言，提高测试稳定性。' },
          { title: 'CI/CD 与质量门禁', desc: '把测试接入流水线，建立可观测指标与发布标准。' },
        ],
        pyramidTitle: '测试金字塔实践',
        pyramidCards: [
          { level: 'Unit', tip: '快、便宜、定位精确。优先覆盖核心业务规则。' },
          { level: 'Integration', tip: '验证模块间协作，重点关注边界与错误处理。' },
          { level: 'E2E', tip: '只保留关键业务路径，避免“全页面全场景”导致维护失控。' },
        ],
        toolsTitle: '工具矩阵（按场景）',
        tools: [
          { scene: '单元测试', stack: 'Jest / Vitest / Pytest', keypoint: '高执行速度、稳定断言、覆盖率基线' },
          { scene: '接口测试', stack: 'Playwright API / Postman / Supertest', keypoint: '状态码、契约、鉴权、幂等性' },
          { scene: 'E2E 自动化', stack: 'Playwright / Cypress', keypoint: '关键流程、可重试、截图与追踪日志' },
          { scene: '性能测试', stack: 'k6 / Locust / JMeter', keypoint: '吞吐、延迟、瓶颈定位、容量评估' },
        ],
        projectsTitle: '实战练习建议',
        projects: [
          '为一个 Todo API 编写完整的接口测试与错误场景测试',
          '为登录/支付流程设计最小化 E2E 回归集',
          '在 CI 中加入质量门禁：失败阻断、覆盖率阈值、报告归档',
          '实现一次性能基线测试并输出容量建议',
        ],
        checklistTitle: '面试前自检清单',
        checklist: [
          '能解释测试金字塔及其在真实项目中的取舍',
          '能举例说明 flaky test 的根因与治理方法',
          '能设计一个 API 的功能/异常/安全测试点',
          '能说清 CI 中的质量门禁策略',
        ],
        ctaTitle: '想要拿到可直接复用的测试模板？',
        ctaDesc: '我可以根据你的技术栈（前端、后端或数据平台）给你一套可落地的测试计划。',
        ctaPrimary: '联系我获取模板',
        ctaSecondary: '查看面试题库',
      }
    : {
        heroTitle: 'From "Testing Exists" to "Testing Works"',
        heroDesc: 'This page is not just about tools. It is a practical testing map you can follow end-to-end or use as a quick reference.',
        stats: [
          { label: 'Learning Modules', value: '5' },
          { label: 'Practice Projects', value: '6' },
          { label: 'Interview Hot Topics', value: '30+' },
        ],
        pathTitle: 'Learning Path',
        pathSteps: [
          { title: 'Testing Fundamentals', desc: 'Build layered testing thinking, quality cost awareness, and risk prioritization.' },
          { title: 'Unit and Integration', desc: 'Master testable design, mocking strategy, and test data organization.' },
          { title: 'API and Contract Testing', desc: 'Create stable and traceable suites around API behavior and contracts.' },
          { title: 'E2E and Critical Flows', desc: 'Focus on core user journeys and reduce brittle assertions.' },
          { title: 'CI/CD Quality Gates', desc: 'Integrate tests into delivery pipelines with measurable release standards.' },
        ],
        pyramidTitle: 'Testing Pyramid in Practice',
        pyramidCards: [
          { level: 'Unit', tip: 'Fast and precise. Cover core business logic first.' },
          { level: 'Integration', tip: 'Validate collaboration between modules and edge handling.' },
          { level: 'E2E', tip: 'Keep only critical paths to avoid expensive maintenance.' },
        ],
        toolsTitle: 'Tool Matrix by Scenario',
        tools: [
          { scene: 'Unit Testing', stack: 'Jest / Vitest / Pytest', keypoint: 'Execution speed, stable assertions, coverage baseline' },
          { scene: 'API Testing', stack: 'Playwright API / Postman / Supertest', keypoint: 'Status, contract, auth, idempotency' },
          { scene: 'E2E Automation', stack: 'Playwright / Cypress', keypoint: 'Critical flows, retries, screenshot and trace logs' },
          { scene: 'Performance', stack: 'k6 / Locust / JMeter', keypoint: 'Throughput, latency, bottleneck analysis, capacity planning' },
        ],
        projectsTitle: 'Hands-on Practice Ideas',
        projects: [
          'Build full API test suites for a Todo service including failure paths',
          'Design a minimal but stable E2E regression set for login/payment',
          'Add CI quality gates: fail-on-red, coverage threshold, report archive',
          'Run a baseline performance test and produce capacity recommendations',
        ],
        checklistTitle: 'Pre-Interview Checklist',
        checklist: [
          'Explain the testing pyramid with real-world tradeoffs',
          'Describe flaky-test root causes and mitigation strategy',
          'Design test points for API function, edge, and security',
          'Explain quality gates in CI and release criteria',
        ],
        ctaTitle: 'Want ready-to-use testing templates?',
        ctaDesc: 'I can help you build a practical testing plan based on your stack.',
        ctaPrimary: 'Contact Me for Templates',
        ctaSecondary: 'Open Interview Bank',
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
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 px-3 py-1 text-sm text-white mb-4">
            <FlaskConical className="h-4 w-4" />
            {t('blog.testing.title')}
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
            <Layers className="h-5 w-5 text-primary" />
            {copy.pathTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.pathSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border bg-card p-5">
                <p className="text-sm text-primary font-semibold mb-2">STEP {index + 1}</p>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            {copy.pyramidTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.pyramidCards.map((card) => (
              <div key={card.level} className="rounded-lg border p-6">
                <p className="text-sm font-semibold text-primary">{card.level}</p>
                <p className="text-sm text-muted-foreground mt-2">{card.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            {copy.toolsTitle}
          </h2>
          <div className="grid gap-4">
            {copy.tools.map((tool) => (
              <div key={tool.scene} className="rounded-lg border bg-card p-5">
                <p className="font-semibold">{tool.scene}</p>
                <p className="text-sm text-muted-foreground mt-1">{tool.stack}</p>
                <p className="text-sm mt-2">{tool.keypoint}</p>
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
                <Gauge className="h-5 w-5 text-primary" />
                {copy.projectsTitle}
              </h2>
              <div className="space-y-3">
                {copy.projects.map((project) => (
                  <div key={project} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">{copy.checklistTitle}</h2>
              <div className="space-y-3">
                {copy.checklist.map((item) => (
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

      <section className="border-t bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="container max-w-4xl py-12 md:py-16 text-center">
          <h3 className="text-2xl font-semibold mb-3">{copy.ctaTitle}</h3>
          <p className="text-muted-foreground mb-6">{copy.ctaDesc}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {copy.ctaPrimary}
            </Link>
            <Link
              href="/interview"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl py-10">
        <div className="rounded-lg border bg-muted/50 p-6">
          <h3 className="font-semibold mb-2">{t('blog.testing.interested')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('blog.testing.interestedDesc1')}
            <Link href="/contact" className="text-primary hover:underline mx-1">
              {t('blog.testing.interestedDesc2')}
            </Link>
            {t('blog.testing.interestedDesc3')}
          </p>
        </div>
      </section>
    </div>
  )
}
