
class Vehicle{
    constructor(name){
        this.name = name
    }
    drave(){
        console.log(`${this.name}启动了`)
    }
}
class Bus extends Vehicle{
    constructor(name,age){
        super(name)
        // this.name = name;
        this.age = age;
    }
    say(){
        console.log(`${this.name} has 4 wheels ${this.age}`)
    }
}
let bus = new Bus('ddd',23);
bus.drave();
bus.say()