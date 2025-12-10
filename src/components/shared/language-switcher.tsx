'use client'

import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { localeNames } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
      title={`Switch to ${locale === 'zh' ? 'English' : '中文'}`}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline-block">{localeNames[locale]}</span>
    </Button>
  )
}
