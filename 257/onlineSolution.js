function math(n) {
    //length长度 cnt区间内数量
    let number = 9, length = 1, start = 1;
    while (n > length * number) {
        n -= length * number;
        ++length;
        number *= 10;
        start *= 10;
    }
    start += (n - 1) / length;
    t = start.toString();
    console.log(t)
    return t[(n - 1) % length] - '0';
}

console.log(math(10000))