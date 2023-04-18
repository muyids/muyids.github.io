(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{456:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"javascript-数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-数据类型"}},[t._v("#")]),t._v(" javascript 数据类型")]),t._v(" "),s("p",[t._v("ECMAScript 标准定义了 7 种数据类型:")]),t._v(" "),s("p",[s("strong",[t._v("6 种原始类型-基本数据类型(按值访问)")])]),t._v(" "),s("ul",[s("li",[t._v("Null (js 中的数据在底层是以二进制存储，如果前三位为 0，那么就会判定为 object，而 null 的所有都为 0)")]),t._v(" "),s("li",[t._v("Undefined")]),t._v(" "),s("li",[t._v("基本包装类型(自动创建的基本包装类型的对象—非 Boolean,Number, String 内置函数 new 出来的，对象只存代码的执行瞬间）\n"),s("ul",[s("li",[t._v("Number(基于 IEEE 754 标准的双精度 64 位二进制格式的值——数字、±Infinity、NaN）")]),t._v(" "),s("li",[t._v("String")]),t._v(" "),s("li",[t._v("Boolean")])])]),t._v(" "),s("li",[t._v("Symbol (ECMAScript 6 新定义，实例是唯一且不可改变的)")])]),t._v(" "),s("p",[s("strong",[t._v("引用类型")]),t._v("： Object(包括 Object/Array/Function/RegExp/Date)")]),t._v(" "),s("h3",{attrs:{id:"什么是弱类型语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是弱类型语言"}},[t._v("#")]),t._v(" 什么是弱类型语言")]),t._v(" "),s("ul",[s("li",[t._v("变量的类型就是其值的类型，也就是说"),s("strong",[t._v("变量当前的类型由其值所决定")])]),t._v(" "),s("li",[t._v('变量类型可以改变，a = 1 类型是 number, a= "hello", 类型变为 string')])]),t._v(" "),s("h3",{attrs:{id:"类型检测的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型检测的方式"}},[t._v("#")]),t._v(" 类型检测的方式")]),t._v(" "),s("ol",[s("li",[t._v("typeof；不能检测引用类型；")]),t._v(" "),s("li",[t._v("instanceof；不能检测基本类型；只能判断是否是当前类型实例；不能判断到底属于哪种类型；")]),t._v(" "),s("li",[s("code",[t._v("Object.prototype.toString.call()；")]),t._v(" 推荐使用；")]),t._v(" "),s("li",[t._v("constructor；易被修改，不能跨 iframe;")])]),t._v(" "),s("h4",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("不同类型的优缺点")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("typeof")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("instanceof")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("constructor")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Object.prototype.toString.call")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("优点")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("使用简单")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("能检测出引用类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("基本能检测所有的类型（除了 null 和 undefined）")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("检测出所有的类型")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("缺点")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("只能检测出基本类型（除了 null）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("不能检测出基本类型")]),t._v("，且不能跨 iframe")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("constructor 易被修改，也不能跨 iframe")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("IE6 下，undefined 和 null 均为 Object")])])])]),t._v(" "),s("h4",{attrs:{id:"如何准确的判断数组类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何准确的判断数组类型"}},[t._v("#")]),t._v(" 如何准确的判断数组类型")]),t._v(" "),s("ul",[s("li",[t._v("a instanceof Array => instanceof 和 constructor 不能跨 iframe,所以此方案不行！")]),t._v(" "),s("li",[t._v("Object.prototype.toString.call(a) === '[object Array]' => "),s("strong",[t._v("应选方案")])])]),t._v(" "),s("h2",{attrs:{id:"数组相关的常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组相关的常用方法"}},[t._v("#")]),t._v(" 数组相关的常用方法")]),t._v(" "),s("p",[t._v("push/pop, shift/unshift, split/join, slice/splice/concat, sort/reverse, map/reduce, forEach, filter")]),t._v(" "),s("p",[t._v("slice: slice 是指定在一个数组中的元素创建一个新的数组，即原数组不会变")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yellow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出   red,blue,yellow,black")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出   blue;注意：这里只有第二项一个值")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("splice: splice 是 JS 中数组功能最强大的方法，它能够实现对数组元素的"),s("code",[t._v("删除、插入、替换操作")]),t._v("，返回值为"),s("code",[t._v("被操作的值")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("var color = new Array('red','blue','yellow','black');")])]),t._v(" "),s("ul",[s("li",[t._v("splice 删除：　　 color.splice(1,2) （删除 color 中的 1、2 两项）；")]),t._v(" "),s("li",[t._v("splice 插入：　　 color.splice(1,0,'brown','pink') （在 color 键值为 1 的元素前插入两个值）；")]),t._v(" "),s("li",[t._v("splice 替换：　　 color.splice(1,2,'brown','pink') （在 color 中替换 1、2 元素）；")])]),t._v(" "),s("h2",{attrs:{id:"字符串相关的常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串相关的常用方法"}},[t._v("#")]),t._v(" 字符串相关的常用方法")]),t._v(" "),s("p",[t._v("indexOf/lastIndexOf/charAt, split/match/test, slice/substring/substr, toLowerCase/toUpperCase")]),t._v(" "),s("h2",{attrs:{id:"对象的底层数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的底层数据结构"}},[t._v("#")]),t._v(" 对象的底层数据结构")]),t._v(" "),s("p",[t._v("js 一切皆对象，所以，js 的一些引用类型是 特殊封装的对象")]),t._v(" "),s("h3",{attrs:{id:"object-底层实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-底层实现"}},[t._v("#")]),t._v(" Object 底层实现")]),t._v(" "),s("p",[t._v("Object => HeapObject => JSReceiver => JSObject")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/js-object.png",alt:"JS Object类图"}})]),t._v(" "),s("ul",[s("li",[t._v("V8 里面所有的数据类型的根父类都是 Object")]),t._v(" "),s("li",[t._v("Object 派生"),s("code",[t._v("HeapObject")]),t._v("，提供存储基本功能")]),t._v(" "),s("li",[t._v("往下的"),s("code",[t._v("JSReceiver")]),t._v("用于原型查找")]),t._v(" "),s("li",[t._v("再往下的"),s("code",[t._v("JSObject")]),t._v("就是 JS 里面的 Object")]),t._v(" "),s("li",[t._v("Array/Function/Date 等继承于 JSObject")]),t._v(" "),s("li",[t._v("左边的"),s("code",[t._v("FixedArray")]),t._v("是实际存储数据的地方")])]),t._v(" "),s("h3",{attrs:{id:"array-底层实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-底层实现"}},[t._v("#")]),t._v(" Array 底层实现")]),t._v(" "),s("p",[t._v("Object => HeapObject => JSReceiver => JSArray // 看 V8 的源码")]),t._v(" "),s("p",[t._v("array 是在 object 的基础上继续封装而实现的，")]),t._v(" "),s("p",[t._v("动态数组，动态分配内存，跟 java 里的 ArrayList, C++里的 vector 比较类似")]),t._v(" "),s("ul",[s("li",[t._v("push 扩容：原数组长度的 1.5 倍+16")]),t._v(" "),s("li",[t._v("pop 减容：容量大于等于 length 的 2 倍，容量减为数组长度")])]),t._v(" "),s("h3",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),s("p",[t._v("map 和 set")]),t._v(" "),s("p",[t._v("Object => HeapObject => JSReceiver => JSCollection")]),t._v(" "),s("h2",{attrs:{id:"symbol-类型在实际开发中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-类型在实际开发中的应用"}},[t._v("#")]),t._v(" symbol 类型在实际开发中的应用")]),t._v(" "),s("ol",[s("li",[t._v("定义"),s("strong",[t._v("不需要对外")]),t._v("操作和访问的属性")]),t._v(" "),s("li",[s("strong",[t._v("替代常量")]),t._v("；不需要担心"),s("strong",[t._v("常量名字重复")])]),t._v(" "),s("li",[t._v("定义"),s("strong",[t._v("类的私有属性/方法")])])]),t._v(" "),s("h3",{attrs:{id:"不需要对外操作和访问的属性使用-symbol-来定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不需要对外操作和访问的属性使用-symbol-来定义"}},[t._v("#")]),t._v(" 不需要对外操作和访问的属性使用 Symbol 来定义")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Object.keys()")]),t._v("或者"),s("code",[t._v("for...in")]),t._v("不能枚举 Symbol 属性")]),t._v(" "),s("li",[s("code",[t._v("JSON.stringify()")]),t._v("将对象转换成 JSON 字符串的时候，Symbol 属性也会被排除在输出内容之外：")])]),t._v(" "),s("h3",{attrs:{id:"使用-symbol-来替代常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-symbol-来替代常量"}},[t._v("#")]),t._v(" 使用 Symbol 来替代常量")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_AUDIO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_VIDEO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_IMAGE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("替换成：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_AUDIO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_VIDEO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_IMAGE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("好处：不会重复！")]),t._v(" "),s("h3",{attrs:{id:"使用-symbol-定义类的私有属性-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-symbol-定义类的私有属性-方法"}},[t._v("#")]),t._v(" 使用 Symbol 定义类的私有属性/方法")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Login")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" pwd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[s("strong",[t._v("注册和获取全局 Symbol")]),t._v(": Symbol.for()")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gs1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global_symbol_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注册一个全局Symbol")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gs2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global_symbol_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取全局Symbol")]),t._v("\n\ngs1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" gs2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"变量在内存中的存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量在内存中的存储"}},[t._v("#")]),t._v(" 变量在内存中的存储")]),t._v(" "),s("p",[t._v("基本数据类型在 栈中；对象在堆中，对象的引用在栈中")]),t._v(" "),s("h3",{attrs:{id:"堆和栈的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆和栈的区别"}},[t._v("#")]),t._v(" 堆和栈的区别")]),t._v(" "),s("ul",[s("li",[t._v("栈：基本数据类型和引用，值访问，存储的值大小固定，系统自动分配内存空间；空间小，运行效率高；后进先出；")]),t._v(" "),s("li",[t._v("堆：存储引用的数据，按引用访问，存储的值大小不定，可动态调节，代码指定分配，空间大，运行效率低，无序存储")])]),t._v(" "),s("h2",{attrs:{id:"装箱拆箱操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装箱拆箱操作"}},[t._v("#")]),t._v(" 装箱拆箱操作")]),t._v(" "),s("ul",[s("li",[t._v("装箱：把基本数据类型转化为对应的引用数据类型的操作;基本类型值=>对象，js 内部实现；")]),t._v(" "),s("li",[t._v("拆箱：将引用类型对象转换为对应的值类型对象：通过引用类型的"),s("code",[t._v("valueOf()")]),t._v("或者"),s("code",[t._v("toString()")]),t._v("方法来实现")])]),t._v(" "),s("h2",{attrs:{id:"null-和-undefined-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined-的区别"}},[t._v("#")]),t._v(" null 和 undefined 的区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("null 表示没有对象，即该处不应该有值")])]),t._v(" "),s("li",[s("p",[t._v("undefined 表示缺少值，即此处应该有值，但没有定义\nnull 和 undefined 转换成 number 数据类型时：")])]),t._v(" "),s("li",[s("p",[t._v("null 默认转成 0")])]),t._v(" "),s("li",[s("p",[t._v("undefined 默认转成 NaN")])])]),t._v(" "),s("h2",{attrs:{id:"隐式类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),s("h3",{attrs:{id:"可能发生隐式类型转换的场景以及转换原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可能发生隐式类型转换的场景以及转换原则"}},[t._v("#")]),t._v(" 可能发生隐式类型转换的场景以及转换原则")]),t._v(" "),s("p",[t._v("弱类型语言，会把变量隐式转换成自己需要的类型")]),t._v(" "),s("ul",[s("li",[t._v("自动转换 Boolean\n"),s("ul",[s("li",[t._v("if 语句 或者其他需要 Boolean 的地方")]),t._v(" "),s("li",[t._v("== 两个等号判断")])])]),t._v(" "),s("li",[t._v("运算符\n"),s("ul",[s("li",[t._v("在非 Numeber 类型进行数学运算符 - * / 时，会先将非 Number 转换成 Number 类型。")]),t._v(" "),s("li",[t._v("运算符要考虑字符串的情况，在操作数中存在字符串时，优先转换成字符串，")])])])]),t._v(" "),s("h3",{attrs:{id:"应如何避免或巧妙应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应如何避免或巧妙应用"}},[t._v("#")]),t._v(" 应如何避免或巧妙应用")]),t._v(" "),s("p",[t._v("避免：")]),t._v(" "),s("ul",[s("li",[t._v("先进行"),s("strong",[t._v("显示类型转换")]),t._v("再应用")]),t._v(" "),s("li",[t._v("判断相等时使用 === 而不是 ==")])])])}),[],!1,null,null,null);s.default=e.exports}}]);