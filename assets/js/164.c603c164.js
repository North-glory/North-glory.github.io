(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{689:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("Boxx"),s._v(" "),n("p",[s._v("从0开始学习CTF，了解CTF基本规则、方法，这是开始打卡学习的第29天")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#适用场景"}},[s._v("适用场景：")]),n("ul",[n("li",[n("a",{attrs:{href:"#if方法延时盲注"}},[s._v("if方法延时盲注")])]),n("li",[n("a",{attrs:{href:"#case方法延时忙注"}},[s._v("Case方法延时忙注")])]),n("li",[n("a",{attrs:{href:"#延时的基本方法"}},[s._v("延时的基本方法")])]),n("li",[n("a",{attrs:{href:"#其他方法"}},[s._v("其他方法")])])])]),n("li",[n("a",{attrs:{href:"#报错盲注"}},[s._v("报错盲注")]),n("ul",[n("li",[n("a",{attrs:{href:"#一般形式"}},[s._v("一般形式")])]),n("li",[n("a",{attrs:{href:"#举例引入问题"}},[s._v("举例引入问题：")])]),n("li",[n("a",{attrs:{href:"#exp-函数"}},[s._v("exp()函数：")])]),n("li",[n("a",{attrs:{href:"#cot-三角函数"}},[s._v("cot()三角函数")])])])])])]),n("p"),s._v(" "),n("ul",[n("li",[s._v("视频地址【"),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1Lh411F7s8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("🔗传送门"),n("OutboundLink")],1),s._v("】")])]),s._v(" "),n("h1",{attrs:{id:"第13章-延时盲注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第13章-延时盲注"}},[s._v("#")]),s._v(" 第13章：延时盲注")]),s._v(" "),n("blockquote",[n("p",[s._v("延时盲注考的不太多")]),s._v(" "),n("p",[s._v("大概算了一下，这个视频系列有100集，如果按照每天1集的速度，学完至少要三个月，太慢了，需要加快速度了。")])]),s._v(" "),n("h2",{attrs:{id:"适用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景：")]),s._v(" "),n("p",[s._v("如果现在不给返回布尔型的状态了，比如“登录成功”、“登录失败”。现在都返回的是查询成功，这种情况下用延时盲注")]),s._v(" "),n("h3",{attrs:{id:"if方法延时盲注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if方法延时盲注"}},[s._v("#")]),s._v(" if方法延时盲注")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select if(1=1,1,0);\n+-------------+\n| if(1=1,1,0) |\n+-------------+\n|           1 |\n+-------------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql>  select if(1=1,sleep(5),0);\n+--------------------+\n| if(1=1,sleep(5),0) |\n+--------------------+\n|                  0 |\n+--------------------+\n1 row in set (5.01 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("一般形式：if(exp1,exp2,exp3)")]),s._v(" "),n("p",[s._v("意思是，如果表达式1成立，就返回表达式2，否则就返回表达式3。")]),s._v(" "),n("h3",{attrs:{id:"case方法延时忙注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#case方法延时忙注"}},[s._v("#")]),s._v(" Case方法延时忙注")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select case 'a' when 'a' then 1 else 0 end;\n+-------------------------------------+\n| case 'a' when 'a' then 1 else 0 end |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select case when 'a'='a' then 1 else 0 end;\n+-------------------------------------+\n| case when 'a'='a' then 1 else 0 end |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("一般形式：case exp1 when exp2")]),s._v(" "),n("p",[s._v("case when then 有两种写法")]),s._v(" "),n("ul",[n("li",[s._v("一种是案例1的case一个字符，when一个字符")]),s._v(" "),n("li",[s._v("一种是案例2的case什么也不加，when一个表达式")])]),s._v(" "),n("h3",{attrs:{id:"延时的基本方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#延时的基本方法"}},[s._v("#")]),s._v(" 延时的基本方法")]),s._v(" "),n("p",[s._v("用"),n("code",[s._v("sleep()")]),s._v("函数，括号里单位是秒")]),s._v(" "),n("p",[s._v("我们只需要构造case或者if条件表达式，然后满足条件就让他延时，看网页加载的长短就能观察出延时成功了还是没成功，进而可以判断出条件表达式的真假，通过表达式的真假就可以把数据给注入出来（简直天才的想法）")]),s._v(" "),n("h3",{attrs:{id:"其他方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[s._v("#")]),s._v(" 其他方法")]),s._v(" "),n("p",[s._v("如果过滤了sleep()同时又没有回显，只能延时注入，该怎么办？")]),s._v(" "),n("p",[s._v("ps：mysql中只有sleep这一个延时函数。")]),s._v(" "),n("p",[n("strong",[s._v("解决方案：")])]),s._v(" "),n("ol",[n("li",[n("p",[n("code",[s._v("benchmark()")]),s._v("：这个函数可以测试某些特定操作的执行速度，参数可以是需要执行的次数和表达式，表达式可以是任何的标量表达式，比如返回值是标量的子查询或者函数，该函数可以很方便地测试某些特定操作的性能，比如通过测试可以发现，MD5()函数要比SHA1()函数要快。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select benchmark(1000000,md5('Flag'));\n+--------------------------------+\n| benchmark(1000000,md5('Flag')) |\n+--------------------------------+\n|                              0 |\n+--------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select benchmark(1000000,sha1('Flag'));\n+---------------------------------+\n| benchmark(1000000,sha1('Flag')) |\n+---------------------------------+\n|                               0 |\n+---------------------------------+\n1 row in set (0.48 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("**笛卡尔积：**主要用count()函数，一般是用"),n("code",[s._v("count(*)")]),s._v("或者"),n("code",[s._v("count(1)")]),s._v("，又或者count(列名)。根据列是不是主键而会影响到性能。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select count(*) from account;\n+----------+\n| count(*) |\n+----------+\n|        1 |\n+----------+\n1 row in set (0.02 sec)\n\nmysql> select * from account;\n+-----+-------+---------+\n| aid | name  | balance |\n+-----+-------+---------+\n|   1 | admin |       1 |\n+-----+-------+---------+\n1 row in set (0.00 sec)\n\nmysql> select count(*) from account A,account B;\n+----------+\n| count(*) |\n+----------+\n|        1 |\n+----------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("get_lock")]),s._v("：这是一种比较神奇的利用技巧，延时是精确可控的，但问题在于并不是所有的站都适用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select get_lock('flag',1);\n+--------------------+\n| get_lock('flag',1) |\n+--------------------+\n|                  1 |\n+--------------------+\n1 row in set (0.00 sec)\n\n# 此时我们重新开个窗口，需要换个session\nmysql> select get_lock('flag',5);\n+--------------------+\n| get_lock('flag',5) |\n+--------------------+\n|                  1 |\n+--------------------+\n1 row in set (5.02 sec)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("在一个session中可以先锁定一个变量，然后通过另一个session再次执行get_lock函数，此时会产生5秒的延迟，其效果类似于sleep(5)，当然之后可以用re"),n("code",[s._v("RELEASE_LOCK()")]),s._v("函数释放")])]),s._v(" "),n("li",[n("p",[s._v("**正则表达式：**正则表达式在匹配较长的字符串但自由度比较高的字符串时，会造成较大的计算量，我们通过rpad或者repeat构造长字符串，加以计算量大的pattern，通过控制字符串长度我们可以控制延时。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select rpad('a',4999999,'a') RLIKE concat(repeat('(a.*)+',30),'b');\n+-------------------------------------------------------------+\n| rpad('a',4999999,'a') RLIKE concat(repeat('(a.*)+',30),'b') |\n+-------------------------------------------------------------+\n|                                                        NULL |\n+-------------------------------------------------------------+\n1 row in set, 1 warning (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])]),s._v(" "),n("p",[s._v("以上延时都考的挺少的。")]),s._v(" "),n("h1",{attrs:{id:"第14章-报错盲注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第14章-报错盲注"}},[s._v("#")]),s._v(" 第14章：报错盲注")]),s._v(" "),n("h2",{attrs:{id:"报错盲注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错盲注"}},[s._v("#")]),s._v(" 报错盲注")]),s._v(" "),n("h3",{attrs:{id:"一般形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一般形式"}},[s._v("#")]),s._v(" 一般形式")]),s._v(" "),n("p",[n("code",[s._v("if error , return ERR")])]),s._v(" "),n("p",[n("code",[s._v("ELSE return OK!")])]),s._v(" "),n("h3",{attrs:{id:"举例引入问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#举例引入问题"}},[s._v("#")]),s._v(" 举例引入问题：")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("if((substr='a'), 执行某个函数执行过程中报错, 0)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这个函数执行过程中报错，可不是随便自己起一个乱七八糟的函数名就可以的，这样只会在select一执行就报错。")]),s._v(" "),n("p",[s._v("我们可以使用两种函数：exp()和cot()")]),s._v(" "),n("h3",{attrs:{id:"exp-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exp-函数"}},[s._v("#")]),s._v(" exp()函数：")]),s._v(" "),n("p",[s._v("作用：会返回自然对数，也就是e的多少次方。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql>  select if(1=1,sleep(5),0);\n+--------------------+\n| if(1=1,sleep(5),0) |\n+--------------------+\n|                  0 |\n+--------------------+\n1 row in set (5.01 sec)\n\nmysql> select exp(1);\n+-------------------+\n| exp(1)            |\n+-------------------+\n| 2.718281828459045 |\n+-------------------+\n1 row in set (0.00 sec)\n\nmysql> select exp(5);\n+-------------------+\n| exp(5)            |\n+-------------------+\n| 148.4131591025766 |\n+-------------------+\n1 row in set (0.00 sec)\n\nmysql> select exp(500);\n+------------------------+\n| exp(500)               |\n+------------------------+\n| 1.4035922178528375e217 |\n+------------------------+\n1 row in set (0.00 sec)\n\nmysql> select exp(5000);\nERROR 1690 (22003): DOUBLE value is out of range in 'exp(5000)'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("我们有了以上exp函数，我们可以试一下if里边用exp")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select if((1=1),exp(5000),0);\nERROR 1690 (22003): DOUBLE value is out of range in 'exp(5000)'\nmysql> select if((1=2),exp(5000),0);\n+-----------------------+\n| if((1=2),exp(5000),0) |\n+-----------------------+\n|                     0 |\n+-----------------------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"cot-三角函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cot-三角函数"}},[s._v("#")]),s._v(" cot()三角函数")]),s._v(" "),n("p",[s._v("这个可以直接用"),n("code",[s._v("select cot(0)")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select cot(0);\nERROR 1690 (22003): DOUBLE value is out of range in 'cot(0)'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("余切函数(\\cot(x))的表达式为：\n$$\n[ \\cot(x)=\\frac{\\cos(x)}{\\sin(x)} ]\n$$\n当(x = 0)时，sin(0)=0，此时按照余切函数的定义式\n$$\n\\cot(0)=\\frac{\\cos(0)}{\\sin(0)}\n$$\n由于分母sin(0) = 0，而在数学运算里，除数是不能为0的，因为这样的除法运算没有意义，所以cot(0)是没有定义的，不能进行这样的运算。")])])],1)}),[],!1,null,null,null);n.default=t.exports}}]);