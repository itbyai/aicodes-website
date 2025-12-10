'use client'

import { useTranslation } from '@/lib/use-translation'

export default function AboutPage() {
  const { t } = useTranslation()
  
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('about.intro')}
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Introduction */}
        <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <h2 className="text-2xl font-semibold mb-4">{t('about.passion.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.passion.description')}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.tech.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-blue-100 p-2">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('about.tech.frontend')}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('about.tech.frontendDesc')}
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-green-100 p-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('about.tech.backend')}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('about.tech.backendDesc')}
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-orange-100 p-2">
                  <svg className="h-5 w-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('about.tech.testing')}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('about.tech.testingDesc')}
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-purple-100 p-2">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 9.5V5.5C4.5 4.67 5.17 4 6 4H18C18.83 4 19.5 4.67 19.5 5.5V9.5C19.5 10.33 18.83 11 18 11H6C5.17 11 4.5 10.33 4.5 9.5M4.5 18.5V14.5C4.5 13.67 5.17 13 6 13H18C18.83 13 19.5 13.67 19.5 14.5V18.5C19.5 19.33 18.83 20 18 20H6C5.17 20 4.5 19.33 4.5 18.5Z"/>
                  </svg>
                </div>
                <h3 className="font-semibold">{t('about.tech.data')}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('about.tech.dataDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Content Features */}
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('about.content.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('about.content.realProject')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('about.content.realProjectDesc')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('about.content.deepAnalysis')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('about.content.deepAnalysisDesc')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('about.content.practicalCode')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('about.content.practicalCodeDesc')}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('about.content.continuousUpdate')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('about.content.continuousUpdateDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
