class Main{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    add() {
        return this.x+this.y
    }
}
let m = new Main(1,4);
console.log(m.add())
