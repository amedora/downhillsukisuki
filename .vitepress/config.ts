import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ダウンヒル☆スキスキ",
  description: "ダウンヒルスケートボードの雑多なメモ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'パーツ',
        items: [
          { text: 'デッキ', link: '/parts/decks.md' },
          { text: 'アクセサリー・装備品', link: '/parts/accessaries.md' }
        ]
      },
      {
        text: 'そのほか',
        items: [
          { text: 'ダウンヒル用語', link: '/others/words.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
