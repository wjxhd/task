var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
var y=JSON.parse(sessionStorage.getItem("y"));//一顿操作上一个页面的数组
var num=JSON.parse(sessionStorage.getItem("num"));//一顿操作上一个页面的数组
var testCopy=JSON.parse(sessionStorage.getItem("testCopy"));//一顿操作上一个页面的数组
var day=JSON.parse(sessionStorage.getItem("day"));//一顿操作上一个页面的数组
var index=JSON.parse(sessionStorage.getItem("index"));//一顿操作上一个页面的数组
var day=JSON.parse(sessionStorage.getItem("day"));//一顿操作上一个页面的数组
var mienum=JSON.parse(sessionStorage.getItem("mienum"));//一顿操作上一个页面的数组
var dieIndex=JSON.parse(sessionStorage.getItem("dieIndex"));//一顿操作上一个页面的数组
var pingmin=JSON.parse(sessionStorage.getItem("pingmin"));//一顿操作上一个页面的数组
var indexArr=JSON.parse(sessionStorage.getItem("indexArr"));//一顿操作上一个页面的数组
var toupiaoArr=JSON.parse(sessionStorage.getItem("toupiaoArr"));//一顿操作上一个页面的数组
var u=JSON.parse(sessionStorage.getItem("u"));//一顿操作上一个页面的数组
document.getElementById("position").innerHTML=pingmin;//平民胜利，杀手胜利。
document.getElementById("dayy").innerHTML=day-1;//使用天数
document.getElementById("sum").innerHTML=mienum + dieIndex;//剩余总人数
document.getElementById("die").innerHTML=dieIndex;//剩余杀手人数
document.getElementById("mie").innerHTML=mienum;//剩余平民人数
var x=JSON.parse(sessionStorage.getItem("x"));//一顿操作上一个页面的数组
var xyzz=JSON.parse(sessionStorage.getItem("xyzz"));//一顿操作上一个页面的数组
for (var e = 0; e<day-1; e++) {
    (function  add() {
        $(".dynamic").append(
            `<div class="one">
<div class="time">第 <span class="six">${e+1}</span>天</div>
<span class="timetwo">0分0秒</span>
<div class="heiye">夜晚： ${indexArr[e]+1}号被杀，真实身份是平民</div>
<div class="baitian">白天：${toupiaoArr[e]+1}  号被投死，真实身份是 ${Arr[toupiaoArr[e]]}</div>
</div>`)
    }())
}

if (xyzz == 99){
    for (var e = 0; e<day-e; e++) {
        (function  add() {
            $(".dynamic").append(
                `<div class="one">
<div class="time">游戏结束的一天</div>
<span class="timetwo">0分0秒</span>
<div class="heiye">夜晚： ${indexArr[e+1]+1}号被杀，真实身份是平民</div>
<div class="baitian">白天：什么事都没得发生.</div>
</div>`)
        }())
    }
}
console.log(testCopy);
$("#log").click(function () {
        sessionStorage.removeItem('Arr');
        sessionStorage.removeItem('testCopy');
        sessionStorage.removeItem('day');
        sessionStorage.removeItem('indexArr');
        sessionStorage.removeItem('x');
        sessionStorage.removeItem('det');
        sessionStorage.removeItem('sw');
        sessionStorage.removeItem('y');
        sessionStorage.removeItem('index');
        sessionStorage.removeItem('u');
        sessionStorage.removeItem('toupiaoArr');
    sessionStorage.removeItem('position');
    sessionStorage.removeItem('dayy');
    sessionStorage.removeItem('sum');
    sessionStorage.removeItem('wyz');
    sessionStorage.removeItem('die');
    sessionStorage.removeItem('mie');
    sessionStorage.removeItem('xyzz');
        window.location.href="js2.html";
})


$("#return").click(function(){
    var r=confirm("确定结束游戏？");
    if (r==true){
        sessionStorage.removeItem('Arr');
        sessionStorage.removeItem('testCopy');
        sessionStorage.removeItem('day');
        sessionStorage.removeItem('indexArr');
        sessionStorage.removeItem('x');
        sessionStorage.removeItem('det');
        sessionStorage.removeItem('sw');
        sessionStorage.removeItem('y');
        sessionStorage.removeItem('index');
        sessionStorage.removeItem('u');
        sessionStorage.removeItem('toupiaoArr');
        sessionStorage.removeItem('position');
        sessionStorage.removeItem('wyz');
        sessionStorage.removeItem('dayy');
        sessionStorage.removeItem('sum');
        sessionStorage.removeItem('die');
        sessionStorage.removeItem('mie');
        sessionStorage.removeItem('xyzz');
        window.location.href="js2.html";
    }
    else{
        alert("游戏继续");
    }
})

