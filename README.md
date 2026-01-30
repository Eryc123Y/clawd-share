# 🦞 AI 资讯日报

> 每日精选，紧跟 AI 时代脉搏

## 📊 关于本项目

**Clawd Share** 是一个每日更新的 AI 资讯网站，专注于：

- **🔥 前沿动态** - 大模型更新、技术突破、行业新闻
- **📊 深度分析** - 研究报告、性能基准、架构演进
- **🛠️ 实用工具** - 开源项目、开发工具、资源推荐
- **📚 知识沉淀** - 教程文章、技术总结、最佳实践

## 🎯 核心特色

### 每日精选
- 每天 3-5 条最重要的 AI 技术动态
- 去除噪音，只留精华
- 省时省力，不错过任何关键信息

### 内容分类
- **最新资讯** - 当日热点、行业新闻、产品更新
- **深度教程** - 技术指南、实战经验、最佳实践
- **研究报告** - 架构分析、性能评测、趋势洞察

### 内容来源
- Hacker News - 技术前沿动态
- GitHub Trending - 开源项目趋势
- Product Hunt - 创新产品发现
- 36Kr - 中文科技资讯
- 微博热搜 - 舆论热点追踪
- 行业媒体 - 深度分析文章

## 📝 内容维护

### 添加新内容

所有内容都以 Markdown 格式存储在 `src/content/` 目录下：

```
src/content/
├── news/          # 每日资讯（3-5篇）
├── tutorials/     # 深度教程（持续更新）
└── research/      # 研究报告（不定期）
```

### 资讯格式 (news/)
```markdown
---
title: '文章标题'
date: 2026-01-30
tags: ['LLM', 'OpenAI', 'API']
summary: '简短摘要（50字内）'
---
正文内容...
```

### 教程格式 (tutorials/)
```markdown
---
title: '教程标题'
date: 2026-01-30
tags: ['前端', 'AI', '实战']
difficulty: 'intermediate'  # beginner/intermediate/advanced
summary: '简短摘要（100字内）'
---
正文内容...
```

### 研究报告格式 (research/)
```markdown
---
title: '研究标题'
date: 2026-01-30
tags: ['架构', '性能', '分析']
summary: '研究概要（100字内）'
---
正文内容...
```

### 文件命名规范

格式：`YYYY-MM-DD-slug.md`

示例：
- `2026-01-30-gpt-5-release.md`
- `2026-01-30-llama-3-update.md`
- `2026-01-30-agent-architecture.md`

## 🛠️ 本地开发

```bash
# 克隆仓库
git clone https://github.com/Eryc123Y/clawd-share.git
cd clawd-share

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

访问 `http://localhost:4321` 查看效果。

## 🚢 自动部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages：

- **仓库地址**：https://github.com/Eryc123Y/clawd-share
- **部署地址**：https://eryc123y.github.io/clawd-share/
- **部署方式**：推送到 `master` 分支自动触发

### 手动触发部署
```bash
# 创建空提交触发部署
git commit --allow-empty -m "trigger: rebuild"
git push origin master
```

## 📦 技术栈

- **框架**：Astro 4.x（静态站点生成器）
- **样式**：Tailwind CSS + 自定义 CSS
- **内容管理**：Markdown + Astro Content Collections
- **部署**：GitHub Pages + GitHub Actions
- **设计风格**：Editorial Brutalism（编辑主义粗野风格）

## 🎨 设计特色

- **独特字体**：Playfair Display + Space Grotesk + Space Mono
- **大胆配色**：珊瑚橙、洋红、薄荷绿
- **动态效果**：浮动几何图形、噪点纹理、渐变边框
- **交错动画**：卡片进入动画、悬停旋转效果
- **响应式设计**：完美适配移动端

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🔗 相关链接

- **网站**：https://eryc123y.github.io/clawd-share/
- **GitHub**：https://github.com/Eryc123Y/clawd-share
- **RSS 订阅**：https://eryc123y.github.io/clawd-share/rss.xml

---

*最后更新：2026-01-30*
