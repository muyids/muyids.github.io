(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{937:function(t,a,s){"use strict";s.r(a);var v=s(14),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("数据结构常见考察知识点：链表、栈、队列、散列表（哈希表）、二叉树、二叉搜索树（BST）、字典树、红黑树、跳表、霍夫曼树、有序字典、KMP 字符串匹配等")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%93%88%E5%B8%8C%E8%A1%A8"}},[t._v("哈希表")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#AVL%E6%A0%91"}},[t._v("AVL 树")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BA%A2%E9%BB%91%E6%A0%91"}},[t._v("红黑树")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#B-%E6%A0%91"}},[t._v("B-树")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#B+%E6%A0%91"}},[t._v("B+树")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%B7%B3%E8%A1%A8"}},[t._v("跳表")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#LRU%E7%AE%97%E6%B3%95"}},[t._v("LRU 算法")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#LFU%E7%AE%97%E6%B3%95"}},[t._v("LFU 算法")])])]),t._v(" "),a("h2",{attrs:{id:"哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[t._v("#")]),t._v(" 哈希表")]),t._v(" "),a("p",[t._v("如何解决哈希冲突")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("开放定址法（再散列法）")]),t._v(" "),a("blockquote",[a("p",[t._v("当关键字 key 的哈希地址 p=H（key）出现冲突时，以 p 为基础，产生另一个哈希地址 p1，如果 p1 仍然冲突，再以 p 为基础，产生另一个哈希地址 p2，…，直到找出一个不冲突的哈希地址 pi ，将相应元素存入其中。这种方法有一个通用的再散列函数形式："),a("code",[t._v("Hi=(H(key)+di）%m (i=1，2，…，n)")])])])]),t._v(" "),a("li",[a("p",[t._v("链地址法；哈希表的第 i 个单元中保存单链表的头指针")])])]),t._v(" "),a("p",[t._v("开放定址法，需要开辟连续的内存空间，以进行再散列函数的计算")]),t._v(" "),a("h2",{attrs:{id:"avl-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avl-树"}},[t._v("#")]),t._v(" AVL 树")]),t._v(" "),a("p",[t._v("BST(binary search/sort tree)：二叉查找/搜索/排序树 ，满足 左节点 <= 根 <= 右节点；")]),t._v(" "),a("p",[t._v("AVL 树：平衡的 BST 树，即平衡二叉树")]),t._v(" "),a("p",[t._v("平衡二叉树的目的：为了减少二叉查找树层次，提高查找速度")]),t._v(" "),a("p",[t._v("平衡二叉树的常用实现方法：AVL 树、红黑树、替罪羊树、Treap、伸展树等")]),t._v(" "),a("p",[t._v("AVL 树的特征：")]),t._v(" "),a("ul",[a("li",[t._v("空树 或左右两个子树的高度差(平衡因子)的绝对值不超过 1，")]),t._v(" "),a("li",[t._v("并且左右两个子树都是一棵平衡二叉树")]),t._v(" "),a("li",[t._v("同时，平衡二叉树必定是二叉搜索树，反之则不一定")])]),t._v(" "),a("h3",{attrs:{id:"旋转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[t._v("#")]),t._v(" 旋转")]),t._v(" "),a("p",[t._v("所谓的左旋和右旋都是以子树为原点的：如 b 是 a 的子树，那么旋转就围绕 b 来进行。")]),t._v(" "),a("ul",[a("li",[t._v("如果 b 是 a 的左子树，那么就围绕 b 将 a 向右旋转，看着就像是 a 直接掉下来了，掉成了 b 的右子树。")]),t._v(" "),a("li",[t._v("如果 b 是 a 的右子树，那么就围绕 b 将 a 向左旋转，看着就像是 a 直接掉下来了，掉成了 b 的左子树。")])]),t._v(" "),a("h3",{attrs:{id:"插入算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入算法"}},[t._v("#")]),t._v(" 插入算法")]),t._v(" "),a("p",[t._v("插入节点的 4 种情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/avl-insert-node.png",alt:"插入算法"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("插入方式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("旋转方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 a 的左子树根节点的左子树上插入节点而破坏平衡")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("右旋转")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 a 的右子树根节点的右子树上插入节点而破坏平衡")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("左旋转")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 a 的左子树根节点的右子树上插入节点而破坏平衡")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("先左旋后右旋")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 a 的右子树根节点的左子树上插入节点而破坏平衡")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("先右旋后左旋")])])])]),t._v(" "),a("h3",{attrs:{id:"删除算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除算法"}},[t._v("#")]),t._v(" 删除算法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/avl-delete-node.jpg",alt:"删除算法"}})]),t._v(" "),a("h2",{attrs:{id:"红黑树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),a("p",[t._v("红黑树是一种自平衡的二叉搜索树，为了解决极端情况（树非常倾斜，不够平衡）下"),a("strong",[t._v("二叉搜索树的搜索效率问题")])]),t._v(" "),a("h3",{attrs:{id:"红黑树的特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#红黑树的特征"}},[t._v("#")]),t._v(" 红黑树的特征")]),t._v(" "),a("ul",[a("li",[t._v("节点分为黑色和红色")]),t._v(" "),a("li",[t._v("根节点是黑色")]),t._v(" "),a("li",[t._v("Null 节点是黑色(Null 叶子节点)")]),t._v(" "),a("li",[t._v("如果一个节点是红的，他的子节点一定是黑的")]),t._v(" "),a("li",[t._v("节点到该节点子孙节点的路径上拥有相同数目的黑节点")])]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("有序集合")]),t._v("：编程语言的 STL 库中的一些容器，比如 Java 的 TreeMap, C++的 map,set，Javascript ES6 中的 map 等")]),t._v(" "),a("li",[a("strong",[t._v("linux 进程调度")]),t._v("：用红黑树减小选择下一个可运行进程，以及插入一个进程的开销")]),t._v(" "),a("li",[a("strong",[t._v("一致性 hash 算法")]),t._v("：查找下一个虚节点位置")])]),t._v(" "),a("h3",{attrs:{id:"插入算法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入算法-2"}},[t._v("#")]),t._v(" 插入算法")]),t._v(" "),a("ol",[a("li",[t._v("红黑树的插入节点总是设为红节点")]),t._v(" "),a("li",[t._v("插入节点")]),t._v(" "),a("li",[t._v('通过"旋转和重新着色"等一系列来修正该树，使之重新成为一棵红黑树。')])]),t._v(" "),a("h3",{attrs:{id:"删除算法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除算法-2"}},[t._v("#")]),t._v(" 删除算法")]),t._v(" "),a("ol",[a("li",[t._v("将红黑树当作一颗二叉查找树，将该节点从二叉查找树中删除；")]),t._v(" "),a("li",[t._v('通过"旋转和重新着色"等一系列来修正该树，使之重新成为一棵红黑树。')])]),t._v(" "),a("h2",{attrs:{id:"跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[t._v("#")]),t._v(" 跳表")]),t._v(" "),a("p",[t._v("跳表：一种"),a("strong",[t._v("链表加多级索引")]),t._v("的结构")]),t._v(" "),a("p",[t._v("本质：跳表是一种"),a("strong",[t._v("支持二分查找的有序链表")])]),t._v(" "),a("h3",{attrs:{id:"跳表的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳表的结构"}},[t._v("#")]),t._v(" 跳表的结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/jump-linked-list.png",alt:"跳表"}})]),t._v(" "),a("p",[t._v("查找某个数据的时候需要的时间复杂度为 O(n)")]),t._v(" "),a("h3",{attrs:{id:"redis-中的有序集合是用跳表实现的-为什么不用红黑树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-中的有序集合是用跳表实现的-为什么不用红黑树"}},[t._v("#")]),t._v(" redis 中的有序集合是用跳表实现的，为什么不用红黑树")]),t._v(" "),a("p",[t._v("分析下 Redis 的有序集合支持的操作：")]),t._v(" "),a("ol",[a("li",[t._v("插入元素: 都是 O(logN)")]),t._v(" "),a("li",[t._v("删除元素: 都是 O(logN)")]),t._v(" "),a("li",[t._v("查找元素: 都是 O(logN)")]),t._v(" "),a("li",[t._v("有序输出所有元素: 跳表效率更高 O(N),红黑树 O(NlogN)")]),t._v(" "),a("li",[t._v("查找区间内所有元素\n"),a("ul",[a("li",[t._v("在跳表中，要查找区间的元素，我们只要定位到两个区间端点在最低层级的位置，然后按顺序遍历元素就可以了，非常高效。")]),t._v(" "),a("li",[t._v("红黑树只能定位到端点后，再从首位置开始每次都要查找后继节点，相对来说是比较耗时的。")])])])]),t._v(" "),a("p",[t._v("综合比较：")]),t._v(" "),a("ul",[a("li",[t._v("在做范围查找的时候，平衡树比 skiplist 操作要复杂")]),t._v(" "),a("li",[t._v("平衡树的插入和删除操作可能引发子树的调整，逻辑复杂，而 skiplist 的插入和删除只需要修改相邻节点的指针，操作简单又快速")]),t._v(" "),a("li",[t._v("从内存占用上来说，skiplist 更节省内存，指针平均数量少。一般来说，平衡树每个节点包含 2 个指针（分别指向左右子树），而 skiplist 每个节点包含的指针数目平均为 1/(1-p)，具体取决于参数 p 的大小。如果像 Redis 里的实现一样，取 p=1/4，那么平均每个节点包含 1.33 个指针，比平衡树更有优势。")]),t._v(" "),a("li",[t._v("从算法实现难度上来比较，skiplist 比平衡树要简单得多")])]),t._v(" "),a("h3",{attrs:{id:"redis-中的有序集合是用跳表实现的-为什么不用-b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-中的有序集合是用跳表实现的-为什么不用-b-树"}},[t._v("#")]),t._v(" redis 中的有序集合是用跳表实现的，为什么不用 B+树")]),t._v(" "),a("ul",[a("li",[t._v("B+树适合磁盘 IO，redis 是内存数据库，logN 的时间复杂度可以接受")]),t._v(" "),a("li",[t._v("B+树的节点中数据空间是连续的，对于开辟内存来说，要求较高")]),t._v(" "),a("li",[t._v("从算法实现难度上来比较，跳表实现更简单")])]),t._v(" "),a("h2",{attrs:{id:"b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B-树")]),t._v(" "),a("p",[t._v("多路查找树")]),t._v(" "),a("blockquote",[a("p",[t._v("定义：B-树是一类树，包括"),a("strong",[t._v("B-树、B+树、B*树")]),t._v("等，是一棵自平衡的搜索树，它类似普通的平衡二叉树，不同的一点是 B-树允许每个节点有更多的子节点。B-树是专门为外部存储器设计的，如磁盘，它对于读取和写入大块数据有良好的性能，所以一般被用在文件系统及数据库中。")])]),t._v(" "),a("p",[t._v("定义只需要知道"),a("strong",[t._v("B-树允许每个节点有更多的子节点")]),t._v("即可。"),a("strong",[t._v("子节点数量一般在上千")]),t._v("，具体数量依赖外部存储器的特性。")]),t._v(" "),a("p",[t._v("用来搜索的平衡二叉树有很多，如 AVL 树、红黑树等，查询 IO 次数较多，从设计上无法“迎合”磁盘，只适用于内存操作。")]),t._v(" "),a("p",[t._v("B-树："),a("strong",[t._v("减少磁盘 IO 次数")])]),t._v(" "),a("h3",{attrs:{id:"应用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-2"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("常用于"),a("strong",[t._v("数据库")]),t._v("和"),a("strong",[t._v("操作系统的文件系统")]),t._v("中")]),t._v(" "),a("h3",{attrs:{id:"b-树特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树特征"}},[t._v("#")]),t._v(" B-树特征")]),t._v(" "),a("p",[t._v("一个 m 阶的 B-树具有如下几个特征：")]),t._v(" "),a("ol",[a("li",[t._v("根结点至少有两个子女")]),t._v(" "),a("li",[t._v("每个中间节点都至少包含 ceil(m / 2)个孩子，最多有 m 个孩子")]),t._v(" "),a("li",[t._v("每一个叶子节点都包含 k-1 个元素，其中 m/2 <= k <= m")]),t._v(" "),a("li",[t._v("所有的叶子结点都位于同一层")]),t._v(" "),a("li",[t._v("每个节点中的元素从小到大排列，节点当中 k-1 个元素正好是 k 个孩子包含的元素的值域分划")])]),t._v(" "),a("h3",{attrs:{id:"b-树与普通二叉搜索树的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树与普通二叉搜索树的区别"}},[t._v("#")]),t._v(" B-树与普通二叉搜索树的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("高度形态")]),t._v(" "),a("blockquote",[a("p",[t._v("平衡二叉树窄高，B-树扁平")])])]),t._v(" "),a("li",[a("p",[t._v("分支数量")]),t._v(" "),a("blockquote",[a("p",[t._v("平衡二叉树，只有二叉\nm 阶的 B-树 有 [ceil(m / 2)，m]叉")])])]),t._v(" "),a("li",[a("p",[t._v("插入删除操作")]),t._v(" "),a("blockquote",[a("p",[t._v("平衡二叉树，后若不满足平衡条件则进行"),a("strong",[t._v("旋转")]),t._v("操作\nB-树中，插入删除后不满足条件则进行"),a("strong",[t._v("分裂及合并操作")]),t._v("；元素"),a("strong",[t._v("自底向上")]),t._v("插入。")])])]),t._v(" "),a("li",[a("p",[t._v("场景")]),t._v(" "),a("blockquote",[a("p",[t._v("平衡二叉树适 IO 次数多，适用于内存操作\nB-树 IO 次数少，对于磁盘，连续空间寻址效率高，适用于磁盘查找")])])])]),t._v(" "),a("h3",{attrs:{id:"b-树的查找算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树的查找算法"}},[t._v("#")]),t._v(" B-树的查找算法")]),t._v(" "),a("p",[t._v("同一节点上，地址空间连续，单调递增，使用"),a("strong",[t._v("二分查找算法")])]),t._v(" "),a("h3",{attrs:{id:"b-树-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树-2"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),a("p",[t._v("B+树是 B-树的变种，区别在于:")]),t._v(" "),a("ul",[a("li",[t._v("在 B+树中，key 的副本存储在内部节点，真正的 key 和 data 存储在叶子节点上")]),t._v(" "),a("li",[t._v("n 个 key 值的节点指针域为 n 而不是 n+1；")]),t._v(" "),a("li",[a("strong",[t._v("只有叶子节点才会有数据")]),t._v("，非叶结点仅具有索引作用")]),t._v(" "),a("li",[t._v("为了增加"),a("strong",[t._v("区间访问性")]),t._v("，有的 B+树的所有叶结点构成一个有序链表，可以按照关键码排序的次序遍历全部记录。\nB+树比起 B-树")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("查询时间复杂度")]),t._v(": B+树内节点不存储数据，所有 data 存储在叶节点导致固定为 "),a("code",[t._v("log n")]),t._v("。而 B-树查询时间复杂度不固定，与 key 在树中的位置有关，最好为 O(1)。")]),t._v(" "),a("li",[a("strong",[t._v("区间查找")]),t._v(": B+树叶节点两两相连可大大增加区间访问性，可使用在范围查询等;B-树区间查找需要查询多个节点，并且进行组合，效率更低")]),t._v(" "),a("li",[t._v("由于内节点无 data 域，每个节点"),a("strong",[t._v("能索引的范围更大更精确")]),t._v("；"),a("strong",[t._v("B+树更适合外部存储")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"为什么-mongodb-索引选择-b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-mongodb-索引选择-b-树"}},[t._v("#")]),t._v(" 为什么 MongoDB 索引选择 B-树")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB 是文档型的数据库，是一种 nosql，它使用类 Json 格式保存数据，属于"),a("strong",[t._v("聚合型数据库")]),t._v("。\n"),a("blockquote",[a("p",[t._v("键值数据库也属于聚合型数据库，比如 redis\n相对于 Mysql 关系型数据库，MongoDB 这类 nosql 适用于"),a("strong",[t._v("数据模型简单，性能要求高")]),t._v("的场合")])])])]),t._v(" "),a("p",[t._v("尽可能少的磁盘 IO 是提高性能的有效手段。MongoDB 是"),a("strong",[t._v("聚合型数据库")]),t._v("，而 B-树恰好 "),a("strong",[t._v("key 和 data 域聚合在一起")]),t._v("，找到了 key 就不需要继续索引 data 了，相比 B+树，B-树对"),a("strong",[t._v("聚合型数据库")]),t._v("更优。")]),t._v(" "),a("h2",{attrs:{id:"lru-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lru-算法"}},[t._v("#")]),t._v(" LRU 算法")]),t._v(" "),a("p",[t._v("LRU（The Least Recently Used，最近最久未使用算法）是一种常见的缓存算法，在很多分布式缓存系统（如 Redis, Memcached）中都有广泛使用。")]),t._v(" "),a("p",[t._v("LRU 算法的思想是：如果一个数据在最近一段时间没有被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最久没有访问的数据最先被置换（淘汰）。")]),t._v(" "),a("p",[t._v("LRU 算法的描述：设计一种缓存结构，该结构在构造时确定大小，假设大小为 K，并有两个功能：")]),t._v(" "),a("ul",[a("li",[t._v("set(key,value)：将记录(key,value)插入该结构。当缓存满时，将最久未使用的数据置换掉。")]),t._v(" "),a("li",[t._v("get(key)：返回 key 对应的 value 值。\n实现：最朴素的思想就是用数组+时间戳的方式，不过这样做效率较低。因此，我们可以用双向链表（LinkedList）+哈希表（HashMap）实现（链表用来表示位置，哈希表用来存储和查找），在 Java 里有对应的数据结构 LinkedHashMap。")])]),t._v(" "),a("p",[t._v("LinkedHashMap")]),t._v(" "),a("p",[t._v("利用 Java 的 LinkedHashMap 用非常简单的代码来实现基于 LRU 算法的 Cache 功能")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 简单用LinkedHashMap来实现的LRU算法的缓存\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cacheSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cacheSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cacheSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEldestEntry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" eldest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cacheSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"lfu-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lfu-算法"}},[t._v("#")]),t._v(" LFU 算法")]),t._v(" "),a("p",[t._v("LFU（Least Frequently Used，最近最不经常使用算法）也是一种常见的缓存算法。")]),t._v(" "),a("p",[t._v("顾名思义，LFU 算法的思想是：如果一个数据在最近一段时间很少被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最小频率访问的数据最先被淘汰。")]),t._v(" "),a("p",[t._v("LFU 算法的描述：")]),t._v(" "),a("p",[t._v("设计一种缓存结构，该结构在构造时确定大小，假设大小为 K，并有两个功能：")]),t._v(" "),a("ul",[a("li",[t._v("set(key,value)：将记录(key,value)插入该结构。当缓存满时，将访问频率最低的数据置换掉。")]),t._v(" "),a("li",[t._v("get(key)：返回 key 对应的 value 值。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);