'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale } = useLanguage()

  const navItems = [
    { href: '/', title: t('nav.home', locale) },
    { href: '/blog/vibe-coding', title: t('nav.vibeCoding', locale) },
    { href: '/blog/software-testing', title: t('nav.softwareTesting', locale) },
    { href: '/blog/data-engineering', title: t('nav.dataEngineering', locale) },
    { href: '/career-advice', title: t('nav.careerAdvice', locale) },
    { href: '/jobs', title: t('nav.jobs', locale) },
    { href: '/interview', title: t('nav.interview', locale) },
    { href: '/resources', title: t('nav.resources', locale) },
    { href: '/about', title: t('nav.about', locale) },
    { href: '/contact', title: t('nav.contact', locale) },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover-scale">
          <Code2 className="h-6 w-6" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-3 border-t flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
