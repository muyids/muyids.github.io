(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{847:function(t,a,s){"use strict";s.r(a);var i=s(14),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"road-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[t._v("#")]),t._v(" Road Map")]),t._v(" "),a("iframe",{attrs:{src:t.$withBase("/linked-list.html"),width:"100%",height:"800",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}}),t._v(" "),a("p",[t._v("升级路线：")]),t._v(" "),a("ul",[a("li",[t._v("查找链表位置：142 -> 160")]),t._v(" "),a("li",[t._v("删除链表元素：203 -> 19 -> 237 -> 83")]),t._v(" "),a("li",[t._v("重排链表：24 -> 86 -> 143 -> 148")]),t._v(" "),a("li",[t._v("旋转链表：206 -> 61 -> 92")]),t._v(" "),a("li",[t._v("合并链表：21 -> 23 ->")]),t._v(" "),a("li",[t._v("LRU 缓存设计：706 -> 146")])]),t._v(" "),a("h2",{attrs:{id:"链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),a("p",[t._v("链表的题目一般细节比较多，我习惯于先在纸上画一下过程，理清楚思路，然后一步一步去编写代码实现；")]),t._v(" "),a("h2",{attrs:{id:"解题技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题技巧"}},[t._v("#")]),t._v(" 解题技巧")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("巧用 dummpy")]),t._v("，在头结点发生改变时，不需要考虑头结点的特殊处理，只要返回 dummpy.next 作为头结点即可")]),t._v(" "),a("li",[a("strong",[t._v("快慢指针")]),t._v("，用于定位节点")])]),t._v(" "),a("h2",{attrs:{id:"查找链表元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找链表元素"}},[t._v("#")]),t._v(" 查找链表元素")]),t._v(" "),a("p",[t._v("查找链表中的指定位置，一般会用到"),a("strong",[t._v("快慢指针")]),t._v("的配合")]),t._v(" "),a("p",[t._v("比如：找环，找倒数第 K 个节点，找中间节点等等")]),t._v(" "),a("h2",{attrs:{id:"删除链表元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除链表元素"}},[t._v("#")]),t._v(" 删除链表元素")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/muyids/20220909234800.png",alt:"image-20220909234758799"}})]),t._v(" "),a("p",[t._v("一般涉及到删除操作，会考虑在开头增加辅助节点"),a("strong",[t._v("dummpy")])]),t._v(" "),a("p",[t._v("这样就不需要考虑"),a("strong",[t._v("删除链表头的特殊情况")]),t._v("的处理")]),t._v(" "),a("h2",{attrs:{id:"翻转链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻转链表"}},[t._v("#")]),t._v(" 翻转链表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/muyids/20220909231527.png",alt:"image-20220909231525529"}})]),t._v(" "),a("p",[t._v("可能会翻转头节点，所以需要增加 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("d")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("m")]),a("mi",[t._v("p")]),a("mi",[t._v("y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dummpy")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v(" 节点；")]),t._v(" "),a("p",[t._v("旋转链表 一般常用的技巧：（以翻转链表下标 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("[")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("g")]),a("mi",[t._v("h")]),a("mi",[t._v("t")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[left, right]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathit"},[t._v("h")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 区间的节点为例 ）")]),t._v(" "),a("p",[t._v("1、 找到要旋转部分的前一个节点，记录 为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("a")])])])])]),t._v(" "),a("p",[t._v("2、对于每一对节点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("b")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("c")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("c")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("c")])])])]),t._v("，进行翻转(需要借助 d = c.next) ；一共需要迭代 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("g")]),a("mi",[t._v("h")]),a("mi",[t._v("t")]),a("mo",[t._v("−")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("right - left")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathit"},[t._v("h")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathit"},[t._v("t")])])])]),t._v(" 次")]),t._v(" "),a("p",[t._v("3、翻转完成后，处理 翻转区间的首尾指针； a.next.next = c, a.next = b")]),t._v(" "),a("p",[t._v("掌握上述技巧，相信遇到翻转链表的题目就不会再为难了(#^.^#)")]),t._v(" "),a("p",[t._v("力扣上的练习题目：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("206.反 转 链 表 "),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode.cn/problems/rotate-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("61.旋 转 链 表 "),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);