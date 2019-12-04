
define(['module1','jquery'],function(module1,$){
    let  msg="2";
    function  foo(){
        console.log(msg);
        module1.foo();
        $('body').css('background','red')
    }
    return   {foo}
})