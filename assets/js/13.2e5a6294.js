(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(t,a,r){"use strict";r.r(a);var o=r(42),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"关于-css-bfc-理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于-css-bfc-理解"}},[t._v("#")]),t._v(" 关于 CSS-BFC 理解")]),t._v(" "),r("p",[t._v('BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，它规定了内部的元素如何布局，并且与这个区域外部毫不相干。\n我们常说的文档流其实分为定位流、浮动流和普通流三种。而普通流其实就是指 BFC 中的 FC。\nFC 是 formatting context 的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。\n常见的 FC 有 BFC、IFC（行级格式化上下文），还有 GFC（网格布局格式化上下文）和 FFC（自适应格式化上下文），这里就不再展开了。')]),t._v(" "),r("h2",{attrs:{id:"触发条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[t._v("#")]),t._v(" 触发条件")]),t._v(" "),r("p",[t._v("满足下列条件之一就可触发 BFC")]),t._v(" "),r("ol",[r("li",[t._v("根元素，即 HTML 元素")]),t._v(" "),r("li",[t._v("float 的值不为 none")]),t._v(" "),r("li",[t._v("overflow 的值不为 visible")]),t._v(" "),r("li",[t._v("display 的值为 inline-block、table-cell、table-caption")]),t._v(" "),r("li",[t._v("position 的值为 absolute 或 fixed")])]),t._v(" "),r("h2",{attrs:{id:"bfc-布局规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则"}},[t._v("#")]),t._v(" BFC 布局规则")]),t._v(" "),r("ol",[r("li",[t._v("内部的 box 会在垂直方向，一个接一个地放置。")]),t._v(" "),r("li",[t._v("Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")]),t._v(" "),r("li",[t._v("每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")]),t._v(" "),r("li",[t._v("BFC 的区域不会与 float box 重叠。")]),t._v(" "),r("li",[t._v("BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),t._v(" "),r("li",[t._v("计算 BFC 的高度时，浮动元素也参与计算")])]),t._v(" "),r("h2",{attrs:{id:"bfc-作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bfc-作用"}},[t._v("#")]),t._v(" BFC 作用")]),t._v(" "),r("ol",[r("li",[t._v("可以阻止元素被浮动元素覆盖")]),t._v(" "),r("li",[t._v("可以包含浮动元素")]),t._v(" "),r("li",[t._v("属于同一个 BFC 的两个相邻块级子元素的上下 margin 会发生重叠，(设置 writing-mode:tb-rl 时，水平 margin 会发生重叠)。所以当两个相邻块级子元素分属于不同的 BFC 时可以阻止 margin 重叠")])]),t._v(" "),r("p",[t._v("摘要自以下文章：")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5909db2fda2f60005d2093db",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5909db2fda2f60005d2093db"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5248536.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/xiaohuochai/p/5248536.html"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);