'use client'

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CursorEffect } from "@/components/shared/cursor-effect"
import { ContentProtection } from "@/components/shared/content-protection"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ContentProtection />
        <CursorEffect />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}
