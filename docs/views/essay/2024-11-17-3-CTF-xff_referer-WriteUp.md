---
title: CTF攻防世界入门题单WriteUP-adworld-08
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第8题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称    | 题目方向 | 难度 |
| -------- | ----------- | -------- | ---- |
| GFSJ0481 | xff_referer | Web      | 2    |

<!-- more -->

# 题目8：xff_referer

### 题目描述：X老师告诉小宁其实xff和referer是可以伪造的。

### 考点1：HTTP协议基础

### 考点2： 伪造请求头

### 解题思路1：伪造请求头，在请求头中添加xff和referer

首先，我们需要了解xff和referer是什么，我们可以去百度搜索，得到的结果如下

> X-Forwarded-For（XFF）是用来识别通过HTTP代理或负载均衡方式连接到Web服务器的客户端最原始的IP地址的HTTP请求头字段。 Squid 缓存代理服务器的开发人员最早引入了这一HTTP头字段，并由IETF在HTTP头字段标准化草案中正式提出。 当今多数缓存服务器的用户为大型ISP，为了通过缓存的方式来降低他们的外部带宽，他们常常通过鼓励或强制用户使用代理服务器来接入互联网。有些情况下，这些代理服务器是透明代理，用户甚至不知道自己正在使用代理上网。 如果没有XFF或者另外一种相似的技术，所有通过代理服务器的连接只会显示代理服务器的IP地址，而非连接发起的原始IP地址，这样的代理服务器实际上充当了匿名服务提供者的角色，如果连接的原始IP地址不可得，恶意访问的检测与预防的难度将大大增加。XFF的有效性依赖于代理服务器提供的连接原始IP地址的真实性，因此，XFF的有效使用应该保证代理服务器是可信的，比如可以通过创建可信服务器白名单的方式。

**重点：**X-Forwarded-For（XFF）是用来识别通过HTTP代理或负载均衡方式连接到Web服务器的客户端最原始的IP地址的HTTP请求头字段。通俗易懂点就是“用来识别客户端是哪里来的”。

> HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。

**重点：**referer是用来告诉目标服务器该网页是从哪个页面链接过来的

打开靶机地址，可以看到“ip地址必须为123.123.123.123”的提示，结合题目描述，我们可以猜到是伪造xff和referer，这时我们使用Postman或者Hackbar，向服务器发送请求。在请求头里添加X-Forwaded-For=123.123.123.123

<img src="/img/essay/image-20241117213341705.png" alt="image-20241117213834163" style="zoom:50%;" />

得到的结果Response显示，需要“必须来自https://www.google.com”，意思是我们必须是从google跳转来的这个页面，这时候我们添加一个referer参数，让它来自google

<img src="/img/essay/image-20241117213834163.png" alt="image-20241117213834163" style="zoom:50%;" />

重新发送请求，即可得到想要的flag

### 总结：我觉得我需要装一个Hackbar，毕竟Postman返回的内容不能实时渲染为html，比较麻烦。此外，我觉得有必要记忆一下X-Forwarded-For和Referer这两个请求头名，未来如果打比赛，可能会是内网环境不允许连接外网。