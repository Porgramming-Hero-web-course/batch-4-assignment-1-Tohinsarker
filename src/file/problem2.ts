function removeDuplicates(numbers:number[]):number[]{

    let uniqueArray:number[] = [];

    for(let i=0; i<numbers.length; i++){
        if(!uniqueArray.includes(numbers[i])){
            uniqueArray.push(numbers[i])
        }
    }



    return uniqueArray;


}

removeDuplicates([1,2,3,4,5,4,3,21,0,56])