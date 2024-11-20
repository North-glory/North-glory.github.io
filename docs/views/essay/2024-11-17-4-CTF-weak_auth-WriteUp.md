---
title: CTF攻防世界入门题单WriteUP-adworld-09
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第9题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称  | 题目方向 | 难度 |
| -------- | --------- | -------- | ---- |
| GFSJ0482 | weak_auth | Web      | 1    |

<!-- more -->

# 题目9：weak_auth

### 题目描述：小宁写了一个登陆验证页面，随手就设了一个密码。

### 考点1：常见弱口令

### 考点2： 掌握基本的爆破方法

### 解题思路1：尝试使用Burp爆破密码

#### （一）进入页面，完成基本操作

进入靶机地址，我们看到了输入用户和密码的地方，我们先随便输入用户名和密码尝试login，这时弹出了alert，提示“please login as admin”，根据提示，我们把用户名改为admin



#### （二）安装Chrome插件，设置代理

我们需要在浏览器安装一个SwitchyOmega的插件，这个插件有助于我们将网页切换代理，指向我们本机形成闭环。

![image-20241119204013526](/img/essay/image-20241119204013526.png)

图中可以看到，我们指向了127.0.0.1的8089端口。



#### （三）安装Burp，拦截请求

我们需要在Burp中，新建一个项目，选择Proxy(代理)页面，然后点击Proxy Settings(代理设置)，将端口改为8089。

![image-20241119205327496](/img/essay/image-20241119205327496.png)

保存后，将Intercept is off(拦截关闭)启动，会变为Intercept is on(开启)，我们返回到页面，用户名为admin，密码随意设置一个密码，然后发送一个请求。此时会自动跳转到Burp的页面，即可看到我们拦截下的请求：

![image-20241119205702975](/img/essay/image-20241119205702975.png)

注：以上流程就是抓包



#### （四）设置重发器

右键拦截器的页面，找到Send to Repeater(发送到重发器)，此时Repeater的页面会高亮，切换过去后，我们然后点击Send发包，发送后可以看到Response(响应)，在响应中可以看到密码错误的alert弹窗，也可以看到一个“maybe you need a dictionar”(也许你需要一份字典)的提示。

![image-20241119210458568](/img/essay/image-20241119210458568.png)



#### （五）下载密码字典，使用攻击器爆破

在Proxy页面中，右键选择“Send to Intruder”(发送到攻击器)，在Intruder页面中，我们在下拉框选择Sniper(狙击手，可能是比喻)。

![image-20241119211805246](/img/essay/image-20241119211805246.png)

然后切换到Payloads(炸药、有效载荷等，也可能是比喻)，点击load加载文件，将我们的dictionar(字典)添加到其中。

![image-20241119212520073](/img/essayimage-20241119212520073.png)

回到攻击器，我们鼠标选中我们输入的密码部分，然后点击Add，即可将密码设置为变量，

![image-20241119213402130](/img/essay/image-20241119213402130.png)

然后点击“Start attack”，此时就会正式开始我们的爆破。

![image-20241119213451544](/img/essay/image-20241119213451544.png)

根据密码正确与否，服务器返回的Response长度不同，我们选择Length(长度)倒序，即可找到最有可能的密码。

![image-20241119213617593](/img/essay/image-20241119213617593.png)

此时查看这条请求的Response，我们可以看到我们想要的flag就在其中

![image-20241119213717800](/img/essay/image-20241119213717800.png)



> 此处用到了几个工具，下面附上这些工具的地址
>
> 1. [SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega)	代理管理软件，方便一个浏览器多个代理端口的切换。
> 2. [Burp Suite](https://portswigger.net/burp) 	代理抓包软件，用于Web应用程序的渗透测试和攻击
> 3. [Blasting_dictionary](https://github.com/rootphantomer/Blasting_dictionary)	爆破字典
> 4. [hackbar](https://github.com/Mr-xn/hackbar2.1.3)	浏览器插件，能够在页面上直接完成 请求/响应内容编辑，完成各种包括但是不限于伪造的工作。【本项目没用到hackbar】
>

