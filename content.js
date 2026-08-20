/*
 * content.js
 * ラップDE老GO ホームページの全文言データ。
 * ここを書き換えるだけでサイトの文章がすべて変わります。
 * editor.html を開いてフォームで編集し、「content.jsを書き出す」ボタンから
 * 更新後のこのファイルをダウンロード → 差し替えてください。
 *
 * 空文字 "" にすると、そのブロックは自動的に非表示になります
 * （data-hide-if-empty が付いている項目のみ）。
 */

const SITE_CONTENT = {
  // ===== ヘッダー =====
  nav_cta: "お問い合わせ",

  // ===== ヒーロー =====
  hero_kicker: "COMMUNICATION × ENTERTAINMENT",
  hero_title_line1: "ラップ",
  hero_title_line2: "DE",
  hero_title_line3: "老GO",
  hero_lead: "",
  hero_badge: "起業家甲子園 受賞",
  hero_cta_primary: "資料請求・お問い合わせ",
  hero_cta_secondary: "サービスを見る",

  // ===== ABOUT =====
  about_label: "ABOUT",
  about_title: "「言葉遊び」の力で、\n場の空気を変える。",
  about_mission: "",
  about_body: "ラップDE老GOは、高齢者施設や地域コミュニティに「言葉遊び」というエンタメ体験を届けるサービスです。韻を踏む、リズムに乗せる、その場にいる人たちで一つの言葉をつくる。世代や立場を越えて誰もが参加できる場づくりを、テクノロジーとエンタメの力で実現します。",

  // ===== FEATURES =====
  features_label: "FEATURES",
  features_title: "選ばれる3つの理由",

  feature1_num: "01",
  feature1_title: "激アツラップ語録",
  feature1_body: "参加者一人ひとりの人生や思い出をヒアリングし、その人だけの言葉を歌詞に落とし込みます。自分の言葉が音楽になる体験は、その場を一気に盛り上げます。",

  feature2_num: "02",
  feature2_title: "プレミアム編曲",
  feature2_body: "既製のカラオケ音源ではなく、参加者や施設のカラーに合わせてオリジナルで編曲。世界に一つだけのトラックが、体験の特別感をつくります。",

  feature3_num: "03",
  feature3_title: "言葉遊び文化",
  feature3_body: "韻を踏む・掛け合う・即興でつなぐ。日本語にもともとある言葉遊びの文化を土台に、誰でも自然に参加できるプログラムを設計しています。",

  // ===== ACHIEVEMENTS =====
  awards_label: "ACHIEVEMENTS",
  awards_title: "起業家甲子園 受賞歴",
  awards_lead: "全国の学生起業家が集う「起業家甲子園」にて、ラップDE老GOの取り組みが評価されました。",

  award1_title: "北海道大会 最優秀賞",
  award1_sub: "NICT賞",
  award2_title: "全国大会",
  award2_sub: "アイ・オー・データ賞",
  award3_title: "全国大会",
  award3_sub: "SBIインベストメント賞",

  awards_source_label: "出典：小樽商科大学 / 北海道国立大学機構 公式発表",
  awards_source_url: "https://www.otaru-uc.ac.jp/",

  // ===== FOR（対象） =====
  target_label: "FOR",
  target_title: "こんな方におすすめです",

  target1_title: "ご家族の方へ",
  target1_body: "離れて暮らす親や祖父母に、新しい刺激と会話のきっかけを。特別な準備は必要ありません。",

  target2_title: "介護施設・福祉施設の方へ",
  target2_body: "レクリエーションの新しい選択肢として。世代を越えて盛り上がれる体験をご提供します。",

  target3_title: "自治体・地域団体の方へ",
  target3_body: "地域交流イベントや世代間交流企画に。導入実績・企画のご相談はお気軽にどうぞ。",

  // ===== CTA =====
  cta_label: "CONTACT",
  cta_title: "まずはお気軽に\nご相談ください",
  cta_body: "サービス内容・導入事例・お見積もりなど、お気軽にお問い合わせください。",
  cta_button: "お問い合わせフォームへ",
  cta_email_label: "Email",
  cta_email: "info@rapderougo.com",

  // ===== FOOTER =====
  footer_service_name: "ラップDE老GO",
  footer_tagline: "COMMUNICATION × ENTERTAINMENT",
  footer_copyright: "© 2026 ラップDE老GO. All Rights Reserved.",
};

// ブラウザ / Node どちらでも使えるようにする
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONTENT;
}
