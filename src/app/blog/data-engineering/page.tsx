'use client'

import Link from 'next/link'
import { Activity, ArrowLeft, CheckCircle2, Database, Layers3, Rocket, ServerCog, ShieldAlert } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function DataEngineeringPage() {
  const { t, locale } = useTranslation()

  const copy = locale === 'zh'
    ? {
        heroTitle: '把数据工程做成稳定系统',
        heroDesc: '从采集、建模、调度到质量治理，这里是一套面向真实业务的数据工程实践指南。',
        stats: [
          { label: '学习阶段', value: '5' },
          { label: '实战项目', value: '6' },
          { label: '核心考点', value: '35+' },
        ],
        roadmapTitle: '成长路线图',
        roadmap: [
          { title: '数据建模基础', desc: '理解维度建模、宽表设计、主键策略与数据口径。' },
          { title: 'ETL/ELT 实践', desc: '掌握批处理与增量处理，设计可恢复的任务流。' },
          { title: '调度与编排', desc: '用 Airflow/Prefect 构建可观察、可重跑、可告警的 DAG。' },
          { title: '数据质量治理', desc: '落地完整性、唯一性、时效性与异常监控。' },
          { title: '实时数据链路', desc: '理解 Kafka + 流处理的语义、延迟与一致性权衡。' },
        ],
        architectureTitle: '数据平台能力栈',
        architecture: [
          { layer: 'Ingestion', detail: 'CDC、日志采集、第三方 API 抽取' },
          { layer: 'Storage', detail: 'Data Lake / Warehouse 分层与成本控制' },
          { layer: 'Transform', detail: 'dbt / Spark SQL / Python Pipeline' },
          { layer: 'Serve', detail: 'BI 报表、特征服务、下游 API 提供' },
          { layer: 'Governance', detail: '血缘、权限、质量与 SLA 体系' },
        ],
        projectsTitle: '实战项目建议',
        projects: [
          '从业务库做 CDC 到仓库，搭一条完整日增量链路',
          '用 dbt 规范模型层并加入测试、文档和血缘',
          '为核心事实表建立质量规则和告警通知',
          '构建一条流式处理链路并计算分钟级指标',
        ],
        pitfallsTitle: '常见坑位与规避',
        pitfalls: [
          '口径不统一：先定义指标字典和数据契约',
          '任务偶发失败：设计幂等和断点续跑机制',
          '数据延迟不可见：必须有端到端时延监控',
          '成本失控：建立分层存储与冷热数据策略',
        ],
        interviewTitle: '面试高频自检',
        interview: [
          '能解释星型模型和雪花模型的取舍',
          '能描述批流一体架构的关键挑战',
          '能给出数据质量体系落地方案',
          '能说清一次线上数据事故的排查路径',
        ],
        ctaTitle: '想要一套可复制的数据工程模板？',
        ctaDesc: '我可以按你当前技术栈，给你定制化的学习与项目落地路径。',
        ctaPrimary: '联系我获取方案',
        ctaSecondary: '查看资源中心',
      }
    : {
        heroTitle: 'Build Data Engineering as a Reliable System',
        heroDesc: 'From ingestion and modeling to orchestration and quality governance, this is a practical map for real production use.',
        stats: [
          { label: 'Learning Stages', value: '5' },
          { label: 'Hands-on Projects', value: '6' },
          { label: 'Core Topics', value: '35+' },
        ],
        roadmapTitle: 'Learning Roadmap',
        roadmap: [
          { title: 'Data Modeling Fundamentals', desc: 'Understand dimensional modeling, wide-table patterns, and metric definitions.' },
          { title: 'ETL/ELT Delivery', desc: 'Master batch and incremental patterns with recoverable pipelines.' },
          { title: 'Orchestration', desc: 'Use Airflow/Prefect for observable, rerunnable, and alertable DAGs.' },
          { title: 'Data Quality Governance', desc: 'Implement completeness, uniqueness, freshness, and anomaly checks.' },
          { title: 'Realtime Pipeline', desc: 'Understand Kafka and stream-processing tradeoffs of latency and consistency.' },
        ],
        architectureTitle: 'Data Platform Capability Stack',
        architecture: [
          { layer: 'Ingestion', detail: 'CDC, log collection, third-party API extraction' },
          { layer: 'Storage', detail: 'Data Lake / Warehouse layering and cost control' },
          { layer: 'Transform', detail: 'dbt / Spark SQL / Python pipelines' },
          { layer: 'Serve', detail: 'BI dashboards, feature serving, downstream APIs' },
          { layer: 'Governance', detail: 'Lineage, access control, quality and SLA systems' },
        ],
        projectsTitle: 'Practice Project Ideas',
        projects: [
          'Build an end-to-end daily incremental CDC pipeline',
          'Set up dbt model layers with tests, docs, and lineage',
          'Add quality rules and alerting for key fact tables',
          'Build a streaming pipeline for near-real-time metrics',
        ],
        pitfallsTitle: 'Common Pitfalls',
        pitfalls: [
          'Inconsistent metrics: define contracts and metric dictionary first',
          'Random task failures: design idempotency and resumability',
          'Invisible latency: add end-to-end freshness monitoring',
          'Runaway cost: enforce tiered storage and lifecycle policy',
        ],
        interviewTitle: 'Interview Checklist',
        interview: [
          'Explain tradeoffs between star and snowflake models',
          'Describe key challenges in batch + streaming architecture',
          'Propose a practical data-quality framework',
          'Walk through a production data-incident investigation',
        ],
        ctaTitle: 'Want reusable data engineering templates?',
        ctaDesc: 'I can tailor a practical learning and delivery plan based on your current stack.',
        ctaPrimary: 'Contact Me for a Plan',
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
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-1 text-sm text-white mb-4">
            <Database className="h-4 w-4" />
            {t('blog.data.title')}
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
            <Layers3 className="h-5 w-5 text-primary" />
            {copy.roadmapTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.roadmap.map((step, index) => (
              <div key={step.title} className="rounded-lg border bg-card p-5">
                <p className="text-sm text-primary font-semibold mb-2">STAGE {index + 1}</p>
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
            <ServerCog className="h-5 w-5 text-primary" />
            {copy.architectureTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.architecture.map((item) => (
              <div key={item.layer} className="rounded-lg border p-5">
                <p className="font-semibold text-primary">{item.layer}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
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

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                {copy.pitfallsTitle}
              </h2>
              <div className="space-y-3">
                {copy.pitfalls.map((item) => (
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

      <section className="border-t">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            {copy.interviewTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.interview.map((item) => (
              <div key={item} className="rounded-lg border p-5 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
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
          <h3 className="font-semibold mb-2">{t('blog.data.interested')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('blog.data.interestedDesc1')}
            <Link href="/contact" className="text-primary hover:underline mx-1">
              {t('blog.data.interestedDesc2')}
            </Link>
            {t('blog.data.interestedDesc3')}
          </p>
        </div>
      </section>
    </div>
  )
}
