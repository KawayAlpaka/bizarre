const path = require('path');
module.exports = {
  base: "/bizarre/",
  title: 'bizarre',
  description: 'One bizarre package（一个怪诞的包）',
  dest: path.resolve(__dirname,'../../docs'),
  head: [
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/zh/guide' },
      { text: '安装', link: '/zh/start' },
      { text: 'api', link: '/zh/api' },
      { text: 'GitHub', link: 'https://github.com/KawayAlpaka/bizarre' },
    ],
    displayAllHeaders: true
  },
}
