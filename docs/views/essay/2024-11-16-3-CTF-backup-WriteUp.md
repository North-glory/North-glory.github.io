---
title: CTF攻防世界入门题单WriteUP-adworld-04
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第4题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| GFSJ0477 | backup   | Web      | 1    |

<!-- more -->

# 题目4：backup

### 题目描述：X老师忘记删除备份文件，他派小宁同学去把备份文件找出来,一起来帮小宁同学吧！

### 考点1： php基础

### 考点2： index.php的备份文件

### 解题思路1：根据题目描述的提示和经验，备份文件通常是 bak有关

访问给出的地址，得到如下页面

![image-20241116210949733](/img/essay/image-20241116210949733.png)

根据提示，我们访问路径http://61.147.171.105:62802/index.php.bakup

提示未找到文件，之后我们访问http://61.147.171.105:62802/index.php.bak

此时浏览器弹出下载提示，下载后打开文件（我使用的是NotePad++，如果没有这个工具的话，可以使用记事本打开），即可得到目标flag。

> 常用的备份文件后缀有
>
> .git	.svn	.swp	.~	.bak	.bash_history等等

### 解题思路2：可以使用工具扫描

这里使用dirsearch工具扫描路径

```shell
python dirsearch.py -u http://10.10.10.175:32770 -e *
```

得到index.php.bak文件，下载后即可得到flag

