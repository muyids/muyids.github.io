(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{625:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("Seata Server(TC)环境搭建")])]),s._v(" "),a("p",[s._v("参考部署指南："),a("a",{attrs:{href:"http://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("Server 端存储模式（store.mode）")])]),s._v(" "),a("p",[s._v("支持三种：")]),s._v(" "),a("ul",[a("li",[s._v("file：单机模式，全局事务会话信息"),a("strong",[s._v("内存中读取")]),s._v("并持久化本地文件 root.data，性能较高（默认）")]),s._v(" "),a("li",[a("strong",[s._v("DB：高可用模式")]),s._v("，全局事务会话信息通过"),a("strong",[s._v("db 共享")]),s._v("，性能差一些")]),s._v(" "),a("li",[s._v("redis：性能较高，存在事务信息丢失风险，server1.3 版本以上")])]),s._v(" "),a("p",[a("strong",[s._v("存储模式 DB 的配置")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("修改"),a("code",[s._v("config/file.conf")]),s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v('mode = "db"\n  '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## database store property")]),s._v("\n  db "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## the implement of javax.sql.DataSource, such as DruidDataSource(druid)/BasicDataSource(dbcp)/HikariDataSource(hikari) etc.")]),s._v('\n    datasource = "druid"\n    '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mysql/oracle/postgresql/h2/oceanbase etc.")]),s._v('\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    '),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## if using mysql to store the data, recommend add rewriteBatchedStatements=true in jdbc connection param")]),s._v('\n    url = "jdbc'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/seata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v('rewriteBatchedStatements=true"\n    user = "root"\n    password = "123456"\n    minConn = 5\n    maxConn = 100\n    globalTable = "global_table"\n    branchTable = "branch_table"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("创建数据库")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" seata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("建表")]),s._v(" "),a("p",[s._v("参考资源目录，下载建表 SQL 并执行 https://github.com/seata/seata/edit/1.4.0/script/server/db/mysql.sql")])])]),s._v(" "),a("p",[a("strong",[s._v("DB 存储模式+Nacos(注册&配置中心)部署")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/2021-10-16%20pm4.32.54.png",alt:"2021-10-16 pm4.32.54"}})]),s._v(" "),a("p",[s._v("参考高可用配置："),a("a",{attrs:{href:"http://seata.io/zh-cn/docs/ops/deploy-ha.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://seata.io/zh-cn/docs/ops/deploy-ha.html"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[a("p",[s._v("修改"),a("code",[s._v("config/registry.conf")]),s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("registry "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('\ntype = "nacos"\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('\ntype = "nacos"\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("nacos 导入 config 配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载 seata 开源项目，修改"),a("code",[s._v("seata/script/config-center/config.txt")]),s._v("文件")])]),s._v(" "),a("li",[a("p",[s._v("运行"),a("code",[s._v("cd seata/script/config-center/nacos/ && sh nacos-config.sh")])])])])])]),s._v(" "),a("p",[a("strong",[s._v("启动 seata server")])]),s._v(" "),a("p",[s._v("打开 seata-server 的安装路径"),a("code",[s._v("/usr/local/seata/seata-server-1.4.2")])]),s._v(" "),a("p",[s._v("运行："),a("code",[s._v("sh bin/seata-server.sh")])]),s._v(" "),a("p",[s._v("报错： seata errorCode 0, state 08001 -> 因为 mysql 驱动版本配置的是低版本，不兼容 8.0 以上 mysql 导致， 修改配置文件中的 mysql 驱动版本")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("store.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/seata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("useUnicode=true"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&rewriteBatchedStatements=true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);