
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default{
    entry:"src/promise.js",// 入口文件
    format:'umd', // CMD AMD
    plugins:[
        resolve(),
        babel({
            exclude:'node_modules/**'
        })
    ],
    dest:'dist/index.js'
}