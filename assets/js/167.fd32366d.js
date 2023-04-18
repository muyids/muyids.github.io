(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{441:function(v,_,r){"use strict";r.r(_);var s=r(14),t=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h4",{attrs:{id:"内存模型划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存模型划分"}},[v._v("#")]),v._v(" 内存模型划分")]),v._v(" "),_("p",[v._v("按照是否线程私有划分为 线程私有区域和线程公有区域")]),v._v(" "),_("p",[v._v("线程私有：")]),v._v(" "),_("p",[v._v("1）程序计数器：记录字节码的行号")]),v._v(" "),_("p",[v._v("2）虚拟机栈：栈帧，stackoverflow")]),v._v(" "),_("p",[v._v("3）本地方法栈：C++的 native 方法")]),v._v(" "),_("p",[v._v("线程共有：")]),v._v(" "),_("p",[v._v("1）堆区：对象信息")]),v._v(" "),_("p",[v._v("2）元空间：类加载元数据，静态变量，常量")]),v._v(" "),_("p",[v._v("3）直接内存：非 jvm 内存模型的堆外内存，NIO 会操作，效率高")]),v._v(" "),_("p",[v._v("![2021-11-08 pm3.35.10](https://muyids.oss-cn-beijing.aliyuncs.com/2021-11-08 pm3.35.10-6359951-20211109085704005.png)")]),v._v(" "),_("h4",{attrs:{id:"堆区的划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆区的划分"}},[v._v("#")]),v._v(" 堆区的划分")]),v._v(" "),_("p",[v._v("堆区又分为新生代、老年代；（1：2）")]),v._v(" "),_("p",[v._v("新生代分为 eden 区、survivor 区 s1、s2 （8：1：1）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/2021-09-22%20pm4.54.56.png",alt:"2021-09-22 pm4.49.41"}})]),v._v(" "),_("h4",{attrs:{id:"jvm-内存分配与回收策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm-内存分配与回收策略"}},[v._v("#")]),v._v(" JVM 内存分配与回收策略")]),v._v(" "),_("p",[_("strong",[v._v("1、对象优先在 eden 区分配")])]),v._v(" "),_("p",[v._v("eden 没有足够空间时，发起 minorGC")]),v._v(" "),_("p",[v._v("minorGC / Young GC: 发生在新生代的垃圾收集动作；非常频繁，回收速度快")]),v._v(" "),_("p",[v._v("fullGC / major GC : 一般会回收 老年代，年轻代，方法区（元空间）的数据")]),v._v(" "),_("p",[v._v("major GC 比 minor GC 速度慢十倍以上")]),v._v(" "),_("p",[_("strong",[v._v("2、大对象直接进入老年代")])]),v._v(" "),_("p",[v._v("为了避免大对象分配内存时的复制操作降低效率")]),v._v(" "),_("p",[_("strong",[v._v("3、长期存活的对象将进入老年代")])]),v._v(" "),_("p",[v._v("对象在 survivor 区每熬过一次 minorGC，age+1;")]),v._v(" "),_("p",[v._v("当年龄增加到 age=15，进入老年代")]),v._v(" "),_("p",[_("strong",[v._v("4、minorGC 后存活的对象 survivor 区放不下")]),v._v("，部分进入老年代")]),v._v(" "),_("p",[_("strong",[v._v("5、Eden 区域 survivor 区默认比例是 8：1：1")])]),v._v(" "),_("p",[v._v("eden 区满了后，触发 minor gc，绝大部分的对象都会直接被回收；")]),v._v(" "),_("p",[v._v("因为大部分对象都是朝生夕死的，所以 jvm 设置为 8：1：1 是很合理的，让 eden 区尽可能大，survivor 区够用即可")]),v._v(" "),_("p",[_("strong",[v._v("6、对象动态年龄判断")])]),v._v(" "),_("p",[v._v("当 < 某年龄的对象 加起来比例超过 50%，就会把超过这个年龄的对象"),_("strong",[v._v("提前放入老年代")])]),v._v(" "),_("p",[v._v("目的是，让可能长期存活的对象，尽早进入老年代；")]),v._v(" "),_("p",[v._v("对象动态年龄判断机制，一般是在 minor gc 后触发的")]),v._v(" "),_("p",[_("strong",[v._v("7、老年代空间分配担保机制")])])])}),[],!1,null,null,null);_.default=t.exports}}]);