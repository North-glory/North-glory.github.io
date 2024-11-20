---
title: Java双版本jdk环境变量教程
date: 2024-11-18
tags:
- jdk
- 安装教程
categories:
- 后端 Back-end
sticky: 1 
isShowComments: true
publish: true

---

<Boxx/>

我们可能会面临同一台电脑需要装两个及以上的jdk时，需要配置相关的环境变量，本文章用于解决多条环境变量的配置问题。

<!-- more -->

[[toc]]

# Java双版本jdk环境变量配置教程

### 1.下载并安装jdk

- 选择你所需要的jdk下载并安装
- 下载地址：[https://www.java.com/zh-CN/](https://link.zhihu.com/?target=https%3A//www.java.com/zh-CN/)

如下图

![image-20241118205110864](/img/backend/jdk/image-20241118205110864.png)

### 2.配置环境变量

- 右键此电脑，打开属性
- 点击高级系统设置
- 点击环境变量

这里我安装的是jdk1.8和jdk21，分别设置环境变量

```
JAVA_HOME		%JAVA21_HOME%
JAVA21_HOME		D:\Java\JDK21
JAVA8_HOME		D:\Java\JDK
```

> 这里设置了三条环境变量，用到了参数赋值的思想
>
> 1. 第一条是设置JAVA_HOME，如果我用21版本，就把值改为21，如果用1.8版本，就把值改为8
> 2. 第二条是设置21版本的地址
> 3. 第三条是设置1.8版本的地址

![image-20241118210039034](/img/backend/jdk/image-20241118210039034.png)

- 选择Path，然后点击编辑

![image-20241118210150465](/img/backend/jdk/image-20241118210150465.png)

- 进入编辑后，添加如下配置

![image-20241118210351769](/img/backend/jdk/image-20241118210351769.png)

**此处最后一条的javapath路径必须在JAVA_HOME之后，否则切换不会成功**

> 此处如果第一个环境变量的开头是%的话，会只显示一行，如下图

![image-20241118210531251](/img/backend/jdk/image-20241118210531251.png)

- 测试是否成功

用win+r快捷键进入“运行”窗口，然后输入cmd进入命令行

  ```
  java
  javac
  java -version
  ```

- 切换JAVA_HOME的值即可切换jdk版本

**注：在切换完成后，要重新进入命令行，然后再输入java -version命令，需要让命令行刷新一下才行**

> 如果切换不成功，这可能是安装jdk时，自动生成了优先级更高的配置项，使用以下方式解决
>
> - 删除C:\ProgramData\Oracle\Java\javapath下的三个文件，windows后面会从指定的jdk版本的安装目录重新复制这三个文件放到该目录

- 此处引用了部分[知乎【传送门】](https://zhuanlan.zhihu.com/p/471479970)的内容，如有兴趣可以查看原文。

### 3.踩过的坑

1. 建议在插入Path环境变量的时候，要记得把JAVA_HOME的几条内容都上移到最上方，javapath在最后
2. 建议在测试时，要关掉命令行，重新开一个页面后再输入java -version测试