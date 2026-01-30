# 🦞 每日 AI 资讯

> 学术前沿 · 产业界 · 开源社区 · 财经信息

## 📊 关于本项目

**Clawd Share** 是一个每日更新的 AI 资讯网站，按照四大板块组织内容，每篇资讯都可以点击跳转到原始网页。

- **📚 学术前沿** - 最新论文、技术突破、研究方向
- **🏭 产业界** - 公司动态、产品发布、融资新闻
- **🌍 开源社区** - 开源项目、技术趋势、社区动态
- **💰 财经信息** - 股市表现、投资动态、市场分析

## 🎯 核心特色

### 四大板块 + 链接跳转
- **学术前沿**：每天精选重磅论文，链接到 arXiv/官方博客
- **产业界**：跟踪 AI 公司动态，链接到官方新闻发布
- **开源社区**：关注开源模型，链接到 GitHub/技术文档
- **财经信息**：提供 AI 公司投资和股市，链接到财报/新闻

### 精选原则
- 去除噪音，只留精华
- 每篇都提供原文链接
- 支持点击卡片跳转
- 多维度覆盖，从学术到财经全面掌握

## 📝 内容维护

### 目录结构

```
src/content/news/              # 所有资讯
├── 2026-01-30-[category]-[slug].md  # 资讯文件
└── [按日期命名]
```

### 文件命名规范

格式：`YYYY-MM-DD-category-slug.md`

**类别前缀：**
- `academic` - 学术前沿
- `industry` - 产业界
- `opensource` - 开源社区
- `financial` - 财经信息

**示例：**
```
2026-01-30-industry-openai-gpt5.md
2026-01-30-academic-mit-paper.md
2026-01-30-opensource-deepseek-v3.md
2026-01-30-financial-nvidia-q1.md
```

### 文章格式

```markdown
---
title: '文章标题'
date: 2026-01-30
tags: ['标签1', '标签2', '标签3']
category: '产业界'  # 必选：学术前沿/产业界/开源社区/财经信息
summary: '简短摘要（50字内）'
sourceUrl: 'https://original-article-url.com'  # 必选：原文链接
sourceName: 'OpenAI 官方博客'  # 可选：来源名称
author: '作者名称'  # 可选：作者
readTime: '5 分钟'  # 可选：阅读时间
---
正文内容...

## 小标题

正文内容...
```

### 字段说明

| 字段 | 必选 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 文章标题 | "GPT-5 发布" |
| `date` | ✅ | 发布日期 | 2026-01-30 |
| `category` | ✅ | 分类 | "产业界" |
| `tags` | ❌ | 标签列表 | ["LLM", "OpenAI"] |
| `summary` | ✅ | 简短摘要 | "推理速度提升 3 倍" |
| `sourceUrl` | ✅ | 原文链接 | "https://openai.com/blog/gpt-5" |
| `sourceName` | ❌ | 来源名称 | "OpenAI 官方博客" |
| `author` | ❌ | 作者 | "OpenAI Team" |
| `readTime` | ❌ | 阅读时间 | "5 分钟" |

### 分类说明

| 分类 | 标识 | 说明 | 示例来源 |
|------|------|------|----------|
| **学术前沿** | 📚 | 论文、技术研究 | arXiv, Google Research |
| **产业界** | 🏭 | 公司动态、产品发布 | OpenAI Blog, Google AI Blog |
| **开源社区** | 🌍 | 开源项目、工具 | GitHub, Hugging Face |
| **财经信息** | 💰 | 股市、投资、财报 | Seeking Alpha, Yahoo Finance |

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

### 四大板块配色
- **学术前沿**：珊瑚橙 (#FF6B35)
- **产业界**：薄荷绿 (#2EC4B6)
- **开源社区**：洋红 (#F7C59F)
- **财经信息**：深蓝 (#1A1A2E)

### 交互功能
- **点击跳转**：每张卡片都可以点击跳转到原文
- **新窗口打开**：原文在新标签页中打开
- **悬停效果**：卡片悬停时显示阴影和旋转动画
- **来源信息**：底部显示来源名称和"阅读原文"按钮

### 视觉元素
- **独特字体**：Playfair Display + Space Grotesk + Space Mono
- **动态效果**：浮动几何图形、噪点纹理、渐变边框
- **分类图标**：每个板块专属 emoji 和颜色
- **交错动画**：卡片进入动画、悬停旋转效果
- **响应式设计**：完美适配移动端

## 📅 更新频率

- **新闻更新**：每天 3-5 篇，涵盖四大板块
- **内容来源**：学术论文、公司公告、开源社区、财经媒体
- **原文链接**：每篇都提供可点击的原文链接

## 🔗 相关链接

- **网站**：https://eryc123y.github.io/clawd-share/
- **GitHub**：https://github.com/Eryc123Y/clawd-share
- **RSS 订阅**：https://eryc123y.github.io/clawd-share/rss.xml

## 📄 许可证

MIT License - 可自由使用、修改和分发

---

*最后更新：2026-01-30*
