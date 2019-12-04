(function(){
    requirejs.config({
        //baseUrl:""
        paths:{
            module1:'./src/module',
            module2:'./src/module2',
            jquery: "./lib/jquery-1.10.1",
            angular:"./lib/angular"
        },
        shim:{
            angular:{
                exports:'angular'
            }
        }

    })
    requirejs(['module2','angular'],function(module2,angular){
        module2.foo();
        console.log('angular---'+angular)

    })
})()