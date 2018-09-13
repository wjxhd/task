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
