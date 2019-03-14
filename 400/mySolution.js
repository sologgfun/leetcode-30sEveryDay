function findNthDigit(n){
    let position = null;
    let region = 9;
    let i = 1;
    let realnum = 9;
    while(n<=9){
        return n
    }
    while(n>(region + 9*Math.pow(10,i)*(i+1))){
        realnum = realnum + 9*Math.pow(10,i)
        region = region + 9*Math.pow(10,i)*(i+1);
        i++;
    }
    let leftnum = n-region; 
    let floorResult = Math.floor(leftnum/(i+1));
    let remainder = leftnum%(i+1);
    position = realnum+floorResult;
    if(remainder){
        position = (position+1).toString()[remainder-1]
    }else{
        position = position.toString()[position.toString().length-1]
    }
    return position
}


console.log(findNthDigit(10000))