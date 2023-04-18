(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{458:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"js-里的作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-里的作用域"}},[t._v("#")]),t._v(" js 里的作用域")]),t._v(" "),s("p",[t._v("作用域（scope）就是"),s("strong",[t._v("变量访问规则的有效范围")])]),t._v(" "),s("ul",[s("li",[t._v("全局变量的作用域是全局的")]),t._v(" "),s("li",[s("strong",[t._v("函数作用域")]),t._v("：一个变量在全函数里有效")]),t._v(" "),s("li",[s("strong",[t._v("块作用域")]),t._v("：代码块里有效；{} 限定变量的作用域范围")])]),t._v(" "),s("h3",{attrs:{id:"理解词法作用域和动态作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解词法作用域和动态作用域"}},[t._v("#")]),t._v(" 理解词法作用域和动态作用域")]),t._v(" "),s("p",[t._v("词法作用域也称静态作用域，"),s("strong",[t._v("javascript 采用静态作用域")])]),t._v(" "),s("ul",[s("li",[t._v("静态作用域 —— 函数的作用域基于函数创建的位置。")]),t._v(" "),s("li",[t._v("动态作用域 —— 函数的作用域基于函数的使用位置。")])]),t._v(" "),s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("闭包：能够读取其他函数内部变量的函数。（应用场景：要获取某函数内部的局部变量）")]),t._v(" "),s("p",[t._v("闭包的优点：")]),t._v(" "),s("ol",[s("li",[t._v("能够读取函数内部的变量")]),t._v(" "),s("li",[t._v("让这些变量一直存在于内存中，不会在调用结束后，被垃圾回收机制回收\n闭包的缺点：正所谓物极必反，由于闭包会使函数中的变量保存在内存中，内存消耗很大，所以不能滥用闭包，\n解决办法是，退出函数之前，将不使用的局部变量删除。\njavascript 删除变量：你可以为其赋值为空值，比如 "),s("code",[t._v("undefined")]),t._v("或"),s("code",[t._v("null")]),t._v(" 就相当于删除了（标记清除）")])]),t._v(" "),s("blockquote",[s("p",[t._v("闭包其实就是作用域范围，然后 js 的作用域是函数作用域，所以闭包也是函数，\n本质是 父子函数的引用关系：父函数包含子函数，子函数因为函数作用域又引用父函数，这是个死结；\n由于相互引用，会引起内存泄漏，不用的时候把引用设为 null，内存释放，死结解开")])]),t._v(" "),s("p",[t._v("应用场景：")]),t._v(" "),s("ol",[s("li",[t._v("匿名自执行函数")]),t._v(" "),s("li",[t._v("结果缓存")]),t._v(" "),s("li",[t._v("封装局部变量")])]),t._v(" "),s("h2",{attrs:{id:"垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),s("p",[t._v("垃圾回收其实就是：GC 机制")]),t._v(" "),s("p",[t._v("javascript 垃圾回收有两种方法："),s("strong",[t._v("标记清除、引用计数")]),t._v("。引用计数不太常用，标记清除较为常用。")]),t._v(" "),s("p",[t._v("标记清除: 其实就是图的拓扑排序，查找"),s("strong",[t._v("连通图")])]),t._v(" "),s("p",[t._v("引用计数有个最大的问题："),s("strong",[t._v("循环引用")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj1 引用 obj2")]),t._v("\n  obj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj2 引用 obj1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("解决循环引用的问题，最好是在不使用它们的时候手工将它们设为空。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("更多 GC 相关：")]),t._v(" "),s("ul",[s("li",[t._v("经典的 GC 算法有三种： 引用计数(reference counting)、 标记-清扫(mark-sweep)、 复制收集(CopyandCollection)。")]),t._v(" "),s("li",[t._v("Java VM 采用的"),s("code",[t._v("Mark Sweep")]),t._v("算法")]),t._v(" "),s("li",[t._v("Golang 的 GC 算法主要是基于"),s("strong",[t._v("标记-清扫(markandsweep)算法")]),t._v("，并在此基础上做了改进=>"),s("strong",[t._v("三色标记法")])])]),t._v(" "),s("h3",{attrs:{id:"标记-清扫-mark-and-sweep-算法存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记-清扫-mark-and-sweep-算法存在的问题"}},[t._v("#")]),t._v(" 标记-清扫(Mark And Sweep)算法存在的问题")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("STW，stop the world")]),t._v("；让程序暂停，程序出现卡顿。")]),t._v(" "),s("li",[t._v("标记需要扫描整个 heap")]),t._v(" "),s("li",[t._v("清除数据会产生 heap 碎片")])]),t._v(" "),s("p",[t._v("这里面最重要的问题就是："),s("strong",[t._v("mark-and-sweep 算法会暂停整个程序")])]),t._v(" "),s("p",[t._v("如何优化？")]),t._v(" "),s("p",[t._v("三色标记法：通过白色、灰色、黑色三色标记，最后只剩黑色和白色，清除白色；使"),s("strong",[t._v("清除操作和用户逻辑可以并发")])]),t._v(" "),s("h2",{attrs:{id:"内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),s("h3",{attrs:{id:"哪些情况会引起内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况会引起内存泄漏"}},[t._v("#")]),t._v(" 哪些情况会引起内存泄漏？")]),t._v(" "),s("p",[t._v("有了 GC 同样会出现内存泄露问题！比如如下场景")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("全局对象")]),t._v(" "),s("ul",[s("li",[t._v("在 JavaScript 文件头部加上 'use strict'")]),t._v(" "),s("li",[t._v("静态变量的"),s("strong",[t._v("生命周期和应用程序一致")]),t._v("，所有的对象 Object 也不能被释放，因为他们也将一直被 Vector 等应用着。")])])]),t._v(" "),s("li",[s("strong",[t._v("各种 IO 连接")]),t._v("，数据库连接，网络连接，IO 连接等"),s("strong",[t._v("没有显示调用 close 关闭")]),t._v("，不被 GC 回收导致内存泄露。")]),t._v(" "),s("li",[t._v("被"),s("strong",[t._v("遗忘的计时器或回调函数")]),t._v(" "),s("ul",[s("li",[t._v("计时器和计时器内部引用的资源都不会被释放")])])]),t._v(" "),s("li",[s("strong",[t._v("监听器")]),t._v("的使用，在释放对象的同时没有相应删除监听器的")]),t._v(" "),s("li",[s("strong",[t._v("闭包里的局部变量")])]),t._v(" "),s("li",[s("strong",[t._v("占用 CPU 过高")]),t._v("，造成单线程阻塞，堆积内存过高")])]),t._v(" "),s("p",[t._v("避免内存泄漏的一些方式：")]),t._v(" "),s("ul",[s("li",[t._v("减少不必要的全局变量，或者生命周期较长的对象，及时对无用的数据进行垃圾回收")]),t._v(" "),s("li",[t._v("注意程序逻辑，避免“死循环”之类的")]),t._v(" "),s("li",[t._v("避免创建过多的对象")])]),t._v(" "),s("p",[t._v("总而言之需要遵循一条原则："),s("strong",[t._v("不用了的东西要及时归还")])]),t._v(" "),s("h3",{attrs:{id:"如何定位内存溢出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何定位内存溢出"}},[t._v("#")]),t._v(" 如何定位内存溢出")]),t._v(" "),s("p",[t._v("定位内存泄漏，通常有两种情况")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("正常使用就可以重现的，在测试环境复现解决")]),t._v("; 可以使用--inspect 和 chrome://inspect 进行复现")]),t._v(" "),s("li",[s("strong",[t._v("偶然发生的内存泄漏")]),t._v("，一定与某些特殊输入有关。如果不能通过代码日志定位到这个特殊输入，需要在"),s("strong",[t._v("生产环境打印内存快照")])])]),t._v(" "),s("ul",[s("li",[t._v("快照工具推荐使用"),s("a",{attrs:{href:"https://github.com/bnoordhuis/node-heapdump",target:"_blank",rel:"noopener noreferrer"}},[t._v("heapdump"),s("OutboundLink")],1),t._v("用来保存内存快照，")]),t._v(" "),s("li",[t._v("使用"),s("a",{attrs:{href:"https://github.com/Jam3/devtool",target:"_blank",rel:"noopener noreferrer"}},[t._v("devtool"),s("OutboundLink")],1),t._v("来查看内存快照\n在 nodejs 中如何解决超出最大的调用栈错误")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25736931",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何分析 Node.js 中的内存泄漏"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("平时工作中怎么调优的，怎么解决爆栈")]),t._v(" "),s("ul",[s("li",[t._v("设置程序运行最大内存")]),t._v(" "),s("li",[t._v("做好监控，重启，发现内存泄漏后使用--inspect 和 chrome://inspect 进行定位，无法定位，打印内存快照分析，heapdump，devtool 等工具")])]),t._v(" "),s("h3",{attrs:{id:"内存溢出解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出解决方法"}},[t._v("#")]),t._v(" 内存溢出解决方法")]),t._v(" "),s("ol",[s("li",[t._v("限制最高内存使用，"),s("code",[t._v("--max-old-space-size")]),t._v("或"),s("code",[t._v("--max-new-space-size")]),t._v("参数来调整内存大小的使用限制；node --max-old-space-size=8192，意思是将内存调整到 8G；node 的堆内存上限大概在 1.7G 这块。")]),t._v(" "),s("li",[t._v("内存监控，当内存占用达到一定比例，采用"),s("code",[t._v("优雅退出")]),t._v("的方案重启进程")])]),t._v(" "),s("h2",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("ul",[s("li",[t._v("this 指的是"),s("strong",[t._v("函数运行时所在的环境")])]),t._v(" "),s("li",[t._v("this 指的是对象本身，而不是构造函数")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"apply-call-和-bind-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-call-和-bind-有什么区别"}},[t._v("#")]),t._v(" apply,call 和 bind 有什么区别")]),t._v(" "),s("p",[t._v("三者都是用来改变函数中 this 的指向")]),t._v(" "),s("ul",[s("li",[t._v("apply 和 call 方法调用之后会立即执行，而 bind 方法调用之后会返回一个新的函数，它并不会立即执行，需要我们手动执行。")]),t._v(" "),s("li",[t._v("apply 传参是数组，call,bind 传参逗号隔开")])])])}),[],!1,null,null,null);s.default=r.exports}}]);