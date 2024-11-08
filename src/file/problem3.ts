function countWordOccurrences(str:string, singleW:string){
    
    const makeSplit = str.split(' ');
    
    
    let total=0;
    for(let i=0; i<makeSplit.length; i++){
        if(makeSplit[i].toString() === singleW.toString()){
            total++;
        }
    }

    return total;
}


console.log(countWordOccurrences("I love typescript typescript typescript typescript", "typescript"))