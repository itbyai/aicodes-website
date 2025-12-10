# AICodes.com.au

> 一个现代化的技术社区网站，专注于分享 Vibe Coding、软件测试和数据工程的知识与实践。

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🌟 项目特色

- ✨ **现代化设计**: 采用 Next.js 16 App Router + Tailwind CSS 4.0
- 🎨 **组件驱动**: 基于 shadcn/ui 的可复用组件系统
- 📱 **响应式布局**: 完美适配桌面、平板和移动设备
- 💬 **互动功能**: 邮件订阅、联系表单、评论系统
- 🚀 **性能优化**: SSG/ISR 混合渲染，极致性能
- 📝 **MDX 支持**: 强大的内容创作能力（计划中）
- 🔍 **SEO 友好**: 完整的元数据和结构化数据
- 🐳 **容器化部署**: 支持 Docker 一键部署（计划中）
- 🔄 **平滑迁移**: 从免费部署到自有服务器无缝过渡

---

## 🏗️ 技术架构

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 16.0+ | React 框架，SSR/SSG |
| **TypeScript** | 5.0+ | 类型安全 |
| **Tailwind CSS** | 4.0+ | 样式框架 |
| **shadcn/ui** | Latest | UI 组件库 |
| **Lucide React** | Latest | 图标库 |
| **MDX** | Latest | 内容创作（计划中） |

### 架构设计理念

```
┌─────────────────────────────────────────────────────────────┐
│                      部署架构（渐进式）                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  阶段一：免费部署（现在）                                     │
│  ┌───────────────────────────────────────────────────┐      │
│  │ Vercel (前端)                                      │      │
│  │ └─ Next.js App                                    │      │
│  │    └─ Edge Functions                              │      │
│  │                                                    │      │
│  │ Supabase / Vercel Postgres (数据库)               │      │
│  │ └─ 500MB 免费存储                                  │      │
│  │                                                    │      │
│  │ Cloudflare R2 (对象存储，可选)                     │      │
│  │ └─ 10GB 免费存储                                   │      │
│  └───────────────────────────────────────────────────┘      │
│                                                             │
│  阶段二：自有服务器（未来扩展）                               │
│  ┌───────────────────────────────────────────────────┐      │
│  │ VPS / Cloud Server                                │      │
│  │ ├─ Docker Compose                                 │      │
│  │ │  ├─ Next.js Container                           │      │
│  │ │  ├─ PostgreSQL Container                        │      │
│  │ │  ├─ Redis Container (缓存)                      │      │
│  │ │  └─ Nginx Container (反向代理)                  │      │
│  │ │                                                  │      │
│  │ └─ 监控与日志                                      │      │
│  │    ├─ Prometheus (指标)                           │      │
│  │    └─ Grafana (可视化)                            │      │
│  └───────────────────────────────────────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 平滑迁移策略

**环境变量驱动配置** - 所有环境通过 `.env` 切换：
```bash
# 免费部署
DATABASE_URL="postgresql://...@supabase.co:5432/postgres"

# 自有服务器
DATABASE_URL="postgresql://user:pass@localhost:5432/aicodes"
```

**数据库迁移**：
```bash
# 导出数据
pg_dump $OLD_DATABASE_URL > backup.sql

# 导入到新数据库
psql $NEW_DATABASE_URL < backup.sql
```

---

## 📂 项目结构

```
aicodes-website/
├── prisma/                    # 数据库 Schema
│   └── schema.prisma          # Prisma 模型定义
├── public/                    # 静态资源
│   ├── images/                # 图片
│   ├── favicon.ico            # 网站图标
│   └── og-image.png           # Open Graph 图片
├── src/
│   ├── app/                   # Next.js 16 App Router
│   │   ├── (main)/            # 主站路由组
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── about/         # 关于页
│   │   │   ├── contact/       # 联系页
│   │   │   ├── career-advice/ # 求职建议页
│   │   │   ├── resources/     # 资源下载页
│   │   │   └── blog/          # 博客
│   │   │       ├── vibe-coding/       # Vibe Coding 板块
│   │   │       ├── software-testing/  # 软件测试板块
│   │   │       └── data-engineering/  # 数据工程板块
│   │   ├── api/               # API 路由
│   │   │   ├── subscribe/     # 邮件订阅
│   │   │   ├── contact/       # 联系表单
│   │   │   └── views/         # 浏览统计
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── ui/                # shadcn/ui 组件
│   │   ├── layout/            # 布局组件
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── sidebar.tsx
│   │   ├── blog/              # 博客组件
│   │   │   ├── post-card.tsx
│   │   │   ├── post-list.tsx
│   │   │   └── category-filter.tsx
│   │   └── shared/            # 共享组件
│   ├── config/                # 配置文件
│   │   ├── site.ts            # 网站配置
│   │   └── metadata.ts        # SEO 元数据
│   ├── lib/                   # 工具库
│   │   ├── prisma.ts          # Prisma 客户端
│   │   ├── utils.ts           # 工具函数
│   │   └── mdx.ts             # MDX 处理
│   └── types/                 # TypeScript 类型定义
├── content/                   # MDX 文章内容
│   ├── vibe-coding/
│   ├── software-testing/
│   └── data-engineering/
├── .env.local                 # 本地环境变量
├── .env.local.example         # 环境变量模板
├── docker-compose.yml         # Docker 编排（生产环境）
├── Dockerfile                 # Docker 镜像
├── next.config.js             # Next.js 配置
├── tailwind.config.ts         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
└── package.json               # 项目依赖
```

---

## 📋 网站板块设计

### 1. **首页 (Home)** `/` ✅
- 🎯 Hero 区域：网站主题和个人介绍
- 📊 技术板块展示：3个主题卡片（Vibe Coding、软件测试、数据工程）
- 📈 统计数据：文章数、访问量、订阅用户数
- 🌟 特色功能展示：实战经验、深度解析、持续更新
- 📧 邮件订阅区域：带表单验证的订阅功能
- 👥 社区互动区：阅读、讨论、订阅三个入口
- 📞 CTA 区域：联系方式和引导按钮

### 2. **Vibe Coding** `/blog/vibe-coding` ✅
- 💻 编程心得与代码美学
- 🛠️ 开发工具分享
- 🎨 代码片段展示
- 🚀 个人项目展示
- **标签**: TypeScript, React, Python, Go, Rust 等
- **状态**: 页面框架已完成，内容筹备中

### 3. **软件测试** `/blog/software-testing` ✅
- 🧪 测试理论（单元测试、集成测试、E2E）
- ⚙️ 工具评测（Pytest, Jest, Playwright, Cypress）
- ✅ 最佳实践与测试策略
- 🔄 CI/CD 集成
- **标签**: Unit Testing, E2E, TDD, BDD, Automation 等
- **状态**: 页面框架已完成，内容筹备中

### 4. **数据工程** `/blog/data-engineering` ✅
- 📊 ETL 与数据管道
- 🏗️ 数据仓库架构
- 🔧 工具教程（Airflow, dbt, Spark, Kafka）
- 📈 数据可视化
- **标签**: ETL, Data Pipeline, Big Data, SQL, Streaming 等
- **状态**: 页面框架已完成，内容筹备中

### 5. **求职建议** `/career-advice` ✅
- 🎯 求职策略（简历优化、求职渠道）
- 📚 面试准备（算法、系统设计、行为面试）
- 📈 职业发展（技术路线规划、晋升技巧）
- 🤝 软技能提升（沟通协作、领导力）
- 💼 技术职业路径展示（前端、后端、全栈等）
- 💡 面试资源推荐
- **状态**: 已完成

### 6. **资源下载** `/resources` ✅
- 📚 学习资料（电子书、教程、学习路线图）
- 🛠️ 开发工具（VS Code 配置、Git 模板等）
- 💻 代码模板（Next.js、React、Python 项目模板）
- 📦 工具包（TypeScript 工具函数、React Hooks）
- 🌟 精选推荐（学习路径、开源项目、面试题库）
- **状态**: 已完成

### 7. **关于页** `/about` ✅
- 👤 个人简介与创站理念
- 🎓 技术栈展示（前端、后端、测试、数据工程）
- 💡 内容特色介绍
- 🎨 精美的卡片设计和图标展示
- **状态**: 已完成

### 8. **联系页** `/contact` ✅
- 📝 完整的联系表单（姓名、邮箱、主题、消息）
- 📧 Email: contact@aicodes.com.au
- 🕐 响应时间说明
- 📍 位置信息
- 🔗 社交媒体链接（GitHub、LinkedIn、Facebook、WeChat）
- 🤝 合作信息展示
- **状态**: 已完成，表单功能已实现

### 9. **互动功能**
- ✅ **邮件订阅**: 首页订阅表单，支持实时验证和错误提示
- ✅ **联系表单**: 完整的联系表单，支持姓名、邮箱、主题、消息
- ✅ **API 路由**: `/api/subscribe` 和 `/api/contact` 已实现
- ✅ **社交媒体**: GitHub、LinkedIn、Facebook、WeChat 多平台联系方式
- ✅ **响应式设计**: 完美适配手机、平板、桌面设备
- 🔜 **评论系统**: 计划集成 Giscus（基于 GitHub Discussions）
- 🔜 **点赞/收藏**: 文章互动功能
- 🔜 **全站搜索**: Algolia 或本地搜索
- 🔜 **深色模式**: 主题切换功能

---

## 🚀 快速开始

### 前置要求

- Node.js 18.17 或更高版本
- npm / yarn / pnpm
- Git

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/yourusername/aicodes-website.git
cd aicodes-website
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
cp .env.local.example .env.local
# 编辑 .env.local 填入你的配置（可选，默认配置即可运行）
```

4. **运行开发服务器**
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm run start
```

---

## 🐳 Docker 部署

### 本地 Docker 运行

```bash
# 构建镜像
docker build -t aicodes-website .

# 运行容器
docker run -p 3000:3000 --env-file .env.local aicodes-website
```

### Docker Compose（推荐用于生产）

```bash
# 启动所有服务（Next.js + PostgreSQL + Nginx）
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

---

## ☁️ 部署方案

### 方案一：Vercel（推荐，免费）

1. **推送代码到 GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **导入到 Vercel**
- 访问 [vercel.com](https://vercel.com)
- 点击 "Import Project"
- 选择你的 GitHub 仓库
- 配置环境变量（从 `.env.local.example` 复制）
- 点击 "Deploy"

3. **配置自定义域名**
- 在 Vercel 项目设置中添加 `aicodes.com.au`
- 在域名注册商处添加 DNS 记录：
  ```
  A     @    76.76.21.21
  CNAME www  cname.vercel-dns.com
  ```

4. **配置数据库**
- 使用 Vercel Postgres 或 Supabase
- 在 Vercel 环境变量中设置 `DATABASE_URL`

### 方案二：自有服务器（VPS）

1. **购买 VPS**（推荐供应商）
   - 阿里云轻量应用服务器
   - 腾讯云
   - DigitalOcean
   - Linode

2. **服务器配置**
```bash
# 连接服务器
ssh root@your-server-ip

# 安装 Docker 和 Docker Compose
curl -fsSL https://get.docker.com | sh
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 克隆项目
git clone https://github.com/yourusername/aicodes-website.git
cd aicodes-website

# 配置环境变量
cp .env.local.example .env.production
vim .env.production  # 编辑生产环境配置

# 启动服务
docker-compose up -d
```

3. **配置域名**
```bash
# DNS 记录指向你的服务器 IP
A    @    your-server-ip
CNAME www  aicodes.com.au
```

4. **配置 SSL 证书**（使用 Caddy 自动获取）
- Docker Compose 已包含 Caddy
- 自动申请并续期 Let's Encrypt 证书

### 方案三：Netlify（备选）

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod
```

---

## 📊 数据存储

> **注意**: 当前版本使用简单的内存存储，订阅和联系表单数据会在控制台输出。生产环境建议集成数据库或第三方服务。

### 集成数据库（可选）

如需持久化存储，可以集成以下服务：

**选项 1: Vercel Postgres**
```bash
# 在 Vercel 项目中添加 Postgres
# 自动配置 DATABASE_URL 环境变量
```

**选项 2: Supabase**
```bash
# 1. 创建 Supabase 项目
# 2. 获取数据库连接字符串
# 3. 更新 .env.local
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres"
```

**选项 3: 集成邮件服务**
```bash
# 使用 Resend 发送邮件通知
npm install resend
# 配置 RESEND_API_KEY 环境变量
```

---

## 📝 内容管理

> **状态**: MDX 内容系统计划中，当前为页面框架展示。

### 即将支持

- 📄 MDX 文章创作
- 🏷️ 标签和分类系统
- 🔍 文章搜索功能
- 📊 阅读统计
- 💬 评论系统（Giscus）

---

## 🎨 主题定制

### 修改颜色

编辑 `src/app/globals.css`:

```css
@layer base {
  :root {
    --primary: 222.2 47.4% 11.2%;
    --secondary: 210 40% 96.1%;
    /* 修改为你喜欢的颜色 */
  }
}
```

### 添加字体

在 `src/app/layout.tsx` 中引入：

```typescript
import { Inter, Noto_Sans_SC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansSC = Noto_Sans_SC({ subsets: ['chinese-simplified'] })
```

---

## 🔧 配置说明

### 网站配置

编辑 `src/config/site.ts` 修改：
- 网站名称
- 社交链接
- 导航菜单
- 分类设置

### SEO 配置

编辑 `src/config/metadata.ts` 优化：
- Open Graph 元数据
- Twitter Card
- 结构化数据

---

## 📈 性能优化

- ✅ 图片使用 Next.js Image 组件自动优化
- ✅ 字体子集化和预加载
- ✅ 代码分割和懒加载
- ✅ 静态生成（SSG）主要页面
- ✅ 增量静态再生（ISR）博客文章
- ✅ Edge Runtime API
- ✅ 资源压缩（Gzip/Brotli）

---

## 🔒 安全考虑

- ✅ 环境变量保护敏感信息
- ✅ CSRF 保护
- ✅ XSS 防护（React 自动转义）
- ✅ SQL 注入防护（Prisma ORM）
- ✅ HTTPS 强制（生产环境）
- ✅ 安全头部配置

---

## 🌐 浏览器支持

- Chrome/Edge（最新 2 个版本）
- Firefox（最新 2 个版本）
- Safari（最新 2 个版本）
- 移动端浏览器

---

## 📦 NPM 脚本

```bash
npm run dev          # 开发服务器（http://localhost:3000）
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # ESLint 检查
```

---

## ✨ 已实现功能

- ✅ **响应式导航栏**: 支持桌面和移动端，自适应菜单
- ✅ **首页设计**: Hero、统计数据、特色展示、订阅区域、社区互动
- ✅ **技术板块页面**: Vibe Coding、软件测试、数据工程（完全响应式）
- ✅ **求职建议页面**: 求职策略、面试准备、职业发展、技能路径
- ✅ **资源下载页面**: 学习资料、开发工具、代码模板、工具包
- ✅ **关于页面**: 个人介绍、技术栈、内容特色
- ✅ **联系页面**: 联系表单、联系信息、合作说明、多平台社交链接
- ✅ **邮件订阅**: 表单验证、API 路由、错误处理
- ✅ **联系表单**: 完整的表单功能和 API
- ✅ **社交媒体集成**: GitHub、LinkedIn、Facebook、WeChat
- ✅ **页面居中布局**: 统一的容器宽度和间距
- ✅ **渐变设计**: 卡片、背景、文字渐变效果
- ✅ **图标系统**: Lucide React 图标库集成
- ✅ **SEO 优化**: 元数据配置
- ✅ **完全响应式**: 所有页面支持 sm/md/lg/xl 断点

## 🚧 开发中功能

- 🔜 **MDX 博客系统**: 文章创作和展示
- 🔜 **深色模式**: 主题切换
- 🔜 **评论系统**: Giscus 集成
- 🔜 **搜索功能**: 全站搜索
- 🔜 **数据库集成**: Supabase 或 Vercel Postgres
- 🔜 **邮件服务**: Resend 或 SendGrid
- 🔜 **Docker 部署**: 容器化配置
- 🔜 **Analytics**: 访问统计

---

## 📞 联系方式

- **Website**: [aicodes.com.au](https://aicodes.com.au)
- **Email**: contact@aicodes.com.au
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
- [Prisma](https://www.prisma.io/)

---

**Made with ❤️ for the coding community**
