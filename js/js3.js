
var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
console.log(Arr)
// console.log(Arr[0])
$("#bn").click(function(){
    $("#clickone").toggle();
    $("#click").toggle();
    $("#picture").toggle();
    $("#position").toggle();
});
$("#clickone").hide();

var x=1;
$("#clickone").click(function (){
    x=x+1;
    document.getElementById("one").innerHTML=x;
    document.getElementById("no").innerHTML=x;
})

var a = 0
$("#bn").click(function (){
    document.getElementById("operation").innerHTML=Arr[x-1];
    a++;
    if (a>Arr.length*2-2 )
    {
        document.getElementById("clickone").innerHTML="查看法官文本";
    }
    if (a>Arr.length*2-1 )
    {
        document.getElementById("click").innerHTML="查看法官文本";
        $("#photograph").hide();
        window.location.href="js4.html";
    }

})
$("#return").click(function(){
    alert("返回上一个页面");
    window.location.href="js2.html";
});
$("#close").click(function(){
    alert("即将关闭这个页面");
});
sessionStorage.setItem("Arr", JSON.stringify(Arr));