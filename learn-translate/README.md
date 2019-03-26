https://github.com/Yangfan2016/learn-translate/blob/master/3-30secondsofinterviews_zh.md#%E9%99%84%E5%8A%A0%E9%93%BE%E6%8E%A5-3

### 一.创建一个 batches 函数，返回一个食谱中可以被作为烹饪整批食材的最大数量
```js
/**
它接受两个对象参数：第一个是食谱，第二个是可用食材。每个食材的值是一个数字代表有多少单位
`batches(recipe, available)`
*/

// 0 批食材可用
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)
batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)

// 1 批食材可用
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
)

// 2 批食材可用
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
)
```

```js
function batches(recipe,available){
    let number
    for(x in recipe){
        let split = Math.floor(available[x]/recipe[x]);
        if(split==0) return 0
        if(number){
            number = split<number?split:number
        }else{
            number = split;
        }

    }
    return number
}
```

### 二.什么是大 O 标记法？

### 三.alt属性的目的
1.装饰性图片应该留有空的alt属性
2.网络爬虫使用alt属性理解图片内容,增加seo性能

### 四.cssBEM是什么
1. BEM指的是[Block Element Modifier]作为对css结构的说明增加可维护性。
2. 是一种scoped在css上的替代方案

比如 
```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

![avatar](https://user-gold-cdn.xitu.io/2017/4/6/7a8eb60f0abf36bdc0caf3cbc972fa43.png?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 五.浏览器缓存的清理

浏览器有一个缓存来临时存储网站上的文件，因此当在页面之间切换或重新加载同一页面时，它们不需要再次下载。服务器被设置为发送标题，告诉浏览器将文件存储给定的时间。这大大提高了网站速度并保留了带宽。

但是，当网站被开发人员更改时，这可能会导致问题，因为用户的缓存仍然引用旧文件。如果缓存的CSS和JavaScript文件引用了不再存在、已移动或已重命名的元素，这可能会使它们保留旧的功能，也可能会破坏网站。

强制浏览器重新下载文件的常用技术是将查询字符串附加到文件末尾。

```
src =“js / script.js”=> src =“js / script.js？v = 2”
```

浏览器将其视为不同的文件，但无需更改文件名。

### 六.使用css预处理器的优势

1. 结构更优,增加了可维护性,让css有变量等强大的功能
2. 缺点:编译比较慢,影响打包效率

### 六.===和==的区别

1. 只要可能，使用triple equals来测试等式，因为松散等式==可能会得到不直观的结果。
2. ==会把两边转换成相同类型再进行严格比较