'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Facebook, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useTranslation } from '@/lib/use-translation'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/vibe-coding" className="text-muted-foreground hover:text-primary">
                  {t('nav.vibeCoding')}
                </Link>
              </li>
              <li>
                <Link href="/blog/software-testing" className="text-muted-foreground hover:text-primary">
                  {t('nav.softwareTesting')}
                </Link>
              </li>
              <li>
                <Link href="/blog/data-engineering" className="text-muted-foreground hover:text-primary">
                  {t('nav.dataEngineering')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/career-advice" className="text-muted-foreground hover:text-primary">
                  {t('nav.careerAdvice')}
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-muted-foreground hover:text-primary">
                  {t('jobs.title')}
                </Link>
              </li>
              <li>
                <Link href="/interview" className="text-muted-foreground hover:text-primary">
                  {t('nav.interview')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary">
                  {t('nav.resources')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t('footer.followUs')}</h3>
            <div className="flex flex-wrap gap-4">
              {siteConfig.links.github && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {siteConfig.links.wechat && (
                <button
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={`微信: ${siteConfig.links.wechat}`}
                  onClick={() => alert(`微信号: ${siteConfig.links.wechat}`)}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WeChat</span>
                </button>
              )}
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
