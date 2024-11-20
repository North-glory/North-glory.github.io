---
title: CTF攻防世界入门题单WriteUP-adworld-01
date: 2024-11-15
tags:
 - CTF
 - WriteUP
categories:
 - 随笔 Essay
isShowComments: true
publish: true
---

<Boxx/>

从零开始CTF竞赛的准备，这里根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，开始我写的第一篇WriteUP

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称    | 题目方向 | 难度 |
| -------- | ----------- | -------- | ---- |
| GFSJ0474 | view_source | Web      | 1    |

<!-- more -->

# 题目1：view_source

### 题目描述：

X老师让小宁同学查看一个网页的源代码，但小宁同学发现鼠标右键好像不管用了。

### 考点：

- 查看网页源代码

### 解题思路：

进入目标地址以后，可以看到"Flag is not here"的提示，结合题目描述，可以考虑查看网页源代码。

| 方法列举                                                   |
| ---------------------------------------------------------- |
| 方法一：使用快捷键 Ctrl+U查看网页源代码                    |
| 方法二：在网页URL地址前加 "view-source:"                   |
| 方法三：使用F12快捷键，切换到Element页查看网页源代码       |
| 方法四：鼠标邮件，选择“查看网页源代码”（此处该方法已禁用） |

查看网页源代码后可以看到对应的cyberpeace{xxx}格式的flag





