'use client'

import Link from "next/link";
import { ArrowRight, Code2, TestTube, Database, Sparkles, Users, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NewsletterSubscribe } from "@/components/shared/newsletter-subscribe";
import { useTranslation } from "@/lib/use-translation";

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-6xl flex flex-col items-center justify-center gap-6 py-24 md:py-32 text-center relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-900/30 px-3 py-1 text-sm animate-float">
          <span className="text-xl">🇦🇺</span>
          <span>{t('home.welcome')}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t('home.hero.title')}
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t('home.hero.subtitle')}
          </span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t('home.hero.description')} · 来自澳洲的技术分享
        </p>
          <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/vibe-coding"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-scale"
          >
            {t('home.hero.startReading')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover-scale"
          >
            {t('home.hero.learnMore')}
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container max-w-6xl py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          {t('home.categories.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/vibe-coding"
            className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-2xl">
                💻
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t('category.vibeCoding.name')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('category.vibeCoding.description')}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium text-primary">
                {t('category.exploreMore')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          
          <Link
            href="/blog/software-testing"
            className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white text-2xl">
                🧪
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t('category.softwareTesting.name')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('category.softwareTesting.description')}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium text-primary">
                {t('category.exploreMore')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          
          <Link
            href="/blog/data-engineering"
            className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg hover-scale cursor-glow"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white text-2xl">
                📊
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t('category.dataEngineering.name')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('category.dataEngineering.description')}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium text-primary">
                {t('category.exploreMore')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                100+
              </div>
              <p className="text-sm text-muted-foreground">{t('home.stats.articles')}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                50k+
              </div>
              <p className="text-sm text-muted-foreground">{t('home.stats.visits')}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                5k+
              </div>
              <p className="text-sm text-muted-foreground">{t('home.stats.subscribers')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t">
        <div className="container max-w-6xl py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {t('home.why.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center gap-4 hover-scale">
              <div className="rounded-full bg-primary/10 p-3 animate-pulse-glow">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t('home.why.practical')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('home.why.practicalDesc')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 hover-scale">
              <div className="rounded-full bg-primary/10 p-3 animate-pulse-glow">
                <TestTube className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t('home.why.deepDive')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('home.why.deepDiveDesc')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 hover-scale">
              <div className="rounded-full bg-primary/10 p-3 animate-pulse-glow">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t('home.why.updates')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('home.why.updatesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 animate-gradient">
        <div className="container max-w-4xl py-16 md:py-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              {t('home.newsletter.badge')}
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('home.newsletter.title')}
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              {t('home.newsletter.description')}
            </p>
            <NewsletterSubscribe />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="border-t">
        <div className="container max-w-6xl py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {t('home.community.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-center hover-scale cursor-glow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t('home.community.read')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('home.community.readDesc')}
              </p>
              <Link
                href="/blog/vibe-coding"
                className="text-sm font-medium text-primary hover:underline"
              >
                {t('home.community.readAction')}
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center hover-scale cursor-glow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t('home.community.discuss')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('home.community.discussDesc')}
              </p>
              <Link
                href="/contact"
                className="text-sm font-medium text-primary hover:underline"
              >
                {t('home.community.discussAction')}
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center hover-scale cursor-glow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t('home.community.subscribe')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('home.community.subscribeDesc')}
              </p>
              <a
                href="#newsletter"
                className="text-sm font-medium text-primary hover:underline"
              >
                {t('home.community.subscribeAction')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container max-w-4xl flex flex-col items-center gap-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('home.cta.title')}
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-scale"
            >
              {t('home.cta.contact')}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover-scale"
            >
              {t('home.cta.about')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
