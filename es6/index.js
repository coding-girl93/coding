function Main(x,y){
	this.x = x;
	this.y = y;
}
Main.prototype.add = function(){
    // alert( this.x +this.y)  
    return this.x +this.y;
}
function a(){
    console.log('s')
}
a();
var m = new Main(1,4);
console.log(m.add());