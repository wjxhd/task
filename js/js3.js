var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
console.log(Arr)
if (a == undefined){
    var a = 0
}
if (x == undefined){
    var x=1;
}
if (output == undefined) {
    var output = 2;
    document.getElementById("bn").innerHTML=x;
    $("#bn").prepend("<span>查看</span> ");
    $("#bn").append(" <span>号身份</span>");
}

$("#bn").click(function(){
    a+=1;
    bn.innerText=a;
    if (a == 2){
        x++
        a = 0
    }
    document.getElementById("one").innerHTML=x;
    $("#clickone").toggle();
    $("#click").toggle();
    $("#picture").toggle();
    $("#position").toggle();
    document.getElementById("operation").innerHTML=Arr[x-1];
    if (output == 1){
        document.getElementById("bn").innerHTML=x;
        $("#bn").prepend("<span>查看</span> ");
        $("#bn").append(" <span>号身份</span>");
        output = 2;
    }
    else if (output ==2){
        document.getElementById("bn").innerHTML="隐藏并传递给下一个";
        output = 1;
    }
    if (x == Arr.length) {
        if (output == 1){
            document.getElementById("bn").innerHTML="查看法官文本";
        }
    }
    else if (x>Arr.length) {
        document.getElementById("bn").innerHTML="查看法官文本";
        document.getElementById("one").innerHTML=Arr.length;
        window.location.href="js4.html";
    }
});
$("#return").click(function(){
    alert("返回上一个页面");
    window.location.href="js2.html";
});
$("#close").click(function(){
    alert("即将关闭这个页面");
});
sessionStorage.setItem("Arr", JSON.stringify(Arr));