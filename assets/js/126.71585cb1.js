(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{399:function(v,a,t){"use strict";t.r(a);var s=t(14),_=Object(s.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[a("code",[v._v("Golang")]),v._v("基础知识笔记")]),v._v(" "),a("h2",{attrs:{id:"golang-是系统语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-是系统语言"}},[v._v("#")]),v._v(" golang 是系统语言")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("适合开发系统底层工具")]),v._v(" "),a("ul",[a("li",[v._v("比如 docker, https://github.com/docker/docker")]),v._v(" "),a("li",[v._v("工具，https://github.com/dacez/dcd")])])]),v._v(" "),a("li",[a("p",[v._v("适合服务器底层开发")]),v._v(" "),a("p",[v._v("golang 开发一个网络底层库很容易")])]),v._v(" "),a("li",[a("p",[v._v("多进程 编程方面、高并发方面")]),v._v(" "),a("p",[v._v("goroutine 也是 Golang 的一个特色，如果你想用其他语言通过多进程（or 多线程）来充分利用 CPU，不用怀疑，你会遇到太多可怕的事情")])])]),v._v(" "),a("h2",{attrs:{id:"golang-的调度器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-的调度器"}},[v._v("#")]),v._v(" golang 的调度器")]),v._v(" "),a("p",[v._v("Goroutine")]),v._v(" "),a("h2",{attrs:{id:"golang-是静态语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-是静态语言"}},[v._v("#")]),v._v(" golang 是静态语言")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("静态语言，强类型")]),v._v(" "),a("ul",[a("li",[v._v("代码编译可以检查大部分语法错误；")]),v._v(" "),a("li",[v._v("编译通过后，比脚本语言鲁棒性强，避免更多异常的发生；")])])]),v._v(" "),a("li",[a("p",[v._v("据说编译速度非常快")]),v._v(" "),a("ul",[a("li",[v._v("为什么快？")]),v._v(" "),a("li",[v._v("比其他静态语言如 java、C 等快多少？")])])])]),v._v(" "),a("h2",{attrs:{id:"不翻墙安装-golang-org-x-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不翻墙安装-golang-org-x-net"}},[v._v("#")]),v._v(" 不翻墙安装 golang.org/x/net")]),v._v(" "),a("p",[v._v("为了使包的导入方式不变，我们需要在 src 目录下面构造目录结构")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("$mkdir -p $GOPATH/src/golang.org/x/\n$cd $GOPATH/src/golang.org/x/\n$git clone https://github.com/golang/net.git net\n$go install net\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br")])]),a("p",[v._v("执行 go install 之后没有提示，就说明安装好了。")]),v._v(" "),a("h2",{attrs:{id:"golang-的包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-的包管理"}},[v._v("#")]),v._v(" golang 的包管理")]),v._v(" "),a("h3",{attrs:{id:"其他语言的包管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他语言的包管理工具"}},[v._v("#")]),v._v(" 其他语言的包管理工具")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("Nodejs 的 npm")]),v._v(" "),a("ul",[a("li",[v._v("种类丰富，数量巨大，从这个层面看，nodejs 确实蛮热的")]),v._v(" "),a("li",[v._v("nodejs 的包质量参差不齐")])])]),v._v(" "),a("li",[a("p",[v._v("Java 的 maven 和 grandle")])]),v._v(" "),a("li",[a("p",[v._v("python 的 pip")])]),v._v(" "),a("li",[a("p",[v._v("ruby 的 Bundler")])])]),v._v(" "),a("h3",{attrs:{id:"go-get命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-get命令"}},[v._v("#")]),v._v(" "),a("code",[v._v("go get")]),v._v("命令")]),v._v(" "),a("p",[v._v("直接从远程代码库(GitHub, Bitbucket, Google Code, Launchpad)拉取")]),v._v(" "),a("p",[v._v("好处")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("跳过了包管理中央库的的约束，让代码的拉取直接基于版本控制库")])]),v._v(" "),a("li",[a("p",[v._v("去掉冗余，直接复用最基本的代码基础设施\n痛苦")])]),v._v(" "),a("li",[a("p",[v._v("缺乏明确显示的版本。团队开发容易导入不一样的版本")])]),v._v(" "),a("li",[a("p",[v._v("第三方包没有内容安全审计，很容易引入代码 Bug")])]),v._v(" "),a("li",[a("p",[v._v("依赖的完整性无法校验，程序编译时无法保障百分百成功\n"),a("strong",[v._v("开发者推出的包管理工具")])])]),v._v(" "),a("li",[a("p",[v._v("https://github.com/tools/godep")])]),v._v(" "),a("li",[a("p",[v._v("https://github.com/gpmgo/gopm\n等等...")])])]),v._v(" "),a("p",[a("strong",[v._v("官方 Wiki 推荐了支持此特性的包管理工具")])]),v._v(" "),a("ul",[a("li",[v._v("Godep")]),v._v(" "),a("li",[v._v("Govendor")]),v._v(" "),a("li",[v._v("godm")]),v._v(" "),a("li",[v._v("vexp")]),v._v(" "),a("li",[v._v("gv")]),v._v(" "),a("li",[v._v("gvt - Recursively retrieve and vendor packages.")]),v._v(" "),a("li",[v._v("govend")]),v._v(" "),a("li",[v._v("Glide")])]),v._v(" "),a("h2",{attrs:{id:"简洁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简洁"}},[v._v("#")]),v._v(" 简洁")]),v._v(" "),a("ul",[a("li",[v._v("很多跨平台语言都需要虚拟机的支持，而 go 却在不需要虚拟机情况下支持跨平台")]),v._v(" "),a("li",[v._v("golang 编写的代码短小精悍\n反正比 C、Java 短就是了")]),v._v(" "),a("li",[v._v("golang 编译出的二进制文件既小又快\n和 java 对比一下，如果你要建一个 rest 服务，至少要 jre 吧，几十兆就去了，而 go 只要几行代码，编译出来就一两兆")])]),v._v(" "),a("h2",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[v._v("#")]),v._v(" 性能")]),v._v(" "),a("h3",{attrs:{id:"并发-concurrency-和并行-parallelism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发-concurrency-和并行-parallelism"}},[v._v("#")]),v._v(" 并发(Concurrency)和并行(Parallelism)")]),v._v(" "),a("p",[v._v("一个并发程序是指能同时执行通常不相关的各种任务。")]),v._v(" "),a("p",[v._v("以一个游戏服务器为例子：它通常是有各种组件组成，每种组件都跟外部世界进行着复杂的信息交互。\n一个组件有可能要处理多个用户聊聊；另外一些可能要处理用户的输入，并把最新状态反馈给用户；其它的用来进行物理计算。\n这些都是并发处理。")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("---任务1-----------任务1----------\n--------任务2-任务2------任务2-----\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("p",[v._v("并发程序任务是岔开的")]),v._v(" "),a("p",[a("strong",[v._v("并发程序并不需要多核处理器。")])]),v._v(" "),a("p",[v._v("并行程序是用来解决一个单一任务的。")]),v._v(" "),a("p",[v._v("以一个试图预估某支股票价格在下一分钟波动情况的金融组件为例，\n如果想最快速度的知道标普 500 中哪知股票应该卖出还是买进，你不能一个一个的计算，\n而是将这些所有的股票同时计算。这是并行。")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("--任务1----任务1----任务1----任务1--\n----任务1--任务1--任务1--任务1------\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("p",[v._v("并行指同一任务同时进行")]),v._v(" "),a("p",[v._v("并发的关键是你有处理多个任务的能力，不一定要同时。\n并行的关键是你有"),a("strong",[v._v("同时")]),v._v("处理多个任务的能力。\n所以我认为它们最关键的点就是：是否是『同时』。\n并发是轮流处理多个任务，并行是同时处理多个任务")]),v._v(" "),a("h3",{attrs:{id:"多线程-vs-非阻塞-i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程-vs-非阻塞-i-o"}},[v._v("#")]),v._v(" 多线程 VS 非阻塞 I/O")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("CPU 密集型")]),v._v(" "),a("p",[v._v("多个线程的代码很有可能是线性执行的。所以这种情况下多线程是鸡肋，效率可能还不如单线程，因为有 context switch")])]),v._v(" "),a("li",[a("p",[v._v("IO 密集型")]),v._v(" "),a("p",[v._v("对于 I/O 密集型应用或高并发应用，目前有两种比较常用的方案，多线程和非阻塞 I/O;\n多线程的方案由于线程的内存开销，会出现 C10K 问题；非阻塞 I/O 往往无法利用多核 CPU 的优势；\n下面说说几种编程语言在处理 I/O 密集型应用时采用的方案。")])])]),v._v(" "),a("h4",{attrs:{id:"nodejs-的事件机制-非阻塞-i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-的事件机制-非阻塞-i-o"}},[v._v("#")]),v._v(" nodejs 的事件机制&非阻塞 I/O")]),v._v(" "),a("p",[a("img",{attrs:{src:"/image/nodejs-system.png",alt:"nodejs-system"}})]),v._v(" "),a("p",[v._v("内部是多线程，用户代码都运行在单个线程内，利用操作系统的非阻塞 I/O 库（libuv 对 epoll、kqueue、iocp 的封装）实现并发")]),v._v(" "),a("p",[v._v("优势：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("单核机制，基本是速度最快的方案")])]),v._v(" "),a("li",[a("p",[v._v("runtime 的核心实现起来比较简单，容易维护\n不足：")])]),v._v(" "),a("li",[a("p",[v._v("程序员负担加大；产生层层回调；")]),v._v(" "),a("ul",[a("li",[v._v("使用三方库可解决")]),v._v(" "),a("li",[v._v("使用 promise + generator 函数 + co 库 + yield 关键字进行流程控制")]),v._v(" "),a("li",[v._v("v8 5.5 版本以后支持 async-await 机制，根本解决回调陷阱")])])]),v._v(" "),a("li",[a("p",[v._v("如果执行 CPU 密集型计算，会阻塞其他任务")]),v._v(" "),a("p",[v._v("nodejs 非常不适合于 CPU 密集型任务")])]),v._v(" "),a("li",[a("p",[v._v("单进程无法利用多核")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("使用 cluster 模块")]),v._v(" "),a("ul",[a("li",[v._v("cluster 模块，可以生成多个工作线程来共享同一个 TCP 连接")]),v._v(" "),a("li",[v._v("Cluster 会创建一个 master，然后根据你指定的数量复制出多个 server app（也被称之为工作线程）。它通过 IPC 通道与工作线程之间进行通信，并使用内置的负载均衡来更好地处理线程之间的压力，该负载均衡使用了 Round-robin 算法（也被称之为循环算法）。")]),v._v(" "),a("li",[v._v("当使用 Round-robin 调度策略时，master accepts()所有传入的连接请求，然后将相应的 TCP 请求处理发送给选中的工作线程（该方式仍然通过 IPC 来进行通信）。")])])]),v._v(" "),a("li",[a("p",[v._v("使用 pm2（内置 cluster 模块）进程管理工具可以利用多核")])])])])]),v._v(" "),a("h4",{attrs:{id:"go-的并发机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-的并发机制"}},[v._v("#")]),v._v(" Go 的并发机制")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("并发执行 - goroutines")]),v._v(" "),a("ul",[a("li",[v._v("Go 例程(Goroutines)就是一个和其它 Go 例程在同一地址空间里但却独立运行的函数。")]),v._v(" "),a("li",[v._v("Go 例程不是线程,很像线程，但比线程更轻量。")]),v._v(" "),a("li",[v._v("多个例程可以在系统线程上做多路通信。")]),v._v(" "),a("li",[v._v("当一个 Go 例程阻塞时，所在的线程会阻塞，但其它 Go 例程不受影响。")])])]),v._v(" "),a("li",[a("p",[v._v("同步和消息传输 - channels")]),v._v(" "),a("p",[v._v("通道 channels 是类型化的值，能够被 Go 例程用来做同步或交互信息。")])]),v._v(" "),a("li",[a("p",[v._v("多路并发控制 - select\n这 select 语句很像 switch，但它的判断条件是基于通信，而不是基于值的等量匹配。\n"),a("strong",[v._v("Go 采用的是并发+通信的模式，包括 Erlang 等其他语言都是基于这种 CSP（Communicating Sequential Processes ）模式")])])])]),v._v(" "),a("p",[a("img",{attrs:{src:"/image/golang-scp.png",alt:"golang-scp"}})]),v._v(" "),a("p",[v._v("哪些地鼠是并发工作的？哪些是并行工作的？")]),v._v(" "),a("p",[a("em",[a("strong",[v._v("参考：http://www.vaikan.com/docs/Concurrency-is-not-Parallelism/")])])]),v._v(" "),a("p",[a("strong",[v._v("Go 语言非常的支持并发")])]),v._v(" "),a("ul",[a("li",[v._v("一个程序里产生成千上万个 Go 例程（百万级别）很正常。")]),v._v(" "),a("li",[v._v("堆栈初始很小，但随着需求会增长或收缩。")]),v._v(" "),a("li",[v._v("Go 例程不是不耗资源，但它们很轻量级的。")])]),v._v(" "),a("p",[a("em",[a("strong",[v._v("Go 的这种 CSP 并发机制使得实现并行更加容易")])])]),v._v(" "),a("ul",[a("li",[v._v("并发很强大。")]),v._v(" "),a("li",[v._v("并发不是并行。")]),v._v(" "),a("li",[v._v("并发帮助实现并行。")]),v._v(" "),a("li",[v._v("并发使并行(扩展等)变得容易。")])]),v._v(" "),a("h4",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[v._v("#")]),v._v(" python")]),v._v(" "),a("p",[a("strong",[v._v("python 的 GIL 多线程是伪多线程")])]),v._v(" "),a("p",[a("strong",[v._v("python 对于 CPU 密集型应用的处理性能很差")])]),v._v(" "),a("h2",{attrs:{id:"关于-web-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-web-开发"}},[v._v("#")]),v._v(" 关于 web 开发")]),v._v(" "),a("h3",{attrs:{id:"http-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-模块"}},[v._v("#")]),v._v(" http 模块")]),v._v(" "),a("p",[v._v("可直接启动 http 服务，不需要 nginx 或 apache 等 http 服务器")]),v._v(" "),a("h3",{attrs:{id:"优秀框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优秀框架"}},[v._v("#")]),v._v(" 优秀框架")]),v._v(" "),a("ul",[a("li",[v._v("Gin：用 Go（Golang）编写的 HTTP Web 框架。它具有类似 Martini 的 API，具有更好的性能")]),v._v(" "),a("li",[v._v("Beego：Go 编程语言的开源，高性能 Web 框架")]),v._v(" "),a("li",[v._v("Echo：高性能，极简主义的 Go Web 框架")]),v._v(" "),a("li",[v._v("Buffalo：快速 Web 开发 w/Go")]),v._v(" "),a("li",[v._v("Iris：Go in the Universe 中最快的 Web 框架。MVC 功能齐全。今天拥抱未来")]),v._v(" "),a("li",[v._v("Revel：Go 语言的高生产力，全栈 Web 框架")]),v._v(" "),a("li",[v._v("其他")])]),v._v(" "),a("h2",{attrs:{id:"golang-适合的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-适合的场景"}},[v._v("#")]),v._v(" Golang 适合的场景")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("系统底层编程")])]),v._v(" "),a("li",[a("p",[v._v("高性能服务器程序的开发, 多线程、高并发")])]),v._v(" "),a("li",[a("p",[v._v("除了多线程和底层编程")]),v._v(" "),a("ul",[a("li",[v._v("很多人一提 go 就错误的认为只适合多线程和底层编程，其实是非常错误的")]),v._v(" "),a("li",[v._v("编程并不是为了多线程，对于使用场景，我觉得除了图形化弱外，其他都没问题，而且图形界面应该交给 html,css,js")])])])]),v._v(" "),a("h2",{attrs:{id:"没有最好的语言-只有最适合你开发场景的语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有最好的语言-只有最适合你开发场景的语言"}},[v._v("#")]),v._v(" 没有最好的语言, 只有最适合你开发场景的语言!")]),v._v(" "),a("ul",[a("li",[v._v("c 语言用来学习编程基础和指针数据结构")]),v._v(" "),a("li",[v._v("c++用来写 c 的应用")]),v._v(" "),a("li",[v._v("java 用来写跨平台应用，做网站。")]),v._v(" "),a("li",[v._v("shell，lua，python 均用来当脚本用")]),v._v(" "),a("li",[v._v("node.js 快速做网站，html/css 编出漂亮的网页，js 用来网页动态处理")])]),v._v(" "),a("p",[v._v("说实话当水平到了一定程度就会思考 go 语言能对我现在的项目有什么用，能不能把现在项目语言难处理的用 go 来处理。而不是探讨这个慢那个快，没有意义。")]),v._v(" "),a("h2",{attrs:{id:"golang-错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-错误处理"}},[v._v("#")]),v._v(" golang 错误处理")]),v._v(" "),a("p",[v._v("TODO")]),v._v(" "),a("h2",{attrs:{id:"实现-map-的线程安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-map-的线程安全"}},[v._v("#")]),v._v(" 实现 map 的线程安全")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('    m := helper.Map()\n\twg := sync.WaitGroup{}\n\tfor i := 0; i < 300; i++ {\n\t\twg.Add(1)\n\t\tgo func(n int) {\n\t\t\tk, v := strconv.Itoa(n), strconv.Itoa(n)\n\t\t\tm.Set(k, v)\n\t\t\tlog.Println("k:", k, "v:", v)\n\t\t\twg.Done()\n\t\t}(i)\n\t}\n\twg.Wait()\n\tlog.Println("finish")\n\tfmt.Println("main finish")\n')])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br"),a("span",{staticClass:"line-number"},[v._v("8")]),a("br"),a("span",{staticClass:"line-number"},[v._v("9")]),a("br"),a("span",{staticClass:"line-number"},[v._v("10")]),a("br"),a("span",{staticClass:"line-number"},[v._v("11")]),a("br"),a("span",{staticClass:"line-number"},[v._v("12")]),a("br"),a("span",{staticClass:"line-number"},[v._v("13")]),a("br"),a("span",{staticClass:"line-number"},[v._v("14")]),a("br")])]),a("h2",{attrs:{id:"优秀-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优秀-blog"}},[v._v("#")]),v._v(" 优秀 blog")]),v._v(" "),a("p",[v._v("Stefno 博客: https://www.cnblogs.com/qcrao-2018/\n面向信仰编程: https://draveness.me/")])])}),[],!1,null,null,null);a.default=_.exports}}]);