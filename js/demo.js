//    function a(){
//                             var name = "吴彦祖";
//                             console.log(this.name); //undefined
//                             console.log(this); //window
//                         }
// a();
//全局对象，永远指向window
// 在全局环境里面，this 永远指向 window，因此在全局环境里作为普通函数被调用的时候，this 也是指向 window。


// var o = {
//     name : "古天乐",
//     fn : function(){
//         console.log(this.name);
//     }
// }
// o.fn();
//函数作为一个对象的属性方法，并且被调用的时候，那么这个属性方法中的this 就指向这个对象
//
// var name = "万世套";
// function Person(name){
//     this.name = name;
//     console.log(this);
// }
// var person =Person("恍惚套");
// console.log(this.name);
//this指向window，this.name=name,window下的name万世被替换为恍惚