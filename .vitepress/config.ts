import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/downhillsukisuki/',
  head: [
    [
      'meta',
      { name: 'google-site-verification', content: 'Q1e4oGLzPzrWJBlu6M96IU67sqBu8N6tvlM9_bJGcB4' }
    ]
  ],
  sitemap: {
    hostname: 'https://amedora.github.io/downhillsukisuki/',
    lastmodDateOnly: true
  },
  title: "ダウンヒル☆スキスキ",
  description: "ダウンヒルスケートボードの雑多なメモ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'パーツ',
        items: [
          { text: 'デッキ', link: '/parts/decks.md' },
          { text: 'トラック', link: '/parts/trucks.md' },
          { text: 'ウィール', link: '/parts/wheels.md' },
          { text: 'アクセサリー・装備品', link: '/parts/accessaries.md' }
        ]
      },
      {
        text: 'HOWTO',
        items: [
          { text: 'セッティング', link: '/howtos/settings.md' },
          { text: 'ライディング', link: '/howtos/riding.md' }
        ]
      },
      {
        text: 'そのほか',
        items: [
          { text: 'ダウンヒル用語', link: '/others/words.md' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'パーツ',
        items: [
          { text: 'デッキ', link: '/parts/decks.md' },
          { text: 'トラック', link: '/parts/trucks.md' },
          { text: 'ウィール', link: '/parts/wheels.md' },
          { text: 'アクセサリー・装備品', link: '/parts/accessaries.md' }
        ]
      },
      {
        text: 'HOWTO',
        items: [
          { text: 'セッティング', link: '/howtos/settings.md' },
          { text: 'ライディング', link: '/howtos/riding.md' }
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
