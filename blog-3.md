                       Type Guards in Typescript
-----------------------------------------------------------------------
Typescript is a statically typed language. it aims to catch type error during compilation So without Typeguard u cant do it. when u want to know specific type of a variable you will be use typeguard. it has built-in operator like 'typeof', 'in' and 'instanceof' operator.

There are four main types of type guards in typescript.

1. typeof
2. instanceof
3. custom type guards using is keyword.
4. in operator

Summary of each.

1. typeof Type Guard.

typeof syntax
typeof variableName

'typeof' operator is used to get the type of the variable. it returns the values like

Number, String, Boolean, Object, Undefined, Bigint, Symbol, Function.

Example:

const result_number:number = 123;
const result_string:string = 'this is string'
const result-boolean = false;

console.log('type of', typeof result_number);
console.log('type of', typeof result_string);
console.log('type of', typeof result_boolean);

2. 'in' typeguard
   it typically returna boolean, if the property is present in the object in the object return true otherwise return false;

syntax
propertyName in objectname

example

const students:{name:string; 
email:string; 
phone:number} = {
name:'abir',
email: 'student@gmail.com',
phone:2324345
}

console.log('phone' in students);

3. instanceof typeguard in Typescript

instansof of typeguard checks thr prototype of className exists in the prototype chain of variable. we have use this type by testing if an object or value derived from a class.

syntax
objName instance className

example
class Parent {}
class maleChild extends Parent {
  son() {
    console.log("hi i am m");
  }
}
class femaleChild extends Parent {
  daughter() {
    console.log("hi i am f");
  }
}

function interactWithAnimal(parent: Parent) {
    console.log('parent', Parent)
  if (parent instanceof maleChild) {
    parent.son(); 
  } else if (parent instanceof femaleChild) {
    parent.daughter(); 
  }
}

const sons = new maleChild();
interactWithAnimal(sons); // output : 'hi i am m' 



