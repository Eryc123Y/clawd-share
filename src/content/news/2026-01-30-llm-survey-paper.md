---
title: '论文：大语言模型推理加速方法综述'
date: 2026-01-30
tags: ['论文', '学术', 'LLM', '推理加速']
category: '学术前沿'
summary: 'MIT 研究团队发布大语言模型推理加速方法的最新综述，涵盖 KV Cache、 speculative decoding、quantization 等技术。'
---

## 论文摘要

MIT CSAIL 团队发布了题为"Efficient Inference for Large Language Models: A Survey"的综述论文，系统性地总结了近年来大语言模型推理加速的主要方法。

## 核心技术

### KV Cache 优化
- FlashAttention v3：进一步减少内存访问
- PagedAttention：支持超长上下文
- vLLM 优化：高效的 KV Cache 管理

### 推理策略
- Speculative Decoding：推测解码，提升吞吐
- Parallel Decoding：并行解码多个候选
- Medusa：多头输出加速

### 量化技术
- GPTQ：4-bit 量化
- AWQ：激活权重量化
- SmoothQuant：平滑量化

## 性能对比

| 方法 | 相对加速 | 内存占用 |
|------|----------|----------|
| 原始基线 | 1x | 100% |
| FlashAttention | 2.5x | 85% |
| 4-bit 量化 | 3.2x | 40% |
| Speculative Decoding | 2.1x | 110% |

## 研究趋势

1. **模型压缩**：量化、剪枝成为主流
2. **并行推理**：多 GPU 分布式推理优化
3. **专用硬件**：TPU、NPU 等加速芯片

这篇综述对理解 LLM 推理优化的最新进展很有帮助。
