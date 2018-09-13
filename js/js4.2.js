var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
console.log(Arr);
var testCopy=JSON.parse(sessionStorage.getItem("testCopy"));//一顿操作上一个页面的数组
console.log(testCopy)

var i=1;
//生成动态div
(function(){
    for (var i=0; i<Arr.length; i++){
        $("main").append(' <div  class="box" id="div">\n' +
            '                    <div class="one"> ' + Arr[i] + '</div>\n' +
            '                    <div class="two" >' + (i+1) + '</div>\n' +
            '<div class="no">'+ '<img src="../img/task7-1.9.png"/>' +'</div>\n' +
            '                </div>')//添加div
    }
}());

//跳转页面
$("button").click(function(){
    $("box").click(function(){
        $(this).addClass("red");
    });
    window.location.href="js4.1.html";
    sessionStorage.setItem("main", JSON.stringify(main));
});
$(document).ready(function(){
    for (let x in Arr ){
        $(".box").eq(x).click(function(){
            $(".no").hide();
            $(".box").eq(x).children(".no").toggle()
        });
        var box = document.getElementsByClassName("box");
        for (var i = 0; i < box.length; i++) {
        var a = box[i];
        a.index  =i;//给每个class的元素添加index属性;
            a.onclick = function () {
                // if (this.index != "杀手") {
                console.log(this.index)
                var testCopy = JSON.parse(JSON.stringify(Arr));//拷贝数组,注意这行的拷贝方法
                testCopy[this.index] = "死人"//改变深拷贝数组角色

                sessionStorage.setItem("this.index", JSON.stringify(testCopy));
                // $(testCopy[this.index]).addClass("red");
                console.log(testCopy);
                sessionStorage.setItem("testCopy", JSON.stringify(testCopy));
                // console.log(Arr[a.index])
            }
            // }
        }
    }
});


