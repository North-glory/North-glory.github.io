---
title: CTF攻防世界入门题单WriteUP-adworld-05
date: 2024-11-16
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第5题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| GFSJ0478 | cookie   | Web      | 1    |

<!-- more -->

# 题目5：cookie

### 题目描述：X老师告诉小宁他在cookie里放了些东西，小宁疑惑地想：‘这是夹心饼干的意思吗？’

### 考点1： 网络基础（session）

### 考点2： F12开发者工具

### 解题思路1：找到Cookie的文件，flag应该在Cookie文件里

打开网页后，提示“你知道什么是Cookie吗？”，这时我们应该用快捷键F12打开开发者工具，然后切换到Application页面，找到Storage下的Cookies，整体浏览一遍，看到最后一个Cookie是look-here，这显然是不正常的Cookie

![image-20241116214118464](/img/essay/image-20241116214118464.png)

我们看到这条Cookie的内容，是一个文件cookie.php，我们尝试访问这个文件，页面提示我们“See the http response”，这时我们切换到Network页面，找到cookie.php这个请求，点开以后，我们直接查看Response

![image-20241116214554530](/img/nessay/image-20241116214554530.png)

此时发现并没有我们想要的flag，除此之外，我们还能想到Response Header也可能会藏信息，所以我们打开Headers页，整体浏览后找到我们要的flag

![image-20241116214834787](/img/nessay/image-20241116214834787.png)

> Cookie【[引用](https://baike.baidu.com/item/cookie/1119?fromModule=lemma_sense-layer#viewPageContent)】有时也用其复数形式 Cookies。类型为“**小型文本文件**”，是某些网站为了辨别用户身份，进行Session跟踪而储存在用户本地终端上的数据（通常经过加密），由用户[客户端](https://baike.baidu.com/item/客户端/101081?fromModule=lemma_inlink)计算机暂时或永久保存的信息。
>
> 很多网站多会用这种方式，会弹窗请求允许访问Cookie，这是因为欧盟的协议，违者重罚

**总结重点：Cookie是服务器为了辨别用户身份，将信息存储在用户计算机上的文件，通常为加密的文本文件**

### 解题思路2：通过抓包工具，分析信息

其他师傅尝试使用burp抓包工具，抓取Cookie信息，得到look-here=cookie.php，访问该文件/cookie.php，重新抓一下包，在Headers里得到了Flag。

注：这种方式我并没有尝试过

