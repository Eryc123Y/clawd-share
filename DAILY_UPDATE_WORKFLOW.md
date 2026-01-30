# 每日 AI 资讯更新工作流程

## 📅 每日更新时间

**执行时间**：每天早上 10:00 (GMT+8) / 02:00 (UTC)

**定时任务**：`ai-news-daily`（已配置在 clawdbot）

---

## 🔄 工作流程

### 步骤 1：获取真实的 AI 资讯（10:00）
使用 `news-aggregator-skill` 从多个源获取真实的 AI 相关资讯。

**数据源：**
- GitHub Trending（开源项目）
- Hacker News（技术讨论）
- 36Kr（中国科技快讯）
- Google/Anthropic/OpenAI（官方博客）
- Hugging Face（模型发布）

**关键词：**
- AI, LLM, GPT, Claude, DeepSeek
- Generative AI, Machine Learning, Agent, RAG
- OpenAI, Anthropic, Google, Microsoft

**目标数量：** 每天至少 15-20 篇有价值的资讯

### 步骤 2：验证链接可访问性
检查所有资讯的 `sourceUrl` 是否可以访问（返回 200 OK）。

删除无法访问的文章：
- 403 Forbidden
- 404 Not Found
- 其他错误

### 步骤 3：创建新的 Markdown 文件
为每篇资讯创建文件，格式：`YYYY-MM-DD-category-slug.md`

**文件命名规范：**
- 学术前沿：`YYYY-MM-DD-academic-*.md`
- 产业界：`YYYY-MM-DD-industry-*.md`
- 开源社区：`YYYY-MM-DD-opensource-*.md`
- 财经信息：`YYYY-MM-DD-financial-*.md`

**文件结构：**
```markdown
---
title: '文章标题'
date: YYYY-MM-DD
tags: ['标签1', '标签2']
category: '分类'
summary: '简短摘要（50字内）'
sourceUrl: 'https://...'
sourceName: '来源名称'
author: '作者名称'（可选）
readTime: '阅读时间'（可选）
---
正文内容...
```

### 步骤 4：保存昨天的资讯到记忆
将昨天的资讯信息保存到记忆中（包含标题、链接、摘要）。

**记忆结构：**
```
### 📅 YYYY-MM-DD 每日 AI 资讯

#### 📚 学术前沿
1. [标题](sourceUrl)
   - 摘要：...

#### 🏭 产业界
...
```

### 步骤 5：删除昨天的文件
删除 `src/content/news/` 目录下昨天的所有 Markdown 文件。

**删除命令：**
```bash
rm -f src/content/news/2026-MM-?*.md
```

**只保留当天的资讯：** 网站只显示当天（2026-MM-DD）的资讯

### 步骤 6：提交并推送到 GitHub
提交所有更改并推送到 GitHub，触发自动部署。

```bash
git add .
git commit -m "feat: daily AI news update - YYYY-MM-DD"
git push origin master
```

### 步骤 7：自动部署
GitHub Actions 自动构建并部署到 GitHub Pages。

**部署时间：** 通常需要 1-2 分钟

---

## 📋 执行检查清单

### ✅ 任务完成确认

- [ ] 获取了至少 15 篇真实的 AI 资讯
- [ ] 验证了所有 `sourceUrl` 都可以访问
- [ ] 创建了新的 Markdown 文件（当天日期）
- [ ] 删除了昨天的所有文件
- [ ] 保存了昨天的资讯到记忆
- [ ] 提交并推送到 GitHub
- [ ] 部署成功（网站更新）

---

## 🎯 内容分配建议

### 每天 15-20 篇文章分布：
- **📚 学术前沿**：2-3 篇
  - 论文、研究、技术突破
  - 来自 arXiv、官方研究博客
  
- **🏭 产业界**：5-6 篇
  - 公司动态、产品发布、融资
  - 来自 OpenAI、Anthropic、Google、36Kr
  
- **🌍 开源社区**：5-6 篇
  - GitHub Trending 项目
  - 开源模型发布
  - 工具和框架
  
- **💰 财经信息**：2-3 篇
  - 股市表现、财报
  - 投资动态
  - 来自财经媒体

---

## 🚨 注意事项

1. **确保链接真实可访问**
   - 在创建文章前先验证 `sourceUrl`
   - 删除 403/404 的链接

2. **避免重复内容**
   - 每天只创建当天的资讯
   - 删除昨天的文件，避免累积

3. **保存历史记录**
   - 记忆中保存昨天的资讯
   - 如果需要可以恢复历史内容

4. **执行时间**
   - 每天早上 10:00 (GMT+8) 执行
   - 确保 10:30 前部署完成

5. **质量把控**
   - 只发布真实的第一手资讯
   - 不发布虚构或过时的内容
   - 所有链接都必须可访问

---

## 📊 历史记录归档

### 记忆保存位置
- 记忆中保存每天的资讯标题和链接
- 可以按日期查询历史内容

### 网站展示
- 网站只显示当天的资讯
- 保持内容新鲜和及时
- 历史记录在记忆中，不占用网站空间

---

*最后更新：2026-01-30*
