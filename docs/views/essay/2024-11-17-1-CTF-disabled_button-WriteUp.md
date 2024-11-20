---
title: CTF攻防世界入门题单WriteUP-adworld-06
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第6题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称        | 题目方向 | 难度 |
| -------- | --------------- | -------- | ---- |
| GFSJ0479 | disabled_button | Web      | 1    |

<!-- more -->

# 题目6：disabled_button

### 题目描述：X老师今天上课讲了前端知识，然后给了大家一个不能按的按钮，小宁惊奇地发现这个按钮按不下去，到底怎么才能按下去呢？

### 考点1： HTML基础

### 考点2： F12开发者工具

### 解题思路1：进入F12工具，修改HTML的属性

进入目标网页后，我们打开F12开发者工具，然后选择元素，点击页面中的按钮

![image-20241117093008991](/img/essay/image-20241117093008991.png)

这时我们可以看到这个按钮是一个表单，而HTML基础告诉我们，这里的<input>标签下	disabled=""	这个属性不正常，鼠标右键选中，选择“Edit as HTML”，删掉	disabled=""	这个属性，然后点击其他元素即可保存。

```html
<input disabled="" class="btn btn-default" style="height:50px;width:200px;" type="submit" value="flag" name="auth">
```

保存后页面中的这个button即可点击，点击后得到Flag。

### 解题思路2：模拟页面上的表单提交，绕过按钮直接请求

查看官方WriteUp后，找到了另一种方法，具体操作是鼠标右键，查看网页源代码，找到这个表单

```html
<form action="" method="post" >
    <input disabled class="btn btn-default" style="height:50px;width:200px;" type="submit" value="flag" name="auth" />
</form>
```

我们可以看到，这个form表单的方法是post，这个button的name属性是auth，而value属性是flag，根据HTML基础得知，这里如果点击后，会产生一个form表单提交，参数是auth=flag，官方WriteUp题解使用了工具HackBar，我使用的是Postman，向服务器发送一个POST请求，返回中即可找到flag

![image-20241117095020545](/img/essay/image-20241117095020545.png)

