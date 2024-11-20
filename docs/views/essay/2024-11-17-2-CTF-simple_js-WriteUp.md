---
title: CTF攻防世界入门题单WriteUP-adworld-07
date: 2024-11-17
tags:
 - CTF
 - adworld
 - WriteUP
categories:
 - 随笔 Essay 
isShowComments: true
publish: true






---

<Boxx/>

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第7题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称  | 题目方向 | 难度 |
| -------- | --------- | -------- | ---- |
| GFSJ0480 | simple_js | Web      | 3    |

<!-- more -->

# 题目7：simple_js

### 题目描述：小宁发现了一个网页，但却一直输不对密码。(Flag格式为 Cyberpeace{xxxxxxxxx} )

### 考点1： JavaScript基础

### 考点2： Ascii码特征

### 考点3：16进制数的特征

### 解题思路1：读JavaScript语句，找出怪异的部分

点开目标网页后，提示让输入密码，我们直接打开F12开发者工具，随便输入一个密码，监看Network的返回，这时候产生了一个指向服务器ip的请求，查看请求的返回体Response

![image-20241117100107494](/img/essay/image-20241117100107494.png)

将这个Response复制出来，可以得到如下内容

```html
<html>
<head>
    <title>JS</title>
    <script type="text/javascript">
    function dechiffre(pass_enc){
        var pass = "70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65";
        var tab  = pass_enc.split(',');
                var tab2 = pass.split(',');var i,j,k,l=0,m,n,o,p = "";i = 0;j = tab.length;
                        k = j + (l) + (n=0);
                        n = tab2.length;
                        for(i = (o=0); i < (k = j = n); i++ ){o = tab[i-l];p += String.fromCharCode((o = tab2[i]));
                                if(i == 5)break;}
                        for(i = (o=0); i < (k = j = n); i++ ){
                        o = tab[i-l];
                                if(i > 5 && i < k-1)
                                        p += String.fromCharCode((o = tab2[i]));
                        }
        p += String.fromCharCode(tab2[17]);
        pass = p;return pass;
    }
    String["fromCharCode"](dechiffre("\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"));

    h = window.prompt('Enter password');
    alert( dechiffre(h) );

</script>
</head>

</html>
```

根据这段代码的最后几行可以得出，我们不论输入什么，最终都会走到alert弹，我们重点关注以下内容

```
(dechiffre("\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"));
```

观察这段密文的特征，猜测应该是16进制数，在CTF竞赛中，转义字符`\x35`也常用于表示特定的字符或进行编码操作。例如，使用`cout << "\x35"`在C++中输出的是ASCII码为53的字符，即字符'5'‌

```c++
#include <iostream>
using namespace std;

int main()
{
   cout << "\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30";
   return 0;
}
```

此时我们得运行得到了输出

```
55,56,54,79,115,69,114,116,107,49,50
```

观察这一串数字，我们猜测应该是ascii码，通过程序或者手动对照ascii表，我们可以得到目标字符串

```python
#!/usr/bin/python
# Write Python 3 code in this online editor and run it.
s= "\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30"
print(s);
s = s.split(",")
c = ""
for i in s:
	i = chr(int(i))
	c = c+i
print(c)
```

此时输出结果，我们就能得到想要的flag

> \x35这样的十六进制和1A或者3F这样的十六进制为什么不一样
>
> 1. 表示形式的差异
>    - `\x35`是一种在编程语言中常见的转义字符序列，用于表示一个字节（8 位）的十六进制值。在这里，`\x`是转义序列的开头标志，后面跟着两位十六进制数字（`35`），它表示的是一个字符的 ASCII 码（或其他字符编码）的十六进制值。在 ASCII 码中，`\x35`对应的字符是`5`。
>    - 而`1A`和`3F`是单纯的十六进制数的表示形式。它们没有像`\x`这样的转义序列前缀，只是直接以十六进制的格式呈现数字。在十六进制中，`1A`代表十进制的 26，`3F`代表十进制的 63。
> 2. 用途的不同
>    - `\x35`主要用于在字符串或字符数据的表示中，例如在 C、C++、Python 等编程语言中，当你想要在字符串中插入一个特殊字符或者非打印字符（通过其 ASCII 码或其他编码的十六进制值）时，就会使用这种转义序列。比如在 C 语言中，`char c=\x35;`就定义了一个字符变量`c`，其值为字符`5`。
>    - `1A`和`3F`这样的十六进制数可以用于多种用途，如在内存地址表示、文件格式中的数据标记（例如在一些二进制文件格式中，特定的十六进制值表示文件头、数据块等不同部分）、数学计算（十六进制数之间的运算）等场景。例如，在分析一个十六进制格式的文件时，`1A`和`3F`这样的十六进制值可能代表文件中的不同数据部分或者标记。

> 其他的转义字符有：
>
> 1. `简单的转义字符，如\n`	`\t`	`\d`
> 2. `\x`开头的十六进制转义字符，如`\x35`	`\x34`
> 3. `\u`开头的 Unicode 转义序列，如\u4F60

### 解题思路2：理解并修改JavaScript语句，用JavaScript来解开密文

从用户huang8huang的WP学习到，我们可以简化该JavaScript代码，最终得到如下代码

```javascript
function dechiffre() {
    var pass = "70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65";
    var tab2 = pass.split(',');
    var i;
    var p = "";
    for (i = 0; i < tab2.length; i++) {
        p += String.fromCharCode(tab2[i]);
    }
    return p;
}
```

就逻辑上可见它只是将内容为逗号分隔的数字的字符串转成相应编码的字符串。

将代码修改，用下方的可疑字符串代替函数中的常量，得到的整个网页代码是：

```html
<html>
<head>
    <title>JS</title>
    <script type="text/javascript">
function dechiffre() {
    var pass = "\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30";
    var tab2 = pass.split(',');
    var i;
    var p = "";
    for (i = 0; i < tab2.length; i++) {
        p += String.fromCharCode(tab2[i]);
    }
    return p;
}
alert(dechiffre());
</script>
</head>
<body></body>
</html>
```

