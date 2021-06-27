---
title: Babel
date: 2021-05-15
tags:
  - 前端
  - Babel
categories:
  - 前端
  - Babel
---

![babel-logo](/vue-press-notes/image/babel-logo.png)

<!-- more -->

本系列文章为学习 Babel 的笔记，将系统的介绍 Babel。

## 简介

官方解释：Babel 是一个 JavaScript 编译器，主要用于将采用 ES2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法。

随着 JavaScript 的不断发展，各种新的标准和提案层出不穷，但由于浏览器的多样性，浏览器厂商可能在短时间内无法将其实现。而 Babel 可以让你提前使用这些新的语言特性。他是一种用途很多的 JavaScript 编译器，他把最新版的 JavaScript 编译成绝大多数浏览器能够执行的版本，简言之，利用 Babel 就可以让我们在当前的项目中随意的使用 ES2015+ 语法。

Babel 主要功能：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性（通过第三方 polyfill 模块，例如 core-js 实现）。

## 插件和预设

Babel 构建在插件之上，代码转换功能以插件的形式出现，插件是一个小型的 JavaScript 程序，用于指导 Babel 如何对代码进行转换。诸如将 ES2015+ 的箭头函数语法转换为 ES5 语法的插件 @babel/plugin-transform-arrow-functions。

而针对不同的 ES2015+ 语法，通常需要使用不同的插件，这使得我们需要一个一个添加相应插件。庆幸，Babel 中提供了 preset（预设），这使得我们可以将一组插件归为一个 preset（预设），而无需一个一个添加插件。

我们可以根据自己所需要使用的不同插件组合，创建一个自己的 preset 并将其分享出去。如：

```js
module.exports = function () {
  return {
    plugins: ['pluginA', 'pluginB', 'pluginC']
  }
}
```

也可以使用 Babel 官方提供的预设，或其他组织提供的预设，诸如：

- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- @babel/preset-flow
- @vue/app

## 配置

Babel 配置编译选项有以下几种方式：

### 常规

- 通过 babel.config.json 配置

```json
{
  "presets": [...],
  "plugins": [...]
}
```

- 通过 .babelrc.json 配置

```json
{
  "presets": [...],
  "plugins": [...]
}
```

### 用 JavaScript 编写配置文件

这代表允许你可以使用一些 js 逻辑去处理配置文件

- babel.config.js

```js
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```

### 在 package.json 中配置

通过在 package.json 中添加 key 为 babel 的字段，来配置选项

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```
