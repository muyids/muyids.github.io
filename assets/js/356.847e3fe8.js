(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{630:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("作用")])]),t._v(" "),s("p",[t._v("请求 gateway 的时候，使用断言对请求进行匹配，如果匹配成功，进行路由转发，如果匹配失败，返回 404")]),t._v(" "),s("p",[t._v("类型：")]),t._v(" "),s("ul",[s("li",[t._v("内置")]),t._v(" "),s("li",[t._v("自定义")])]),t._v(" "),s("h4",{attrs:{id:"内置断言工厂举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置断言工厂举例"}},[t._v("#")]),t._v(" 内置断言工厂举例")]),t._v(" "),s("p",[t._v("gateway 提供了多种类型的内置断言工厂，可以与 Http 请求的不同属性匹配，具体如下：")]),t._v(" "),s("p",[s("strong",[t._v("Datetime 类型的断言工厂")])]),t._v(" "),s("p",[t._v("支持时间前、后、之间三种匹配")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" After=2017"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T17"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("47.789"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("America/Denver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Before=2017"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T17"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("47.789"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("America/Denver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Between=2017"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("20T17"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("47.789"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("America/Denver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2017"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("21T17"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("47.789"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("07"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("America/Denver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("Cookie 断言工厂")])]),t._v(" "),s("p",[t._v("匹配具有给定名称的 cookie 且其值与正则表达式匹配的请求")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Cookie=chocolate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch.p\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("请求头断言工厂")])]),t._v(" "),s("p",[t._v("匹配具有给定名称的 =header 且其值与正则表达式匹配 的请求")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Header=X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\d+\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("Host 断言工厂")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Host="),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**.somehost.org")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**.anotherhost.org")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("请求方法断言工厂")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Method=GET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("POST\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("Path 断言工厂")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/red/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("segment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/blue/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("segment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("查询参数断言工厂")])]),t._v(" "),s("p",[t._v("不指定值")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Query=green\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("指定值")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("predicates:\n- Query=red, gree.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("权重断言工厂")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" weight_high\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//weighthigh.org\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Weight=group1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" weight_low\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//weightlow.org\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Weight=group1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);