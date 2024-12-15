---
title: 吾杯网络安全技能大赛[Misc方向]-Sign签到题
date: 2024-12-01
tags:
 - CTF
 - WriteUP
categories:
 - 随笔 Essay 
isShowComments: true
publish: true










---

<Boxx/>

参加了吾杯网络安全技能大赛，这是一道Misc方向的简单题，这是我的第23题

[[toc]]

- 网址【[传送门](https://www.wucup.net/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| 无       | Sign     | Misc     | 1    |

<!-- more -->

# 题目23：Sign

### 题目描述：浅浅签个到吧

### 考点：十六进制编码&编程基础

### 预期解：使用Python将16进制编码转化为字符

```
hex_str = "57754375707B64663335376434372D333163622D343261382D616130632D3634333036333464646634617D"
decoded_bytes = bytes.fromhex(hex_str)
print(decoded_bytes.decode('utf-8'))
```

运行后得到WuCup{df357d47-31cb-42a8-aa0c-6430634ddf4a}

同样也可以用如在线工具等完成16进制到字符的转换【[传送门](https://www.bejson.com/convert/ox2str/)】