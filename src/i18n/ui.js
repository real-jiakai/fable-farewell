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
      'An unofficial countdown to the moment Claude Fable 5 leaves Claude subscription plans for usage-credit billing, shown in your local timezone.',
    ogTitle: 'Farewell for now, Fable 5',
    ogDescription:
      'An unofficial, timezone-correct countdown to the moment Fable 5 leaves Claude subscription plans for usage-credit billing.',
    // BCP-47-with-underscore locale tag for the Open Graph og:locale meta tag.
    ogLocale: 'en_US',

    eyebrow: 'An unofficial farewell',
    heroPre: 'Farewell for now, ',
    heroName: 'Fable 5',
    subtitle:
      'On July 7, 2026, Fable 5 leaves Claude subscription plans (Pro / Max / Team / select Enterprise) and continues on usage-credit billing and the API.',

    countdownHeading: 'Time remaining on Claude subscriptions',
    units: { days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds' },
    endedMessage:
      'Fable 5 has left subscriptions — but not forever. It lives on via the API and usage credits, and Anthropic aims to bring it back.',

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
      'Fable 5 is not retired or deprecated — it is included on Claude subscriptions "through July 7," then moves to usage-credit billing.',
      'It remains fully available on the Claude API the whole time, unaffected by this change.',
      'Anthropic says this is temporary and aims to restore Fable as a standard part of subscriptions as soon as capacity allows.',
      'No official time of day was published for the cutover — this page estimates end of day Pacific Time.',
    ],

    footer1: 'This is an unofficial, fan-made page and is not affiliated with or endorsed by Anthropic.',
    footer2:
      'The exact cutover time was never published; July 7, 2026 end-of-day Pacific Time is an estimate used for this countdown only.',
  },

  zh: {
    intlLocale: 'zh-CN',
    htmlLang: 'zh',
    langName: '简体中文',
    switcherLabel: '选择语言',
    switcherHint: '选择语言后将立即跳转至该语言页面。',

    title: '暂别有期，Fable 5 —— 倒计时',
    description:
      '一个非官方的倒计时页面，记录 Fable 5 离开 Claude 订阅计划、转为按用量计费的那一刻，并自动换算为您所在时区的本地时间。',
    ogTitle: '暂别有期，Fable 5',
    ogDescription:
      '一个非官方的倒计时页面，按您的本地时区精确显示 Fable 5 离开 Claude 订阅计划、转向按用量计费的时刻。',
    ogLocale: 'zh_CN',

    eyebrow: '一份非官方的告别',
    heroPre: '暂别有期，',
    heroName: 'Fable 5',
    subtitle:
      '2026 年 7 月 7 日，Fable 5 将从 Claude 订阅计划（Pro / Max / Team / 部分 Enterprise）中下线，转为按用量计费，并继续通过 API 提供服务。',

    countdownHeading: 'Claude 订阅计划剩余时间',
    units: { days: '天', hours: '小时', minutes: '分钟', seconds: '秒' },
    endedMessage:
      'Fable 5 已经离开订阅计划——但这并非永别。它仍可通过 API 和用量额度继续使用，Anthropic 也希望未来能让它回归订阅计划。',

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
      'Fable 5 并没有被淘汰或弃用——它会在 Claude 订阅计划中提供至“7 月 7 日”，此后转为按用量计费。',
      '在此期间，它始终可以通过 Claude API 完整使用，不受这次调整影响。',
      'Anthropic 表示这只是暂时调整，会在算力允许的情况下尽快让 Fable 重新成为订阅计划的标准模型。',
      '官方并未公布具体的切换时间——本页面按太平洋时间当天结束时刻进行估算。',
    ],

    footer1: '这是一个非官方的粉丝制作页面，与 Anthropic 没有关联，也未获得其认可。',
    footer2: '确切的切换时间从未正式公布；本倒计时仅以 2026 年 7 月 7 日太平洋时间当天结束作为估算依据。',
  },

  ja: {
    intlLocale: 'ja-JP',
    htmlLang: 'ja',
    langName: '日本語',
    switcherLabel: '言語を選択',
    switcherHint: '言語を選択すると、すぐにそのページへ移動します。',

    title: 'しばしの別れ、Fable 5 — カウントダウン',
    description:
      'Fable 5 が Claude のサブスクリプションプランを離れ、従量課金クレジットに移行する瞬間までの非公式カウントダウンです。あなたのタイムゾーンに合わせて正しく表示されます。',
    ogTitle: 'しばしの別れ、Fable 5',
    ogDescription:
      'Fable 5 が Claude のサブスクリプションプランから従量課金クレジットへ移行する瞬間を、タイムゾーンに合わせて正確に示す非公式カウントダウンです。',
    ogLocale: 'ja_JP',

    eyebrow: '非公式のお別れページ',
    heroPre: 'しばしの別れ、',
    heroName: 'Fable 5',
    subtitle:
      '2026年7月7日、Fable 5 は Claude のサブスクリプションプラン（Pro / Max / Team / 一部の Enterprise）の対象から外れ、従量課金クレジットと API を通じて提供が続きます。',

    countdownHeading: 'Claude サブスクリプションでの残り時間',
    units: { days: '日', hours: '時間', minutes: '分', seconds: '秒' },
    endedMessage:
      'Fable 5 はサブスクリプションを離れましたが、これで終わりではありません。API と従量課金クレジットを通じて引き続き利用でき、Anthropic はいずれ復帰させたいと考えています。',

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
      'Fable 5 は廃止されたわけでも非推奨になったわけでもありません。Claude サブスクリプションでは「7月7日まで」提供され、その後は従量課金クレジットへ移行します。',
      'この変更の影響を受けることなく、Claude API では引き続き完全に利用できます。',
      'Anthropic はこれを一時的な措置だとしており、キャパシティが許し次第、Fable をサブスクリプションの標準モデルとして復帰させたいとしています。',
      '切り替えの正確な時刻は公式には発表されておらず、このページでは太平洋時間の一日の終わりを目安として推定しています。',
    ],

    footer1: 'これは非公式のファンメイドページであり、Anthropic とは関係なく、公認されたものでもありません。',
    footer2:
      '正確な切り替え時刻は公表されていません。2026年7月7日太平洋時間の終わりというのは、このカウントダウンのための推定にすぎません。',
  },
};
