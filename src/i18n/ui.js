// i18n dictionary. Adding a new locale requires only:
//   1. a new entry in this object (+ its code added to LOCALES in ./config.js)
//   2. a thin page file under src/pages/<locale>/index.astro
export const ui = {
  en: {
    // BCP-47 tag Intl.DateTimeFormat should use for this locale.
    intlLocale: 'en',
    // Value for the <html lang="…"> attribute.
    htmlLang: 'en',
    // Name shown for this locale in the language switcher.
    langName: 'English',
    // Accessible label for the language switcher control itself.
    switcherLabel: 'Select language',
    // Accessible description warning that choosing an option navigates immediately
    // (satisfies WCAG 3.2.2's "advised of the behavior before using it" clause).
    switcherHint: 'Choosing a language navigates to that page immediately.',

    title: 'Farewell for now, Fable 5 — countdown',
    description:
      "An unofficial countdown to the end of Fable 5's universal included access on Claude plans, and the start of its new arrangement — included in Max and Team Premium, usage credits for Pro and Team Standard — shown in your local timezone.",
    ogTitle: 'Farewell for now, Fable 5',
    ogDescription:
      "An unofficial, timezone-correct countdown to the end of Fable 5's universal included access on Claude plans, and the start of its new arrangement: included in Max and Team Premium, usage credits for Pro and Team Standard.",
    // BCP-47-with-underscore locale tag for the Open Graph og:locale meta tag.
    ogLocale: 'en_US',

    eyebrow: 'An unofficial farewell',
    heroPre: 'Farewell for now, ',
    heroName: 'Fable 5',
    subtitle:
      'On July 20, 2026, Fable 5 begins a new arrangement: included in all Max and Team Premium plans at 50% of limits, while Pro and Team Standard continue with it through usage credits — plus a one-time $100 credit.',

    countdownHeading: 'Until the new arrangement begins',
    units: { days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds' },
    endedMessage:
      'The moment has passed — and the farewell turned out to be only half of one. Fable 5 is now included in Max and Team Premium plans at 50% of limits, Pro and Team Standard continue via usage credits with a one-time $100 credit, and it never left the API.',

    tzCalculating: 'Calculating your local time…',
    tzLabelTemplate: 'In your timezone ({tz}):',

    worldClockHeading: 'The moment, around the world',
    worldZones: [
      { tz: 'America/Los_Angeles', label: 'Los Angeles' },
      { tz: 'America/New_York', label: 'New York' },
      { tz: 'Europe/London', label: 'London' },
      { tz: 'Europe/Berlin', label: 'Berlin' },
      { tz: 'Asia/Shanghai', label: 'Shanghai' },
      { tz: 'Asia/Tokyo', label: 'Tokyo' },
      { tz: 'Australia/Sydney', label: 'Sydney' },
    ],

    factsHeading: "What's actually happening",
    facts: [
      'The farewell is now partial: beginning July 20, 2026, Fable 5 is included in all Max and Team Premium plans, at 50% of limits. No end date has been announced.',
      'Pro and Team Standard users keep access through usage credits, and Anthropic is giving them a one-time $100 credit.',
      'The universal promotional access (Pro / Max / Team / premium Enterprise seats, up to 50% of weekly limits) ends July 19, 2026 at 11:59:59 PM Pacific Time — after two extensions from the original July 7 cutover.',
      'It remains fully available on the Claude API the whole time, unaffected by these changes.',
      'Anthropic says demand for Fable has been challenging to predict, which is why it rolled the model out to subscription plans in stages and extended access as it secured additional capacity.',
    ],

    footer1: 'This is an unofficial, fan-made page and is not affiliated with or endorsed by Anthropic.',
    footer2:
      "This countdown targets July 19, 2026 at 11:59:59 PM Pacific Time — the end of the universal included-access period, per Anthropic's support article and the @claudeai announcement of July 18, 2026.",
  },

  zh: {
    intlLocale: 'zh-CN',
    htmlLang: 'zh',
    langName: '简体中文',
    switcherLabel: '选择语言',
    switcherHint: '选择语言后将立即跳转至该语言页面。',

    title: '暂别有期，Fable 5 —— 倒计时',
    description:
      '一个非官方的倒计时页面，记录 Fable 5 在 Claude 各订阅计划中统一内置访问结束、以及其新安排开始的那一刻——Max 和 Team Premium 计划将继续内置 Fable 5，Pro 和 Team Standard 用户则转为通过用量额度使用，并自动换算为您所在时区的本地时间。',
    ogTitle: '暂别有期，Fable 5',
    ogDescription:
      '一个非官方、按您本地时区精确显示的倒计时，记录 Fable 5 统一内置访问的结束，以及新安排的开始：Max 和 Team Premium 继续内置 Fable 5，Pro 和 Team Standard 转为使用用量额度。',
    ogLocale: 'zh_CN',

    eyebrow: '一份非官方的告别',
    heroPre: '暂别有期，',
    heroName: 'Fable 5',
    subtitle:
      '2026 年 7 月 20 日，Fable 5 将开启新的安排：所有 Max 和 Team Premium 计划将按 50% 的额度继续内置 Fable 5，而 Pro 和 Team Standard 计划将通过用量额度继续使用 Fable 5——并额外获得一次性 100 美元额度。',

    countdownHeading: '距新安排开始',
    units: { days: '天', hours: '小时', minutes: '分钟', seconds: '秒' },
    endedMessage:
      '这一刻已经过去——而这场告别最终只实现了一半。Fable 5 现已按 50% 的额度内置于 Max 和 Team Premium 计划中，Pro 和 Team Standard 用户则通过用量额度继续使用（并获得一次性 100 美元额度），而且它从未离开过 API。',

    tzCalculating: '正在计算您的本地时间……',
    tzLabelTemplate: '您所在时区（{tz}）：',

    worldClockHeading: '世界各地的这一刻',
    worldZones: [
      { tz: 'America/Los_Angeles', label: '洛杉矶' },
      { tz: 'America/New_York', label: '纽约' },
      { tz: 'Europe/London', label: '伦敦' },
      { tz: 'Europe/Berlin', label: '柏林' },
      { tz: 'Asia/Shanghai', label: '上海' },
      { tz: 'Asia/Tokyo', label: '东京' },
      { tz: 'Australia/Sydney', label: '悉尼' },
    ],

    factsHeading: '实际情况是这样的',
    facts: [
      '这场告别如今只是部分的：从 2026 年 7 月 20 日起，Fable 5 将按 50% 的额度内置于所有 Max 和 Team Premium 计划中。目前尚未公布结束日期。',
      'Pro 和 Team Standard 用户将通过用量额度继续使用 Fable 5，Anthropic 还将为他们提供一次性 100 美元额度。',
      '统一的促销式内置访问（面向 Pro / Max / Team / 部分 Enterprise 席位，最高可用周限额的 50%）将于 2026 年 7 月 19 日太平洋时间晚上 11:59:59 结束——此前已从最初 7 月 7 日的切换时间两次延期。',
      '在此期间，它始终可以通过 Claude API 完整使用，不受这些变化影响。',
      'Anthropic 表示，Fable 的需求一直难以预测，这也是其分阶段将该模型推广至订阅计划、并在确保获得更多算力后多次延长访问期限的原因。',
    ],

    footer1: '这是一个非官方的粉丝制作页面，与 Anthropic 没有关联，也未获得其认可。',
    footer2:
      '本倒计时以 2026 年 7 月 19 日太平洋时间晚上 11:59:59 为目标时刻——即统一内置访问期结束的时刻，依据 Anthropic 的官方支持文章及 2026 年 7 月 18 日 @claudeai 的公告。',
  },

  ja: {
    intlLocale: 'ja-JP',
    htmlLang: 'ja',
    langName: '日本語',
    switcherLabel: '言語を選択',
    switcherHint: '言語を選択すると、すぐにそのページへ移動します。',

    title: 'しばしの別れ、Fable 5 — カウントダウン',
    description:
      'Fable 5 の Claude 各プランにおける統一的な標準搭載アクセスが終了し、新しい体制——Max と Team Premium には引き続き搭載、Pro と Team Standard は従量課金クレジットへ——が始まる瞬間までの非公式カウントダウンです。あなたのタイムゾーンに合わせて正しく表示されます。',
    ogTitle: 'しばしの別れ、Fable 5',
    ogDescription:
      'Fable 5 の統一的な標準搭載アクセスが終了し、新しい体制（Max と Team Premium には引き続き搭載、Pro と Team Standard は従量課金クレジットへ）が始まる瞬間を、タイムゾーンに合わせて正確に示す非公式カウントダウンです。',
    ogLocale: 'ja_JP',

    eyebrow: '非公式のお別れページ',
    heroPre: 'しばしの別れ、',
    heroName: 'Fable 5',
    subtitle:
      '2026年7月20日、Fable 5 は新しい体制に入ります。すべての Max と Team Premium プランには上限の50%で引き続き搭載され、Pro と Team Standard は従量課金クレジットを通じて利用が続きます——さらに一度限りの100ドル分のクレジットも付与されます。',

    countdownHeading: '新体制の開始まで',
    units: { days: '日', hours: '時間', minutes: '分', seconds: '秒' },
    endedMessage:
      'その瞬間は過ぎ去りました——そして、この別れは結局その半分だけのものでした。Fable 5 は現在、Max と Team Premium プランに上限の50%で搭載されており、Pro と Team Standard は一度限りの100ドル分のクレジットとともに従量課金クレジットで引き続き利用でき、API から離れたことも一度もありません。',

    tzCalculating: '現地時間を計算しています……',
    tzLabelTemplate: 'あなたのタイムゾーン（{tz}）：',

    worldClockHeading: '世界各地でのこの瞬間',
    worldZones: [
      { tz: 'America/Los_Angeles', label: 'ロサンゼルス' },
      { tz: 'America/New_York', label: 'ニューヨーク' },
      { tz: 'Europe/London', label: 'ロンドン' },
      { tz: 'Europe/Berlin', label: 'ベルリン' },
      { tz: 'Asia/Shanghai', label: '上海' },
      { tz: 'Asia/Tokyo', label: '東京' },
      { tz: 'Australia/Sydney', label: 'シドニー' },
    ],

    factsHeading: '実際に起きていること',
    facts: [
      'この別れは今や部分的なものです。2026年7月20日以降、Fable 5 はすべての Max と Team Premium プランに上限の50%で搭載されます。終了日は発表されていません。',
      'Pro と Team Standard のユーザーは従量課金クレジットを通じてアクセスを維持でき、Anthropic は一度限りの100ドル分のクレジットを提供します。',
      '統一的なプロモーション搭載アクセス（Pro / Max / Team / 一部の Enterprise 席、週間上限の最大50%）は、2026年7月19日太平洋時間の午後11時59分59秒に終了します——当初2026年7月7日だった切り替えから、二度の延長を経てのことです。',
      'この間ずっと、Claude API では変わらず完全に利用可能です。',
      'Anthropic によれば、Fable の需要は予測が難しく、そのためサブスクリプションプランへの展開を段階的に行い、追加のキャパシティを確保するたびにアクセスを延長してきたとのことです。',
    ],

    footer1: 'これは非公式のファンメイドページであり、Anthropic とは関係なく、公認されたものでもありません。',
    footer2:
      'このカウントダウンは、2026年7月19日太平洋時間の午後11時59分59秒——統一的な標準搭載アクセス期間の終了時刻——を対象としています。これは Anthropic のサポート記事、および2026年7月18日の @claudeai の発表に基づいています。',
  },
};
