// // import b from './b.js'
// // import {f1,f2} from './a.js'

// // console.log(b)
// // f1()
// // f2()
// // [1,2,3].map(item =>{
// //     console.log(item)
// // })
// class Main{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     add(){
//         return this.x +this.y
//     }
// }
// let m = new Main(1,3);
// console.log(m.add());

// function loadImg(src,success,fail){
//     var img = document.createElement('img');
//     img.onload = function(){
//         success(img)
//     },
//     img.onerror = function(){
//         fail()  
//     }
//     img.src= src;
// }
// var src="https://ff";
// loadImg(src,function(img){
//     console.log(img.width)
// },function(err){
//     console.log('error')
// })
// var name ="盐粒儿",age="24",
//     html='';
//     html +='<div>';
//     html+='<p>'+name+'</p>';
//     html+='<p>'+age+'</p>';
//     html +='</div>';
// console.log(html)

// let name ="盐粒儿",age="24",html='';
// html = `<div>
//         <p>${name}</p>
//         <p>${age}</p>
//         </div>`
    
function a(a,b,c=2){
    console.log(c)
}

function fn(){
    console.log('real,',this);
    [1,2,3].map(item=>{
        console.log(this)
    })
}
fn.call({a:100});
