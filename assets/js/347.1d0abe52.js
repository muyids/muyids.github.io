(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{621:function(t,a,s){"use strict";s.r(a);var n=s(14),v=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("下面我们来看 4 种模式（AT、TCC、Saga、XA）的分布式事务实现")]),t._v(" "),a("p",[a("strong",[t._v("AT 模式")])]),t._v(" "),a("p",[t._v("AT 模式是一种无侵入的分布式事务解决方案")]),t._v(" "),a("p",[t._v("阿里 seata 框架，实现了该模式")]),t._v(" "),a("p",[t._v("前提：")]),t._v(" "),a("ul",[a("li",[t._v("基于支持本地 ACID 事务的关系型数据库。")]),t._v(" "),a("li",[t._v("Java 应用，通过 JDBC 访问数据库。\nAT 模式下，用户只需要关注自己的业务”SQL“，用户的”业务 SQL“作为一阶段，Seata 框架会自动生成事务的二阶段提交和回滚操作")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/2021-10-16%20am11.34.15.png",alt:"2021-10-16 am11.34.15"}})]),t._v(" "),a("p",[t._v("AT 模式如何做到对业务的无侵入：")]),t._v(" "),a("p",[t._v("<1>一阶段预处理")]),t._v(" "),a("p",[t._v('一阶段，Seata 会拦截业务 SQL，解析 SQL 语义，找到业务 SQL 要更新的数据，将其保存成"before image"，然后执行业务 SQL 更新数据，在业务数据更新之后，再将其保存成”after image“，最后生成行锁。以上操作全部在一个数据库事务内完成，这样就保证了一阶段操作的原子性')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/2021-10-16%20pm12.13.29.png",alt:"2021-10-16 pm12.13.29"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);