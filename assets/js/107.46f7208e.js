(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{380:function(t,_,v){"use strict";v.r(_);var e=v(14),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("是时候分享你的代码了，让编码变得社交化吧")]),t._v(" "),_("h1",{attrs:{id:"远程仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),_("p",[t._v("本地仓库和远程仓库的交互")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/img/git-api.png",alt:"img"}})]),t._v(" "),_("p",[t._v("远程仓库并不复杂, 在如今的云计算盛行的世界很容易把远程仓库想象成一个富有魔力的东西, 但实际上它们只是你的仓库在另个一台计算机上的拷贝。你可以通过因特网与这台计算机通信 —— 也就是增加或是获取提交记录")]),t._v(" "),_("p",[t._v("话虽如此, 远程仓库却有一系列强大的特性")]),t._v(" "),_("ul",[_("li",[t._v("首先也是最重要的的点, 远程仓库是一个强大的备份。本地仓库也有恢复文件到指定版本的能力, 但所有的信息都是保存在本地的。有了远程仓库以后，即使丢失了本地所有数据, 你仍可以通过远程仓库拿回你丢失的数据。")]),t._v(" "),_("li",[t._v("还有就是, 远程让代码社交化了! 既然你的项目被托管到别的地方了, 你的朋友可以更容易地为你的项目做贡献(或者拉取最新的变更)\n现在用网站来对远程仓库进行可视化操作变得越发流行了(像 "),_("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),_("OutboundLink")],1),t._v("), 但远程仓库"),_("strong",[t._v("永远")]),t._v("是这些工具的顶梁柱, 因此理解其概念非常的重要!")])]),t._v(" "),_("h2",{attrs:{id:"创建远程仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建远程仓库"}},[t._v("#")]),t._v(" 创建远程仓库")]),t._v(" "),_("p",[t._v("直到现在, 教程都聚焦于"),_("strong",[t._v("本地")]),t._v("仓库的操作（branch、merge、rebase 等等）。但我们现在需要学习远程仓库的操作 —— 我们需要一个配置这种环境的命令, 它就是 "),_("code",[t._v("git clone")]),t._v("。 从技术上来讲，"),_("code",[t._v("git clone")]),t._v(" 命令在真实的环境下的作用是在"),_("strong",[t._v("本地")]),t._v("创建一个远程仓库的拷贝（比如从 github.com）。 但在我们的教程中使用这个命令会有一些不同 —— 它会在远程创建一个你本地仓库的副本。显然这和真实命令的意思刚好相反，但是它帮咱们把本地仓库和远程仓库关联到了一起，在教程中就凑合着用吧。")]),t._v(" "),_("h1",{attrs:{id:"远程分支"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程分支"}},[t._v("#")]),t._v(" 远程分支")]),t._v(" "),_("p",[t._v("既然你已经看过 "),_("code",[t._v("git clone")]),t._v(" 命令了，咱们深入地看一下发生了什么。")]),t._v(" "),_("p",[t._v("你可能注意到的第一个事就是在我们的本地仓库多了一个名为 "),_("code",[t._v("o/main")]),t._v(" 的分支, 这种类型的分支就叫"),_("strong",[t._v("远程")]),t._v("分支。由于远程分支的特性导致其拥有一些特殊属性。")]),t._v(" "),_("p",[t._v("远程分支反映了远程仓库(在你上次和它通信时)的"),_("strong",[t._v("状态")]),t._v("。这会有助于你理解本地的工作与公共工作的差别 —— 这是你与别人分享工作成果前至关重要的一步.")]),t._v(" "),_("p",[t._v("远程分支有一个特别的属性，在你检出时自动进入分离 HEAD 状态。Git 这么做是出于不能直接在这些分支上进行操作的原因, 你必须在别的地方完成你的工作, （更新了远程分支之后）再用远程分享你的工作成果。")]),t._v(" "),_("h1",{attrs:{id:"从远程仓库获取数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库获取数据"}},[t._v("#")]),t._v(" 从远程仓库获取数据")]),t._v(" "),_("h2",{attrs:{id:"git-fetch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch"}},[t._v("#")]),t._v(" Git Fetch")]),t._v(" "),_("p",[t._v("Git 远程仓库相当的操作实际可以归纳为两点：向远程仓库传输数据以及从远程仓库获取数据。既然我们能与远程仓库同步，那么就可以分享任何能被 Git 管理的更新（因此可以分享代码、文件、想法、情书等等）。")]),t._v(" "),_("p",[t._v("本节课我们将学习如何从远程仓库获取数据 —— 命令如其名，它就是 "),_("code",[t._v("git fetch")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"git-fetch-不会做的事"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch-不会做的事"}},[t._v("#")]),t._v(" git fetch 不会做的事")]),t._v(" "),_("p",[_("code",[t._v("git fetch")]),t._v(" 并不会改变你本地仓库的状态。它不会更新你的 "),_("code",[t._v("main")]),t._v(" 分支，也不会修改你磁盘上的文件。")]),t._v(" "),_("p",[t._v("理解这一点很重要，因为许多开发人员误以为执行了 "),_("code",[t._v("git fetch")]),t._v(" 以后，他们本地仓库就与远程仓库同步了。它可能已经将进行这一操作所需的所有数据都下载了下来，但是"),_("strong",[t._v("并没有")]),t._v("修改你本地的文件。我们在后面的课程中将会讲解能完成该操作的命令 😄")]),t._v(" "),_("p",[t._v("所以, 你可以将 "),_("code",[t._v("git fetch")]),t._v(" 的理解为"),_("strong",[t._v("单纯的下载操作")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"git-pull"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),_("p",[t._v("既然我们已经知道了如何用 "),_("code",[t._v("git fetch")]),t._v(" 获取远程的数据, 现在我们学习如何将这些变化更新到我们的工作当中。")]),t._v(" "),_("p",[t._v("其实有很多方法的 —— 当远程分支中有新的提交时，你可以像合并本地分支那样来合并远程分支。也就是说就是你可以执行以下命令:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git cherry-pick o/main")])]),t._v(" "),_("li",[_("code",[t._v("git rebase o/main")])]),t._v(" "),_("li",[_("code",[t._v("git merge o/main")])]),t._v(" "),_("li",[t._v("等等")])])])}),[],!1,null,null,null);_.default=a.exports}}]);