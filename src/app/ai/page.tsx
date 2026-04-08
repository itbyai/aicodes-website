'use client'

import Link from 'next/link'
import { BookOpen, Brain, CheckCircle2, Cpu, GraduationCap, Rocket, Sparkles } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function AIPage() {
  const { locale } = useTranslation()

  const copy = locale === 'zh'
    ? {
        badge: 'AI 学习与认证',
        title: '人工智能学习路线',
        subtitle: 'AI Learning Path',
        description: '从基础概念到大模型应用，这里提供考试认证、学习路径和项目实践建议，帮助你系统进入 AI 领域。',
        stats: [
          { label: '推荐认证', value: '8+' },
          { label: '学习阶段', value: '5' },
          { label: '实战项目', value: '6' },
        ],
        examsTitle: 'AI 认证考试方向',
        exams: [
          {
            provider: 'Microsoft',
            certs: ['AI-900 Azure AI Fundamentals', 'AI-102 Azure AI Engineer Associate'],
            fit: '适合：企业应用、Azure 云生态、MLOps 初中级岗位',
          },
          {
            provider: 'AWS',
            certs: ['AWS Certified AI Practitioner', 'AWS Machine Learning Specialty'],
            fit: '适合：云原生 AI、推荐系统、生产级模型部署',
          },
          {
            provider: 'Google Cloud',
            certs: ['Associate Cloud Engineer', 'Professional Machine Learning Engineer'],
            fit: '适合：数据平台、ML 工程、Vertex AI 生态',
          },
          {
            provider: 'Other',
            certs: ['TensorFlow Developer Certificate', 'Databricks ML Associate'],
            fit: '适合：模型开发实操与端到端流水线能力提升',
          },
        ],
        pathTitle: '学习路径（建议顺序）',
        path: [
          '数学与基础：线性代数、概率统计、优化基础',
          '机器学习：监督/非监督学习、特征工程、模型评估',
          '深度学习：CNN、RNN、Transformer、训练技巧',
          '大模型应用：Prompt Engineering、RAG、Agent 基础',
          '工程化落地：评估体系、监控、成本与安全治理',
        ],
        projectsTitle: '实战项目建议',
        projects: [
          '构建一个文档问答系统（RAG）并加上评测集',
          '做一个客服自动回复 Agent，含工具调用与回退策略',
          '实现一个文本分类或推荐模型的训练与部署流程',
          '建立 AI 应用监控看板：延迟、成本、准确率、失败率',
        ],
        rolesTitle: '对应岗位方向',
        roles: [
          'AI Application Engineer：偏 Prompt + 产品集成',
          'ML Engineer：偏模型训练、部署和性能优化',
          'Data/AI Engineer：偏数据管道、特征平台与 MLOps',
          'AI Product Engineer：偏业务场景落地与迭代闭环',
        ],
        ctaTitle: '需要一份个性化 AI 学习计划吗？',
        ctaDesc: '我可以根据你当前背景（前端/后端/测试/数据）给你定制 8-12 周的学习与项目计划。',
        ctaPrimary: '联系我获取计划',
        ctaSecondary: '查看考试认证页',
      }
    : {
        badge: 'AI Learning & Certification',
        title: 'Artificial Intelligence Learning Path',
        subtitle: 'AI Learning Path',
        description: 'From fundamentals to LLM applications, this page provides certification options, learning tracks, and project ideas to help you enter AI systematically.',
        stats: [
          { label: 'Recommended Certs', value: '8+' },
          { label: 'Learning Stages', value: '5' },
          { label: 'Practice Projects', value: '6' },
        ],
        examsTitle: 'AI Certification Tracks',
        exams: [
          {
            provider: 'Microsoft',
            certs: ['AI-900 Azure AI Fundamentals', 'AI-102 Azure AI Engineer Associate'],
            fit: 'Best for enterprise AI apps, Azure ecosystem, and junior-to-mid MLOps roles',
          },
          {
            provider: 'AWS',
            certs: ['AWS Certified AI Practitioner', 'AWS Machine Learning Specialty'],
            fit: 'Best for cloud-native AI systems, recommenders, and production deployment',
          },
          {
            provider: 'Google Cloud',
            certs: ['Associate Cloud Engineer', 'Professional Machine Learning Engineer'],
            fit: 'Best for data platforms, ML engineering, and Vertex AI workflows',
          },
          {
            provider: 'Other',
            certs: ['TensorFlow Developer Certificate', 'Databricks ML Associate'],
            fit: 'Best for hands-on modeling and end-to-end ML pipeline capability',
          },
        ],
        pathTitle: 'Learning Path (Recommended Order)',
        path: [
          'Math foundation: linear algebra, probability, optimization basics',
          'Machine learning: supervised/unsupervised learning, features, evaluation',
          'Deep learning: CNN, RNN, Transformer, and training techniques',
          'LLM applications: prompt engineering, RAG, and agent fundamentals',
          'Production readiness: evaluation, monitoring, cost and safety governance',
        ],
        projectsTitle: 'Project Ideas',
        projects: [
          'Build a document QA assistant (RAG) with an evaluation set',
          'Create a customer-support agent with tool use and fallback strategy',
          'Implement a text classification or recommendation training/deploy pipeline',
          'Set up AI app observability for latency, cost, quality, and failures',
        ],
        rolesTitle: 'Career Directions',
        roles: [
          'AI Application Engineer: prompt design and product integration',
          'ML Engineer: training, deployment, and performance optimization',
          'Data/AI Engineer: pipelines, feature systems, and MLOps',
          'AI Product Engineer: business delivery and iterative improvement',
        ],
        ctaTitle: 'Need a personalized AI study plan?',
        ctaDesc: 'I can help tailor an 8-12 week plan based on your current background and goals.',
        ctaPrimary: 'Contact Me for a Plan',
        ctaSecondary: 'Open Certification Page',
      }

  return (
    <div className="flex flex-col">
      <section className="container max-w-6xl py-14 md:py-20">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            {copy.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {copy.title}
            <span className="ml-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {copy.subtitle}
            </span>
          </h1>
          <p className="max-w-[48rem] text-muted-foreground text-lg">{copy.description}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.stats.map((item) => (
            <div key={item.label} className="rounded-lg border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            {copy.examsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.exams.map((exam) => (
              <div key={exam.provider} className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">{exam.provider}</h3>
                <div className="mt-3 space-y-2">
                  {exam.certs.map((cert) => (
                    <p key={cert} className="text-sm text-muted-foreground">
                      • {cert}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-sm text-primary">{exam.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-6xl py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 flex items-center justify-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {copy.pathTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.path.map((step, index) => (
              <div key={step} className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm md:text-base">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-14 md:py-16">
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
                <Cpu className="h-5 w-5 text-primary" />
                {copy.rolesTitle}
              </h2>
              <div className="space-y-3">
                {copy.roles.map((role) => (
                  <div key={role} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-4xl py-14 md:py-16 text-center">
          <div className="rounded-xl border bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-indigo-950/20 p-8">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{copy.ctaTitle}</h3>
            <p className="mt-3 text-muted-foreground">{copy.ctaDesc}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {copy.ctaPrimary}
              </Link>
              <Link
                href="/certification"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
