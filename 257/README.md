# 400. 第N个数字

在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

```js
输入:
3

输出:
3
```

示例 2:

```js
输入:
11

输出:
0
```

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。

## 我的解法

主要内容就是下面的循环

realnum => 9,9+90,9+90+900
region => 9,9+90x2,9+90x2+9+90x3

判断数字n是否在region的范围内
例如100
realnum:9
region:9
i:1
此时范围外的数字长度都是i+1即为2
再通过求商和求余计算出具体是哪个数字

每循环一次,数字的长度就会增加一次(9,99,999这种)

```js
    while(n>(region + 9*Math.pow(10,i)*(i+1))){
        realnum = realnum + 9*Math.pow(10,i)
        region = region + 9*Math.pow(10,i)*(i+1);
        i++;
    }
```

## 网上解法

start相当于我的region变量,主要区别是每次循环的时候n就自己减去了region的值

```js
    let number = 9, length = 1, start = 1;
    while (n > length * number) {
        n -= length * number;
        ++length;
        number *= 10;
        start *= 10;
    }
    start += (n - 1) / length;
```

