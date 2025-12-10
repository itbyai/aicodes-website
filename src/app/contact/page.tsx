'use client'

import { Mail, Github, Linkedin, MapPin, Clock, Facebook, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { ContactForm } from '@/components/shared/contact-form'
import { useTranslation } from '@/lib/use-translation'

export default function ContactPage() {
  const { t } = useTranslation()
  
  return (
    <div className="container max-w-6xl py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Email */}
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{t('contact.email')}</h3>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-sm text-muted-foreground hover:text-primary break-all"
                >
                  {siteConfig.links.email}
                </a>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{t('contact.responseTime')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('contact.responseDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{t('contact.location')}</h3>
                <p className="text-sm text-muted-foreground">
                  Australia
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold mb-4">{t('contact.social')}</h3>
            <div className="flex flex-col gap-3">
              {siteConfig.links.github && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              )}
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
              )}
              {siteConfig.links.wechat && (
                <button
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  onClick={() => alert(t('contact.wechatAlert').replace('{wechat}', siteConfig.links.wechat || ''))}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('contact.wechat')}: {siteConfig.links.wechat}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="mt-12 rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">{t('contact.collaboration.title')}</h2>
        <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
          {t('contact.collaboration.description')}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{t('contact.collaboration.article.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contact.collaboration.article.desc')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{t('contact.collaboration.opensource.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contact.collaboration.opensource.desc')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{t('contact.collaboration.consulting.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contact.collaboration.consulting.desc')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{t('contact.collaboration.speaking.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('contact.collaboration.speaking.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
