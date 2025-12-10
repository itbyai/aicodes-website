export const siteConfig = {
  name: 'AICodes',
  domain: 'aicodes.com.au',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aicodes.com.au',
  description: '分享 Vibe Coding、软件测试和数据工程的技术社区',
  author: {
    name: 'Your Name',
    email: process.env.NEXT_PUBLIC_EMAIL || 'contact@aicodes.com.au',
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    wechat: process.env.NEXT_PUBLIC_WECHAT_ID,
  },
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/yourusername',
    wechat: process.env.NEXT_PUBLIC_WECHAT_ID || 'your-wechat-id',
    email: process.env.NEXT_PUBLIC_EMAIL || 'contact@aicodes.com.au',
  },
  categories: [
    {
      slug: 'vibe-coding',
      name: 'Vibe Coding',
      description: '编程心得、代码美学、开发工具分享',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      slug: 'software-testing',
      name: '软件测试',
      description: '测试理论、工具评测、最佳实践',
      icon: '🧪',
      color: 'from-green-500 to-emerald-500',
    },
    {
      slug: 'data-engineering',
      name: '数据工程',
      description: 'ETL、数据管道、大数据技术',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
    },
  ],
  nav: [
    {
      title: '首页',
      href: '/',
    },
    {
      title: 'Vibe Coding',
      href: '/blog/vibe-coding',
    },
    {
      title: '软件测试',
      href: '/blog/software-testing',
    },
    {
      title: '数据工程',
      href: '/blog/data-engineering',
    },
    {
      title: '求职建议',
      href: '/career-advice',
    },
    {
      title: '职位分享',
      href: '/jobs',
    },
    {
      title: '资源下载',
      href: '/resources',
    },
    {
      title: '关于',
      href: '/about',
    },
    {
      title: '联系',
      href: '/contact',
    },
  ],
}

export type SiteConfig = typeof siteConfig
