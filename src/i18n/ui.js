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
      'On July 19, 2026, Fable 5 leaves Claude subscription plans (Pro / Max / Team / select Enterprise) and continues on usage-credit billing and the API.',

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
      'Fable 5 is not retired or deprecated — it is included on Claude subscriptions "through July 19," then moves to usage-credit billing.',
      'The cutover was originally scheduled for July 7, 2026. Anthropic has since extended included access twice: first to July 12, 2026, then again to July 19, 2026.',
      'It remains fully available on the Claude API the whole time, unaffected by this change.',
      'Anthropic says this is temporary and aims to restore Fable as a standard part of subscriptions as soon as capacity allows.',
      "Anthropic's support page now specifies the exact cutover: July 19, 2026 at 11:59:59 PM Pacific Time. This page's countdown targets that exact instant.",
    ],

    footer1: 'This is an unofficial, fan-made page and is not affiliated with or endorsed by Anthropic.',
    footer2:
      'This countdown targets July 19, 2026 at 11:59:59 PM Pacific Time, as published in Anthropic\'s support article.',
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
      '2026 年 7 月 19 日，Fable 5 将从 Claude 订阅计划（Pro / Max / Team / 部分 Enterprise）中下线，转为按用量计费，并继续通过 API 提供服务。',

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
      'Fable 5 并没有被淘汰或弃用——它会在 Claude 订阅计划中提供至“7 月 19 日”，此后转为按用量计费。',
      '切换时间原定为 2026 年 7 月 7 日，此后 Anthropic 已两次延长可用期限：先延至 2026 年 7 月 12 日，随后再次延至 2026 年 7 月 19 日。',
      '在此期间，它始终可以通过 Claude API 完整使用，不受这次调整影响。',
      'Anthropic 表示这只是暂时调整，会在算力允许的情况下尽快让 Fable 重新成为订阅计划的标准模型。',
      'Anthropic 的支持页面现已给出确切的切换时刻：2026 年 7 月 19 日太平洋时间晚上 11:59:59。本页面的倒计时即以该确切时刻为目标。',
    ],

    footer1: '这是一个非官方的粉丝制作页面，与 Anthropic 没有关联，也未获得其认可。',
    footer2: '本倒计时以 2026 年 7 月 19 日太平洋时间晚上 11:59:59 为目标时刻，该时刻发布于 Anthropic 的官方支持文章。',
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
      '2026年7月19日、Fable 5 は Claude のサブスクリプションプラン（Pro / Max / Team / 一部の Enterprise）の対象から外れ、従量課金クレジットと API を通じて提供が続きます。',

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
      'Fable 5 は廃止されたわけでも非推奨になったわけでもありません。Claude サブスクリプションでは「7月19日まで」提供され、その後は従量課金クレジットへ移行します。',
      '切り替えは当初2026年7月7日に予定されていましたが、Anthropic はその後、対象期間を二度にわたって延長しました。まず2026年7月12日まで、続いて2026年7月19日まで延長されています。',
      'この変更の影響を受けることなく、Claude API では引き続き完全に利用できます。',
      'Anthropic はこれを一時的な措置だとしており、キャパシティが許し次第、Fable をサブスクリプションの標準モデルとして復帰させたいとしています。',
      'Anthropic のサポートページには、切り替えの正確な時刻が明記されています。2026年7月19日、太平洋時間の午後11時59分59秒です。このページのカウントダウンはその正確な瞬間を対象としています。',
    ],

    footer1: 'これは非公式のファンメイドページであり、Anthropic とは関係なく、公認されたものでもありません。',
    footer2:
      'このカウントダウンは、Anthropic のサポート記事で公表された2026年7月19日、太平洋時間の午後11時59分59秒を対象時刻としています。',
  },
};
