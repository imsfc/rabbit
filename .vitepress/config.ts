import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "兔子的悦心世界",
  description: "探索编程与创意，欢迎来到兔子的悦心世界。",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    outline: {
      label: '本页内容',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    nav: [
      { text: '博客', link: '/blog/', activeMatch: '^/blog/' },
      { text: '速查笔记', link: '/quick-reference-notes/', activeMatch: '^/quick-reference-notes/' }
    ],

    lastUpdated: {
      text: '最后更新时间'
    },

    darkModeSwitchLabel: '主题颜色',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/imsfc' }
    ],

    footer: {
      message: '兔子的悦心世界',
      copyright: 'Copyright © 2023-present Sha Fucheng'
    },

    notFound: {
      title: '迷路了吗？让兔子带你回家！',
      quote: '在每一次迷失中，都蕴藏着新的发现和机会。跟随兔子，开启新的探索之旅吧。',
      linkText: '带我回家！'
    },

  }
})
