function getProperty<obj,property extends keyof obj>(obj:obj, key:property):obj[property]{
    return obj[key];
}


const person={name:'Alice', age:45};

console.log(getProperty(person,'name'))