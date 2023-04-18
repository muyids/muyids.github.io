(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{449:function(v,_,a){"use strict";a.r(_);var l=a(14),r=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("strong",[v._v("美团一面：")])]),v._v(" "),_("ul",[_("li",[v._v("redis 集群，为什么是 16384？哨兵模式，选举过程，会有脑裂问题么？raft 算法，优缺点")]),v._v(" "),_("li",[v._v("JVM 类加载器，自定义类加载器，双亲委派机制，优缺点，tomcat 类加载机制")]),v._v(" "),_("li",[v._v("Tomcat 热部署，热加载了解吗？怎么做到的？")]),v._v(" "),_("li",[v._v("cms 收集器过程，g1 收集器原理，怎么实现可预测停顿的？region 的大小，结构")]),v._v(" "),_("li",[v._v("内存溢出，内存泄漏遇到过吗？什么场景产生的？怎么解决的？")]),v._v(" "),_("li",[v._v("锁升级过程，轻量锁可以变成偏向锁么？偏向锁可以变成无锁么？自旋锁，对象头结构，锁状态变化过程")]),v._v(" "),_("li",[v._v("kafka 重平衡，重启服务怎么保证 kafka 不发生重平衡？有什么方案？")]),v._v(" "),_("li",[v._v("怎么理解分布式和微服务？为什么要拆分服务？会产生什么问题？怎么解决这些问题？")]),v._v(" "),_("li",[v._v("你们用的什么消息中间件？kafka，为什么用 kafka？高吞吐量，怎么保证高吞吐量的？设计模型，零拷贝")]),v._v(" "),_("li",[v._v("算法 1：给定一个长度为 N 的整形数组 arr，其中有 N 个互不相等的自然数 1-N，请实现 arr 的排序，但是不要把下标 0∼N−1 位置上的数通过直接赋值的方式替换成 1∼N")]),v._v(" "),_("li",[v._v("算法 2：判断一个树是否是平衡二叉树")])]),v._v(" "),_("p",[_("strong",[v._v("美团二面：")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Innodb 的结构了解么？磁盘页和缓存区是怎么配合，以及查找的？缓冲区和磁盘数据不一致怎么办？mysql 突然宕机了会出现数据丢失么？")])]),v._v(" "),_("li",[_("p",[v._v("redis 字符串实现，sds 和 c 区别，空间预分配")])]),v._v(" "),_("li",[_("p",[v._v("redis 有序集合怎么实现的？跳表是什么？往跳表添加一个元素的过程，添加和获取元素，获取分数的时间复杂度，为什么不用红黑树？红黑树有什么特点？左旋右旋操作")])]),v._v(" "),_("li",[_("p",[v._v("io 模型了解么？多路复用，selete，poll，epoll，epoll 的结构，怎么注册事件，et 和 lt 模式")])]),v._v(" "),_("li",[_("p",[v._v("怎么理解高可用？如何保证高可用？有什么弊端，熔断机制，怎么实现？")])]),v._v(" "),_("li",[_("p",[v._v("对于高并发怎么看，怎么算高并发，你们项目有吗？如果有会产生什么问题，怎么解决")])]),v._v(" "),_("li",[_("p",[v._v("项目介绍")])]),v._v(" "),_("li",[_("p",[v._v("算法：给定一个二叉树，请计算节点值之和最大的路径的节点值之和是多少，这个路径的开始节点和结束节点可以是二叉树中的任意节点\n"),_("strong",[v._v("美团三面：")])])]),v._v(" "),_("li",[_("p",[v._v("项目介绍")])]),v._v(" "),_("li",[_("p",[v._v("线上有遇到大流量的情况么，产生了什么问题，为什么数据库 2000qps 就撑不住了，有想过原因么，你们当时怎么处理的？")])]),v._v(" "),_("li",[_("p",[v._v("限流怎么做，如果让你设计一个限流系统，怎么实现？")])]),v._v(" "),_("li",[_("p",[v._v("算法：求一个 float 数的立方根，牛顿迭代法")])]),v._v(" "),_("li",[_("p",[v._v("什么时候能入职，你对岗位的期望是什么？")])]),v._v(" "),_("li",[_("p",[v._v("你还在面试其他公司么，目前是一个什么流程？")])])]),v._v(" "),_("hr"),v._v(" "),_("h1",{attrs:{id:"jvm-类加载机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-类加载机制"}},[v._v("#")]),v._v(" JVM 类加载机制")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("JVM 的类加载机制是 Java 语言的重要特性之一，它是 JVM 管理内存和类型安全的基础。")])]),v._v(" "),_("li",[_("p",[v._v("类加载机制的主要目的是将字节码文件加载到内存中，并将其转换为 JVM 可以执行的形式。")])]),v._v(" "),_("li",[_("p",[v._v("JVM 的类加载机制包含以下三个阶段：")]),v._v(" "),_("ol",[_("li",[v._v("加载：读取字节码文件，并将其转换为二进制流。")]),v._v(" "),_("li",[v._v("链接：将二进制流转换为可以执行的形式，并为类中的符号引用分配内存。")]),v._v(" "),_("li",[v._v("初始化：执行类的初始化工作，如为静态变量分配内存并赋默认值。\n类加载机制的工作过程是 JVM 自动完成的，开发人员不需要关心具体的实现细节。但是，了解类加载机制的工作原理对于解决类加载相关的问题是很有帮助的。")])])])]),v._v(" "),_("h1",{attrs:{id:"jvm-的类加载顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-的类加载顺序"}},[v._v("#")]),v._v(" JVM 的类加载顺序")]),v._v(" "),_("p",[v._v("JVM 的类加载顺序由类加载器决定。类加载器是一个 Java 对象，它负责将字节码文件加载到内存中，并将其转换为可以执行的形式。")]),v._v(" "),_("p",[v._v("Java 虚拟机提供了三种类型的类加载器：")]),v._v(" "),_("ol",[_("li",[v._v("启动类加载器（Bootstrap ClassLoader）：是最顶层的类加载器，负责加载 Java 运行时环境的核心类库，如 rt.jar、resources.jar 和 charsets.jar 等。")]),v._v(" "),_("li",[v._v("扩展类加载器（Extension ClassLoader）：是第二层的类加载器，负责加载 Java 的扩展类库，如 javax.swing.jar 和 sunjce_provider.jar 等。")]),v._v(" "),_("li",[v._v("应用程序类加载器（App ClassLoader）：是第三层的类加载器，负责加载用户自定义的类库，即 Java 应用程序的类路径（classpath）上的类库。")])]),v._v(" "),_("p",[v._v("在 Java 虚拟机启动时，会先初始化启动类加载器，然后加载核心类库；接着，初始化扩展类加载器，并加载扩展类库；最后，初始化应用程序类加载器，并加载用户自定义的类库。")]),v._v(" "),_("p",[v._v("这个顺序是 Java 虚拟机确保核心类库始终有优先加载的机制。")]),v._v(" "),_("h1",{attrs:{id:"垃圾回收算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[v._v("#")]),v._v(" 垃圾回收算法")]),v._v(" "),_("p",[v._v("常见的垃圾回收算法主要有两种：")]),v._v(" "),_("ol",[_("li",[v._v("标记-清除算法（Mark-Sweep Algorithm）：它的基本思想是先标记出所有需要回收的内存块，然后清除这些标记的内存块，释放空间。")]),v._v(" "),_("li",[v._v("复制算法（Copying Algorithm）：它的基本思想是将内存划分为两个相等的区域\n新生代，老生代")])]),v._v(" "),_("p",[v._v("三色标记法")]),v._v(" "),_("h1",{attrs:{id:"jvm-垃圾收集器有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-垃圾收集器有哪些"}},[v._v("#")]),v._v(" JVM 垃圾收集器有哪些")]),v._v(" "),_("p",[v._v("JVM 的垃圾收集器主要有以下几种：")]),v._v(" "),_("ol",[_("li",[v._v("Serial GC：是 JVM 中最简单的垃圾收集器，它使用单线程进行垃圾回收，收集时会暂停所有应用程序的工作。")]),v._v(" "),_("li",[v._v("Parallel GC：与 Serial GC 相比，Parallel GC 使用多线程进行垃圾回收，能够大大减少收集时间。")]),v._v(" "),_("li",[v._v("CMS GC：CMS GC（Concurrent Mark Sweep）是 JVM 中一种并发的垃圾收集器，它能够在应用程序运行的过程中进行垃圾回收，减少收集时对应用程序的影响。")]),v._v(" "),_("li",[v._v("G1 GC：G1 GC（Garbage-First GC）是 JVM 中的一种并行垃圾收集器，它能够更高效地利用内存空间，并且更好地控制收集时的停顿时间。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);