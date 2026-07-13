[English](./README.md) | **简体中文** | [日本語](./README.ja.md)

# 暂别有期，Fable 5 ⏳

一个非官方的多语言倒计时页面，记录 Claude Fable 5 离开 Claude 订阅计划的那一刻。

## 这是什么

2026 年 7 月 19 日之后，Fable 5 将从 Claude 订阅计划（Pro / Max / Team / 部分 Enterprise）中下线，转为按用量计费。它**并没有被淘汰或弃用**——在此期间，它始终可以通过 Claude API 完整使用，不受这次调整影响。Anthropic 表示这只是暂时调整，会在算力允许的情况下尽快让 Fable 5 重新成为订阅计划的标准模型。切换时间原定为 2026 年 7 月 7 日，此后已两次延长：先延至 2026 年 7 月 12 日，随后再次延至 2026 年 7 月 19 日。倒计时的目标时刻是 `2026-07-20T06:59:59Z`（即 2026 年 7 月 19 日太平洋时间晚上 11:59:59）——这是 Anthropic 官方支持文章中公布的确切时刻，而非估算值。

这是一个非官方的粉丝制作页面，与 Anthropic 没有关联，也未获得其认可。

## 功能特性

- 全站仅使用一个 UTC 离开时刻，由客户端 `Intl.DateTimeFormat` 转换——无需维护任何时区对照表，每位访客都能看到正确的本地倒计时。
- 首次渲染即为同步计算：倒计时通过内联脚本在加载时直接渲染，不会出现占位数字闪烁。
- 英语、简体中文、日语均为完整预渲染的静态路由（`/`、`/zh/`、`/ja/`），并通过 `hreflang` 标签互相关联。
- 采用 Starlight 风格、无障碍友好的原生 `<select>` 语言切换器，会记住您的选择，并在不产生跳转循环的前提下自动检测浏览器语言。
- 世界时钟展示离开时刻在 7 个城市对应的当地时间。
- 倒计时结束后会优雅地切换为“已离开”状态。
- 纯 CSS 实现的星空背景，遵循 `prefers-reduced-motion` 设置。
- 不依赖任何框架、CDN 或网络字体——构建产物是完全自包含的静态站点。

## 技术栈

- [Astro 7](https://astro.build)
- [Tailwind CSS 4](https://tailwindcss.com)（通过 `@tailwindcss/vite`）
- 原生内联 JavaScript（无客户端框架，无 hydration）
- Node >= 22

## 快速开始

```sh
npm install
npm run dev       # 启动开发服务器
npm run build     # 将静态站点构建到 dist/
npm run preview   # 本地预览已构建的 dist/ 产物
```

## 项目结构

```
src/
├── i18n/
│   ├── config.js        # 唯一事实来源：DEPARTURE_ISO、DEFAULT_LOCALE、LOCALES、LOCALE_PATHS
│   └── ui.js             # en/zh/ja 文案字典（正文、事实说明、世界时钟标签等）
├── layouts/
│   └── Layout.astro      # <head>（meta、hreflang、favicon）+ 防跳转循环的语言自动重定向脚本
├── components/
│   ├── Farewell.astro    # 页面主体：头图、倒计时、世界时钟、事实说明、页脚
│   └── LangSwitcher.astro# 无障碍原生 select 语言切换器
└── pages/
    ├── index.astro       # en（默认语言，无前缀路由）
    ├── zh/index.astro    # zh
    └── ja/index.astro    # ja
```

## 添加新语言

1. 在 `src/i18n/ui.js` 中新增一个语言字典条目（参照现有语言的结构）。
2. 在 `src/i18n/config.js` 的 `LOCALES` 和 `LOCALE_PATHS` 中添加对应的语言代码。
3. 在 `src/pages/<代码>/index.astro` 下添加一个薄封装页面，参照现有页面的写法，将 `locale` 属性传给 `Layout` 和 `Farewell`。

语言切换器和 `hreflang` 标签会自动识别新语言——项目中没有其他需要手动列出语言列表的地方。

## 部署说明

构建产物（`dist/`）是完全静态的，可以部署到任意静态托管平台。在将本站点部署到正式域名之前，需要在 `astro.config.mjs` 中设置 `site: 'https://…'`，并添加带绝对地址的 canonical/hreflang 链接——目前由于站点尚未部署到固定域名，这一步被有意搁置。

## 免责声明

本项目是非官方的粉丝制作页面，与 Anthropic 没有关联，也未获得其认可。页面中的切换时间是 Anthropic 官方支持文章中公布的确切数据，并非估算值。所有信息截至 2026 年 7 月，参考来源为 Anthropic 官方文档及媒体报道。
