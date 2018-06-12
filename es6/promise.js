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
var result2=loadImg('https://img.mukewang.com/5b0f588c0001395509360316.jpg');
result1.then(function(img){
    console.log('第一张图片加载完成');
    console.log(img.width)
	return result2 // 链式操作  
}).then(function(img){
    console.log(img.width)
})
function ajax(options){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        
        xhr.open(options.type,options.url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState===4){
                if(this.status===200){
                    resolve(JSON.parse(this.responseText),this)
                }else{
                    reject(this.response)
                }
            }
        }
        xhr.send(options.data||null);
    })
}