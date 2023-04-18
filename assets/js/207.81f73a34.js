(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{481:function(_,v,a){"use strict";a.r(v);var t=a(14),l=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),v("ul",[v("li",[_._v("消息队列作用，kafka 概念引入")]),_._v(" "),v("li",[_._v("kafka 的应用场景，目前哪些业务中使用了，带来了什么好处")]),_._v(" "),v("li",[_._v("kafka 与其他 MQ（rabbitmq、activemq 等）相比有啥区别")])]),_._v(" "),v("h1",{attrs:{id:"基础入门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础入门"}},[_._v("#")]),_._v(" 基础入门")]),_._v(" "),v("ul",[v("li",[_._v("kafka 基础架构\n"),v("ul",[v("li",[_._v("broker、producer、consumer、CG、topic、partition、replica、leader、follower 等概念及其关系")])])]),_._v(" "),v("li",[_._v("kafka 常用基本操作\n"),v("ul",[v("li",[_._v("topic 的管理；添加（复制因子、分区常用设置，手动 or 自动）、删除（线上是否开启）、修改、查询")]),_._v(" "),v("li",[_._v("广播和单播是怎么做的")]),_._v(" "),v("li",[_._v("消息顺序性如何保证")]),_._v(" "),v("li",[_._v("...")])])])]),_._v(" "),v("h1",{attrs:{id:"架构深入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构深入"}},[_._v("#")]),_._v(" 架构深入")]),_._v(" "),v("ul",[v("li",[_._v("kafka 的工作流程和文件存储机制\n"),v("ul",[v("li",[_._v("生产过程分析；消息从生产到消费，经过怎样的处理流程")]),_._v(" "),v("li",[_._v("消息在文件系统是怎么保存的，offset 的定位过程")])])]),_._v(" "),v("li",[_._v("生产者分区策略\n"),v("ul",[v("li",[_._v("为什么要分区")]),_._v(" "),v("li",[_._v("有哪几种分区规则")])])]),_._v(" "),v("li",[_._v("生产者数据可靠性保证\n"),v("ul",[v("li",[v("strong",[_._v("副本数据同步策略")]),_._v("是怎样的")]),_._v(" "),v("li",[v("strong",[_._v("ISR")]),_._v("是什么")]),_._v(" "),v("li",[v("strong",[_._v("ACK 应答机制")]),_._v("；三种可靠性级别是怎样的、会在什么场景下丢数据或产生重复数据；")]),_._v(" "),v("li",[v("strong",[_._v("故障处理细节")]),_._v("：LEO、HW 概念、leader 和 foller 故障时，都是怎么处理的；")])])]),_._v(" "),v("li",[v("code",[_._v("Exactly Once")]),_._v("语义；"),v("code",[_._v("At Least Once")]),_._v(" + 幂等性；幂等性的实现；")]),_._v(" "),v("li",[_._v("消费者消费方式；推和拉")]),_._v(" "),v("li",[_._v("消费者分区分配策略：RoundRobin 和 Range")]),_._v(" "),v("li",[_._v("消费者 offset 的维护；从 zk 迁移到 kafka")]),_._v(" "),v("li",[_._v("Kafka 的高效读写机制；\n分布式部署、顺序写磁盘、零复制技术\n"),v("ul",[v("li",[_._v("https://juejin.im/post/5f1686116fb9a07e753ca6e8?utm_source=gold_browser_extension")])])]),_._v(" "),v("li",[_._v("Zookeeper 在 kafka 中的作用；")]),_._v(" "),v("li",[_._v("事务机制原理")])]),_._v(" "),v("h1",{attrs:{id:"运维相关问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运维相关问题"}},[_._v("#")]),_._v(" 运维相关问题")]),_._v(" "),v("ul",[v("li",[_._v("生产环境是如何部署的，如何配置的（比较重要的配置项）")]),_._v(" "),v("li",[_._v("监控是如何做的，用了什么开源组件，需要重点关注的指标有哪些；")]),_._v(" "),v("li",[_._v("线上有没有遇到过"),v("strong",[_._v("扩容和缩容")]),_._v("的场景，如果有，是怎么做的")]),_._v(" "),v("li",[_._v("有出现过线上问题吗，如何避免和解决")])]),_._v(" "),v("h1",{attrs:{id:"更多问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更多问题"}},[_._v("#")]),_._v(" 更多问题")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.processon.com/view/link/5f0b427e5653bb6858b728f9",target:"_blank",rel:"noopener noreferrer"}},[_._v("kafka 知识脑图"),v("OutboundLink")],1)])]),_._v(" "),v("p",[_._v("docker")]),_._v(" "),v("p",[_._v("共用消息通信")]),_._v(" "),v("p",[_._v("消息大小、性能")]),_._v(" "),v("ul",[v("li",[_._v("业务对账机制吗")])]),_._v(" "),v("p",[_._v("千兆 100 多 M")])])}),[],!1,null,null,null);v.default=l.exports}}]);