# 资源文件上传指南

## 📁 文件夹结构

```
public/resources/
├── learning/       # 学习资料（电子书、教程）
├── tools/          # 开发工具配置文件
├── templates/      # 代码模板和项目脚手架
└── packages/       # 工具函数库和实用包
```

## 📤 如何上传资源

### 方式一：直接上传到 public/resources 文件夹

1. 将文件复制到对应的子文件夹
2. 文件命名规范：使用英文和连字符，如 `typescript-guide.pdf`
3. 更新 `/src/app/resources/page.tsx` 中的资源列表
4. 提交 PR 到主仓库

### 方式二：使用外部云存储（推荐大文件）

对于超过 10MB 的文件，建议使用外部存储：

1. **Google Drive**
   - 上传文件到 Google Drive
   - 右键 → 获取链接 → 设置为"知道链接的任何人"
   - 复制链接并添加到资源列表

2. **GitHub Release**
   - 创建 GitHub Release
   - 附加资源文件
   - 使用 Release 下载链接

3. **Dropbox**
   - 上传到 Dropbox
   - 获取公开分享链接
   - 添加到资源列表

## 📋 资源文件要求

### 文件大小
- **本地存储**：单个文件 < 10MB
- **外部存储**：单个文件 < 50MB
- 超大文件请分卷压缩或使用种子链接

### 支持格式
- **文档**: PDF, EPUB, Markdown, TXT
- **代码**: ZIP, TAR.GZ (项目模板)
- **配置**: JSON, YAML, TOML
- **数据**: CSV, SQL (示例数据)

### 文件命名规范
- ✅ `react-best-practices-2024.pdf`
- ✅ `nextjs-fullstack-template.zip`
- ✅ `vscode-settings.json`
- ❌ `教程.pdf`
- ❌ `template (1).zip`
- ❌ `config-final-FINAL.json`

## 🔗 更新资源列表

在 `/src/app/resources/page.tsx` 中添加资源信息：

```typescript
{
  name: '资源名称',
  type: 'PDF', // 或 'GitHub', 'ZIP', 'NPM' 等
  size: '5.2 MB', // 或 '在线'
  description: '简短描述（不超过50字）',
  link: '/resources/learning/filename.pdf', // 本地文件路径
  // 或
  link: 'https://drive.google.com/...', // 外部链接
}
```

## ⚖️ 版权说明

1. **原创内容**: 确保你拥有分享权
2. **开源资源**: 遵守原始许可证（MIT, Apache, GPL等）
3. **第三方内容**: 获得授权或注明来源
4. **付费资源**: 禁止上传盗版或破解内容

## 📝 资源描述模板

```markdown
**资源名称**: TypeScript 完全指南

**类型**: PDF 电子书

**大小**: 5.2 MB

**简介**: 从 TypeScript 基础到高级特性的完整学习手册，包含实战项目和最佳实践。

**目标读者**: 初级到中级前端开发者

**主要内容**:
- TypeScript 基础语法
- 类型系统详解
- 泛型和高级类型
- 与 React 集成
- 实战项目案例

**更新日期**: 2024-12-11

**作者/来源**: [作者名] / [来源链接]

**许可证**: CC BY-NC-SA 4.0
```

## 🚀 快速上传流程

1. Fork 项目仓库
2. 创建新分支：`git checkout -b add-resource-[资源名]`
3. 添加文件到 `public/resources/` 对应文件夹
4. 更新 `src/app/resources/page.tsx` 资源列表
5. 提交代码：`git commit -m "Add [资源名] resource"`
6. 推送分支：`git push origin add-resource-[资源名]`
7. 创建 Pull Request

## 📧 联系方式

如有疑问，请通过以下方式联系：
- GitHub Issues: [项目链接]/issues
- Email: contact@aicodes.com.au
- 网站联系表单: https://aicodes.com.au/contact

## 🙏 贡献者

感谢所有为资源库做出贡献的开发者！

---

**注意**: 上传前请仔细阅读本指南，确保资源符合质量标准和版权要求。
