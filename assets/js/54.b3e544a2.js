(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{327:function(v,_,t){"use strict";t.r(_);var l=t(14),a=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h4",{attrs:{id:"cap-理论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论"}},[v._v("#")]),v._v(" CAP 理论")]),v._v(" "),_("p",[v._v("分布式的理论基础")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Consistency (一致性)：")]),v._v(" "),_("blockquote",[_("p",[v._v("所有节点在同一时间数据完全一致，强一致性")])])]),v._v(" "),_("li",[_("p",[v._v("Availability (可用性)")]),v._v(" "),_("blockquote",[_("p",[v._v("服务一直可用")])])]),v._v(" "),_("li",[_("p",[v._v("Partition Tolerance (分区容错性):")]),v._v(" "),_("blockquote",[_("p",[v._v("分布式系统在遇到某节点或网络分区故障的时候，仍然能够对外提供满足一致性和可用性的服务。")])])])]),v._v(" "),_("p",[v._v("注意：CAP 不能够同时满足")]),v._v(" "),_("p",[_("strong",[v._v("CP 和 AP")])]),v._v(" "),_("blockquote",[_("p",[v._v("分区容错是必须保证的，当发生网络分区的时候，如果要继续服务，那么强一致性和可用性必须做出取舍")])]),v._v(" "),_("h4",{attrs:{id:"base-理论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#base-理论"}},[v._v("#")]),v._v(" Base 理论")]),v._v(" "),_("p",[v._v("BASE 理论是对 CAP 中一致性和可用性权衡的结果；")]),v._v(" "),_("p",[v._v("BASE 理论的核心思想是：即使无法做到强一致性，但可以使系统达到最终一致性。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Basically Available（基本可用）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("响应时间上的损失：正常情况下，处理用户请求需要 0.5s 返回结果，但是由于系统出现故障，处理")]),v._v(" "),_("p",[v._v("用户请求的时间变为 3 s")])]),v._v(" "),_("li",[_("p",[v._v("系统功能上的损失：正常情况下，用户可以使用系统的全部功能，但是由于系统访问量突然剧增，")]),v._v(" "),_("p",[v._v("系统的部分非核心功能无法使用。")])])])]),v._v(" "),_("li",[_("p",[v._v("Soft State（软状态）")]),v._v(" "),_("blockquote",[_("p",[v._v("数据同步允许一定的延迟")])])]),v._v(" "),_("li",[_("p",[v._v("Eventually Consistent（最终一致性）")]),v._v(" "),_("blockquote",[_("p",[v._v("系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态，不要")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);