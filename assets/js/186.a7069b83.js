(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{461:function(v,_,t){"use strict";t.r(_);var r=t(14),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"es6-的新特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6-的新特性"}},[v._v("#")]),v._v(" ES6 的新特性")]),v._v(" "),_("ul",[_("li",[v._v("类的支持：语法糖，只是让类更加直观；基于 ES5 的原型链都可以实现；")]),v._v(" "),_("li",[v._v("模块化\n"),_("ul",[_("li",[v._v("export 和 import 命令；")]),v._v(" "),_("li",[v._v("ES6 之前是整体加载一个模块；ES6 模块是编译时加载，使得静态分析成为可能; 进一步可以引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。")])])]),v._v(" "),_("li",[v._v("箭头函数")]),v._v(" "),_("li",[v._v("块作用域")]),v._v(" "),_("li",[v._v("字符串模板\n"),_("ul",[_("li",[v._v("使字符串拼接，多行字符串，变量嵌入更容易书写；")])])]),v._v(" "),_("li",[v._v("变量的解构赋值")]),v._v(" "),_("li",[v._v("参数默认值/不定参数/拓展参数\n"),_("ul",[_("li",[v._v("好处："),_("strong",[v._v("方便参数扩展")])])])]),v._v(" "),_("li",[v._v("for-of 遍历")]),v._v(" "),_("li",[v._v("generator")]),v._v(" "),_("li",[v._v("Map/Set")]),v._v(" "),_("li",[v._v("Promise")]),v._v(" "),_("li",[v._v("Symbol: 每个 Symbol 实例都是唯一的，从根本上防止属性名的冲突；类似于 java 中的")])]),v._v(" "),_("h3",{attrs:{id:"谈谈个人对-es6-的看法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#谈谈个人对-es6-的看法"}},[v._v("#")]),v._v(" 谈谈个人对 ES6 的看法")]),v._v(" "),_("ul",[_("li",[v._v("ES6 很好，更友好的语法糖，开发效率得以提高；")]),v._v(" "),_("li",[v._v("但是回归本质，不管 ES 几，还是那个 js，特性只是特性，我们搞技术最重要的 还是看清事物本质")])]),v._v(" "),_("h3",{attrs:{id:"箭头函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[v._v("#")]),v._v(" 箭头函数")]),v._v(" "),_("ul",[_("li",[v._v("函数体内的 this 对象，就是"),_("strong",[v._v("定义时所在的对象，而不是使用时所在的对象")]),v._v("。")]),v._v(" "),_("li",[v._v("不可以当作构造函数")]),v._v(" "),_("li",[v._v("不可以使用 arguments 对象，该对象在函数体内不存在")]),v._v(" "),_("li",[v._v("不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。")])]),v._v(" "),_("h3",{attrs:{id:"块作用域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[v._v("#")]),v._v(" 块作用域")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("不存在变量提升")]),v._v("；不存在先使用后声明的情况")]),v._v(" "),_("li",[_("strong",[v._v("暂时性死区")]),v._v("；变量绑定在当前作用域，不受外部影响；")]),v._v(" "),_("li",[_("strong",[v._v("不允许重复声明")]),v._v("；同一作用域不能声明同名变量")])]),v._v(" "),_("h3",{attrs:{id:"变量的解构赋值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#变量的解构赋值"}},[v._v("#")]),v._v(" 变量的解构赋值")]),v._v(" "),_("p",[v._v("解构是 ES6 提供的"),_("strong",[v._v("语法糖")]),v._v("，其实内在是针对"),_("strong",[v._v("可迭代对象的 Iterator 接口")]),v._v("，通过遍历器按顺序获取对应的值进行赋值")]),v._v(" "),_("p",[v._v("只要某种数据结构具有 "),_("strong",[v._v("Iterator 接口")]),v._v("，都可以采用数组形式的解构赋值。")]),v._v(" "),_("p",[v._v("支持 "),_("strong",[v._v("Iterator 接口")]),v._v("数据结构：")]),v._v(" "),_("ol",[_("li",[v._v("数组")]),v._v(" "),_("li",[v._v("Map，Set")]),v._v(" "),_("li",[v._v("Generator 函数")])]),v._v(" "),_("p",[v._v("注意：")]),v._v(" "),_("p",[_("strong",[v._v("对象"),_("code",[v._v("没有")]),v._v("部署 iterator 接口")]),v._v(":只有成员具有顺序性的 线性结构 才会部署 iterator 接口，当然也可以手动部署")]),v._v(" "),_("h3",{attrs:{id:"修饰器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修饰器"}},[v._v("#")]),v._v(" 修饰器")]),v._v(" "),_("p",[v._v("Decorator（注解）")]),v._v(" "),_("ul",[_("li",[v._v("装饰器（Decorator）是一种与类（class）相关的语法，用来"),_("strong",[v._v("注释或修改类和类方法")]),v._v("。")]),v._v(" "),_("li",[v._v("装饰器对类的行为的改变，是"),_("strong",[v._v("代码编译时发生")]),v._v("的，而不是在运行时。这意味着，"),_("strong",[v._v("装饰器能在编译阶段运行代码")]),v._v("。也就是说，装饰器本质就是编译时执行的函数。")]),v._v(" "),_("li",[v._v("通过对目标类的"),_("strong",[v._v("prototype")]),v._v("对象操作，修改类")]),v._v(" "),_("li",[v._v("装饰器不仅可以"),_("strong",[v._v("装饰类")]),v._v("，还可以"),_("strong",[v._v("装饰类的属性")]),v._v("。")]),v._v(" "),_("li",[v._v("如果同一个方法有多个装饰器，会像剥洋葱一样，先"),_("strong",[v._v("从外到内进入，然后由内向外执行")])]),v._v(" "),_("li",[v._v("装饰器只能用于类和类的方法，"),_("strong",[v._v("不能用于函数")]),v._v("，因为"),_("strong",[v._v("存在函数提升")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);