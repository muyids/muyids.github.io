(window.webpackJsonp=window.webpackJsonp||[]).push([[725],{1e3:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"主机清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主机清单"}},[s._v("#")]),s._v(" 主机清单")]),s._v(" "),a("p",[s._v("如何管理主机？")]),s._v(" "),a("p",[s._v("通过分组的方式")]),s._v(" "),a("p",[s._v("主机清单示例：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nwebserver1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myuser "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mypassword\nwebserver2 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myuser "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mypassword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"定义主机和组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义主机和组"}},[s._v("#")]),s._v(" 定义主机和组")]),s._v(" "),a("p",[s._v("Inventory 配置文件遵循的是 INI 文件风格，中括号表示组名，其支持将同一个主机加入到不同的组中，此外若主机没有使用默认的 SSH 的 22 端口，还可以在主机名字或者 IP 后面加上冒号来指定，#号为注释行")]),s._v(" "),a("p",[s._v("示例(编辑/etc/ansible/hosts 文件):")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义http_port的端口为80，配置maxRequestsPerChild(最大请求数)为801")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".192.129 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("808")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maxRequestsPerChild")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("801")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义http_port的端口为303，配置maxRequestsPerChild(最大请求数)为909")]),s._v("\nansible-node1 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("303")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maxRequestsPerChild")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("909")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"查看-ansible-中已经存在的主机组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-ansible-中已经存在的主机组"}},[s._v("#")]),s._v(" 查看 ansible 中已经存在的主机组")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("ansible-inventory")]),s._v(" 命令查看 ansible 中已经存在的主机组。该命令会列出所有已定义的主机组以及每个组中的主机。")]),s._v(" "),a("p",[s._v("下面是一个示例命令，用于列出所有主机组及其主机：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ansible-inventory --list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);