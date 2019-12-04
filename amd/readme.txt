//针对浏览器端的模块化规范amd
异步加载处理模块

定义暴露模块：
    1，定义没有依赖的模块（一个参数）
       Define(function(){return  ;})
    2，定义有依赖的模块（两个参数）
       define(['module1','module2'],function(m1,m2){rteurn ;}）
引用模块
     requirejs(['module','module2'],function(m1,m2){})

注意：amd规范需要引入reuqire.js的包
      main.js文件中配置模块的时候，文件名不应该后缀
      引入第三方的模块，配置的代码不一致（代码中示范了angular,jauery）的引入配置