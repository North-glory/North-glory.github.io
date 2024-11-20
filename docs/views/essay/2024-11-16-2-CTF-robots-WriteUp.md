---
title: CTF攻防世界入门题单WriteUP-adworld-03
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

根据hello-ctf项目的推荐，使用“攻防世界”的Web方向入门题单，我的第3题

[[toc]]

- 题单【[传送门](https://adworld.xctf.org.cn/challenges/problem-set-index?id=25)】
- 官方WriteUP视频【[传送门](https://www.bilibili.com/video/BV1rz4y137dF/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| GFSJ0476 | robots   | Web      | 1    |

<!-- more -->

# 题目3：robots

### 题目描述：X老师上课讲了Robots协议，小宁同学却上课打了瞌睡，赶紧来教教小宁Robots协议是什么吧。

### 考点1： Robots协议

### 考点2： 扫描文件工具的使用

### 解题思路1：依据题目提示和经验，想到Rotots.txt文件

![image-20241116202038642](/img/essay/image-20241116202038642.png)

进入页面后，发现并没有内容，根据题目描述的提示，这里我们直接在URL链接后加上一个Robots协议的路径，即/robots.txt

![image-20241116203330412](/img/essay/image-20241116203330412.png)

根据图中给出的文件，我们修改路径为/f1ag_1s_h3re.php，访问后即可得到flag

### 解题思路2：使用扫描目录的脚本工具dirsearch

通过使用dirsearch，扫目录可以扫到robots.txt文件: 

```shell
python dirsearch.py -u http://10.10.10.175:32793/ -e *
```

> 这种方法本人未使用过，需要下载对应的工具【[传送门](https://github.com/maurosoria/dirsearch)】

之后的步骤同方法1