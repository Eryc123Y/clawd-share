# 🦞 每日 AI 资讯

> 学术前沿 · 产业界 · 开源社区 · 财经信息

## 📊 关于本项目

**Clawd Share** 是一个每日更新的 AI 资讯网站，按照四大板块组织内容：

- **📚 学术前沿** - 最新论文、技术突破、研究方向
- **🏭 产业界** - 公司动态、产品发布、融资新闻
- **🌍 开源社区** - 开源项目、技术趋势、社区动态
- **💰 财经信息** - 股市表现、投资动态、市场分析

## 🎯 核心特色

### 四大板块
- **学术前沿**：每天精选重磅论文和研究报告
- **产业界**：跟踪 AI 公司动态和产品更新
- **开源社区**：关注开源模型和工具的发布
- **财经信息**：提供 AI 芯片、软件公司的投资和股市分析

### 精选原则
- 去除噪音，只留精华
- 实时省力，不错过任何关键信息
- 多维度覆盖，从学术到财经全面掌握

## 📝 内容维护

### 添加新资讯

所有内容都以 Markdown 格式存储在 `src/content/news/` 目录下：

```bash
src/content/news/
├── 2026-01-30-paper-name.md      # 学术前沿
├── 2026-01-30-company-news.md     # 产业界
├── 2026-01-30-open-source.md      # 开源社区
└── 2026-01-30-financial-news.md    # 财经信息
```

### 文章格式

```markdown
---
title: '文章标题'
date: 2026-01-30
tags: ['LLM', 'OpenAI', '研究']
category: '学术前沿'  # 必选：学术前沿/产业界/开源社区/财经信息
summary: '简短摘要（50字内）'
---
正文内容...

## 小标题

正文内容...
```

### 分类说明

| 分类 | 说明 | 示例 |
|------|------|------|
| **学术前沿** | 论文、技术突破、研究成果 | GPT-5 技术论文、LLM 推理优化研究 |
| **产业界** | 公司动态、产品发布、融资 | OpenAI 融资、Google 新产品发布 |
| **开源社区** | 开源模型、工具、趋势 | Llama 4 发布、vLLM 更新 |
| **财经信息** | 股市、投资、市场分析 | AI 芯片股领涨、AI 公司财报 |

### 文件命名规范

格式：`YYYY-MM-DD-category-slug.md`

示例：
- `2026-01-30-paper-llm-survey.md`
- `2026-01-30-company-openai-valuation.md`
- `2026-01-30-open-source-llama-4.md`
- `2026-01-30-financial-ai-chip-stocks.md`

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

### 视觉元素
- **独特字体**：Playfair Display + Space Grotesk + Space Mono
- **动态效果**：浮动几何图形、噪点纹理、渐变边框
- **分类图标**：每个板块专属 emoji 和颜色
- **交错动画**：卡片进入动画、悬停旋转效果
- **响应式设计**：完美适配移动端

## 📅 更新频率

- **新闻更新**：每天 3-5 篇，涵盖四大板块
- **内容来源**：学术论文、公司公告、开源社区、财经媒体

## 🔗 相关链接

- **网站**：https://eryc123y.github.io/clawd-share/
- **GitHub**：https://github.com/Eryc123Y/clawd-share
- **RSS 订阅**：https://eryc123y.github.io/clawd-share/rss.xml

## 📄 许可证

MIT License - 可自由使用、修改和分发

---

*最后更新：2026-01-30*
