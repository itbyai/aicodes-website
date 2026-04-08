'use client'

import Link from 'next/link'
import { Award, BadgeCheck, ClipboardCheck, FileCheck2, GraduationCap, ShieldCheck } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function CertificationPage() {
  const { t } = useTranslation()

  const tracks = [
    {
      icon: GraduationCap,
      title: t('certification.tracks.frontend.title'),
      description: t('certification.tracks.frontend.desc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShieldCheck,
      title: t('certification.tracks.testing.title'),
      description: t('certification.tracks.testing.desc'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: t('certification.tracks.data.title'),
      description: t('certification.tracks.data.desc'),
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const processSteps = [
    t('certification.process.step1'),
    t('certification.process.step2'),
    t('certification.process.step3'),
    t('certification.process.step4'),
  ]

  const faqs = [
    { q: t('certification.faq.q1'), a: t('certification.faq.a1') },
    { q: t('certification.faq.q2'), a: t('certification.faq.a2') },
    { q: t('certification.faq.q3'), a: t('certification.faq.a3') },
  ]

  return (
    <div className="flex flex-col">
      <section className="container max-w-6xl py-14 md:py-20">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <BadgeCheck className="h-4 w-4" />
            {t('certification.badge')}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t('certification.title')}
            <span className="ml-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('certification.subtitle')}
            </span>
          </h1>
          <p className="max-w-[48rem] text-muted-foreground text-lg">
            {t('certification.description')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-3xl font-bold text-primary">1,200+</p>
            <p className="mt-1 text-sm text-muted-foreground">{t('certification.stats.candidates')}</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-3xl font-bold text-primary">78%</p>
            <p className="mt-1 text-sm text-muted-foreground">{t('certification.stats.passRate')}</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="mt-1 text-sm text-muted-foreground">{t('certification.stats.companies')}</p>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">
            {t('certification.tracks.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track) => {
              const Icon = track.icon
              return (
                <div key={track.title} className="rounded-lg border bg-card p-6">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${track.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{track.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{track.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-6xl py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">
            {t('certification.process.title')}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/50">
        <div className="container max-w-4xl py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">
            {t('certification.faq.title')}
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border bg-card p-5">
                <p className="font-semibold flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  {item.q}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container max-w-4xl py-14 md:py-16 text-center">
          <div className="rounded-xl border bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 p-8">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('certification.description')}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {t('certification.cta.apply')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent"
              >
                {t('certification.cta.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
