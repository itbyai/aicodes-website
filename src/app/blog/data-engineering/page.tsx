'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function DataEngineeringPage() {
  const { t } = useTranslation()
  
  return (
    <div className="container max-w-6xl py-12 md:py-16">
      <Link 
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('blog.coming.back')}
      </Link>

      <div className="mb-12">
        <div className="inline-flex items-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-1 text-sm text-white mb-4">
          📊 {t('blog.data.title')}
        </div>
        <h1 className="text-4xl font-bold mb-4">{t('blog.data.title')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('blog.data.description')}
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('blog.coming.title')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('blog.coming.description')}
          </p>
          <div className="space-y-2 text-sm">
            <p className="font-medium">{t('blog.data.planned')}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>{t('blog.data.topic1')}</li>
              <li>{t('blog.data.topic2')}</li>
              <li>{t('blog.data.topic3')}</li>
              <li>{t('blog.data.topic4')}</li>
              <li>{t('blog.data.topic5')}</li>
              <li>{t('blog.data.topic6')}</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-6">
          <h3 className="font-semibold mb-2">{t('blog.data.interested')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('blog.data.interestedDesc1')}
            <Link href="/contact" className="text-primary hover:underline mx-1">
              {t('blog.data.interestedDesc2')}
            </Link>
            {t('blog.data.interestedDesc3')}
          </p>
        </div>
      </div>
    </div>
  )
}
