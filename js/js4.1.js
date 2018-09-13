var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
console.log(Arr);
var testCopy=JSON.parse(sessionStorage.getItem("testCopy"));//一顿操作上一个页面的数组
console.log(testCopy)
//生成动态div


// });
$(document).ready(function(){
    $("#whole").click(function(){
        $(".box").after("<div  class=\"box\">" +
            "<div class=\"day\">第<span id=\"export\"></span> 天  </div><div class=\"jqu\">" +
            "<div class=\"opery\"><div class=\"taiangle1\"></div>" +
            "<div class=\"obding1\">杀手杀人</div></div><div id=\"detail\"><span id=\"numder\">'+  '玩家被杀" +
            "死，真实身份是'+'</span><span id=\"miser\"></span>" +
            "</div><div class=\"opery\"><div class=\"taiangle2\"></div><div class=\"obding2\">亡灵发表遗言</div>" +
            "</div><div class=\"opery\"><div class=\"taiangle3\"></div><div class=\"obding3\">玩家依次发言</div>" +
            "</div><div class=\"opery\">" +
            "<div class=\"taiangle4\"> </div><div class=\"obding4\" id=\"whole\">投票</div></div></div></div>")
    });
});
var u = 1
// document.getElementById("export").innerHTML =u;
$("#whole").click(function(){
    for (u=1; u<2; u++){
        $("main").append(' <div  class="box">\n' +
            '<div class="day">'+ '第' +'<span id="export">\n' +
            '</span>'+ '天' + '</div>\n' +
            '<div class="jqu">\n' +
            '<div class="opery">\n' +
            '<div class="taiangle1">\n' +
            '</div>\n' +
            '<div class="obding1">杀手杀人</div>\n' +
            '</div>\n' +
            '<div id="detail">\n' +
            '<span id="numder">'+  '玩家被杀死，真实身份是'+'</span>\n' +
            '<span id="miser"> </span>\n' +
            '</div>\n' +
            '<div class="opery">\n' +
            '<div class="taiangle2">' +
            ' </div>\n' +
            '<div class="obding2">亡灵发表遗言</div>\n' +
            '</div>\n' +

            '<div class="opery">\n' +
            '<div class="taiangle3">' +
            ' </div>\n' +
            '<div class="obding3">玩家依次发言</div>\n' +
            '</div>\n' +

            '<div class="opery">\n' +
            '<div class="taiangle4">' +
            ' </div>\n' +
            '<div class="obding4" id="whole">投票</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '                </div>')//添加div
    }
}());
// $(".box").click(function() {
//     $(".jqu").toggle();
// });
//隐藏明细
$(".obding1").click(function(){
    $("#detail").show();
});
//有限状态机
var $sfm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'obdingone', from: 'solid', to: 'liquid'},
        {name: 'obdingtwo', from: 'liquid', to: 'one'},
        {name: 'obdingthree', from: 'one', to: 'gas'},
        {name: 'obdingfour', from: 'gas', to: 'two'}
    ],
    //通过点击改变样式
    methods: {
        onObdingone:  function () {
            $(".obding1").css({"background": "#83b09a"});
            $(".taiangle1").css({"border-right": "4vh solid #83b09a"});
        },
        onObdingtwo: function () {
            $(".obding2").css({"background": "#83b09a"});
            $(".taiangle2").css({"border-right": "4vh solid #83b09a"});
        },
        onObdingthree: function () {
            $(".obding3").css({"background": "#83b09a"});
            $(".taiangle3").css({"border-right": "4vh solid #83b09a"});
        },
        onObdingfour: function () {
            $(".obding4").css({"background": "#83b09a"});
            $(".taiangle4").css({"border-right": "4vh solid #83b09a"});
        },
    }
});
// 点击事件
$(".obding1").click(function () {
  $sfm.obdingone()
    sessionStorage.setItem("y", JSON.stringify(1));
    window.location.href="js4.2.html";
});
$(".obding2").click(function () {
    $sfm. obdingtwo()
    alert("真伤心！");

});
$(".obding3").click(function () {
   $sfm. obdingthree()
    alert("我不是杀手！");

});
$(".obding4").click(function () {
    $sfm. obdingfour()
    alert("一定是他！");
    window.location.href="js4.2.html";
    u++

});
sessionStorage.setItem("Arr", JSON.stringify(Arr));
var y=JSON.parse(sessionStorage.getItem("y"));
if(y===1){
    $sfm.obdingone()
    y--
}

sessionStorage.setItem("Arr", JSON.stringify(Arr));