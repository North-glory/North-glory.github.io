---
title: CTF攻防世界入门题单WriteUP-adworld-11
date: 2024-11-20
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第11题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称   | 题目方向 | 难度 |
| -------- | ---------- | -------- | ---- |
| GFSJ0485 | simple_php | Web      | 2    |

<!-- more -->

# 题目11：  simple_php

### 题目描述：小宁听说php是最好的语言,于是她简单学习之后写了几行php代码。

### 考点1：php基础

### 思路1：

```php
﻿<?php
# 这里这行代码是显示源代码的意思，一般的php的普通渲染是不会显示出来的
show_source(__FILE__);
# config.pip文件应该是配置项之类的
include("config.php");
# 定义两个变量，需要我们在请求的时候传入a和b
$a=@$_GET['a'];
$b=@$_GET['b'];
# if判断，如果a弱等于0，并且a不能为0的话，就输出flag1
if($a==0 and $a){
    echo $flag1;
}
# if判断，b不能为数字，如果为数字就退出
if(is_numeric($b)){
    exit();
}
# if判断，b必须大于1234
if($b>1234){
    echo $flag2;
}
?>
```

在传入一个参数a的时候，对照[PHP 类型比较表 - Manual](https://www.php.net/manual/zh/types.comparisons.php)，如果PHP的版本低于8.0.0，只要a传入一个字符串，就能符合条件。而下一个判断是判断b是否是一个数字，我们可以传入一个字符串，用数字拼接字符串的方式，就能符合不是数字的条件，进入下一个判断。第三个判断是比较b和1234，我们只要输入一个比1234大的数字拼接一个字符串，即可符合条件

![image-20241120192558337](/img/essay/image-20241120192558337.png)

我们直接在地址栏输入地址加参数a=a，即可得到flag1，也就是flag的前部部分，输入b=1235a，即可得到flag

http://61.147.171.105:59590/?a=a&b=1235a

``` php
<?php
show_source(__FILE__);
include("config.php");
# 将我们输入的字符串a传给了$a，在进行弱比较时，是false*，并且传入了a，a所以不是0，符合条件
$a=@$_GET['a'];
$b=@$_GET['b'];
if($a==0 and $a){
    echo $flag1;
}
# 如果我们输入数字12345，这里会直接退出
if(is_numeric($b)){
    exit();
}
/* 
这里是一个松散比较，我们传入一个字符串123a，就能绕过上个判断，来到这里的判断，所以我们传入1235a
传入1235a后，会比较1235和1234，与a没有关系
*/
if($b>1234){
    echo $flag2;
}
?>

Cyberpeace{647E37C7627CC3E4019EC69324F66C7C}
```

