'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Briefcase, MapPin, DollarSign, Clock, Building2, Users, TrendingUp, Calendar, Search, Filter, X } from 'lucide-react'
import { useTranslation } from '@/lib/use-translation'

export default function JobsPage() {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Canva',
      location: 'Sydney, NSW',
      type: 'Full-time',
      salary: 'AUD $120k - $160k',
      posted: '2 days ago',
      description: '使用 React、Node.js 和 TypeScript 构建创新设计工具。Canva 是澳洲知名独角兽公司，提供优秀的工作环境和福利。',
      requirements: [
        '5+ years full-stack 开发经验',
        '精通 React、TypeScript、Node.js',
        '有 AWS 或云服务经验',
        '优秀的英语沟通能力',
      ],
      benefits: [
        '弹性工作时间',
        '远程工作选项',
        '股票期权',
        '学习津贴 AUD $2000/年',
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'QA Automation Engineer',
      company: 'Atlassian',
      location: 'Melbourne, VIC',
      type: 'Full-time',
      salary: 'AUD $100k - $140k',
      posted: '5 days ago',
      description: 'Atlassian 寻找自动化测试工程师，负责 Jira 和 Confluence 产品的质量保证。',
      requirements: [
        '3+ years 自动化测试经验',
        '熟悉 Selenium、Cypress 或 Playwright',
        '有 CI/CD 流程经验',
        'Python 或 JavaScript 编程能力',
      ],
      benefits: [
        '每周 WFH 3天',
        '健康保险',
        '年度出国旅游津贴',
        '免费午餐',
      ],
      featured: true,
    },
    {
      id: 3,
      title: 'Data Engineer',
      company: 'Commonwealth Bank',
      location: 'Sydney, NSW',
      type: 'Full-time',
      salary: 'AUD $110k - $150k',
      posted: '1 week ago',
      description: '澳洲四大银行之一 CBA 招聘数据工程师，构建和维护大规模数据管道。',
      requirements: [
        '熟悉 SQL、Python、Spark',
        '有 AWS 数据服务经验 (Redshift, EMR, Glue)',
        '了解数据仓库和 ETL 流程',
        '有金融行业经验优先',
      ],
      benefits: [
        '银行业高稳定性',
        '完善的培训体系',
        '退休金 superannuation 额外贡献',
        '员工贷款优惠',
      ],
      featured: false,
    },
    {
      id: 4,
      title: 'Frontend Developer (React)',
      company: 'Afterpay',
      location: 'Melbourne, VIC',
      type: 'Full-time',
      salary: 'AUD $95k - $130k',
      posted: '3 days ago',
      description: 'Afterpay (现为 Block 公司一部分) 招聘前端开发，打造金融科技产品。',
      requirements: [
        'React、TypeScript 开发经验',
        '熟悉现代前端工具链',
        '注重 UI/UX 细节',
        '有移动端开发经验加分',
      ],
      benefits: [
        '灵活办公环境',
        'MacBook Pro 配置',
        '健身房会员',
        '团队活动丰富',
      ],
      featured: false,
    },
    {
      id: 5,
      title: 'Junior Software Engineer',
      company: 'REA Group',
      location: 'Melbourne, VIC',
      type: 'Full-time',
      salary: 'AUD $70k - $90k',
      posted: '4 days ago',
      description: 'REA Group (realestate.com.au) 招聘初级工程师，适合应届生或 1-2 年经验者。',
      requirements: [
        '计算机相关专业毕业',
        '了解 JavaScript、Python 或 Java',
        '有实习或个人项目经验',
        '愿意学习新技术',
      ],
      benefits: [
        '导师指导计划',
        '职业发展培训',
        '现代办公环境',
        '免费零食饮料',
      ],
      featured: false,
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Seek',
      location: 'Sydney, NSW / Remote',
      type: 'Full-time',
      salary: 'AUD $115k - $145k',
      posted: '1 week ago',
      description: 'Seek 招聘 DevOps 工程师，负责 CI/CD 流程和云基础设施管理。',
      requirements: [
        'Kubernetes、Docker 经验',
        '熟悉 AWS 或 Azure',
        '有 Terraform 或 CloudFormation 经验',
        '熟悉监控工具 (Datadog, Prometheus)',
      ],
      benefits: [
        '全远程工作',
        '灵活工作时间',
        '技术会议支持',
        '设备津贴',
      ],
      featured: false,
    },
  ]

  const australianTechHubs = [
    {
      city: 'Sydney',
      description: '澳洲最大科技中心，金融科技和企业软件公司聚集地',
      companies: ['Canva', 'Atlassian', 'Commonwealth Bank', 'Westpac'],
    },
    {
      city: 'Melbourne',
      description: '创业生态活跃，有众多中小型科技公司和创新企业',
      companies: ['REA Group', 'Afterpay', 'Envato', 'MYOB'],
    },
    {
      city: 'Brisbane',
      description: '新兴科技城市，生活成本较低，科技行业快速发展',
      companies: ['Octopus Deploy', 'RedEye Apps', 'TechnologyOne'],
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')
  const [selectedCompany, setSelectedCompany] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)

  // Get unique locations and companies
  const locations = ['all', ...Array.from(new Set(jobListings.map(job => job.location)))]
  const companies = ['all', ...Array.from(new Set(jobListings.map(job => job.company)))]

  // Filter jobs
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    const matchesCompany = selectedCompany === 'all' || job.company === selectedCompany

    return matchesSearch && matchesLocation && matchesCompany
  })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedLocation('all')
    setSelectedCompany('all')
  }

  const hasActiveFilters = searchTerm !== '' || selectedLocation !== 'all' || selectedCompany !== 'all'

  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Australian Elements */}
      <section className="container max-w-6xl py-12 md:py-20 relative">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-green-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-900/30 px-4 py-2 text-sm font-medium animate-float">
            <span className="text-2xl">🇦🇺</span>
            <span>{t('jobs.subtitle')}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t('jobs.title')}
            <br />
            <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent animate-gradient">
              Tech Jobs in Australia
            </span>
          </h1>
          <p className="max-w-[42rem] text-lg text-muted-foreground">
            {t('jobs.subtitle')}
          </p>
        </div>
      </section>

      {/* Australian Tech Hubs */}
      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            🌏 {t('jobs.hubs.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {australianTechHubs.map((hub) => (
              <div key={hub.city} className="rounded-lg border bg-card p-6 hover-scale cursor-glow">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {hub.city}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{hub.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">{t('jobs.hubs.companies')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {hub.companies.map((company) => (
                      <span
                        key={company}
                        className="inline-block rounded-md bg-primary/10 px-2 py-1 text-xs"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="border-t">
        <div className="container max-w-6xl py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">{t('jobs.title')}</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-background hover:bg-accent transition-colors hover-scale"
            >
              <Filter className="h-4 w-4" />
              {showFilters ? t('jobs.filter.hide') : t('jobs.filter.show')}
              {hasActiveFilters && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-primary text-primary-foreground rounded-full">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Search and Filters */}
          <div className={`mb-6 space-y-4 transition-all ${showFilters ? 'block' : 'hidden'}`}>
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('jobs.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium mb-2 block">{t('jobs.filter.location')}</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="all">{t('jobs.filter.all')}</option>
                  {locations.slice(1).map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t('jobs.filter.company')}</label>
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="all">{t('jobs.filter.all')}</option>
                  {companies.slice(1).map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-4 h-10 rounded-md border bg-background hover:bg-accent transition-colors hover-scale w-full"
                  >
                    <X className="h-4 w-4" />
                    {t('jobs.filter.clear')}
                  </button>
                )}
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 pt-2">
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {t('jobs.search.placeholder').split(',')[0]}: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="hover:bg-primary/20 rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedLocation !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {t('jobs.filter.location')}: {selectedLocation}
                    <button onClick={() => setSelectedLocation('all')} className="hover:bg-primary/20 rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedCompany !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {t('jobs.filter.company')}: {selectedCompany}
                    <button onClick={() => setSelectedCompany('all')} className="hover:bg-primary/20 rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground mb-6">
            {filteredJobs.length === jobListings.length ? (
              `共 ${jobListings.length} 个职位`
            ) : (
              `找到 ${filteredJobs.length} 个职位（共 ${jobListings.length} 个）`
            )}
          </div>

          {/* Job List */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover-scale cursor-glow ${
                  job.featured ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 animate-gradient' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      {job.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          ⭐ 推荐
                        </span>
                      )}
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">职位要求：</p>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">福利待遇：</p>
                        <ul className="space-y-1">
                          {job.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:min-w-[200px]">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-green-600">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    查看详情
                  </button>
                  <button className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    保存职位
                  </button>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center py-12 rounded-lg border bg-card">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('jobs.noResults')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('jobs.tryAdjusting')}
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <X className="h-4 w-4" />
                {t('jobs.filter.clear')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Job Search Tips for Australia */}
      <section className="border-t bg-muted/50">
        <div className="container max-w-6xl py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            💡 澳洲求职建议
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn 是关键</h3>
              <p className="text-sm text-muted-foreground">
                在澳洲，LinkedIn 是最重要的职业社交平台。保持个人资料完整，主动联系招聘人员。
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">工作许可很重要</h3>
              <p className="text-sm text-muted-foreground">
                确保你有合法的工作权利。很多公司需要 PR 或公民身份，部分公司支持工作签证担保。
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">薪资协商技巧</h3>
              <p className="text-sm text-muted-foreground">
                了解市场行情，澳洲科技行业薪资透明度较高。superannuation (退休金) 是额外福利。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="container max-w-4xl py-12 md:py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            想分享你的招聘信息？
          </h2>
          <p className="text-muted-foreground mb-6">
            如果你的公司正在招聘，欢迎联系我们免费发布职位信息
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              联系我们
            </Link>
            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
