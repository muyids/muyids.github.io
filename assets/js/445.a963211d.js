(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{718:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("https://min.io/")]),t._v(" "),a("p",[t._v("https://min.io/download#/linux")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/7101581935486615559",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot 整合 Minio 上传文件"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"minio-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio-安装"}},[t._v("#")]),t._v(" minio 安装")]),t._v(" "),a("h2",{attrs:{id:"docker-单机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-单机启动"}},[t._v("#")]),t._v(" docker 单机启动")]),t._v(" "),a("h3",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker pull minio/minio\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('docker run -p 9000:9000 -p 9001:9001 -d --name minio -v /usr/local/opt/docker/minio/data:/data -v /usr/local/opt/docker/minio/config:/root/.minio -e "MINIO_ROOT_USER=minio" -e "MINIO_ROOT_PASSWORD=minio@123456" minio/minio server /data --console-address ":9000" --address ":9001"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"登录管理台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录管理台"}},[t._v("#")]),t._v(" 登录管理台")]),t._v(" "),a("p",[t._v("地址：http://127.0.0.1:9000/")]),t._v(" "),a("p",[t._v("输入用户名，密码")]),t._v(" "),a("h1",{attrs:{id:"本地配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地配置"}},[t._v("#")]),t._v(" 本地配置")]),t._v(" "),a("p",[t._v("配置服务 dxd")]),t._v(" "),a("p",[t._v("$ mc alias set dxd http://172.16.243.28:31037 minioadmin minioadmin")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("mc: Configuration written to "),a("code",[t._v("/Users/dw/.mc/config.json")]),t._v(". Please update your access credentials.")])]),t._v(" "),a("p",[a("strong",[t._v("mc: Successfully created "),a("code",[t._v("/Users/dw/.mc/share")]),t._v(".")])]),t._v(" "),a("p",[a("strong",[t._v("mc: Initialized share uploads "),a("code",[t._v("/Users/dw/.mc/share/uploads.json")]),t._v(" file.")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);