//es6有浏览器不支持
//es6编译为es5中有require语法需要使用browserify进行打包编译
//es6转二是使用的工具是babel
注意：browserify全局安装就可以了

1.//安装babel
babel-cli  babel-preset-es2015

2.//安装browserify
npm install  browserify  -g

3.配置.babelrc文件

 babel转换语法babel  ./src -d  ./bundle
 es5语法进行编译：browserify  bundle/main.js  -o  dist/main-d-st.js
 最后引入转换打包完成的main-d-st.js文件到html文件中   <script  src="./dist/main-d-st.js"></script>

 使用export 进行暴露的时候，引入的时候必须用对象结构复制的方式进行引入
 即使用import {}  from  './module'

 使用export default进行暴露只能暴露一次，引入的时候不用对象接收，直接用变量进行接收即可
