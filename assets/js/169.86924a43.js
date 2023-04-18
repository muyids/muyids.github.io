(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{443:function(v,_,p){"use strict";p.r(_);var s=p(14),t=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("回收算法是内存回收的方法论，")]),v._v(" "),_("p",[v._v("垃圾收集器是内存回收的具体实现")]),v._v(" "),_("h4",{attrs:{id:"作用于不同分代的-7-种收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用于不同分代的-7-种收集器"}},[v._v("#")]),v._v(" 作用于不同分代的 7 种收集器")]),v._v(" "),_("p",[v._v("![2021-11-09 pm12.54.19](https://muyids.oss-cn-beijing.aliyuncs.com/2021-11-09 pm12.54.19.png)")]),v._v(" "),_("p",[v._v("存在连线，说明可以搭配使用")]),v._v(" "),_("p",[_("strong",[v._v("serial 收集器")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("单线程收集器")])]),v._v(" "),_("li",[_("p",[v._v("stop the world")])]),v._v(" "),_("li",[_("p",[v._v("新生代复制算法，老年代 serial old 版本\n"),_("strong",[v._v("parNew 收集器")])])])]),v._v(" "),_("p",[v._v("serial 收集器的多线程版本")]),v._v(" "),_("p",[_("strong",[v._v("Parallel Scavenge 收集器")])]),v._v(" "),_("p",[v._v("server 模式下的默认收集器")]),v._v(" "),_("p",[v._v("新生代复制算法，老年代采用标记整理算法")]),v._v(" "),_("p",[v._v("特别之处：")]),v._v(" "),_("p",[_("strong",[v._v("吞吐量")]),v._v("： = 运行用户代码时间 / (运行用户代码时间 + 垃圾回收时间)")]),v._v(" "),_("p",[v._v("高效率的利用 cpu;")]),v._v(" "),_("p",[v._v("Parallel old 是其老年代版本")]),v._v(" "),_("h2",{attrs:{id:"cms-收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器"}},[v._v("#")]),v._v(" "),_("strong",[v._v("CMS 收集器")])]),v._v(" "),_("p",[v._v("CMS ( concurrent mark sweep)")]),v._v(" "),_("p",[_("strong",[v._v("以获取最短回收停顿时间为目标")])]),v._v(" "),_("p",[v._v("HotSpot 虚拟机 第一款真正意义上的"),_("strong",[v._v("并发收集器")])]),v._v(" "),_("p",[v._v("从名字 Mark sweep 可以看出，cms 是一款标记清除算法实现的垃圾收集器")]),v._v(" "),_("p",[_("strong",[v._v("运作过程")])]),v._v(" "),_("p",[v._v("1、初始标记")]),v._v(" "),_("p",[v._v("2、并发标记")]),v._v(" "),_("p",[v._v("3、重新标记")]),v._v(" "),_("p",[v._v("4、并发清理")]),v._v(" "),_("p",[v._v("优点：并发收集、低停顿")]),v._v(" "),_("p",[v._v("缺点：")]),v._v(" "),_("p",[v._v("1、cpu 资源敏感（并发）")]),v._v(" "),_("p",[v._v("2、无法处理浮动垃圾")]),v._v(" "),_("p",[v._v("3、标记-清除 会有大量内存碎片")]),v._v(" "),_("h2",{attrs:{id:"g1-收集器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#g1-收集器"}},[v._v("#")]),v._v(" G1 收集器")]),v._v(" "),_("p",[v._v("G1 (Garbage-First)")]),v._v(" "),_("p",[v._v("一款面向服务器的垃圾收集器")]),v._v(" "),_("p",[v._v("主要针对")]),v._v(" "),_("ul",[_("li",[v._v("配置多核处理器和大容量内存的机器")]),v._v(" "),_("li",[v._v("以及高概率满足 GC 停顿时间要求的同时，还具备高吞吐量性能特征\n"),_("strong",[v._v("基本特性")])])]),v._v(" "),_("p",[v._v("1、G1 将堆划分为 2048 个大小相等的 region")]),v._v(" "),_("p",[v._v("2、保留了年轻代和老年代的概念，但不再是物理隔离，而是逻辑上的集合")]),v._v(" "),_("p",[v._v("3、region 的功能区域会动态变化")]),v._v(" "),_("p",[v._v("4、默认年轻代占比 5%")]),v._v(" "),_("p",[_("strong",[v._v("G1 对大对象的处理")])]),v._v(" "),_("p",[v._v("1、专门分配大对象的 region 叫 Humongous")]),v._v(" "),_("p",[v._v("2、大对象判断规则：一个对象超过了一个 region 大小的 50%")]),v._v(" "),_("p",[_("strong",[v._v("收集过程")])]),v._v(" "),_("p",[v._v("1、初始标记（STW）: 暂停所有其他线程，标记 GC Roots 直接引用的对象")]),v._v(" "),_("p",[v._v("2、并发标记：用一个闭包结构去记录可达对象")]),v._v(" "),_("p",[v._v("3、最终标记（STW）: 修正并发标记期间因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录")]),v._v(" "),_("p",[v._v("4、筛选回收：根据用户希望的 GC 停顿时间制定回收计划")]),v._v(" "),_("h3",{attrs:{id:"与-cms-的对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与-cms-的对比"}},[v._v("#")]),v._v(" 与 CMS 的对比")]),v._v(" "),_("p",[v._v("1、region 的设计思想")]),v._v(" "),_("p",[v._v("2、G1 不会产生过多的空间碎片")]),v._v(" "),_("p",[v._v("3、stop the world 更可控，在停顿时间上添加了预测机制，用户可以指定期望停顿时间")])])}),[],!1,null,null,null);_.default=t.exports}}]);