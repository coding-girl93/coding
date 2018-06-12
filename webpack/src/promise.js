import 'babel-polyfill'
// import 'babel-core'
function loadImg(src){
    let promise = new Promise(function(resolve,reject){
        var img = document.createElement('img')
        // throw new Error('语法错误')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject()
        }
        img.src = src;
    })
    return promise;
}

var result1  = loadImg('https://img.mukewang.com/5b0cc0e300019e2f09360316.jpg');
var result2=loadImg('https://img3.mukewang.com/545847d40001cbef02200220-100-100.jpg');
// 串联
// result1.then(function(img1){
//     console.log('第一张图片加载完成');
//     console.log(img1.width)
// 	return result2 // 链式操作
// }).then(function(img2){
//     console.log('第二张图片加载完成');
//     console.log(img2.height);
// })

// Promise.all([result1,result2]).then(datas=>{
//     console.log('all',datas[0])
//     console.log('all',datas[1])
// })
// Promise.race([result1,result2]).then(data=>{
//     console.log('race',data)
//     // console.log(datas[1])/
// })
const load = async function() {
    let result1  = await loadImg('https://img.mukewang.com/5b0cc0e300019e2f09360316.jpg');
    console.log(result1)
    let result2 = await loadImg('https://img3.mukewang.com/545847d40001cbef02200220-100-100.jpg');
    console.log(result2)

}
load()