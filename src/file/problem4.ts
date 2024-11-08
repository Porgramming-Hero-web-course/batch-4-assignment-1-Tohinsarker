function calculateShapeArea(
  shape: string,
  input1: number,
  input2?: number,
  input3?: number
) {
  let result;
  if (shape == "rectangle") {
  }
  if (input3 !== undefined && input2 !== undefined && shape === "rectangle") {
    return (result = input1 * input2);
  }else if(shape==='circle'){
   return result= Math.PI * (input1**2)
  }

  
}

console.log(calculateShapeArea("circle", 5));
