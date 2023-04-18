(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{675:function(_,v,r){"use strict";r.r(v);var e=r(14),t=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("ZooKeeper 通过"),v("strong",[_._v("Znode 的节点类型+监听机制")]),_._v("可以在分布式场景中实现很多应用，下面我们来做一些探讨")]),_._v(" "),v("h4",{attrs:{id:"大纲"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大纲"}},[_._v("#")]),_._v(" 大纲")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("数据发布/订阅")])]),_._v(" "),v("li",[v("p",[_._v("负载均衡")])]),_._v(" "),v("li",[v("p",[_._v("命名服务")]),_._v(" "),v("ul",[v("li",[_._v("服务发现")]),_._v(" "),v("li",[_._v("分布式序号生成器")])])]),_._v(" "),v("li",[v("p",[_._v("分布式协调/通知")])]),_._v(" "),v("li",[v("p",[_._v("集群管理")])]),_._v(" "),v("li",[v("p",[_._v("集群选主")])]),_._v(" "),v("li",[v("p",[_._v("分布式锁")])]),_._v(" "),v("li",[v("p",[_._v("分布式 id 生成器")])]),_._v(" "),v("li",[v("p",[_._v("分布式队列")])]),_._v(" "),v("li",[v("p",[_._v("分布式栅栏")])])]),_._v(" "),v("hr"),_._v(" "),v("h4",{attrs:{id:"数据发布-订阅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据发布-订阅"}},[_._v("#")]),_._v(" 数据发布/订阅")]),_._v(" "),v("p",[_._v("常用在集群中"),v("strong",[_._v("动态获取配置信息")]),_._v("的场景")]),_._v(" "),v("p",[v("strong",[_._v("工作原理")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("配置信息写到 znode 上")]),_._v(" "),v("li",[_._v("客户端初始化时，注册数据变更的 watcher")]),_._v(" "),v("li",[_._v("变更配置时只需要对 znode 进行 set 操作，变更通知会发送到客户端，客户端重新获取配置")])]),_._v(" "),v("h4",{attrs:{id:"负载均衡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[_._v("#")]),_._v(" "),v("strong",[_._v("负载均衡")])]),_._v(" "),v("p",[v("strong",[_._v("工作原理")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("建立 servers 节点，并监听 servers 子节点状态")]),_._v(" "),v("li",[_._v("服务启动时，在 servers 下注册临时子节点，并存入服务器相关信息")]),_._v(" "),v("li",[_._v("请求过来时，从 ZooKeeper 服务器中获取服务列表，根据"),v("strong",[_._v("自定义的负载均衡算法")]),_._v("，选出一个服务器来处理请求")])]),_._v(" "),v("h4",{attrs:{id:"命名服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名服务"}},[_._v("#")]),_._v(" 命名服务")]),_._v(" "),v("ul",[v("li",[_._v("服务发现")]),_._v(" "),v("li",[_._v("分布式序号生成器\n"),v("ul",[v("li",[_._v("顺序节点自增 id")])])])]),_._v(" "),v("h4",{attrs:{id:"分布式协调-通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式协调-通知"}},[_._v("#")]),_._v(" 分布式协调/通知")]),_._v(" "),v("p",[_._v("分布式环境中，"),v("strong",[_._v("不同机器之间需要检测彼此是否正常运行")])]),_._v(" "),v("p",[_._v("一种典型的分布式系统机器间的通信方式是"),v("strong",[_._v("心跳")])]),_._v(" "),v("p",[v("strong",[_._v("工作原理")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("不同机器在指定节点下建立"),v("strong",[_._v("临时节点")])])]),_._v(" "),v("li",[v("p",[_._v("通过判断对应的临时节点是否存在来判断机器是否存活\n"),v("strong",[_._v("优势：")])])]),_._v(" "),v("li",[v("p",[_._v("大大减少了系统的耦合")])])]),_._v(" "),v("h4",{attrs:{id:"集群管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[_._v("#")]),_._v(" 集群管理")]),_._v(" "),v("p",[_._v("主要包括两方面：")]),_._v(" "),v("ul",[v("li",[_._v("集群监控：获取集群中机器的状态")]),_._v(" "),v("li",[_._v("集群控制：机器上下线")])]),_._v(" "),v("h4",{attrs:{id:"集群选主"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群选主"}},[_._v("#")]),_._v(" 集群选主")]),_._v(" "),v("p",[_._v("如何基于 zk 实现集群选主？")]),_._v(" "),v("p",[_._v("集群选主涉及到"),v("strong",[_._v("两个核心问题")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("谁来做 leader")]),_._v(" "),v("li",[_._v("leader 挂了怎么被 follower 感知到\n"),v("strong",[_._v("leader 竞争")])])]),_._v(" "),v("p",[_._v("可以看做是多线程的"),v("strong",[_._v("互斥锁抢占")]),_._v("，我们可以定义一个节点"),v("code",[_._v("/leader-info")]),_._v("，所有节点抢占创建，创建成功了就当选为主节点。")]),_._v(" "),v("p",[v("strong",[_._v("宕机通知")])]),_._v(" "),v("p",[_._v("leader 挂掉了如何通知 follower？可以借助 watcher 机制，follower 节点添加 watcher 侦听节点"),v("code",[_._v("/leader-info")]),_._v("的删除事件；宕机时，如何做到删除"),v("code",[_._v("/leader-info")]),_._v("节点呢？我们可以选择临时节点，因为临时节点跟 session 绑定，宕机时，session 失效，跟它绑定的临时节点就会被删除，利用这个特性可以检测节点是否还在存活状态")]),_._v(" "),v("p",[v("strong",[_._v("工作原理")]),_._v("：")]),_._v(" "),v("ol",[v("li",[_._v("集群中所有机器将自己置为 looking 状态，准备选举")]),_._v(" "),v("li",[_._v("所有 looking 状态机器竞争创建"),v("strong",[_._v("临时节点/leader-info")])]),_._v(" "),v("li",[_._v("创建成功的将自己置为 leader，同时将自己的信息写入到节点/leader-info")]),_._v(" "),v("li",[_._v("创建失败的将自己置为 follower，follower 获取/leader-info 节点数据，同时设置一个 watcher，监听此节点的删除事件\n"),v("blockquote",[v("p",[_._v("注意：上述第 4 步中，follower 设置 watcher 可能出现异常，因为尝试创建节点/leader-info 和监听不是原子的，leader 注册成功后可能立即挂掉，所以，如果出现设置 watcher 异常，follower 需要将自己状态修改为 looking 并重新发起新一轮选举")])])])]),_._v(" "),v("p",[_._v("另外，还有一个需要注意的点，leader 的节点可不可以设置为临时顺序节点呢？类似于分布式锁那样，这样每次唤醒一个节点就可以了，性能不是更好？")]),_._v(" "),v("p",[_._v("其实并不是，当 leader 挂掉的时候，必须所有 follower 都能感知到 leader 的变更，来参与 leader 变更的逻辑。")]),_._v(" "),v("h4",{attrs:{id:"分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[_._v("#")]),_._v(" 分布式锁")]),_._v(" "),v("p",[_._v("如何基于 zookeeper 实现分布式锁")]),_._v(" "),v("p",[v("strong",[_._v("排他锁：使用临时节点")])]),_._v(" "),v("p",[v("strong",[_._v("工作原理：")])]),_._v(" "),v("ol",[v("li",[_._v("获取锁：所有线程共同创建同一个临时节点 /exclusice_lock/lock；创建成功的线程成为抢占到锁的线程；其他的线程注册一个 /exclusice_lock 子节点变更的 watch 监听器")]),_._v(" "),v("li",[_._v("释放锁：抢占到锁的线程释放后，触发 watch，重复第一步，继续抢锁\n问题：")])]),_._v(" "),v("ul",[v("li",[_._v("锁释放会产生"),v("strong",[_._v("惊群效应（羊群效应）")])])]),_._v(" "),v("p",[v("strong",[_._v("共享锁：使用临时顺序节点（推荐）")])]),_._v(" "),v("p",[v("strong",[_._v("工作原理：")])]),_._v(" "),v("ol",[v("li",[v("p",[_._v("在父节点下"),v("strong",[_._v("创建临时有序节点")]),_._v("，比如 "),v("code",[_._v("create -s -e /lock/node")])])]),_._v(" "),v("li",[v("p",[_._v("创建成功后，"),v("strong",[_._v("获取父节点下的所有临时子节点")]),_._v("，并判断当前线程创建的节点是否是"),v("strong",[_._v("序号最小")]),_._v("的")]),_._v(" "),v("p",[_._v("如果是序号最小的，则认为获取锁成功；")]),_._v(" "),v("p",[_._v("如果不是序号最小的，则对前一个节点添加一个 watch 事件")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("锁释放")]),_._v("，唤醒下一个序号的节点，重新执行步骤 2，判断自己的序号是否最小")])])]),_._v(" "),v("p",[v("strong",[_._v("特性（重点）：")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("**锁释放：**临时节点会随着 session 断开而自动删除，锁会随节点删除而释放")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("阻塞锁")]),_._v("：可以实现阻塞的锁，通过监听器监听锁释放，执行业务逻辑")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("可重入锁")]),_._v("：主机信息和线程信息写入到节点中，下次获取锁的时候和最小节点中的数据比对，如果一样，直接获取锁；不一样，就创建临时顺序节点，参与排队")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("单点故障问题")]),_._v("：可以有效解决单点问题，zk 是集群部署的，只要半数以上存活，就可以提供服务")])])]),_._v(" "),v("blockquote",[v("p",[_._v("推荐关于分布式锁的一篇文章：https://www.zhihu.com/question/452803310/answer/1931377239")])]),_._v(" "),v("h4",{attrs:{id:"分布式-id-生成器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式-id-生成器"}},[_._v("#")]),_._v(" 分布式 id 生成器")]),_._v(" "),v("p",[_._v("顺序节点")]),_._v(" "),v("p",[_._v("解决雪花算法中的，时钟回拨问题")]),_._v(" "),v("h4",{attrs:{id:"分布式队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式队列"}},[_._v("#")]),_._v(" "),v("strong",[_._v("分布式队列")])]),_._v(" "),v("p",[_._v("实现 FIFO 队列")]),_._v(" "),v("p",[v("strong",[_._v("工作原理")])]),_._v(" "),v("ul",[v("li",[_._v("入队操作：所有客户端都在/queue_task 下创建顺序节点将任务存入节点，并获取子节点列表，向比自己序号小的最后一个节点注册 watcher 监听")]),_._v(" "),v("li",[_._v("出队操作：如果自己是序号最小的节点，取出任务数据执行，然后删除节点")])]),_._v(" "),v("h4",{attrs:{id:"分布式栅栏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式栅栏"}},[_._v("#")]),_._v(" 分布式栅栏")]),_._v(" "),v("p",[_._v("类似于 juc 中的 CyclicBarrier 组件")]),_._v(" "),v("p",[v("strong",[_._v("工作原理")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("节点/queue_barrier 保存 Barrier 值 N")])]),_._v(" "),v("li",[v("p",[_._v("客户端线程 session 在节点/queue_barrier 下注册临时节点")])]),_._v(" "),v("li",[v("p",[_._v("所有线程同时开始：")]),_._v(" "),v("ol",[v("li",[_._v("所有线程获取 /queue_barrier 的值 N")]),_._v(" "),v("li",[_._v("所有线程获取/queue_barrier 下的子节点列表，同时注册子节点列表变更的 watch 监听")]),_._v(" "),v("li",[_._v("如果子节点个数达到 N，所有节点开始执行任务，取消监听")]),_._v(" "),v("li",[_._v("接收通知后，重复第 2 步")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);