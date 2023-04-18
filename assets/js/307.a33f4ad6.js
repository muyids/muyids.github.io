(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{582:function(v,_,t){"use strict";t.r(_);var e=t(14),l=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("strong",[v._v("大纲")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("特性，为什么快")])]),v._v(" "),_("li",[_("p",[v._v("常用数据结构和使用场景")])]),v._v(" "),_("li",[_("p",[v._v("底层数据结构及原理")]),v._v(" "),_("ul",[_("li",[v._v("跳表能具体说一下吗")])])]),v._v(" "),_("li",[_("p",[v._v("双写、读写一致性问题")])]),v._v(" "),_("li",[_("p",[v._v("持久化机制是怎样的")])]),v._v(" "),_("li",[_("p",[v._v("过期策略和内存淘汰机制；LRU 算法实现")])]),v._v(" "),_("li",[_("p",[v._v("缓存雪崩、穿透、击穿")])]),v._v(" "),_("li",[_("p",[v._v("集群方案有哪些？主从、哨兵、集群")])])]),v._v(" "),_("hr"),v._v(" "),_("h4",{attrs:{id:"特点-为什么快"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点-为什么快"}},[v._v("#")]),v._v(" "),_("strong",[v._v("特点，为什么快")])]),v._v(" "),_("p",[v._v("Redis 的特点")]),v._v(" "),_("ol",[_("li",[v._v("速度快：单线程，内存操作，I/O 多路复用，数据结构优化，RESP 协议")]),v._v(" "),_("li",[v._v("键值对的数据结构")]),v._v(" "),_("li",[v._v("支持丰富数据类型：支持 string，list，set，sorted set，hash")]),v._v(" "),_("li",[v._v("丰富的特性：可用于缓存，消息，按 key 设置过期时间，过期后将会自动删除")]),v._v(" "),_("li",[v._v("简单稳定")]),v._v(" "),_("li",[v._v("持久化")]),v._v(" "),_("li",[v._v("主从复制")]),v._v(" "),_("li",[v._v("高可用和分布式转移")]),v._v(" "),_("li",[v._v("客户端语言多")])]),v._v(" "),_("p",[v._v("Redis 为什么这么快")]),v._v(" "),_("ol",[_("li",[v._v("单线程，避免了频繁的上下文切换")]),v._v(" "),_("li",[v._v("内存操作")]),v._v(" "),_("li",[v._v("采用了非阻塞 I/O；多路复用机制")]),v._v(" "),_("li",[v._v("数据结构优化")]),v._v(" "),_("li",[v._v("RESP 协议")])]),v._v(" "),_("h4",{attrs:{id:"常用数据结构和使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用数据结构和使用场景"}},[v._v("#")]),v._v(" 常用数据结构和使用场景")]),v._v(" "),_("p",[v._v("常用数据结构：")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("五种基本数据类型")])]),v._v(" "),_("p",[v._v("字符串 String、列表 List、字典 Hash、集合 Set、有序集合 SortedSet")]),v._v(" "),_("p",[_("strong",[v._v("string")])]),v._v(" "),_("p",[v._v("简单动态字符串 SDS")]),v._v(" "),_("p",[_("strong",[v._v("hash")])]),v._v(" "),_("p",[v._v("底层实现：压缩列表，哈希表")]),v._v(" "),_("p",[v._v("存放的是结构化的对象")]),v._v(" "),_("p",[v._v("场景：我在做单点登录的时候，就是用这种数据结构存储单条用户信息，以 "),_("code",[v._v("CookieId")]),v._v(" 作为 Key，设置 30 分钟为缓存过期时间，能很好的模拟出类似 "),_("code",[v._v("Session")]),v._v(" 的效果。")]),v._v(" "),_("p",[_("strong",[v._v("List")])]),v._v(" "),_("p",[v._v("底层实现：压缩列表，链表")]),v._v(" "),_("p",[v._v("使用 List 的数据结构，可以做简单的消息队列的功能。"),_("code",[v._v("rpush+blpop")]),v._v("实现先进先出；另外还有一个就是，可以利用 "),_("code",[v._v("lrange")]),v._v(" 命令，做基于 Redis 的分页功能，性能极佳，用户体验好。")]),v._v(" "),_("p",[_("strong",[v._v("set")])]),v._v(" "),_("p",[v._v("底层实现：hash 表(不带 value)")]),v._v(" "),_("ul",[_("li",[v._v("全局去重的功能;因为 Set 堆放的是一堆不重复值的集合。所以可以做全局去重的功能")]),v._v(" "),_("li",[v._v("利用交集、并集、差集等操作，可以计算共同喜好，全部的喜好，自己独有的喜好等功能。\n"),_("strong",[v._v("ZSet")])])]),v._v(" "),_("p",[v._v("底层实现：跳表")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Sorted Set")]),v._v("多了一个权重参数 Score，集合中的元素能够按 Score 进行排列。")]),v._v(" "),_("li",[v._v("可以做排行榜应用，取 "),_("code",[v._v("TOP N")]),v._v(" 操作。")]),v._v(" "),_("li",[_("code",[v._v("Sorted Set")]),v._v(" 可以用来做延时任务。最后一个应用就是可以做范围查找。")])]),v._v(" "),_("p",[_("strong",[v._v("其他一些数据结构")])]),v._v(" "),_("p",[v._v("HyperLogLog、Geo、Pub/Sub")]),v._v(" "),_("p",[_("strong",[v._v("Redis Module")])]),v._v(" "),_("p",[v._v("BloomFilter，RedisSearch，Redis-ML")]),v._v(" "),_("p",[_("strong",[v._v("内部数据结构详解")])]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-dict.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("dict"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-sds.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("sds"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-robj.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("robj"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-ziplist.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("ziplist"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-quicklist.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("quicklist"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"http://zhangtielei.com/posts/blog-redis-skiplist.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("skiplist"),_("OutboundLink")],1),v._v("\n链表：")])]),v._v(" "),_("p",[v._v("Quicklist -> ziplist,ziplist 大小的配置")]),v._v(" "),_("p",[v._v("list-max-ziplist-size")])])]),v._v(" "),_("p",[v._v("常用的 几种场景如下：")]),v._v(" "),_("ul",[_("li",[v._v("会话缓存（Session Cache）")]),v._v(" "),_("li",[v._v("全页缓存（FPC）")]),v._v(" "),_("li",[v._v("队列 ： list, lpush+brpop 阻塞队列")]),v._v(" "),_("li",[v._v("分布式锁 ：setnx ex")]),v._v(" "),_("li",[v._v("排行榜 ：zset")]),v._v(" "),_("li",[v._v("计数器 ：hyperloglog")]),v._v(" "),_("li",[v._v("发布/订阅")])]),v._v(" "),_("p",[_("strong",[v._v("跳表")])]),v._v(" "),_("p",[v._v("推荐阅读：http://zhangtielei.com/posts/blog-redis-skiplist.html")]),v._v(" "),_("p",[_("strong",[v._v("跳表的结构")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("多层链表结构")])]),v._v(" "),_("li",[_("p",[v._v("节点：")]),v._v(" "),_("ul",[_("li",[v._v("值")]),v._v(" "),_("li",[v._v("指针数组：不同层链表的下一个结点指针")]),v._v(" "),_("li",[v._v("层：节点位于多少层，可以由指针数组的大小定义")])])]),v._v(" "),_("li",[_("p",[v._v("头节点：各层链表的头节点")])]),v._v(" "),_("li",[_("p",[v._v("尾节点：各层链表的尾节点，每一层最后一个节点的本层链表下一个节点为空，即到达尾部\n![2021-09-16 am8.45.38](https://muyids.oss-cn-beijing.aliyuncs.com/2021-09-16 am8.45.38-1807564-1809225.png)")])])]),v._v(" "),_("p",[v._v("节点插入过程：")]),v._v(" "),_("p",[v._v("默认层数和随机层数算法：32 层，随机上升因子 1/4")]),v._v(" "),_("h4",{attrs:{id:"双写、读写一致性问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双写、读写一致性问题"}},[v._v("#")]),v._v(" 双写、读写一致性问题")]),v._v(" "),_("p",[v._v("一致性级别：")]),v._v(" "),_("ul",[_("li",[v._v("强一致性")]),v._v(" "),_("li",[v._v("弱一致性")]),v._v(" "),_("li",[v._v("最终一致性")])]),v._v(" "),_("p",[v._v("手段")]),v._v(" "),_("ol",[_("li",[v._v("延时双删策略")]),v._v(" "),_("li",[v._v("设置缓存的过期时间")]),v._v(" "),_("li",[v._v("Binlog 异步同步")])]),v._v(" "),_("h4",{attrs:{id:"持久化机制是怎样的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持久化机制是怎样的"}},[v._v("#")]),v._v(" 持久化机制是怎样的")]),v._v(" "),_("p",[v._v("RDB、AOF、混合持久化")]),v._v(" "),_("h4",{attrs:{id:"过期策略和内存淘汰机制-lru-算法实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过期策略和内存淘汰机制-lru-算法实现"}},[v._v("#")]),v._v(" 过期策略和内存淘汰机制；LRU 算法实现")]),v._v(" "),_("p",[_("strong",[v._v("过期策略")]),v._v("："),_("strong",[v._v("定期删除+惰性删除")])]),v._v(" "),_("p",[v._v("定期删除，redis 默认是每隔 100ms 就随机抽取一些设置了过期时间的 key，检查其是否过期，如果过期就删除。")]),v._v(" "),_("p",[v._v("惰性删除，获取某个 Key 的时候，Redis 会检查一下，这个 Key 如果设置了过期时间，如果过期了此时就会删除。")]),v._v(" "),_("p",[_("strong",[v._v("内存淘汰机制")])]),v._v(" "),_("p",[v._v("如果没有过期的 Key 被"),_("strong",[v._v("定期删除 或 惰性删除")]),v._v("，内存不断增长，怎么办？内存不够用了怎么办？")]),v._v(" "),_("p",[v._v("在 redis.conf 中有一行配置：")]),v._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# maxmemory-policy volatile-lru")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("六种内存淘汰策略：")]),v._v(" "),_("ol",[_("li",[v._v("volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰")]),v._v(" "),_("li",[v._v("volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰")]),v._v(" "),_("li",[v._v("volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰")]),v._v(" "),_("li",[v._v("allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰")]),v._v(" "),_("li",[v._v("allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰")]),v._v(" "),_("li",[v._v("no-enviction（驱逐）：禁止驱逐数据\n推荐使用：allkeys-lru")])]),v._v(" "),_("p",[_("strong",[v._v("LRU 算法实现")]),v._v("：双向链表+哈希表")]),v._v(" "),_("h4",{attrs:{id:"缓存雪崩、穿透、击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩、穿透、击穿"}},[v._v("#")]),v._v(" "),_("strong",[v._v("缓存雪崩、穿透、击穿")])]),v._v(" "),_("p",[_("strong",[v._v("缓存雪崩")]),v._v(" ：即缓存同一时间大面积的失效")]),v._v(" "),_("p",[v._v("发生原因：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("缓存服务宕机")])]),v._v(" "),_("li",[_("p",[v._v("大量 key 同时过期\n解决方案：")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("高可用")]),v._v("：发生雪崩事前，主从+哨兵，redis cluster，避免服务崩溃")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("限流&降级")]),v._v("：发生雪崩事中：本地"),_("code",[v._v("ehcache")]),v._v("缓存 + "),_("code",[v._v("hystrix")]),v._v(" ，避免 MySQL 被打死")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("数据预热")]),v._v("：将发生大并发访问前，预先访问一遍")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("随机失效时间")]),v._v("：平时开发，给缓存的失效时间，加上一个随机值，避免集体失效\n"),_("strong",[v._v("缓存穿透")]),v._v("：即黑客故意去请求缓存中不存在的数据。")])])]),v._v(" "),_("p",[v._v("低频的缓存穿透是 正常的，高频的缓存穿透才会影响数据库")]),v._v(" "),_("p",[v._v("缓存穿透解决方案")]),v._v(" "),_("ol",[_("li",[v._v("同样的请求 ID 的情况；\n"),_("ul",[_("li",[_("strong",[v._v("分布式锁")]),v._v("，使用"),_("strong",[v._v("互斥锁")]),v._v("更新，保证同一个进程中针对同一个数据不会并发请求到 DB，减小 DB 压力。")]),v._v(" "),_("li",[v._v("把查询到的结果（正常查询结果、NULL 值等）写入到缓存中，可以过滤掉同样的请求")])])]),v._v(" "),_("li",[v._v("每次都是 不同的 ID（最常见的攻击场景）；")])])])}),[],!1,null,null,null);_.default=l.exports}}]);