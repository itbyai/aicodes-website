'use client'

import Link from 'next/link'
import { Briefcase, Target, BookOpen, Users, TrendingUp, Award, Lightbulb, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function CareerAdvicePage() {
  const { t } = useTranslation()
  const careerTopics = [
    {
      icon: Target,
      title: t('career.strategy.title'),
      description: t('career.strategy.desc'),
      color: 'from-blue-500 to-cyan-500',
      tips: [
        t('career.strategy.tip1'),
        t('career.strategy.tip2'),
        t('career.strategy.tip3'),
        t('career.strategy.tip4'),
      ],
    },
    {
      icon: BookOpen,
      title: t('career.interview.title'),
      description: t('career.interview.desc'),
      color: 'from-green-500 to-emerald-500',
      tips: [
        t('career.interview.tip1'),
        t('career.interview.tip2'),
        t('career.interview.tip3'),
        t('career.interview.tip4'),
      ],
    },
    {
      icon: TrendingUp,
      title: t('career.development.title'),
      description: t('career.development.desc'),
      color: 'from-purple-500 to-pink-500',
      tips: [
        t('career.development.tip1'),
        t('career.development.tip2'),
        t('career.development.tip3'),
        t('career.development.tip4'),
      ],
    },
    {
      icon: Users,
      title: t('career.skills.title'),
      description: t('career.skills.desc'),
      color: 'from-orange-500 to-red-500',
      tips: [
        t('career.skills.tip1'),
        t('career.skills.tip2'),
        t('career.skills.tip3'),
        t('career.skills.tip4'),
      ],
    },
  ]

  const interviewResources = [
    {
      category: t('career.resource.algo'),
      items: [
        t('career.resource.algo1'),
        t('career.resource.algo2'),
        t('career.resource.algo3'),
      ],
    },
    {
      category: t('career.resource.system'),
      items: [
        t('career.resource.system1'),
        t('career.resource.system2'),
        t('career.resource.system3'),
      ],
    },
    {
      category: t('career.resource.behavioral'),
      items: [
        t('career.resource.behavioral1'),
        t('career.resource.behavioral2'),
        t('career.resource.behavioral3'),
      ],
    },
  ]

  const careerPathways = [
    {
      title: t('career.path.frontend'),
      skills: ['React/Vue/Angular', 'TypeScript', 'CSS/Tailwind', t('common.learnMore'), t('common.learnMore')],
    },
    {
      title: t('career.path.backend'),
      skills: ['Node.js/Python/Java/Go', 'Database Design', 'API Design', 'Microservices', 'Cloud Services'],
    },
    {
      title: t('career.path.fullstack'),
      skills: ['Full-stack Tech', 'DevOps', 'System Design', 'Product Thinking', 'Project Management'],
    },
    {
      title: t('career.path.testing'),
      skills: ['Test Automation', 'CI/CD', 'Performance Testing', 'Security Testing', 'QA'],
    },
    {
      title: t('career.path.data'),
      skills: ['ETL/ELT', 'Data Warehouse', 'Spark/Airflow', 'SQL/Python', 'Data Modeling'],
    },
    {
      title: t('career.path.manager'),
      skills: ['Team Management', 'Tech Decisions', 'Project Planning', 'Talent Development', 'Strategic Thinking'],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-6xl py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            {t('career.badge')}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {t('career.hero.title1')}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}{t('career.hero.title2')}
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg md:text-xl">
            {t('career.hero.description')}
          </p>
        </div>
      </section>

      {/* Career Topics */}
      <section className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
          {t('career.core.title')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {careerTopics.map((topic) => {
            const Icon = topic.icon
            return (
              <div
                key={topic.title}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 md:p-8 hover:shadow-lg transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-gradient-to-br ${topic.color} mb-4`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{topic.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                    {topic.description}
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {topic.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm md:text-base">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Career Pathways */}
      <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
        <div className="container max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
            {t('career.paths.title')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {careerPathways.map((pathway) => (
              <div
                key={pathway.title}
                className="rounded-lg border bg-background p-5 md:p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  {pathway.title}
                </h3>
                <ul className="space-y-2">
                  {pathway.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm md:text-base">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Resources */}
      <section className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
          {t('career.resources.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {interviewResources.map((resource) => (
            <div
              key={resource.category}
              className="rounded-lg border bg-gradient-to-br from-background to-muted/30 p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                {resource.category}
              </h3>
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl text-center px-4">
          <Briefcase className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t('career.cta.title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            {t('career.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {t('career.cta.resources')}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t('career.cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
