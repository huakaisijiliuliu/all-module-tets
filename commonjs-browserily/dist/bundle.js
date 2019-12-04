(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var  module1=require("./module1.js")
var  module2=require("./module2.js")
var  module3=require("./module3.js")
module1.foo()
module2();
module3.foo1();
module3.foo2();
module3.foo3();
console.log(module3.arr)

},{"./module1.js":2,"./module2.js":3,"./module3.js":4}],2:[function(require,module,exports){
module.exports={
    foo(){
        console.log("module1")
    }
}
},{}],3:[function(require,module,exports){
module.exports=function  foo(){
    console.log("module2")
}
},{}],4:[function(require,module,exports){
exports.foo1=function(){
    console.log("module3")
}
exports.foo2=function(){
    console.log("module31")
}
exports.foo3=function(){
    console.log("module32")
}
exports.arr=[1,5,7,7,6,7,5,2,3,1,2]
},{}]},{},[1]);
