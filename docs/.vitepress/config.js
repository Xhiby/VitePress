import { defineConfig } from "vitepress"

export default defineConfig({
  title: "my-NoteBook",
  base: "/VitePress/",
  themeConfig: {
    nav: [{ text: "关于", link: "/about" }],

    sidebar: [
      {
        text: "前端常用",
        items: [
          { text: "工具列表", link: "/frontEndTools/tools" },
          { text: "报错列表", link: "/frontEndTools/error" }
        ]
      },
      {
        text: "各种笔记",
        items: [
          { text: "TCP/IP", link: "/myNote/TCPIP" },
          { text: "TailWind安装配置", link: "/myNote/tailWindConfig" },
          { text: "cocos安装配置", link: "/myNote/cocosConfig" },
          { text: "Vue-cli创建项目", link: "/myNote/vueCliConfig" },
          { text: "Vite创建项目", link: "/myNote/viteConfig" },
          { text: "Vite项目设置@", link: "/myNote/viteSet@" },
          { text: "React创建项目", link: "/myNote/reactConfig" },
          { text: "GitHub配置SSH公钥", link: "/myNote/gitKeyConfig" },
          { text: "VitePress提交备注", link: "/myNote/vitePressRemark" }
        ]
      },
      {
        text: "Electron",
        items: [
          { text: "安装", link: "/electron/summary" },
          { text: "前置知识", link: "/electron/preKnowledge" }
        ]
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
        text: "工作闲暇",
        items: [{ text: "列表", link: "/workLeisure/list" }]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Xhiby/VitePress" }]
  }
})
