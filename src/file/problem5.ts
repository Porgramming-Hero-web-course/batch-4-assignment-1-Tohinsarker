function getProperty<T,V extends keyof T>(obj:T, key:V):T[V]{
    return obj[key];
}


const person={name:'Alice', age:45};

console.log(getProperty(person,'name'))