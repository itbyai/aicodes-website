import type { Metadata } from 'next'
import { siteConfig } from './site'

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = '/og-image.png',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      'Vibe Coding',
      '软件测试',
      '数据工程',
      'Software Testing',
      'Data Engineering',
      'Python',
      'TypeScript',
      'React',
      'Next.js',
    ],
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@yourusername',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
