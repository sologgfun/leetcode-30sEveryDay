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
    console.log(number)
    return number
}

batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )