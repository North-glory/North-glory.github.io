(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{694:function(t,v,_){"use strict";_.r(v);var a=_(2),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("Boxx"),t._v(" "),v("p",[t._v("从0开始学习CTF，了解CTF基本规则、方法，这是开始打卡学习的第34天")]),t._v(" "),v("p",[t._v("发现单纯学习CTF没有一个系统完整的课程，所以准备学小迪安全的渗透测试课程，希望能打一个好基础。")]),t._v(" "),v("p",[t._v("此外，还应该多参加各种CTF比赛，或者是每天练习CTF赛题，理论与实践相结合。")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#其他的web应用搭建"}},[t._v("其他的Web应用搭建：")]),v("ul",[v("li",[v("a",{attrs:{href:"#网站应用场景造成源码分类"}},[t._v("网站应用场景造成源码分类")])]),v("li",[v("a",{attrs:{href:"#gpl-协议"}},[t._v("GPL 协议")])]),v("li",[v("a",{attrs:{href:"#lgpl-协议"}},[t._v("LGPL 协议")])]),v("li",[v("a",{attrs:{href:"#bsd-协议"}},[t._v("BSD 协议")])]),v("li",[v("a",{attrs:{href:"#apache-协议"}},[t._v("Apache 协议")])]),v("li",[v("a",{attrs:{href:"#mpl-协议"}},[t._v("MPL 协议")])]),v("li",[v("a",{attrs:{href:"#mit-协议"}},[t._v("MIT 协议")])])])])])]),v("p"),t._v(" "),v("ul",[v("li",[t._v("小迪安全视频地址【"),v("RouterLink",{attrs:{to:"/views/numerology/[https://www.bilibili.com/video/BV123yAYMEwb/"}},[t._v("🔗传送门")]),t._v("】")],1)]),t._v(" "),v("h1",{attrs:{id:"第19章-web应用-架构搭建-站库分离-路由访问-配置受限-dns解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第19章-web应用-架构搭建-站库分离-路由访问-配置受限-dns解析"}},[t._v("#")]),t._v(" 第19章：Web应用&架构搭建&站库分离&路由访问&配置受限&DNS解析")]),t._v(" "),v("h2",{attrs:{id:"其他的web应用搭建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他的web应用搭建"}},[t._v("#")]),t._v(" 其他的Web应用搭建：")]),t._v(" "),v("p",[t._v("比如：\t集成软件\t&\tDocker容器\t&\t分配站\t等")]),t._v(" "),v("p",[t._v("**集成软件：**正常我们都是一点点安装，但网上有些一站式安装的面板比如宝塔、phpStudy等，环境都集成到一个软件里，对比我们常规的逐步搭建，这种方式不利于我们学习，但快速便捷。")]),t._v(" "),v("p",[t._v("**分配站：**举个例子，我们用的cnblog，也就是博客园，如果注册了账号，他会给你一个域名，在这个域名上做我们的应用，这是我们和别人共用的一个大域名，这就是分配站。如果这样的分配站是我们的渗透目标，我们面对的就不是单个的，是面对的一个整体。")]),t._v(" "),v("p",[t._v("**Docker容器：**Docker 容器是一种轻量级、可移植、自包含的软件打包和运行环境。它将软件及其依赖项（如库、配置文件等）打包成一个独立的单元，使得软件可以在任何支持 Docker 的环境中一致地运行。可以把容器想象成一个小型的、隔离的操作系统环境，里面包含了运行特定应用程序所需的一切。相对来说优点是环境隔离。")]),t._v(" "),v("h3",{attrs:{id:"网站应用场景造成源码分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网站应用场景造成源码分类"}},[t._v("#")]),t._v(" 网站应用场景造成源码分类")]),t._v(" "),v("ul",[v("li",[t._v("**开源：**就是网站可以下载到本地，用了开源协议的共享式网站\n"),v("ol",[v("li",[t._v("开源且源码可见")]),t._v(" "),v("li",[t._v("开源但源码不可见-加密：比如"),v("code",[t._v("PHP代码加密")]),t._v("、"),v("code",[t._v("ASP代码加密")]),t._v("，加密后不会影响本身执行。")]),t._v(" "),v("li",[t._v("开源但源码不可见-语言特性决定：像Java在编译后是class文件")])])]),t._v(" "),v("li",[t._v("**闭源（商业）：**需要购买的，公司的产品")]),t._v(" "),v("li",[t._v("**自写：**比如自己的博客")])]),t._v(" "),v("p",[t._v("有些源码可下载，但看不到是什么东西，如果能看到代码就是白盒测试、也就是代码审计，而碰到了加密或者是语言特性决定源码不可见的情况，就比如.Net的代码就要进行反编译。")]),t._v(" "),v("p",[t._v("大型企业基本不会用开源的代码，安全性太低。或者商业的代码，不需要找别人开发。")]),t._v(" "),v("blockquote",[v("p",[t._v("以下是一些常用的开源协议：")]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"gpl-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gpl-协议"}},[t._v("#")]),t._v(" GPL 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：由自由软件基金会制定，旨在保证软件的开源性和用户的自由。有 GPL2.0 和 GPL3.0 等版本，GPL3.0 在用户专利保护和 DRM 限制等方面有所更新.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：使用该协议的软件，其源代码及衍生作品都必须开源，并以相同协议发布。允许用户自由运行、复制、修改和分发软件，但不允许将开源软件私有化用于商业发售.")])]),t._v(" "),v("h3",{attrs:{id:"lgpl-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lgpl-协议"}},[t._v("#")]),t._v(" LGPL 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：是 GPL 的变种，主要用于类库，被商业软件开发商广泛支持.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：允许商业软件通过类库引用方式使用 LGPL 类库而无需开源商业软件代码，但如果修改了 LGPL 协议的代码，修改后的代码仍需开源.")])]),t._v(" "),v("h3",{attrs:{id:"bsd-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bsd-协议"}},[t._v("#")]),t._v(" BSD 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：分为 BSD 2-Clause 和 BSD 3-Clause 两种，给予使用者很大自由.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：使用者可自由使用、修改和再发布代码，无论是开源还是专有软件均可。发布时，若包含源代码需带原 BSD 协议，若仅发布二进制类库 / 软件，则需在文档和版权声明中包含原协议，且不可用作者 / 机构名字和原产品名做市场推广.")])]),t._v(" "),v("h3",{attrs:{id:"apache-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#apache-协议"}},[t._v("#")]),t._v(" Apache 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：著名的非盈利开源组织 Apache 采用的协议，和 BSD 类似，对商业应用友好.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：允许使用者修改和再发布代码作为开源或商业产品，使用时需给用户一份协议，修改代码要在被修改文件中说明，延伸代码中需带有原协议等声明，若发布产品包含 Notice 文件，其中也要带有该协议.")])]),t._v(" "),v("h3",{attrs:{id:"mpl-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mpl-协议"}},[t._v("#")]),t._v(" MPL 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：最初由 Netscape 的 Mozilla 小组设计，平衡了开发者对源代码的需求和利益.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：要求对经 MPL 许可证发布的源代码的修改以 MPL 许可证方式再许可，但允许企业在已有源代码库上加接口，接口程序源代码以 MPL 许可证对外许可，库中其他源代码则无需强制对外许可.")])]),t._v(" "),v("h3",{attrs:{id:"mit-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mit-协议"}},[t._v("#")]),t._v(" MIT 协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("简介")]),t._v("：是一种非常宽松的许可协议，作者仅保留版权.")]),t._v(" "),v("li",[v("strong",[t._v("特点")]),t._v("：允许任何人进行个人或商业使用、复制、分发和修改，唯一要求是在发行版中包含原许可协议声明")])])])])])],1)}),[],!1,null,null,null);v.default=s.exports}}]);