//用于浏览器的模块化规范Cmd

 定义暴露模块：
      1，定义没有依赖的模块
         define(function(require,exports,module){})
      2，定义有依赖的模块
           define(function(require,exports,module){
              var  module2=require('./module2')
              require.async('./modules',function(m3){})
              export.xx=value;
           })
  引入模块：

  在浏览器端实现需要以来sea.js
