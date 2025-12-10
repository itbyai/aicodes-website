'use client'

import { useLanguage } from './language-context'
import { t as translateFn, type TranslationKey } from './translations'

export function useTranslation() {
  const { locale } = useLanguage()
  
  const t = (key: TranslationKey): string => {
    return translateFn(key, locale)
  }

  return { t, locale }
}
