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
        items: [{ text: "开始", link: "/typeScript/index" }]
      },
      {
        text: "TailWind",
        items: [{ text: "安装配置", link: "/tailWind/index" }]
      },
      {
        text: "前端报错",
        items: [{ text: "列表", link: "/error/index" }]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Xhiby/VitePress" }]
  }
})
