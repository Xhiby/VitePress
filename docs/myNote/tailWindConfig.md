# 概述

tailWind 还是比较常用到的，安装配置比一般的包要复杂一些，这里记录一下，右边的小标题是主要步骤。

## 安装

安装下面三个东西

```js
pnpm install -D postcss tailwindcss autoprefixer
```

- postcss 是一个工具，主要是对 css 进行各种操作用的
- tailwindcss 是 postcss 的插件，主要用于原子化 css 类
- autoprefixer 是 postcss 的插件，主要用于自动补全 css 前缀的

# 配置

执行如下命令，会在根目录下生成 tailwind.config.js 和 postcss.config.js 文件

```js
pnpm dlx tailwindcss init -p
// 或者
npx tailwindcss init -p
```

## tailwind.config.js 配置

```js
// Vue3
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// Vue2
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
```

## css 配置

在你的主 CSS 文件中引入以下代码，并确保该 CSS 文件**被引入 main.js**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## vite.config.js 配置

最后如果用了 Vite，需要配置 vite.config.js 里的 css 字段，其实好像有的项目不配也行

```js
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [uni()],

  // 增加下面的css对象
  css: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ]
    }
  }
});
```
