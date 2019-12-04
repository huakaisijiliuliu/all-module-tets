define(function(require,exports,module){
    let  name="module4"
    function foo(){
        console.log(name)
    }
    //引入模块
    let module2=require('./module2')
    module2();
    //异步引入
    require.async('./module3',function(module3){
        module3.module3.foo()
    })

    function fun2(){
        console.log("module4")
    }
    exports.fun2=fun2;
})