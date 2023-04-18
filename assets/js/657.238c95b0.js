(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{931:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"最大公约数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最大公约数"}},[a._v("#")]),a._v(" 最大公约数")]),a._v(" "),s("p",[a._v("最大公约数表示 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[a._v("(")]),s("mi",[a._v("a")]),s("mo",{attrs:{separator:"true"}},[a._v(",")]),s("mi",[a._v("b")]),s("mo",[a._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("(a,b)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[a._v("(")]),s("span",{staticClass:"mord mathit"},[a._v("a")]),s("span",{staticClass:"mpunct"},[a._v(",")]),s("span",{staticClass:"mord mathit"},[a._v("b")]),s("span",{staticClass:"mclose"},[a._v(")")])])])])]),a._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n求两个正整数 a 和 b 的 最大公约数 d\n则有 gcd(a,b) = gcd(b,a%b)\n证明：\n    设a%b = a - k*b 其中k = a/b(向下取整)\n    若d是(a,b)的公约数 则知 d|a 且 d|b 则易知 d|a-k*b 故d也是(b,a%b) 的公约数\n    若d是(b,a%b)的公约数 则知 d|b 且 d|a-k*b 则 d|a-k*b+k*b = d|a 故而d|b 故而 d也是(a,b)的公约数\n    因此(a,b)的公约数集合和(b,a%b)的公约数集合相同 所以他们的最大公约数也相同 证毕#\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h1",{attrs:{id:"最小公倍数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最小公倍数"}},[a._v("#")]),a._v(" 最小公倍数")]),a._v(" "),s("p",[a._v("最小公倍数表示 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",[a._v("[")]),s("mi",[a._v("a")]),s("mo",{attrs:{separator:"true"}},[a._v(",")]),s("mi",[a._v("b")]),s("mo",[a._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("[a,b]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mopen"},[a._v("[")]),s("span",{staticClass:"mord mathit"},[a._v("a")]),s("span",{staticClass:"mpunct"},[a._v(",")]),s("span",{staticClass:"mord mathit"},[a._v("b")]),s("span",{staticClass:"mclose"},[a._v("]")])])])])]),a._v(" "),s("div",{staticClass:"language-coffeescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-coffeescript"}},[s("code",[a._v("\nscm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 求最小公倍数")]),a._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);