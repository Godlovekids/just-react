(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{366:function(e,r,t){"use strict";t.r(r);var s=t(43),v=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("通过上一节的学习，我们了解了"),t("code",[e._v("Fiber")]),e._v("是什么，知道"),t("code",[e._v("Fiber节点")]),e._v("可以保存对应的"),t("code",[e._v("DOM节点")]),e._v("。")]),e._v(" "),t("p",[e._v("相应的，"),t("code",[e._v("Fiber节点")]),e._v("构成的"),t("code",[e._v("Fiber树")]),e._v("就对应"),t("code",[e._v("DOM树")]),e._v("。")]),e._v(" "),t("p",[e._v("那么如何更新"),t("code",[e._v("DOM")]),e._v("呢？这需要用到被称为“双缓存”的技术。")]),e._v(" "),t("h2",{attrs:{id:"什么是-双缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-双缓存"}},[e._v("#")]),e._v(" 什么是“双缓存”")]),e._v(" "),t("p",[e._v("当我们用"),t("code",[e._v("canvas")]),e._v("绘制动画，每一帧绘制前都会调用"),t("code",[e._v("ctx.clearRect")]),e._v("清除上一帧的画面。")]),e._v(" "),t("p",[e._v("如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。")]),e._v(" "),t("p",[e._v("为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。")]),e._v(" "),t("p",[e._v("这种"),t("strong",[e._v("在内存中构建并直接替换")]),e._v("的技术叫做"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"}},[e._v("双缓存"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("React")]),e._v("使用“双缓存”来完成"),t("code",[e._v("Fiber树")]),e._v("的构建与替换——对应着"),t("code",[e._v("DOM树")]),e._v("的创建与更新。")]),e._v(" "),t("h2",{attrs:{id:"双缓存fiber树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双缓存fiber树"}},[e._v("#")]),e._v(" 双缓存Fiber树")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("React")]),e._v("中最多会同时存在两棵"),t("code",[e._v("Fiber树")]),e._v("。当前屏幕上显示内容对应的"),t("code",[e._v("Fiber树")]),e._v("称为"),t("code",[e._v("current Fiber树")]),e._v("，正在内存中构建的"),t("code",[e._v("Fiber树")]),e._v("称为"),t("code",[e._v("workInProgress Fiber树")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("current Fiber树")]),e._v("中的"),t("code",[e._v("Fiber节点")]),e._v("被称为"),t("code",[e._v("current fiber")]),e._v("，"),t("code",[e._v("workInProgress Fiber树")]),e._v("中的"),t("code",[e._v("Fiber节点")]),e._v("被称为"),t("code",[e._v("workInProgress fiber")]),e._v("，他们通过"),t("code",[e._v("alternate")]),e._v("属性连接。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("currentFiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" workInProgressFiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nworkInProgressFiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" currentFiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("code",[e._v("React")]),e._v("应用的根节点通过"),t("code",[e._v("current")]),e._v("指针在不同"),t("code",[e._v("Fiber树")]),e._v("的"),t("code",[e._v("rootFiber")]),e._v("间切换来实现"),t("code",[e._v("Fiber树")]),e._v("的切换。")]),e._v(" "),t("p",[e._v("当"),t("code",[e._v("workInProgress Fiber树")]),e._v("构建完成交给"),t("code",[e._v("Renderer")]),e._v("渲染在页面上后，应用根节点的"),t("code",[e._v("current")]),e._v("指针指向"),t("code",[e._v("workInProgress Fiber树")]),e._v("，此时"),t("code",[e._v("workInProgress Fiber树")]),e._v("就变为"),t("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),t("p",[e._v("每次状态更新都会产生新的"),t("code",[e._v("workInProgress Fiber树")]),e._v("，通过"),t("code",[e._v("current")]),e._v("与"),t("code",[e._v("workInProgress")]),e._v("的替换，完成"),t("code",[e._v("DOM")]),e._v("更新。")]),e._v(" "),t("p",[e._v("接下来我们以具体例子讲解"),t("code",[e._v("mount时")]),e._v("、"),t("code",[e._v("update时")]),e._v("的构建/替换流程。")]),e._v(" "),t("h2",{attrs:{id:"mount时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[e._v("#")]),e._v(" mount时")]),e._v(" "),t("p",[e._v("考虑如下例子：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("App")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("useState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("p onClick"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nReactDOM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("ol",[t("li",[e._v("首次执行"),t("code",[e._v("ReactDOM.render")]),e._v("会创建"),t("code",[e._v("rootFiberNode")]),e._v("和"),t("code",[e._v("rootFiber")]),e._v("。其中"),t("code",[e._v("rootFiberNode")]),e._v("是整个应用的根节点，"),t("code",[e._v("rootFiber")]),e._v("是"),t("code",[e._v("<App/>")]),e._v("所在组件树的根节点。")])]),e._v(" "),t("p",[e._v("之所以要区分"),t("code",[e._v("rootFiberNode")]),e._v("与"),t("code",[e._v("rootFiber")]),e._v("，是因为在应用中我们可以多次调用"),t("code",[e._v("ReactDOM.render")]),e._v("渲染不同的组件树，他们会拥有不同的"),t("code",[e._v("rootFiber")]),e._v("。但是整个应用的根节点只有一个，那就是"),t("code",[e._v("rootFiberNode")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("rootFiberNode")]),e._v("的"),t("code",[e._v("current")]),e._v("会指向当前页面上已渲染内容对应对"),t("code",[e._v("Fiber树")]),e._v("，被称为"),t("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/img/rootfiber.png"),alt:"rootFiber"}}),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("rootFiberNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("current "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" rootFiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("由于是首屏渲染，页面中还没有挂载任何"),t("code",[e._v("DOM")]),e._v("，所以"),t("code",[e._v("rootFiberNode.current")]),e._v("指向的"),t("code",[e._v("rootFiber")]),e._v("没有任何"),t("code",[e._v("子Fiber节点")]),e._v("（即"),t("code",[e._v("current Fiber树")]),e._v("为空）。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("接下来进入"),t("code",[e._v("render阶段")]),e._v("，根据组件返回的"),t("code",[e._v("JSX")]),e._v("在内存中依次创建"),t("code",[e._v("Fiber节点")]),e._v("并连接在一起构建"),t("code",[e._v("Fiber树")]),e._v("，被称为"),t("code",[e._v("workInProgress Fiber树")]),e._v("。（下图中右侧为内存中构建的树，左侧为页面显示的树）")])]),e._v(" "),t("p",[e._v("在构建"),t("code",[e._v("workInProgress Fiber树")]),e._v("时会尝试复用"),t("code",[e._v("current Fiber树")]),e._v("中已有的"),t("code",[e._v("Fiber节点")]),e._v("内的属性，在"),t("code",[e._v("首屏渲染")]),e._v("时只有"),t("code",[e._v("rootFiber")]),e._v("存在对应的"),t("code",[e._v("current fiber")]),e._v("（即"),t("code",[e._v("rootFiber.alternate")]),e._v("）。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/img/workInProgressFiber.png"),alt:"workInProgressFiber"}}),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("图中右侧已构建完的"),t("code",[e._v("workInProgress Fiber树")]),e._v("在"),t("code",[e._v("commit阶段")]),e._v("渲染到页面。")])]),e._v(" "),t("p",[e._v("此时"),t("code",[e._v("DOM")]),e._v("更新为右侧树对应的样子。"),t("code",[e._v("rootFiberNode")]),e._v("的"),t("code",[e._v("current")]),e._v("指针指向"),t("code",[e._v("workInProgress Fiber树")]),e._v("使其变为"),t("code",[e._v("current Fiber 树")]),e._v("。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/img/wipTreeFinish.png"),alt:"workInProgressFiberFinish"}}),e._v(" "),t("h2",{attrs:{id:"update时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[e._v("#")]),e._v(" update时")]),e._v(" "),t("ol",[t("li",[e._v("接下来我们点击"),t("code",[e._v("p节点")]),e._v("触发状态改变，这会开启一次新的"),t("code",[e._v("render阶段")]),e._v("并构建一棵新的"),t("code",[e._v("workInProgress Fiber 树")]),e._v("。")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/img/wipTreeUpdate.png"),alt:"wipTreeUpdate"}}),e._v(" "),t("p",[e._v("和"),t("code",[e._v("mount")]),e._v("时一样，"),t("code",[e._v("workInProgress fiber")]),e._v("的创建可以复用"),t("code",[e._v("current Fiber树")]),e._v("对应的节点数据。")]),e._v(" "),t("blockquote",[t("p",[e._v("这个决定是否复用的过程就是Diff算法，后面章节会详细讲解")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[e._v("workInProgress Fiber 树")]),e._v("在"),t("code",[e._v("render阶段")]),e._v("完成构建后进入"),t("code",[e._v("commit阶段")]),e._v("渲染到页面上。渲染完毕后，"),t("code",[e._v("workInProgress Fiber 树")]),e._v("变为"),t("code",[e._v("current Fiber 树")]),e._v("。")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/img/currentTreeUpdate.png"),alt:"currentTreeUpdate"}}),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("本文介绍了"),t("code",[e._v("Fiber树")]),e._v("的构建与替换过程，这个过程伴随着"),t("code",[e._v("DOM")]),e._v("的更新。")]),e._v(" "),t("p",[e._v("那么在构建过程中每个"),t("code",[e._v("Fiber节点")]),e._v("是如何创建的呢？我们会在下一节讲解。")])])}),[],!1,null,null,null);r.default=v.exports}}]);