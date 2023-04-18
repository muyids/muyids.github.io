(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{394:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("分支规范是多人协作开发的基础")])]),a._v(" "),s("h1",{attrs:{id:"没有分支规范带来的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有分支规范带来的问题"}},[a._v("#")]),a._v(" 没有分支规范带来的问题")]),a._v(" "),s("p",[a._v("如果没有明确的分支规范，在开发的过程中经常会遇到如下几种典型的问题：")]),a._v(" "),s("h2",{attrs:{id:"一、线上出现-bug-时-找不到干净的分支修改-bug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、线上出现-bug-时-找不到干净的分支修改-bug"}},[a._v("#")]),a._v(" 一、线上出现 bug 时，找不到干净的分支修改 bug")]),a._v(" "),s("p",[a._v("大家在平时开发时，都是在 master 分支（或者其他用于上线的分支）上直接开发，导致 master 分支上有很多没有上线的代码。如果这时线上发现一个紧急的 bug，开发人员往往找不到一个干净的分支开发，使用 master 分支修改 bug 会导致未经测试的代码被带上线；使用其他分支开发，又可能会漏掉一些已经上线的功能。")]),a._v(" "),s("h2",{attrs:{id:"二、多个功能同时开发-一个功能不能上线-所有功能都上不了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、多个功能同时开发-一个功能不能上线-所有功能都上不了"}},[a._v("#")]),a._v(" 二、多个功能同时开发，一个功能不能上线，所有功能都上不了")]),a._v(" "),s("p",[a._v("大家在平时开发时，经常把同时开发的多个功能的代码写在一个分支里。若这些功能都能正常测试上线，那还没有什么问题；若有一个功能因为某种原因不能上线，其他功能还要继续上线的时候，因为代码都写在一起，往往很难将不上线的功能剥离。")]),a._v(" "),s("h2",{attrs:{id:"三、上线时-不小心带上了不该上线的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、上线时-不小心带上了不该上线的代码"}},[a._v("#")]),a._v(" 三、上线时，不小心带上了不该上线的代码")]),a._v(" "),s("p",[a._v("原因和上一个问题相同，都是由于多个功能的代码在一个分支上导致的。")]),a._v(" "),s("h1",{attrs:{id:"分支规范关键原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支规范关键原则"}},[a._v("#")]),a._v(" 分支规范关键原则")]),a._v(" "),s("p",[a._v("为了解决上边提到的这些问题，我们需要坚持如下几个原则：")]),a._v(" "),s("ol",[s("li",[a._v("将 master 分支作为上线分支，并且保持随时可以上线状态**；**")]),a._v(" "),s("li",[a._v("任何功能开发（包括新功能、改 bug 等所有开发），都需要在独立的分支上**；**")])]),a._v(" "),s("h1",{attrs:{id:"具体的做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体的做法"}},[a._v("#")]),a._v(" 具体的做法")]),a._v(" "),s("p",[a._v("为了将上述原则落地，我们需要制定具体的做法。")]),a._v(" "),s("p",[a._v("具体的做法可以归纳为如下图所示的流程。需要注意的是，图中所有的合并都需要通过提交 MR 的方式进行，不能直接使用 merge 命令合并。")]),a._v(" "),s("iframe",{staticClass:"gliffy-html5-container full-width",staticStyle:{"box-sizing":"border-box",display:"block","z-index":"0",width:"805px",visibility:"visible",position:"relative",left:"0px",overflow:"hidden",background:"rgb(255, 255, 255)",height:"275px"},attrs:{id:"gliffy-html5-49292249-7795",src:"https://wiki.zhaopin.com/plugins/gliffy/viewer.action?wmode=opaque&pageId=3214434",width:"100%",height:"270","data-id":"49292249","data-version":"0","data-scale":"0.8592911","data-html5-enabled":"true",frameborder:"0"}}),a._v(" "),s("p",[a._v("其中，”feature/simple-function“分支流程适用于简单功能的开发，”feature/complex-function“分支流程适用于复杂功能的开发。")]),a._v(" "),s("p",[a._v("下面，我们将对图中的一些细节进行解释。")]),a._v(" "),s("h2",{attrs:{id:"一、分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、分支"}},[a._v("#")]),a._v(" 一、分支")]),a._v(" "),s("p",[a._v("大家可以看到，图中包含若干种不同名称的分支，分别如下：")]),a._v(" "),s("h3",{attrs:{id:"_1、master-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、master-分支"}},[a._v("#")]),a._v(" 1、master 分支")]),a._v(" "),s("p",[s("code",[a._v("master")]),a._v(" 分支，即线上分支，是上线才会用到的分支。为了保证线上分支代码干净，需要保护 master 分支，并遵循以下原则：")]),a._v(" "),s("ol",[s("li",[a._v("不允许任何人 push 代码到 master 分支；")]),a._v(" "),s("li",[a._v("若要向 master 分支添加代码，只能通过提交 Merge Request（简称 MR）到 master 分支的方式；")]),a._v(" "),s("li",[a._v("MR 中的代码，必须经过代码 review，且经过预上线环境验证后，才能 merge 到 master 分支；")])]),a._v(" "),s("p",[a._v("总体原则：合并到 master 上的代码是可以随时上线的，且不能撤销（除非非常特殊情况下，通过反向回退代码实现）")]),a._v(" "),s("h3",{attrs:{id:"_2、feature-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、feature-分支"}},[a._v("#")]),a._v(" 2、feature 分支")]),a._v(" "),s("p",[a._v("feature 用于功能开发，其命名格式为：feature/XXX，其中 XXX 为功能的名称。feature 分支从 master 分支开出，合并回 qa、release 分支，开发完成一段时间后（一般是三个月），gitlab 会将分支归类到 Stale branches 中，此时就可以删除。")]),a._v(" "),s("h3",{attrs:{id:"_3、fix-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、fix-分支"}},[a._v("#")]),a._v(" 3、fix 分支")]),a._v(" "),s("p",[a._v("fix 分支用于修复线上 bug，其命名格式为：fix/XXX，其中 XXX 为 bug 的名称。由于它和 feature 分支在流程上几乎一致，所以没有在图上单独画出来。fix 分支也是从 master 分支开出，合并回 qa、release 分支，开发完成一段时间后（一般是三个月），gitlab 会将分支归类到 Stale branches 中，此时就可以删除。")]),a._v(" "),s("p",[a._v("fix 分支的开发流程和 feature 分支基本一致，在下面的开发流程讨论中，仅讨论 feature 分支，将其中 feature 分支换成 fix 分支即可得到 fix 分支的流程。")]),a._v(" "),s("h3",{attrs:{id:"_4、qa-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、qa-分支"}},[a._v("#")]),a._v(" 4、qa 分支")]),a._v(" "),s("p",[a._v("qa 分支用于 QA 测试，其命名格式为：qa/yyyyMMdd，其中 yyyyMMdd 为测试日期，若一天内有多个测试分支，可以在后面追加序号。qa 分支从 master 分支开出，一般不合并到其他分支。除测试过程中需要使用的内容外，不应提交任何代码，测试完成后即可销毁。")]),a._v(" "),s("h3",{attrs:{id:"_5、release-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、release-分支"}},[a._v("#")]),a._v(" 5、release 分支")]),a._v(" "),s("p",[a._v("release 分支用于预上线测试，其命名格式为：release/yyyyMMdd，其中 yyyyMMdd 为上线日期。release 分支从 master 分支开出，合并回 master 分支。除测试前合并要测试内容外，不应提交任何代码，测试完成并合并到 master 后即可销毁。")]),a._v(" "),s("h2",{attrs:{id:"二、开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、开发流程"}},[a._v("#")]),a._v(" 二、开发流程")]),a._v(" "),s("p",[a._v("开发流程主要包括：创建分支、开发、QA 测试、预上线测试、上线，下面逐个说明各个流程。")]),a._v(" "),s("h3",{attrs:{id:"_1、创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建分支"}},[a._v("#")]),a._v(" 1、创建分支")]),a._v(" "),s("p",[a._v("任何一个功能的开发，都需要基于 master 分支新建一个 feature 分支，")]),a._v(" "),s("p",[a._v("若开发周期比较长，可选择在中途合并 master 的代码到开发分支上，以减少后期代码合并时的冲突风险。通常情况下，若 master 分支上合并了新的代码并上线稳定后，都需要做一次这样的合并。")]),a._v(" "),s("h3",{attrs:{id:"_2、开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、开发"}},[a._v("#")]),a._v(" 2、开发")]),a._v(" "),s("p",[a._v("通常情况下，我们可以在新的分支上进行代码开发，开发完成之后向 qa 分支提交 MR，同时在这个 MR 中进行 code review。")]),a._v(" "),s("p",[a._v("若需要开发的功能复杂，可以预期到无法在一个 MR 中 review 全部代码，我们就需要分阶段逐步开发。具体的流程如下：")]),a._v(" "),s("p",[a._v("首先规划好开发阶段，然后按照开发阶段，从原始的 feature 分支出发，每个阶段开一个新分支，并在新分支合并回原始 feature 分支的 MR 上，进行 code review，整体的流程可以参见上图中的“feature/complex-function”分支。这样逐步的开发并 review 全部的代码，直至最终向 qa 分支提交 MR，进入测试阶段。")]),a._v(" "),s("h3",{attrs:{id:"_3、qa-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、qa-测试"}},[a._v("#")]),a._v(" 3、QA 测试")]),a._v(" "),s("p",[a._v("开发完成后，需要在测试环境上进行测试。QA 环境 jenkins 可选择部署的分支规则为：qa/XXX。")]),a._v(" "),s("p",[a._v("若在测试过程中发现问题，需要在原有的 feature 分支上修改，然后提交 MR 到 qa 分支并 review。")]),a._v(" "),s("p",[a._v("由于测试环境只有一个，因此在部署时需要协调好团队间测试环境的分配，不要因为自己的部署影响别人测试。典型地，如果有多人需要同时测试，可创建一个 qa 分支，把多人的代码合并到该分支上，再进行部署，测试完成后，该 qa 分支的生命周期即结束了，需手工清理。")]),a._v(" "),s("h3",{attrs:{id:"_4、预上线测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、预上线测试"}},[a._v("#")]),a._v(" 4、预上线测试")]),a._v(" "),s("p",[a._v("QA 环境测试通过后，即进入预上线测试环节。预上线环境 jenkins 可选择部署的分支规则为：release/XXX。")]),a._v(" "),s("p",[a._v("在创建预上线的 release 分支时，要求以 master 最新代码为基准，合并一个或多个需要上线的 feature。当测试通过后，需根据 master 分支是否有改动来决定下一步操作：")]),a._v(" "),s("ol",[s("li",[a._v("若有改动，需重新进行回归测试。")]),a._v(" "),s("li",[a._v("若没有改动，把该 release 合并到 master，等待上线。是否合并到 master 由具体需求决定，但一但合并到 master，原则上是不能回退的。\n若在测试过程中发现问题，需要在原有的 feature 分支上修改，然后提交 MR 到 release 分支并 review。")])]),a._v(" "),s("p",[a._v("与测试环境类似，由于只有一个预上线环境，也需要协调好团队间的预上线环境的分配。")]),a._v(" "),s("h3",{attrs:{id:"_5、上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、上线"}},[a._v("#")]),a._v(" 5、上线")]),a._v(" "),s("p",[a._v("上线流程很简单，只需以 master 最新版为基础，重新构建，并做相应线上回归测试即可。")]),a._v(" "),s("h2",{attrs:{id:"三、相关工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、相关工具"}},[a._v("#")]),a._v(" 三、相关工具")]),a._v(" "),s("p",[a._v("按照 OPS 的要求，在预上线测试和线上发布过程中，需要给分支打 tag。以下是打 tag 的脚本：")]),a._v(" "),s("p",[a._v("Linux/Mac："),s("a",{attrs:{href:"https://wiki.zhaopin.com/download/attachments/3214434/tag?version=1&modificationDate=1553832319000&api=v2",target:"_blank",rel:"noopener noreferrer"}},[a._v("tag"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TAG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" status"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print substr($0, 11)}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y%m%d"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LAST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("DATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MINER_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("LAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUG_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("LAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${BUG_VERSION}")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MINER_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUG_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("elif")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${BUG_VERSION}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MINER_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("${MINER_VERSION} "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUG_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUG_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("${BUG_VERSION} "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEW_TAG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TAG}")]),a._v("-v1."),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MINER_VERSION}")]),a._v("."),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${BUG_VERSION}")]),a._v("-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DATE}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NEW_TAG}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NEW_TAG}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("Windows："),s("a",{attrs:{href:"https://wiki.zhaopin.com/download/attachments/3214434/tag.py?version=1&modificationDate=1553832333000&api=v2",target:"_blank",rel:"noopener noreferrer"}},[a._v("tag.py"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("在代码根路径位置执行“tag”命令，该脚本会按照当前分支名称，自动在当前分支上打上符合 OPS 标准的 tag。")])])}),[],!1,null,null,null);s.default=r.exports}}]);