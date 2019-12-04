var  module1=require("./modules/module.js")
var  module2=require("./modules/module1.js")
var  module3=require("./modules/module2.js")
var  quiz=require('uniq')
module1.foo()
module2();
module3.foo1();
module3.foo2();
module3.foo3();
console.log(quiz(module3.arr))