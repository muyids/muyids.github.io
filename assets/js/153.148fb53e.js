(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{426:function(v,_,i){"use strict";i.r(_);var l=i(14),o=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("strong",[v._v("atomic")])]),v._v(" "),_("p",[v._v("原理通过 unsafe 类调用 native 的 cas")]),v._v(" "),_("ul",[_("li",[v._v("AtomicInteger")]),v._v(" "),_("li",[v._v("AtomicDouble")]),v._v(" "),_("li",[v._v("AtomicLong")]),v._v(" "),_("li",[v._v("AtomicReference")]),v._v(" "),_("li",[v._v("LongAcc")])]),v._v(" "),_("p",[_("strong",[v._v("Lock")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("AQS")]),v._v(" "),_("p",[v._v("juc 的基石")])]),v._v(" "),_("li",[_("p",[v._v("Lock")])]),v._v(" "),_("li",[_("p",[v._v("Condition")])]),v._v(" "),_("li",[_("p",[v._v("LockSupport")]),v._v(" "),_("p",[v._v("Park 和 unpark")])]),v._v(" "),_("li",[_("p",[v._v("ReadWriteLock")]),v._v(" "),_("p",[v._v("读写锁；")])]),v._v(" "),_("li",[_("p",[v._v("ReentrantLock")]),v._v(" "),_("p",[v._v("可重入锁")])])]),v._v(" "),_("p",[_("strong",[v._v("工具类")])]),v._v(" "),_("p",[v._v("相当于 bluebird 异步任务的编排")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("CountDownLatch")])]),v._v(" "),_("li",[_("p",[v._v("CyclicBarrier")])]),v._v(" "),_("li",[_("p",[v._v("Semaphore")])]),v._v(" "),_("li",[_("p",[v._v("Callable --\x3e promisify")]),v._v(" "),_("p",[v._v("相当于 nodejs 里的 promise")])]),v._v(" "),_("li",[_("p",[v._v("FutureTask")]),v._v(" "),_("p",[v._v("可以获得 Callable 的异步执行结果")])])]),v._v(" "),_("p",[_("strong",[v._v("集合")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("ConcurrentHashMap")]),v._v(" "),_("p",[v._v("1.7 和 1.8 的加锁方式")])]),v._v(" "),_("li",[_("p",[v._v("CopyOnWriteArrayList")]),v._v(" "),_("p",[v._v("写的时候先 copy 一份出来")])]),v._v(" "),_("li",[_("p",[v._v("BlockingQueue")])]),v._v(" "),_("li",[_("p",[v._v("BlockingDeque")]),v._v(" "),_("p",[v._v("线程池+阻塞队列")])])]),v._v(" "),_("p",[_("strong",[v._v("线程池")])]),v._v(" "),_("ul",[_("li",[v._v("Executors")])]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("实际场景："),_("strong",[v._v("运动会")])]),v._v(" "),_("ul",[_("li",[v._v("名单：CopyOnWriteArrayList")]),v._v(" "),_("li",[v._v("准备：ConcurrentHashMap <String,Model>")]),v._v(" "),_("li",[v._v("跑道：Semaphore")]),v._v(" "),_("li",[v._v("发令员：CountDownLatch")]),v._v(" "),_("li",[v._v("冲线：AtomicInteger")]),v._v(" "),_("li",[v._v("领奖：CyclicBarrier")])]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("应用举例：")]),v._v(" "),_("ul",[_("li",[v._v("ConcurrentSkipListMap 用来存一致性 hash 的环；")]),v._v(" "),_("li",[v._v("Countdownlatch 一个服务需要多个模块（线程）时，都启动才宣布服务启动；")]),v._v(" "),_("li",[v._v("atomicinteger 做在线数量统计；")]),v._v(" "),_("li",[v._v("ScheduledThreadPoolExecutor 做定时任务；")]),v._v(" "),_("li",[v._v("ReentrantLock 做可中断锁，避免死锁；")]),v._v(" "),_("li",[v._v("交换器 Exchanger 很少用，只适用于两个线程在同步点交换数据的场景")])])])}),[],!1,null,null,null);_.default=o.exports}}]);