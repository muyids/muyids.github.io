(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{609:function(a,t,s){"use strict";s.r(t);var v=s(14),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("图灵-诸葛")]),a._v(" "),t("p",[a._v("阿里微服务架构 Spring Cloud Alibaba 深度源码")]),a._v(" "),t("p",[a._v("1、Nacos 服务注册与发现源码深度剖析\n2、Nacos 心跳机制与服务健康检查源码剖析\n3、Nacos 注册表如何防止多节点读写并发冲突\n4、Nacos 高并发支撑异步任务与内存队列剖析\n5、Nacos 集群 CP 架构底层 Raft 协议实现源码剖析\n6、从脑裂问题剖析 Nacos&Eureka&Zookeeper 架构异同\n7、阿里云超大规模注册中心 SaaS 架构剖析\n8、Sentinel 底层滑动时间窗限流算法深度剖析\n9、利用 Sentinel 的 Metric 机制计算线上系统实时 QPS")]),a._v(" "),t("h2",{attrs:{id:"_10、seata-分布式事务回滚机制剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、seata-分布式事务回滚机制剖析"}},[a._v("#")]),a._v(" 10、Seata 分布式事务回滚机制剖析")]),a._v(" "),t("h1",{attrs:{id:"spring-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud"}},[a._v("#")]),a._v(" Spring Cloud")]),a._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("h3",{attrs:{id:"spring-cloud-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-是什么"}},[a._v("#")]),a._v(" Spring Cloud 是什么")]),a._v(" "),t("ul",[t("li",[a._v("SpringCloud 为开发者提供了一套快速开发分布式系统的组件")]),a._v(" "),t("li",[a._v("SpringCloud 并不推荐重复造轮子")]),a._v(" "),t("li",[a._v("主张利用 SpringBoot 将其他公司较成熟的组件进行封装")])]),a._v(" "),t("h3",{attrs:{id:"核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[a._v("#")]),a._v(" 核心概念")]),a._v(" "),t("p",[a._v("配置中心、注册中心、服务网关、负载均衡、RPC 调用、服务熔断、服务降级、服务限流、全局锁、控制总线、分布式事务、服务安全、链路追踪、集群管理、事件驱动、任务调度、云连接器、函数计算")]),a._v(" "),t("h2",{attrs:{id:"分布式配置中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式配置中心"}},[a._v("#")]),a._v(" 分布式配置中心")]),a._v(" "),t("h3",{attrs:{id:"分布式配置中心的由来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式配置中心的由来"}},[a._v("#")]),a._v(" 分布式配置中心的由来")]),a._v(" "),t("p",[a._v("微服务系统中，存在很多功能开关和各种参数的配置项，传统的配置文件、数据库等方式无法满足开发人员对配置管理的需求。\n所以，分布式配置中心应运而生")]),a._v(" "),t("h3",{attrs:{id:"分布式配置中心的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式配置中心的特点"}},[a._v("#")]),a._v(" 分布式配置中心的特点")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("统一管理")]),a._v(" "),t("p",[a._v("配置中心服务端负责配置的管理（增、删、改、发布），集成了配置中心客户端的微服务程序可以统一从配置中心服务端拉取配置，从而实现整个微服务系统的统一配置管理")])]),a._v(" "),t("li",[t("p",[a._v("区分环境")]),a._v(" "),t("p",[a._v("在不同环境（开发、测试、生产）中配置项通常是不同的\n分布式配置中心需要具有隔离不同环境的功能")])]),a._v(" "),t("li",[t("p",[a._v("实时刷新")]),a._v(" "),t("p",[a._v("当配置中心服务端中的配置发生修改时，配置中心客户端能实时监听到配置的改变，使得微服务应用程序可以实时获取最新配置，并且不需要重新部署应用程序")])]),a._v(" "),t("li",[t("p",[a._v("权限控制")]),a._v(" "),t("p",[a._v("在配置中心，可以针对不同的角色或用户设置对应的权限")])]),a._v(" "),t("li",[t("p",[a._v("版本控制")]),a._v(" "),t("p",[a._v("使用配置中心过程中，出现误操作，可以进行版本回退")])]),a._v(" "),t("li",[t("p",[a._v("灰度发布")]),a._v(" "),t("p",[a._v("如果需要发布到多个实例，可以只发布到部分实例，待测试通过后，再发布到全部实例，这就是配置的灰度发布")])])]),a._v(" "),t("h2",{attrs:{id:"分布式注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式注册中心"}},[a._v("#")]),a._v(" 分布式注册中心")]),a._v(" "),t("h3",{attrs:{id:"什么是注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是注册中心"}},[a._v("#")]),a._v(" 什么是注册中心")]),a._v(" "),t("p",[a._v("注册中心相当于微服务架构中的地址通讯录\n每个微服务会将服务及其地址注册到注册中心\n服务消费者在调用某个微服务前会先从注册中心查找服务地址，然后进行调用")]),a._v(" "),t("h3",{attrs:{id:"注册中心的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册中心的特点"}},[a._v("#")]),a._v(" 注册中心的特点")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("服务的自动注册")]),a._v(" "),t("p",[a._v("微服务应用在启动时，通过注册中心客户端组件，将服务相关信息自动注册给注册中心服务端")])]),a._v(" "),t("li",[t("p",[a._v("服务的健康检查")]),a._v(" "),t("p",[a._v("当已经注册到注册中心的微服务实例宕机后，注册中心服务端能发现实例宕机，并把相关信息从注册中心删除掉")])]),a._v(" "),t("li",[t("p",[a._v("服务的自动发现")]),a._v(" "),t("p",[a._v("服务消费者需要能实时监听到注册中心中服务信息的变更，以能在真正调用服务时不会出现错误")])])]),a._v(" "),t("h3",{attrs:{id:"常见注册中心组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见注册中心组件"}},[a._v("#")]),a._v(" 常见注册中心组件")]),a._v(" "),t("ul",[t("li",[a._v("Zookeeper")]),a._v(" "),t("li",[a._v("Eureka")]),a._v(" "),t("li",[a._v("Nacos")]),a._v(" "),t("li",[a._v("Consul")])]),a._v(" "),t("h2",{attrs:{id:"服务网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务网关"}},[a._v("#")]),a._v(" 服务网关")]),a._v(" "),t("h3",{attrs:{id:"什么是服务网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务网关"}},[a._v("#")]),a._v(" 什么是服务网关")]),a._v(" "),t("p",[a._v("服务网关是整个微服务架构中对外的统一入口\n所有客户端都通过统一的网关使用微服务\n微服务网关起到了隔离外部访问和内部系统的作用\n服务网关是微服务架构中的一个标配组件")]),a._v(" "),t("h3",{attrs:{id:"服务网关的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务网关的特点"}},[a._v("#")]),a._v(" 服务网关的特点")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("高并发")]),a._v(" "),t("p",[a._v("作为微服务架构中的对外入口，必须能支持高并发，能承担更高的并发量，并保证高性能")])]),a._v(" "),t("li",[t("p",[a._v("安全")]),a._v(" "),t("p",[a._v("服务网关通常具有权限认证、黑名单、白名单等保证网关安全的功能")])]),a._v(" "),t("li",[t("p",[a._v("路由转发")]),a._v(" "),t("p",[a._v("服务网关接收到外部请求后，要求服务网关能根据请求和配置将请求转发到对应的后端微服务上去")])]),a._v(" "),t("li",[t("p",[a._v("监控与限流")]),a._v(" "),t("p",[a._v("作为整个系统的流量入口，服务网关要能监控流量情况，遇到突发情况能及时限流，保证整个系统的稳定")])]),a._v(" "),t("li",[t("p",[a._v("灰度发布")]),a._v(" "),t("p",[a._v("当某个微服务有新版本上线时，可以利用服务网关进行流量的切换，实现该微服务的灰度发布")])]),a._v(" "),t("li",[t("p",[a._v("服务重试")]),a._v(" "),t("p",[a._v("当服务网关调用某个微服务失败后，可以通过服务网关设置重试策略来重新尝试调用该服务")])]),a._v(" "),t("li",[t("p",[a._v("服务别名")]),a._v(" "),t("p",[a._v("可以在服务网关中给某个或某些微服务设置别名，从而对外屏蔽内部微服务相关信息")])])]),a._v(" "),t("h3",{attrs:{id:"常见服务网关组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见服务网关组件"}},[a._v("#")]),a._v(" 常见服务网关组件")]),a._v(" "),t("ul",[t("li",[a._v("Kong")]),a._v(" "),t("li",[a._v("Zuul")]),a._v(" "),t("li",[a._v("Spring Cloud Gateway")])]),a._v(" "),t("h3",{attrs:{id:"spring-cloud-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway"}},[a._v("#")]),a._v(" Spring Cloud Gateway")]),a._v(" "),t("ul",[t("li",[a._v("可以很方便的和 Spring Cloud 生态中的其他组件进行集成（比如断路器和服务发现）")]),a._v(" "),t("li",[a._v("提供了一套简单易写的 "),t("strong",[a._v("断言")]),a._v("（"),t("strong",[a._v("Predicates")]),a._v("，有的地方也翻译成 "),t("strong",[a._v("谓词")]),a._v("）和 "),t("strong",[a._v("过滤器")]),a._v("（"),t("strong",[a._v("Filters")]),a._v("）机制，可以对每个 "),t("strong",[a._v("路由")]),a._v("（"),t("strong",[a._v("Routes")]),a._v("）进行特殊请求处理。\nhttps://cloud.spring.io/spring-cloud-gateway/reference/html/")])]),a._v(" "),t("p",[a._v("术语")]),a._v(" "),t("ul",[t("li",[a._v("Route: 路由；网关基本组成单位；通过一个 id，一个目的 uri，一组断言的集合和一组过滤器的集合组成；当聚合断言为 true 时，表示路由被匹配上了。")]),a._v(" "),t("li",[a._v("Predicate：断言； "),t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 8 Function Predicate"),t("OutboundLink")],1),a._v("；输入类型是 "),t("a",{attrs:{href:"https://docs.spring.io/spring/docs/5.0.x/javadoc-api/org/springframework/web/server/ServerWebExchange.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring Framework "),t("code",[a._v("ServerWebExchange")]),t("OutboundLink")],1),a._v("；用于匹配 http 请求，比如通过请求头或者参数")]),a._v(" "),t("li",[a._v("Filter: 过滤器；特殊工厂构建的 Spring Framework GatewayFilter 的实例；能够在发送给下游请求前后修改请求和响应")])]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gateway")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("routes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# routes的配置")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("log\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uri")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" lb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//dera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("log\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("predicates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Between=2017"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("20T17"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("42"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("47.789"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("07"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("America/Denver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 2017"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("21T17"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("42"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("47.789"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("07"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("America/Denver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n          \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Cookie=chocolate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ch.p\n          \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Header=X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("Id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \\d+\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Path=/log/"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("**")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Host="),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("**.somehost.org")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("**.anotherhost.org")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Method=GET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("POST\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Query=green\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" RemoteAddr=192.168.1.1/24\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n           \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" AddRequestHeader=X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" blue\n           \t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" AddRequestHeader=X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("Red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" Blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SignCheck\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h3",{attrs:{id:"网关限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关限流"}},[a._v("#")]),a._v(" 网关限流")]),a._v(" "),t("p",[a._v("单机模式的限流非常简单，可以直接基于内存就可以实现，而集群模式的限流必须依赖于某个“中心化”的组件，比如网关或 Redis，从而引出两种不同的限流架构："),t("strong",[a._v("网关层限流")]),a._v(" 和 "),t("strong",[a._v("中间件限流")])]),a._v(" "),t("p",[a._v("分布式网关也依赖于中间件限流，跟中间件限流没有区别。")]),a._v(" "),t("p",[a._v("https://www.javazhiyin.com/68911.html")]),a._v(" "),t("h2",{attrs:{id:"负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[a._v("#")]),a._v(" 负载均衡")]),a._v(" "),t("h3",{attrs:{id:"什么是负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是负载均衡"}},[a._v("#")]),a._v(" 什么是负载均衡")]),a._v(" "),t("p",[a._v("负载均衡是指将访问流量根据负载均衡算法分发到后端服务器的流量分发控制服务\n通过负载均衡可以提高微服务的可用性以及性能")]),a._v(" "),t("h3",{attrs:{id:"常见负载均衡算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见负载均衡算法"}},[a._v("#")]),a._v(" 常见负载均衡算法")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("简单轮询")]),a._v(" "),t("p",[a._v("将请求按顺序分发给后端服务器上，不关心服务器当前的状态，比如后端服务的性能、当前的负载")])]),a._v(" "),t("li",[t("p",[a._v("加权轮询")]),a._v(" "),t("p",[a._v("根据服务器自身的性能给服务器设置不同的权重，将请求按顺序和权重分发给后端服务器，可以让性能高的机器处理更多的请求")])]),a._v(" "),t("li",[t("p",[a._v("简单随机")]),a._v(" "),t("p",[a._v("将请求随机分发给后端服务器上，请求越多，各个服务器接收到的请求越平均")])]),a._v(" "),t("li",[t("p",[a._v("加权随机")]),a._v(" "),t("p",[a._v("根据服务器自身的性能给服务器设置不同的权重，将请求按各个服务器的权重随机分发给后端服务器")])]),a._v(" "),t("li",[t("p",[a._v("一致性哈希")]),a._v(" "),t("p",[a._v("根据请求的客户端 ip、或请求参数通过哈希算法得到一个数值，利用该数值取模映射出对应的后端服务器，这样能保证同一客户端或相同参数的请求每次都使用同一台服务器")])]),a._v(" "),t("li",[t("p",[a._v("最小活跃数")]),a._v(" "),t("p",[a._v("统计每台服务器上当前正在处理的请求树，也就是请求活跃数，将请求分发给活跃数最少的后台服务器")])])]),a._v(" "),t("h3",{attrs:{id:"常见负载均衡组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见负载均衡组件"}},[a._v("#")]),a._v(" 常见负载均衡组件")]),a._v(" "),t("ul",[t("li",[a._v("nginx")]),a._v(" "),t("li",[a._v("lvs")]),a._v(" "),t("li",[a._v("ribbon")])]),a._v(" "),t("h2",{attrs:{id:"rpc-调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpc-调用"}},[a._v("#")]),a._v(" RPC 调用")]),a._v(" "),t("h3",{attrs:{id:"什么是-rpc-调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-rpc-调用"}},[a._v("#")]),a._v(" 什么是 RPC 调用")]),a._v(" "),t("p",[a._v("RPC 就是远程过程调用\n对于 Java 程序而言，RPC 就是远程方法调用，表示一个方法调用远程的另外一个方法\n微服务架构中一个服务调用另一个服务就可以使用 RPC 调用")]),a._v(" "),t("h3",{attrs:{id:"rpc-调用与-http-调用的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpc-调用与-http-调用的区别"}},[a._v("#")]),a._v(" RPC 调用与 HTTP 调用的区别")]),a._v(" "),t("p",[a._v("HTTP 调用使用的是 HTTP 协议，是网络 7 层中的应用层协议\nHTTP 协议规定了数据传输的格式，Restful 风格就可以通过 Http 协议实现\nRPC 不是网络层面的协议，而是更上层的更灵活的通信协议\nRPC 调用可以自定义数据格式、数据传输方式、只要能保证调用到远程方法即可")]),a._v(" "),t("h3",{attrs:{id:"常用的-rpc-调用组件或框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的-rpc-调用组件或框架"}},[a._v("#")]),a._v(" 常用的 RPC 调用组件或框架")]),a._v(" "),t("ul",[t("li",[a._v("Dubbo")]),a._v(" "),t("li",[a._v("gRPC")]),a._v(" "),t("li",[a._v("Thrift")]),a._v(" "),t("li",[a._v("Feign")])]),a._v(" "),t("h2",{attrs:{id:"服务熔断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务熔断"}},[a._v("#")]),a._v(" 服务熔断")]),a._v(" "),t("h3",{attrs:{id:"什么是服务熔断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务熔断"}},[a._v("#")]),a._v(" 什么是服务熔断")]),a._v(" "),t("p",[a._v("当服务 A 调用的某个服务 B 不可用时，上游服务 A 为了保证自己不受影响，从而不再调用服务 B，直接返回一个结果，减轻服务 A 和服务 B 的压力，直到服务 B 恢复")]),a._v(" "),t("h3",{attrs:{id:"什么是熔断器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是熔断器"}},[a._v("#")]),a._v(" 什么是熔断器")]),a._v(" "),t("p",[a._v("实现熔断功能的叫熔断器，代表组件为 Hystrix、Sentinel")]),a._v(" "),t("h3",{attrs:{id:"熔断器的三种状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#熔断器的三种状态"}},[a._v("#")]),a._v(" 熔断器的三种状态")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Closed")]),a._v(" "),t("ul",[t("li",[a._v("当调用失败次数达到阈值时则启动熔断器")])])]),a._v(" "),t("li",[t("p",[a._v("Open")]),a._v(" "),t("ul",[t("li",[a._v("此时不会真正调用下游服务，而是直接返回，当过了某段时间后，熔断器会进入到半打开状态")])])]),a._v(" "),t("li",[t("p",[a._v("Half-Open")]),a._v(" "),t("ul",[t("li",[a._v("此时会有部分请求访问下游服务，如果这些请求都调用成功了，则认为下游服务恢复了，那么则关闭熔断器，否则熔断器回到打开状态")])])])]),a._v(" "),t("h2",{attrs:{id:"服务降级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务降级"}},[a._v("#")]),a._v(" 服务降级")]),a._v(" "),t("h3",{attrs:{id:"什么是服务降级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务降级"}},[a._v("#")]),a._v(" 什么是服务降级")]),a._v(" "),t("p",[a._v("当发现系统压力过载时，可以通过关闭某个服务，或限流某个服务来减轻系统压力")]),a._v(" "),t("h3",{attrs:{id:"服务降级与服务熔断的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务降级与服务熔断的区别"}},[a._v("#")]),a._v(" 服务降级与服务熔断的区别")]),a._v(" "),t("p",[a._v("都是为了防止系统崩溃\n都让用户体验到了某些功能暂时不可用\n熔断是下游服务故障触发的，降级是为了降低系统负载")]),a._v(" "),t("h3",{attrs:{id:"什么是服务雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务雪崩"}},[a._v("#")]),a._v(" 什么是服务雪崩")]),a._v(" "),t("p",[a._v("服务 A 调用服务 B，服务 B 调用服务 C，此时大量请求突然调用服务 A，假如服务 A 能抗住这些请求，但服务 C 抗不住，导致服务 C 请求堆积，从而服务 B 请求堆积，从而服务 A 不可用，这就是服务雪崩，解决方式就是服务降级和服务熔断")]),a._v(" "),t("h2",{attrs:{id:"服务限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务限流"}},[a._v("#")]),a._v(" 服务限流")]),a._v(" "),t("h3",{attrs:{id:"什么是服务限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务限流"}},[a._v("#")]),a._v(" 什么是服务限流")]),a._v(" "),t("p",[a._v("服务限流是指在高并发请求下，为了保护系统，对访问服务的请求进行数量上的限制，从而防止系统不被大量请求压垮，在秒杀中，限流是非常重要的")]),a._v(" "),t("h3",{attrs:{id:"常用的限流算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的限流算法"}},[a._v("#")]),a._v(" 常用的限流算法")]),a._v(" "),t("ul",[t("li",[a._v("固定窗口计数器")]),a._v(" "),t("li",[a._v("滑动窗口计数器")]),a._v(" "),t("li",[a._v("令牌桶")]),a._v(" "),t("li",[a._v("漏桶")])]),a._v(" "),t("h2",{attrs:{id:"全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局锁"}},[a._v("#")]),a._v(" 全局锁")]),a._v(" "),t("h3",{attrs:{id:"什么是全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是全局锁"}},[a._v("#")]),a._v(" 什么是全局锁")]),a._v(" "),t("p",[a._v("全局锁，就是我们常说的分布式锁，是分布式、微服务架构中的一种锁机制，通过全局锁可以很好地在分布式系统中互斥使用共享资源")]),a._v(" "),t("h3",{attrs:{id:"全局锁的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局锁的实现原理"}},[a._v("#")]),a._v(" 全局锁的实现原理")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("zookeeper")]),a._v(" "),t("p",[a._v("利用 Zookeeper 的 watch 机制与临时节点特性")])]),a._v(" "),t("li",[t("p",[a._v("Redis")]),a._v(" "),t("p",[a._v("利用 redis 的消费订阅机制与数据超时特性")]),a._v(" "),t("p",[a._v("setnx")])])]),a._v(" "),t("h3",{attrs:{id:"常用全局锁实现组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用全局锁实现组件"}},[a._v("#")]),a._v(" 常用全局锁实现组件")]),a._v(" "),t("ul",[t("li",[a._v("Redisson")]),a._v(" "),t("li",[a._v("Curator")])]),a._v(" "),t("h2",{attrs:{id:"控制总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制总线"}},[a._v("#")]),a._v(" 控制总线")]),a._v(" "),t("h3",{attrs:{id:"什么是控制总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是控制总线"}},[a._v("#")]),a._v(" 什么是控制总线")]),a._v(" "),t("p",[a._v("控制总线也成消息总线，是微服务系统中用来连接系统中所有服务节点的，微服务中的所有服务节点可以通过控制总线来进行通讯")]),a._v(" "),t("h3",{attrs:{id:"控制总线的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制总线的应用场景"}},[a._v("#")]),a._v(" 控制总线的应用场景")]),a._v(" "),t("p",[a._v("目前，SpringCloudBus 是控制总线的具体实现，某个微服务可以通过 SpringCloudBus 来广播事件，而其他微服务可以接收到事件并进行相关处理")]),a._v(" "),t("h2",{attrs:{id:"分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[a._v("#")]),a._v(" 分布式事务")]),a._v(" "),t("h3",{attrs:{id:"什么是分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式事务"}},[a._v("#")]),a._v(" 什么是分布式事务")]),a._v(" "),t("p",[a._v("在一次请求中，所涉及的分散在多个微服务上的操作要保证同时成功或同时失败，就是分布式事务\n比如创建订单减库存、银行转账等")]),a._v(" "),t("h3",{attrs:{id:"实现分布式事务的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现分布式事务的方式"}},[a._v("#")]),a._v(" 实现分布式事务的方式")]),a._v(" "),t("ul",[t("li",[a._v("直接通过数据库")]),a._v(" "),t("li",[a._v("通过消息队列")]),a._v(" "),t("li",[a._v("两阶段提交")]),a._v(" "),t("li",[a._v("三阶段提交")])]),a._v(" "),t("h3",{attrs:{id:"分布式事务中的三个角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务中的三个角色"}},[a._v("#")]),a._v(" 分布式事务中的三个角色")]),a._v(" "),t("ul",[t("li",[a._v("事务协调者")]),a._v(" "),t("li",[a._v("事务管理者")]),a._v(" "),t("li",[a._v("资源管理者")])]),a._v(" "),t("h3",{attrs:{id:"常用分布式事务框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用分布式事务框架"}},[a._v("#")]),a._v(" 常用分布式事务框架")]),a._v(" "),t("ul",[t("li",[a._v("seata")]),a._v(" "),t("li",[a._v("lcn")]),a._v(" "),t("li",[a._v("bytetcc")])]),a._v(" "),t("h2",{attrs:{id:"服务安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务安全"}},[a._v("#")]),a._v(" 服务安全")]),a._v(" "),t("h3",{attrs:{id:"什么是服务安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务安全"}},[a._v("#")]),a._v(" 什么是服务安全")]),a._v(" "),t("p",[a._v("服务的认证和授权是企业必需具备的\nSpring Cloud Security 是 Spring Cloud 提供的微服务安全组件")]),a._v(" "),t("h3",{attrs:{id:"服务安全的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务安全的特性"}},[a._v("#")]),a._v(" 服务安全的特性")]),a._v(" "),t("ul",[t("li",[a._v("1.可扩展、可配置的认证和授权")]),a._v(" "),t("li",[a._v("2.单点登录")]),a._v(" "),t("li",[a._v("3.防止会话固定、点击劫持、跨网站请求伪造等攻击")]),a._v(" "),t("li",[a._v("4.与 Servlet API 集成")])]),a._v(" "),t("h2",{attrs:{id:"链路追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪"}},[a._v("#")]),a._v(" 链路追踪")]),a._v(" "),t("h3",{attrs:{id:"什么是链路追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是链路追踪"}},[a._v("#")]),a._v(" 什么是链路追踪")]),a._v(" "),t("p",[a._v("链路追踪为微服务系统提供了完整的调用链路还原、调用请求量统计、链路拓扑、应用依赖分析等功能，可以帮助开发者快速分析和诊断微服务架构下的性能瓶颈")]),a._v(" "),t("h3",{attrs:{id:"链路追踪的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪的功能"}},[a._v("#")]),a._v(" 链路追踪的功能")]),a._v(" "),t("ul",[t("li",[a._v("分布式调用链查询和诊断")]),a._v(" "),t("li",[a._v("应用性能实时汇总")]),a._v(" "),t("li",[a._v("分布式拓扑动态发现")]),a._v(" "),t("li",[a._v("多语言开发程序接入")]),a._v(" "),t("li",[a._v("丰富的下游对接场景")])]),a._v(" "),t("h3",{attrs:{id:"常用的链路追踪技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的链路追踪技术"}},[a._v("#")]),a._v(" 常用的链路追踪技术")]),a._v(" "),t("ul",[t("li",[a._v("Sleuth")]),a._v(" "),t("li",[a._v("Zipkin\n微服务离不开调用链监控，我们可以利用调用链监控快速排障。")])]),a._v(" "),t("p",[a._v("CAT、Zipkin 和 SkyWalking 是 3 大主流的开源产品。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Zipkin 是 Twitter 开源的调用链分析工具，目前基于 springcloud sleuth 得到了广泛的使用，特点是轻量，使用部署简单。")])]),a._v(" "),t("li",[t("p",[a._v("SkyWalking 是本土开源的基于字节码注入的调用链分析，以及应用监控分析工具。特点是支持多种插件，UI 功能较强，接入端无代码侵入。目前已加入 Apache 孵化器。")])]),a._v(" "),t("li",[t("p",[a._v("CAT 是大众点评开源的基于编码和配置的调用链分析，应用监控分析，日志采集，监控报警等一系列的监控平台工具。")])])]),a._v(" "),t("p",[a._v("CAT")]),a._v(" "),t("ul",[t("li",[a._v("自研的序列化协议")]),a._v(" "),t("li",[a._v("文件查询引擎，可以不依赖 HDFS\nhttps://www.jianshu.com/p/9bb660190884")])]),a._v(" "),t("h2",{attrs:{id:"集群管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[a._v("#")]),a._v(" 集群管理")]),a._v(" "),t("h3",{attrs:{id:"什么是集群管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是集群管理"}},[a._v("#")]),a._v(" 什么是集群管理")]),a._v(" "),t("p",[a._v("集群管理是指，对于微服务系统中的某个服务集群所提供的针对集群管理的功能，Spring Cloud Cluster 的职责就是集群管理")]),a._v(" "),t("h3",{attrs:{id:"集群管理有哪些功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群管理有哪些功能"}},[a._v("#")]),a._v(" 集群管理有哪些功能")]),a._v(" "),t("ul",[t("li",[a._v("领导者选举")]),a._v(" "),t("li",[a._v("一致性存储")]),a._v(" "),t("li",[a._v("集群状态管理")]),a._v(" "),t("li",[a._v("一次性 tokens")])]),a._v(" "),t("h2",{attrs:{id:"事件驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[a._v("#")]),a._v(" 事件驱动")]),a._v(" "),t("h3",{attrs:{id:"什么是事件驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件驱动"}},[a._v("#")]),a._v(" 什么是事件驱动")]),a._v(" "),t("p",[a._v("事件驱动就是消息驱动，在 Spring Cloud 中提供了 Spring Cloud Stream 来实现事件驱动，有了事件驱动，在微服务系统中可以更方便的通过发送消息来进行通信")]),a._v(" "),t("h3",{attrs:{id:"事件驱动的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动的概念"}},[a._v("#")]),a._v(" 事件驱动的概念")]),a._v(" "),t("ul",[t("li",[a._v("目标绑定器，目标指的是 kafka 或 rabbitmq")]),a._v(" "),t("li",[a._v("绑定桥梁，连接消息系统和应用程序")]),a._v(" "),t("li",[a._v("消息，应用程序和消息系统之间传递的数据")])]),a._v(" "),t("h3",{attrs:{id:"事件驱动的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动的特点"}},[a._v("#")]),a._v(" 事件驱动的特点")]),a._v(" "),t("ul",[t("li",[a._v("异步处理")]),a._v(" "),t("li",[a._v("流量削峰")]),a._v(" "),t("li",[a._v("服务解耦")])]),a._v(" "),t("h2",{attrs:{id:"云连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云连接器"}},[a._v("#")]),a._v(" 云连接器")]),a._v(" "),t("h3",{attrs:{id:"什么是云链接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是云链接器"}},[a._v("#")]),a._v(" 什么是云链接器")]),a._v(" "),t("p",[a._v("云链接器可以用来更方便的链接部署在云上的各种服务\nSpring Cloud 中的 Spring Cloud Connectors 就是云链接器的组件实现")]),a._v(" "),t("h3",{attrs:{id:"目前支持的云平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前支持的云平台"}},[a._v("#")]),a._v(" 目前支持的云平台")]),a._v(" "),t("ul",[t("li",[a._v("SpringCloudCloudFoundry")]),a._v(" "),t("li",[a._v("SpringCloudHeroKu")])]),a._v(" "),t("h2",{attrs:{id:"函数计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数计算"}},[a._v("#")]),a._v(" 函数计算")]),a._v(" "),t("h3",{attrs:{id:"什么是函数计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数计算"}},[a._v("#")]),a._v(" 什么是函数计算")]),a._v(" "),t("p",[a._v("函数计算也称函数式编程，是实现 Serverless 的一种手段，企业如果能使用函数计算能大大节约成本，在 Spring Cloud 中提供了 Spring Cloud Function 来开发基于云平台的函数计算")]),a._v(" "),t("h3",{attrs:{id:"函数计算的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数计算的特点"}},[a._v("#")]),a._v(" 函数计算的特点")]),a._v(" "),t("ul",[t("li",[a._v("支持响应式等编程风格")]),a._v(" "),t("li",[a._v("输入输出类型透明转化")]),a._v(" "),t("li",[a._v("流数据处理")]),a._v(" "),t("li",[a._v("同一个 jvm 中运行多版本函数")]),a._v(" "),t("li",[a._v("打包函数到指定云平台")])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("云原生环境：docker，k8s")]),a._v(" "),t("p",[a._v("单机版本 -> 集群版本")]),a._v(" "),t("p",[a._v("Seata 会不会有性能问题，感觉一般公式都不会用，都是用异步补偿机制")]),a._v(" "),t("ul",[t("li",[a._v("如果用分布式事务，就一定会影响性能；")]),a._v(" "),t("li",[a._v("不加锁，处理就得加锁，加锁就影响性能（redis 不加锁，解决事务问题，用单线程）")])])])}),[],!1,null,null,null);t.default=_.exports}}]);