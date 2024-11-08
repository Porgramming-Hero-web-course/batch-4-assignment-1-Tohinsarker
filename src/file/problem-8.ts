{
  //

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

  let result:boolean  = false;
  
  const getCarAge = (obj:{}, key:string[]):boolean=>{
      const ObjKeys = Object.keys(obj)
    
    for(let i=0; i<key.length; i++){
        if(!key.includes(ObjKeys[i])){
               return  result = false ;
        }else{
            result = true;
        }
    }

    return result;
  }
  console.log(getCarAge(person,['name', 'age']) )
  //
}
