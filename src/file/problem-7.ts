class Car{
    make: string;
    model: string;
    year:number;

constructor(make:string, model:string, year:number){
    this.make = make;
    this.model = model;
    this.year = year;


    
}
getCarAge(value:number):number{
    const result = value -this.year;


    return result;
}
}

const car = new Car('tiger', 'divine', 2000);

console.log(car.getCarAge(2025))
