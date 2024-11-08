
function sumArray(numbers:number[]):number{
 
    const result = numbers.reduce((totalValue,currentV)=>totalValue+currentV,0)

    return result;
    }
    
    
    
    
    
  sumArray([1, 2, 3, 4, 5]);
  