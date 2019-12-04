//在浏览器端实现commonjs模块化

浏览器需要下载以来browserify（全局和局部都需要安装）
1,全局安装
  npm  install browserify -g
2，局部安装
  npm  install browserify --save

  浏览器端不能直接执行main.js因为浏览器不认识require关键字，需要用browerify进行打包编译

  编译打包main.js
      -----browserify  src/main.js  -o  dist/bundle.js
  html文件引入编译后的文件
     ----- <script src="./dist/bundle.js"></script>