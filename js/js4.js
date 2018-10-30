var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组

var i=1;
    console.log(Arr);
//生成动态div
(function(){
    for (var i=0; i<Arr.length; i++){
        $("main").append(' <div  class="box" id="div">\n' +
            '                    <div class="one"> ' + Arr[i] + '</div>\n' +
            '                    <div class="two" >' + (i+1) + '</div>\n' +
            '                </div>')//添加div
    }
}());

//跳转页面
$("button").click(function(){
    window.location.href="js4.1.html";
});


sessionStorage.setItem("Arr", JSON.stringify(Arr));
$("#return").click(function(){
    alert("返回上一个页面");
    sessionStorage.removeItem('Arr');
    sessionStorage.removeItem('testCopy');
    sessionStorage.removeItem('day');
    sessionStorage.removeItem('indexArr');
    sessionStorage.removeItem('x');
    sessionStorage.removeItem('det');
    sessionStorage.removeItem('sw');
    sessionStorage.removeItem('wyz');
    sessionStorage.removeItem('y');
    sessionStorage.removeItem('index');
    sessionStorage.removeItem('u');
    sessionStorage.removeItem('toupiaoArr');
    window.location.href="js2.html";
});
$("#close").click(function(){
    alert("返回上一个页面");
    sessionStorage.removeItem('Arr');
    sessionStorage.removeItem('testCopy');
    sessionStorage.removeItem('day');
    sessionStorage.removeItem('indexArr');
    sessionStorage.removeItem('x');
    sessionStorage.removeItem('det');
    sessionStorage.removeItem('wyz');
    sessionStorage.removeItem('sw');
    sessionStorage.removeItem('y');
    sessionStorage.removeItem('index');
    sessionStorage.removeItem('u');
    sessionStorage.removeItem('toupiaoArr');
    window.location.href="js2.html";
});