(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(t,s,n){"use strict";n.r(s);var a=n(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"面向对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),n("p",[t._v("js 面向对象基于原型(prototype) 和 构造函数")]),t._v(" "),n("h2",{attrs:{id:"new-关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-关键字"}},[t._v("#")]),t._v(" new 关键字")]),t._v(" "),n("p",[t._v("new 一个构造函数的过程")]),t._v(" "),n("ol",[n("li",[t._v("创建一个空对象，将空对象的原型指向构造函数的 prototype 属性上")]),t._v(" "),n("li",[t._v("将空对象赋值给构造函数中的 this")]),t._v(" "),n("li",[t._v("执行构造函数中的相关操作")]),t._v(" "),n("li",[t._v("最终 return 回一个对象或者是 this")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("构造函数中如果没有 return 操作或者 return 的是一个非对象, 默认 return this 对象。\n判断是否构造函数是否使用 new 关键字。可使用 this instanceof constructor 或者使用 new.target")])]),t._v(" "),n("p",[t._v("简单模拟实现 new")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取构造函数")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建基于构造函数原型的对象")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("constructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行构造函数")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return 结果")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"object-和-function-的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-和-function-的关系"}},[t._v("#")]),t._v(" Object 和 Function 的关系")]),t._v(" "),n("ol",[n("li",[t._v("实例对象上的 "),n("strong",[t._v("proto")]),t._v(" 属性指向的是生成该实例对象的构造函数的 prototype 属性")]),t._v(" "),n("li",[t._v("所有的构造函数都是 Function 构造函数的实例。因此 Object 构造函数是 Function 的实例,即：\nFunction.prototype === Object."),n("strong",[t._v("proto")])]),t._v(" "),n("li",[t._v("所有对象都继承了 Object.prototype 的属性(包括 Function 的 prototype 属性对象)。\nFunction.prototype 对象是 Object 构造函数的实例。\n即：Function.prototype."),n("strong",[t._v("proto")]),t._v(" === Object.prototype")]),t._v(" "),n("li",[t._v("Object.prototype."),n("strong",[t._v("proto")]),t._v(" === null")])])])}),[],!1,null,null,null);s.default=r.exports}}]);