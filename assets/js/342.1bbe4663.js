(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{616:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("什么是 nacos?")]),s._v(" "),a("p",[s._v("一个更易于构建云原生应用的动态服务发现，服务配置的服务管理平台")]),s._v(" "),a("p",[s._v("注册中心+配置中心+服务管理；")]),s._v(" "),a("p",[s._v("关键特性：")]),s._v(" "),a("ul",[a("li",[s._v("服务发现和服务健康检测")]),s._v(" "),a("li",[s._v("动态配置服务")]),s._v(" "),a("li",[s._v("动态 DNS 服务")]),s._v(" "),a("li",[s._v("服务及其元数据管理")])]),s._v(" "),a("h4",{attrs:{id:"注册中心的演变和设计思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心的演变和设计思想"}},[s._v("#")]),s._v(" "),a("strong",[s._v("注册中心的演变和设计思想")])]),s._v(" "),a("p",[s._v("注册中心：管理微服务，解决微服务间调用关系错综复杂，难以维护的问题")]),s._v(" "),a("p",[s._v("架构设计：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/2021-09-17%20pm10.08.54-4008118.png",alt:"2021-09-17 pm10.08.54"}})]),s._v(" "),a("p",[s._v("思考：")]),s._v(" "),a("ol",[a("li",[s._v("每次请求都要去注册中心拉取服务列表吗？注册中心宕机了怎么办？")]),s._v(" "),a("li",[s._v("注册中心应设计为 CP 还是 AP？")]),s._v(" "),a("li",[s._v("如果注册表中的服务对应的机器宕机了怎么办？")])]),s._v(" "),a("h4",{attrs:{id:"nacos-环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos-环境搭建"}},[s._v("#")]),s._v(" "),a("strong",[s._v("nacos 环境搭建")])]),s._v(" "),a("p",[a("strong",[s._v("本地安装和启动")])]),s._v(" "),a("p",[s._v("本地安装路径 ： /usr/local/nacos")]),s._v(" "),a("p",[s._v("启动 ："),a("code",[s._v("sh /usr/local/nacos/bin/startup.sh -m standalone")])]),s._v(" "),a("p",[a("strong",[s._v("docker 启动")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(":8848 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("standalone  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nacos  nacos/nacos-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("访问")])]),s._v(" "),a("p",[s._v("http://127.0.0.1:8848/nacos/")]),s._v(" "),a("p",[s._v("默认用户名密码"),a("code",[s._v("nacos/nacos")]),s._v("登录")]),s._v(" "),a("h4",{attrs:{id:"服务发现配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务发现配置"}},[s._v("#")]),s._v(" "),a("strong",[s._v("服务发现配置")])]),s._v(" "),a("p",[s._v("<1>Pom.xml 的配置")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-discovery"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("<2>yml 文件配置")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动项目后发现服务列表中已存在对应的 web 服务")]),s._v(" "),a("h4",{attrs:{id:"服务调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务调用"}},[s._v("#")]),s._v(" 服务调用")]),s._v(" "),a("p",[s._v("还记得我们之前使用 RestTemplate 进行服务间接口调用吗？")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestTemplate")]),s._v(" restTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"下单,商品id:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9002/stock/reduce"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" restTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getForObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DateTimeFormatter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ISO_DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);