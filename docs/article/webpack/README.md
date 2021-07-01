---
title: webpack
date: 2021-05-22
sticky: 1
tags:
  - 前端
  - webpack
categories:
  - 前端
  - webpack
---

![webpack-logo](/vue-press-notes/image/webpack-logo.jpg)

<!-- more -->

本系列文章为学习 webpack 的笔记，将系统的介绍 webpack。

## webpack 作用

webpack 模块打包机 分析项目结构 模块依赖 编译打包为适合格式提供给浏览器使用。

## webpack 名词解释

在学习 webpack 时，常对一些名词不能够理解，在这里有必要对这些名词进行释义

- `module`: 在 webpack 中一切皆视为模块。如自己编写的 js/ts 代码（它们无论是 ESM 、 commonJS 或是 AMD 规范）、图片、css、scss 文件等。

- `chunk`: 当我们写的 module 源文件传到 webpack 进行打包时，webpack 会根据文件引用关系生成一些 chunk 文件，webpack 会对这个 chunk 文件进行一些操作，chunk 是代码块的意思。

- `bundle`: webpack 处理好 chunk 后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。

因此 module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字

通常来说 一个 chunk 最终对应一个 bundle。但有时，多个 chunk 也可以合成一个 bundle，一个 chunk 也可以分离成多个 bundle

## webpack 常用作用

- 代码转换 babel、ts 转换为 js 等。
- 文件优化，压缩混淆等。
- 代码分割 提取公共代码，代码异步加载。
- 模块合并 模块可以分类合并成一个文件。
- 自动刷新热加载。
- 代码校验 eslint commit-lint 等。
- 自动发布 如发布到 cnd 等。

## 一份简单 webpack 配置文件

```js
const path = require('path')

module.exports = {
  // 由于生产环境下和开发环境下，对代码的优化需求可能不一致
  // 通过 mode 可以 告知 webpack 使用相应模式的内置优化
  // mode 可选 development、production、none
  // 或者通过 CLI 参数传递 webpack --mode=development
  // 详细看 https://webpack.docschina.org/configuration/mode/#usage
  mode: 'development',
  // 入口文件位置 告知 webpack 从哪里开始构建模块依赖图
  entry: './src/index.js',
  // 打包后的输出位置
  output: {
    // 输出位置的路径
    path: path.join(___dirname, 'dist'),
    // 输出文件名
    filename: 'bundle.js'
  },
  // 开发服务器
  devServer: {
    // express 文件 路径
    contentBase: path.join(___dirname, 'dist'),
    // 端口
    port: 8080,
    // 主机地址
    host: '0.0.0.0',
    // 为每个静态文件开启 gzip 压缩
    comporess: true
  },
  // 模块相关配置
  module: {
    // 配置模块的解析规则
    rules: [
      {
        test: /\.css$/,
        // 从右到左处理  先交给 css-loader 再交个 style-loader
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```
