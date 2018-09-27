var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
var y=JSON.parse(sessionStorage.getItem("y"));//一顿操作上一个页面的数组
var num=JSON.parse(sessionStorage.getItem("num"));//一顿操作上一个页面的数组
var det=JSON.parse(sessionStorage.getItem("det"));//一顿操作上一个页面的数组
var god=JSON.parse(sessionStorage.getItem("god"));//一顿操作上一个页面的数组
console.log(Arr);
var testCopy=JSON.parse(sessionStorage.getItem("testCopy"));//一顿操作上一个页面的数组
var day=JSON.parse(sessionStorage.getItem("day"));//一顿操作上一个页面的数组
var x=JSON.parse(sessionStorage.getItem("x"));//一顿操作上一个页面的数组
var index=JSON.parse(sessionStorage.getItem("index"));//一顿操作上一个页面的数组
var i=1;
var indexArr=JSON.parse(sessionStorage.getItem("indexArr"));//一顿操作上一个页面的数组
var toupiaoArr=JSON.parse(sessionStorage.getItem("toupiaoArr"));//一顿操作上一个页面的数组
var u=JSON.parse(sessionStorage.getItem("u"));//一顿操作上一个页面的数组
var wyz=JSON.parse(sessionStorage.getItem("wyz"));//一顿操作上一个页面的数组
var xyzz=JSON.parse(sessionStorage.getItem("xyzz"));//一顿操作上一个页面的数组


if (god == 3){
    num = 100
    $("button").click(function () {
        window.location.href="js4.1.html";
        sessionStorage.setItem("god", JSON.stringify(0))
        sessionStorage.setItem("wyz", JSON.stringify(wyz))
        sessionStorage.setItem("wyz", JSON.stringify(wyz))
        sessionStorage.setItem("num", JSON.stringify(0))
    })
    document.getElementById("button").innerHTML = "返回";
    document.getElementById("top").innerHTML = "上帝视角";
    $(document).ready(function(){
        for (let x in Arr ){
            // $(".box").eq(x).click(function(){
            //     $(".no").hide();
            //     $(".box").eq(x).children(".no").toggle()
            // });
        }
    });
}
else{
    $(document).ready(function(){
        for (let x in Arr ){
            $(".box").eq(x).click(function(){
                $(".no").hide();
                $(".box").eq(x).children(".no").toggle()
            });
        }
    });
}



if(testCopy == undefined){
    (function(){
        for (var i=0; i<Arr.length; i++){
            $("main").append(' <div  class="box" id="div">\n' +
                '                    <div class="one"> ' + Arr[i] + '</div>\n' +
                '                    <div class="two" >' + (i+1) + '</div>\n' +
                '<div class="no">'+ '<img src="../img/task7-1.9.png"/>' +'</div>\n' +
                '                </div>')//添加div
        }
        testCopy = JSON.parse(JSON.stringify(Arr));//拷贝数组,注意这行的拷贝方法
    }());
}
else if (testCopy ==testCopy){
    for (var i=0; i<testCopy.length; i++){
        $("main").append(' <div  class="box" id="div">\n' +
            '                    <div class="one"> ' + testCopy[i] + '</div>\n' +
            '                    <div class="two" >' + (i+1) + '</div>\n' +
            '<div class="no">'+ '<img src="../img/task7-1.9.png"/>' +'</div>\n' +
            '                </div>')//添加div
    }
}
//跳转页面
var box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++) {
    var a = box[i];
    a.index  =i;//给每个class的元素添加index属性;
    a.onclick = function () {
        console.log(this.index)//打印下标
        index=this.index;
        sessionStorage.setItem("index", JSON.stringify(index))
    }
}
console.log(index)
$("button").click(function(){
    if (num == 0) {
        if ( testCopy[index] === "平民") {
            testCopy[index] = "死人" //改变深拷贝数组角色
            sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
            bijiao()
            if (y ==0) {
                shuzu()
            }
            else {
                toupiao()
            }
        }
        else if (testCopy[index] == "杀手") {
            alert("自己人啊")
        }
        else if (testCopy[index] == "死人") {
            alert("死人最大啊")
        }
    }
    if (num == 1) {
        if (testCopy[index] == "平民") {
            testCopy[index] = "死人" //改变深拷贝数组角色
            sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
            day++
            if (y ==0) {
                shuzu()
            }
            else {
                toupiao()
            }
            sessionStorage.setItem("day", JSON.stringify(day));
            bijiao()
        }
        else if (testCopy[index] == "杀手") {
            testCopy[index] = "死人" //改变深拷贝数组角色
            sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
            day++
            sessionStorage.setItem("day", JSON.stringify(day));
            bijiao()
            if (y ==0) {
                shuzu()
            }
            else {
                toupiao()
            }
        }
        else if (testCopy[index] == "死人") {
            alert("死人最大啊")
        }
    }
});
function bijiao() {
    if (dieIndex() == mienum() ) {
        alert("杀手胜利")
        sessionStorage.setItem("day", JSON.stringify(day));
        sessionStorage.setItem("pingmin", JSON.stringify("杀手胜利"))//平民
        mienum = mienum()
        dieIndex = dieIndex()
        sessionStorage.setItem("mienum", JSON.stringify(mienum))//平民
        sessionStorage.setItem("dieIndex", JSON.stringify(dieIndex))//杀手
        window.location.href="js4.3.html";
    }
    else if (dieIndex() == 0 ) {
        alert("平民胜利")
        sessionStorage.setItem("day", JSON.stringify(day));
        sessionStorage.setItem("pingmin", JSON.stringify("平民胜利"))//平民
        mienum = mienum()
        dieIndex = dieIndex()
        sessionStorage.setItem("mienum", JSON.stringify(mienum))//平民
        sessionStorage.setItem("dieIndex", JSON.stringify(dieIndex))//杀手
        window.location.href="js4.3.html";
    }
    else if (dieIndex() < mienum()) {
    sessionStorage.setItem("day", JSON.stringify(day));
    window.location.href="js4.1.html";
    }
    }
sessionStorage.setItem("Arr", JSON.stringify(Arr))
console.log(testCopy)
for (var index=0;index<=testCopy.length;index++) {
    if (testCopy[index] == "死人") {
        $(".one").eq(index).addClass("red");
    }
}
function dieIndex() {
    // 获得相同元素下标
    let [ ...arr ] = testCopy;
    let dieNum = [];
    for (let i = 0; i < testCopy.length; i++) {
        let a = arr.lastIndexOf("杀手");
        if (a === -1){
            break;
        }
        dieNum.push(a);
        console.log(a);
        console.log(arr);
        arr.splice(a,1);
        console.log(arr);
        console.log(dieNum);
    }
    return dieNum.length;
}
function hanum() {
    // 获得相同元素下标
    let [ ...arr ] = testCopy;
    let dieNum = [];
    for (let i = 0; i < testCopy.length; i++) {
        let a = arr.lastIndexOf("死人");
        if (a === -1){
            break;
        }
        dieNum.push(a);
        console.log(a);
        console.log(arr);
        arr.splice(a,1);
        console.log(arr);
        console.log(dieNum);
    }
    return dieNum.length;
}

function mienum() {
    // 获得相同元素下标
    let [ ...arr ] = testCopy;
    let dieNum = [];
    for (let i = 0; i < testCopy.length; i++) {
        let a = arr.lastIndexOf("平民");
        if (a === -1){
            break;
        }
        dieNum.push(a);
        console.log(a);
        console.log(arr);
        arr.splice(a,1);
        console.log(arr);
        console.log(dieNum);
}
    return dieNum.length;
}
if (indexArr == null) {
    var indexArr = []
}
function shuzu(){
    if (indexArr == undefined){
        indexArr.push(index);
        sessionStorage.setItem("indexArr", JSON.stringify(indexArr))
    }
    else{
        indexArr.push(index)["号被杀死，真实身份是平民"];
        sessionStorage.setItem("indexArr", JSON.stringify(indexArr))
    }
}
if (toupiaoArr == null) {
    var toupiaoArr = []
}
function toupiao(){
    if (toupiaoArr == undefined){
        toupiaoArr.push(index)["号被杀死，真实身份是"];
        sessionStorage.setItem("toupiaoArr", JSON.stringify(toupiaoArr))
    }
    else{
        toupiaoArr.push(index)["号被杀死，真实身份是"];
        sessionStorage.setItem("toupiaoArr", JSON.stringify(toupiaoArr))
    }
}



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
$("#over").click(function () {
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
        window.location.href="js2.html";
    }
    else{
        alert("游戏继续");
    }
})
sessionStorage.setItem("det", JSON.stringify(det))
sessionStorage.setItem("x", JSON.stringify(x));//存储
sessionStorage.setItem("u", JSON.stringify(u))
sessionStorage.setItem("xyzz", JSON.stringify(xyzz))