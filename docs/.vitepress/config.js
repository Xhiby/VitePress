import { defineConfig } from "vitepress"

export default defineConfig({
  title: "my-NoteBook",
  base: "/VitePress/",
  themeConfig: {
    nav: [{ text: "关于", link: "/about" }],

    sidebar: [
      {
        text: "计算机网络",
        items: [{ text: "TCP/IP", link: "/computerNetworks/TCPIP" }]
      },
      {
        text: "TypeScript",
        items: [
          { text: "基础", link: "/typeScript/base" },
          { text: "对象", link: "/typeScript/object" },
          { text: "数组", link: "/typeScript/array" },
          { text: "章节测试一", link: "/typeScript/chapterTset_1" },
          { text: "函数", link: "/typeScript/function" },
          { text: "类", link: "/typeScript/class" }
        ]
      },
      {
        text: "TailWind",
        items: [{ text: "安装配置", link: "/tailWind/config" }]
      },
      {
        text: "前端报错",
        items: [{ text: "列表", link: "/error/index" }]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Xhiby/VitePress" }]
  }
})
