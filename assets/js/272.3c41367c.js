(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{549:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"四种隔离级别的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四种隔离级别的区别"}},[s._v("#")]),s._v(" 四种隔离级别的区别")]),s._v(" "),t("p",[s._v("4 个隔离级别")]),s._v(" "),t("ul",[t("li",[s._v("读未提交：最低级别，只能保证持久性")]),s._v(" "),t("li",[s._v("读已提交：语句级别")]),s._v(" "),t("li",[s._v("可重复读：事务级别")]),s._v(" "),t("li",[s._v("串行化：最高级别，事务与事务完全串行化执行，毫无并发可言，性能极低\n"),t("blockquote",[t("p",[s._v("脏读、不可重复读、幻读")])])])]),s._v(" "),t("p",[t("strong",[s._v("1. 未提交读")])]),s._v(" "),t("p",[t("em",[s._v("注意：A，B 两个会话需要用两个客户端执行")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看数据库默认的隔离级别(老版本是 @@tx_isolation)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" transaction_isolation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read-uncommitted'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 修改隔离级别")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B 设置为99，读出为99")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B 回滚，读出22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 原来stock=22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" stock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 设置为99")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("存在脏读的问题：A 事务读取到了 B 事务**"),t("em",[s._v("未提交")]),s._v("**的内容，而 B 事务后面进行了回滚")]),s._v(" "),t("p",[t("strong",[s._v("2. 已提交读")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" transaction_isolation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read-committed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B提交前，查出22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B提交后，查出99")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 原来stock=22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" stock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 改为99")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("存在不可重复读的问题：当设置 A 事务只能读取 B 事务已经提交的部分，会造成在 A 事务内的两次查询，结果竟然不一样，因为在此期间 B 事务进行了提交操作")]),s._v(" "),t("p",[t("strong",[s._v("3. 可重复读")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" transaction_isolation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'repeatable-read'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- A")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v('存在幻读的问题：A 事务读取了一个范围的内容，而同时 B 事务在此期间插入了一条数据，造成"幻觉"')]),s._v(" "),t("p",[t("strong",[s._v("4. 串行化")])]),s._v(" "),t("p",[s._v("总结：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/mysql-transaction_isolation.jpeg",alt:"mysql-transaction_isolation"}})]),s._v(" "),t("h1",{attrs:{id:"innodb-的锁机制原理解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的锁机制原理解析"}},[s._v("#")]),s._v(" InnoDB 的锁机制原理解析")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("共享锁")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("读锁、S 锁")]),s._v(" "),t("p",[s._v("允许查询，但是不允许修改")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHARE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 共享锁")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" stock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 只有当A执行commit后才能update成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("排他锁")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("写锁、X 锁")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 排他锁")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" stock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cloud_ali"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 只有当A执行commit后才能update成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("对于 insert、update、delete，InnoDB 会自动给涉及的数据加排他锁（X）")])]),s._v(" "),t("li",[t("p",[s._v("对于一般的 Select 语句，InnoDB 不会加任何锁，事务可以通过以下语句给显示加共享锁或排他锁。")]),s._v(" "),t("p",[s._v("共享锁："),t("code",[s._v("SELECT ... LOCK IN SHARE MODE;")]),s._v("、排他锁："),t("code",[s._v("SELECT ... FOR UPDATE;")])])])])])])]),s._v(" "),t("li",[t("p",[s._v("意向共享锁")]),s._v(" "),t("ul",[t("li",[s._v("IS")])])]),s._v(" "),t("li",[t("p",[s._v("意向排他锁")]),s._v(" "),t("ul",[t("li",[s._v("IX")])])]),s._v(" "),t("li",[t("p",[s._v("自增锁")])]),s._v(" "),t("li",[t("p",[s._v("记录锁")]),s._v(" "),t("p",[t("strong",[s._v("记录锁")]),s._v("存在于包括"),t("code",[s._v("主键索引")]),s._v("在内的"),t("code",[s._v("惟一索引")]),s._v("中，锁定单条索引记录。")])]),s._v(" "),t("li",[t("p",[s._v("间隙锁")]),s._v(" "),t("p",[s._v("存在于"),t("code",[s._v("非惟一索引")]),s._v("中，锁定"),t("code",[s._v("开区间")]),s._v("范围内的一段间隔，它是基于"),t("strong",[s._v("临键锁")]),s._v("实现的。")])]),s._v(" "),t("li",[t("p",[s._v("临键锁")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("查询条件是范围（"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v("）的时候，"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("innodb")]),s._v("是怎么上锁的呢？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("存在于"),t("code",[s._v("非惟一索引")]),s._v("中，该类型的每条记录的索引上都存在这种锁，它是一种特殊的"),t("strong",[s._v("间隙锁")]),s._v("，锁定一段"),t("code",[s._v("左开右闭")]),s._v("的索引区间。")])])]),s._v(" "),t("p",[t("strong",[s._v("InnoDB")]),s._v(" 中的"),t("code",[s._v("行锁")]),s._v("的实现依赖于"),t("code",[s._v("索引")]),s._v("，一旦某个加锁操作没有使用到索引，那么该锁就会退化为"),t("code",[s._v("表锁")]),s._v("。")]),s._v(" "),t("h1",{attrs:{id:"隔离级别和锁之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别和锁之间的关系"}},[s._v("#")]),s._v(" 隔离级别和锁之间的关系")]),s._v(" "),t("ul",[t("li",[s._v("脏读：排他锁")]),s._v(" "),t("li",[s._v("不可重复读：共享锁")])])])}),[],!1,null,null,null);t.default=e.exports}}]);