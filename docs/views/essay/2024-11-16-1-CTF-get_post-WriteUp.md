---
title: CTF攻防世界入门题单WriteUP-adworld-02
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第2道题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| GFSJ0475 | get_post | Web      | 1    |

<!-- more -->

# 题目2：get_post

### 题目描述:

X老师告诉小宁同学HTTP通常使用两种请求方法，你知道是哪两种吗？

### 考点：

- GET方法和POST方法的使用

> 这里提到的GET和POST方法，是指HTTP协议，即【超文本传输协议】中的请求方式，在该协议中，不只有GET和POST方法。
>
> 1. ‌**GET**‌：用于请求服务器发送资源，通常用于请求数据。GET请求不会修改服务器上的资源，它只是从服务器获取数据。GET请求的参数会附加在URL后面，因此不适合传输敏感信息。
> 2. ‌**POST**‌：用于向指定资源提交数据，通常用于提交表单或上传文件。POST请求会导致服务器资源的更改或创建新的资源。
> 3. ‌**PUT**‌：用于替换目标资源的所有当前表示，通常用于更新或替换服务器上的资源。
> 4. ‌**PATCH**‌：用于对已知资源进行局部更新，仅修改资源的一部分。
> 5. ‌**DELETE**‌：用于请求服务器删除指定的资源。
> 6. ‌**CONNECT**‌：预留给能够将连接改为管道方式的代理服务器使用。
> 7. ‌**TRACE**‌：用于回显服务器收到的请求，主要用于调试和诊断。
> 8. ‌**OPTIONS**‌：返回服务器支持的HTTP请求方法，用于客户端查看服务器的性能。
> 9. ‌**HEAD**‌：类似于GET请求，但响应中不返回消息体，仅返回头部信息，常用于检查资源的存在性和内容类型。

### 解体思路：

进入页面后，提示“请用GET方式提交一个名为a,值为1的变量”，根据提示，添加参数a=1，可以直接在浏览器进行请求，默认即是GET请求。

注：在GET方法添加参数时，要加英文的?后再加参数，参数赋值要用=号。

```
http://61.147.171.105:63699?a=1
```

在请求后，返回了新的提示“请用GET方式提交一个名为a,值为1的变量，请再以POST方式随便提交一个名为b,值为2的变量”。此时我们思考如何发送一个post请求，单纯使用浏览器已经不能满足当下的需求。

#### 方法一：使用curl命令来请求，需要一定的linux基础

可以使用快捷键win+r，然后输入cmd，即可进入Windows系统的命令行工具，进入后输入如下命令：

```shell
curl -X POST -d "b=2" http://61.147.171.105:63699/?a=1
```

然后可以得到返回，即可看到返回的flag。

```html
﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>POST&GET</title>
    <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" />

</head>
<body>

<h1>请用GET方式提交一个名为a,值为1的变量</h1>

<h1>请再以POST方式随便提交一个名为b,值为2的变量</h1><h1>cyberpeace{96dc5cc0cd80f278b18ff8cc69dab0a7}</h1>
</body>
</html>
```

#### 方法二：使用Postman等网页调试和接口测试工具

这里需要安装Postman等网页调试和接口测试工具，这里不做赘述，选择POST方法，在Body也就是请求体中加入参数，使用form表单提交，即可得到flag。

<img src="/img/essay/image-20241115224354101.png" alt="image-20241115224716774" style="zoom:50%;" />