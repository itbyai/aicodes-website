'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useTranslation } from '@/lib/use-translation'

export function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setResponseMessage(t('contact.form.success'))
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setResponseMessage(data.error || t('contact.form.error'))
      }
    } catch (error) {
      setStatus('error')
      setResponseMessage(t('contact.form.networkError'))
    }

    setTimeout(() => {
      setStatus('idle')
      setResponseMessage('')
    }, 5000)
  }

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t('contact.form.title')}</h2>
        <p className="text-sm text-muted-foreground">
          {t('contact.form.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {t('contact.form.name')} *
            </label>
            <input
              id="name"
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={status === 'loading'}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t('contact.form.email')} *
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={status === 'loading'}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            {t('contact.form.subject')} *
          </label>
          <input
            id="subject"
            type="text"
            placeholder={t('contact.form.subjectPlaceholder')}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            disabled={status === 'loading'}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            {t('contact.form.message')} *
          </label>
          <textarea
            id="message"
            placeholder={t('contact.form.messagePlaceholder')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={status === 'loading'}
            rows={6}
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {responseMessage && (
          <div className={`rounded-md p-3 text-sm ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {responseMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          {status === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
        </button>
      </form>
    </div>
  )
}
