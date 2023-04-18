(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{685:function(e,s,t){"use strict";t.r(s);var a=t(14),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubectl-本地连接-k8s-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-本地连接-k8s-集群"}},[e._v("#")]),e._v(" Kubectl 本地连接 k8s 集群")]),e._v(" "),s("h2",{attrs:{id:"安装-kubectl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubectl"}},[e._v("#")]),e._v(" 安装 kubectl")]),e._v(" "),s("p",[e._v("macOS 下直接使用 homebrew 管理工具进行安装：")]),e._v(" "),s("blockquote",[s("p",[e._v("$ brew install kubernetes-cli")])]),e._v(" "),s("p",[e._v("确认是否安装成功：")]),e._v(" "),s("blockquote",[s("p",[e._v("$ kubectl version")])]),e._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("kubectl config xxx")]),e._v("指令配置三部分内容。")]),e._v(" "),s("h3",{attrs:{id:"设置集群信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置集群信息"}},[e._v("#")]),e._v(" 设置集群信息")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 配置集群名称与服务地址\nkubectl config --kubeconfig=${HOME}/.kube/config set-cluster cluster-name --server=https://xxx/k8s/clusters/c-f22sq --insecure-skip-tls-verify\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"设置用户信息-用户连接集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置用户信息-用户连接集群"}},[e._v("#")]),e._v(" 设置用户信息,用户连接集群")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 设置一个管理 标识为 k8s-cluster ，并设置访问凭证。此处使用 用户名-密码 的验证方式\nkubectl config --kubeconfig=${HOME}/.kube/config set-credentials k8s-cluster --username=ml --password=CiKB3gzcfC0LkoSPEP&Ty\n\nkubectl config --kubeconfig=${HOME}/.kube/config set-credentials k8s-cluster --client-certificate=fake-cert-file --client-key=fake-key-seefile\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"设置-context-信息-用于建立用户和集群的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-context-信息-用于建立用户和集群的关系"}},[e._v("#")]),e._v(" 设置 context 信息, 用于建立用户和集群的关系.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 设置一个名为 k8s-cluster 的配置，使用 cluster-name 集群与 k8s-cluster 用户的上下文\nkubectl config --kubeconfig=${HOME}/.kube/config set-context k8s-cluster --cluster=ali-yinli-k8s --namespace=ml --user=ml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"切换默认的-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换默认的-context"}},[e._v("#")]),e._v(" 切换默认的 context")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 启用 k8s-cluster  为默认上下文\nkubectl config --kubeconfig=${HOME}/.kube/config use-context k8s-cluster\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"删除信息相关操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除信息相关操作"}},[e._v("#")]),e._v(" 删除信息相关操作")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("要删除用户，可以运行 kubectl --kubeconfig=${HOME}/.kube/config config unset users.<name>\n要删除集群，可以运行 kubectl --kubeconfig=${HOME}/.kube/config config unset clusters.<name>\n要删除上下文，可以运行 kubectl --kubeconfig=${HOME}/.kube/config config unset contexts.<name>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"配置文件地址-可以直接修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件地址-可以直接修改"}},[e._v("#")]),e._v(" 配置文件地址(可以直接修改)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("${USER_HOME}/.kube/config\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);