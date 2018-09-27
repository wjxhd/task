var testCopy=JSON.parse(sessionStorage.getItem("testCopy"));//一顿操作上一个页面的数组
console.log(testCopy)
var day=JSON.parse(sessionStorage.getItem("day"));//一顿操作上一个页面的数组
var indexArr;
indexArr=JSON.parse(sessionStorage.getItem("indexArr"));//一顿操作上一个页面的数组
var x=JSON.parse(sessionStorage.getItem("x"));//一顿操作上一个页面的数组
var det=JSON.parse(sessionStorage.getItem("det"));//一顿操作上一个页面的数组
var sw=JSON.parse(sessionStorage.getItem("sw"));//一顿操作上一个页面的数组
var y=JSON.parse(sessionStorage.getItem("y"));//一顿操作上一个页面的数组
    var index=JSON.parse(sessionStorage.getItem("index"));//一顿操作上一个页面的数组
var u=JSON.parse(sessionStorage.getItem("u"));//一顿操作上一个页面的数组
var toupiaoArr=JSON.parse(sessionStorage.getItem("toupiaoArr"));//一顿操作上一个页面的数组
var Arr=JSON.parse(sessionStorage.getItem("Arr"));//一顿操作上一个页面的数组
var wyz=JSON.parse(sessionStorage.getItem("wyz"));//一顿操作上一个页面的数组
console.log(Arr);

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
if(day == undefined){
    var day = 1
}

if(toupiaoArr == undefined){
    var toupiaoArr = []
}
$(".day").click(function(){
    $(".jqu").toggle();
});
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
    return dieNum.reverse();
}
//生成动态div
      if (testCopy ==undefined){
          for (var u=0; u<day; u++){
              $("main").append(' <div  class="box">\n' +
                  '<div class="day">'+ '第' +'<span id="export">'+ (u+1) +' \n' +
                  ' </span>'+ '天' + '</div>\n' +
                  '<div class="jqu">\n' +
                  '<div class="opery">\n' +
                  '<img class="hei" src="../img/js4hei.png" >\n' +
                  '<div class="taiangle1">\n' +
                  '</div>\n' +
                  '<div class="obding1">杀手杀人</div>\n' +
                  '</div>\n' +
                  '<div class="detail">\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="hei" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle2">' +
                  ' </div>\n' +
                  '<div class="obding2">亡灵发表遗言</div>\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="bai" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle3">' +
                  ' </div>\n' +
                  '<div class="obding3">玩家依次发言</div>\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="bai" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle4">' +
                  ' </div>\n' +
                  '<div class="obding4" id="whole">投票</div>\n' +
                  '</div>\n' +
                  '</div>\n' +
                  '                </div>')//添加div
          }
      }
      else if (testCopy) {
          for (var u=0; u<day; u++){
              $("main").append(' <div  class="box">\n' +
                  '<div class="day">'+ '第' +'<span id="export">'+ (u+1) +' \n' +
                  ' </span>'+ '天' + '</div>\n' +
                  '<div class="jqu">\n' +
                  '<div class="opery">\n' +
                  '<img class="hei none" src="../img/js4hei.png" >\n' +
                  '<div class="taiangle1">\n' +
                  '</div>\n' +
                  '<div class="obding1">杀手杀人</div>\n' +
                  '</div>\n' +
                  '<div class="detail">\n' +
                  '<span class="miser"> '+(indexArr[u]+1)+' 号被杀死，真实身份是平民'+'</span>\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="hei" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle2">' +
                  ' </div>\n' +
                  '<div class="obding2">亡灵发表遗言</div>\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="bai" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle3">' +
                  ' </div>\n' +
                  '<div class="obding3">玩家依次发言</div>\n' +
                  '</div>\n' +
                  '<div class="opery">\n' +
                  '<img class="bai" src="../img/js4bai.png" >\n' +
                  '<div class="taiangle4">' +
                  ' </div>\n' +
                  '<div class="obding4" id="whole">投票</div>\n' +
                  '</div>\n' +
                  '   <div class="detai2"> \n' +
                  '   <span class="tousi"> '+(toupiaoArr[u]+1)+'号被杀死，真实身份是 '+ Arr[index] + '     </span>        \n' +
                  '   </div>   </div>\n' +
                  '                </div>')
              sessionStorage.setItem("u", JSON.stringify(u))
          }
          for (var u=2; u<=day; u++){
              $(".tousi").eq(day-u).css({
                  "display":"block"
              });
              $(".miser").eq(day-u).css({
                  "display":"block"
              });
          }
      }
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
    sessionStorage.setItem("wyz", JSON.stringify(1));
    sessionStorage.setItem("xyzz", JSON.stringify(99));
    sessionStorage.setItem("y", JSON.stringify(0));
    sessionStorage.setItem("num", JSON.stringify(0));
    sessionStorage.setItem("det", JSON.stringify(1));
    sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
    sessionStorage.setItem("x", JSON.stringify(0));
    window.location.href="js4.2.html";
});
$(".obding2").click(function () {
    $sfm. obdingtwo()
    sessionStorage.setItem("xyzz", JSON.stringify(1));
    wyz = 2
    sessionStorage.setItem("wyz", JSON.stringify(2));
    alert("真伤心！");
});
$(".obding3").click(function () {
   $sfm. obdingthree()
    wyz =3
    sessionStorage.setItem("wyz", JSON.stringify(3));
    alert("我不是杀手！");

});
$(".obding4").click(function () {
    $sfm. obdingfour()
    alert("一定是他！");
    sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
    sessionStorage.setItem("y", JSON.stringify(1));
    sessionStorage.setItem("num", JSON.stringify(1));
    sessionStorage.setItem("det", JSON.stringify(2));
    sessionStorage.setItem("x", JSON.stringify(2));
    if (wyz == 3){
        sessionStorage.setItem("wyz", JSON.stringify(0));
    }
    window.location.href="js4.2.html";
});
sessionStorage.setItem("Arr", JSON.stringify(Arr));


//颜色渲染
$(document).on({
    click: function () {
        $(this).next().toggle();
    }
},".day");

for (var u=2; u<=day; u++){
    $(".jqu").eq(day-u).css({
       "display":"none"
    });
    $(".obding1").eq(day-u).css({
        "background":"#83b09a",
        "pointer-events":"none",
    });
    $(".obding2").eq(day-u).css({
        "background":"#83b09a",
        "pointer-events":"none",
    });
    $(".obding3").eq(day-u).css({
        "background":"#83b09a",
        "pointer-events":"none",
    });
    $(".obding4").eq(day-u).css({
        "background":"#83b09a",
        "pointer-events":"none",
    });
    $(".taiangle1").eq(day-u).css({
        "border-right": "4vh solid #83b09a",
        "pointer-events":"none",
    });
    $(".taiangle2").eq(day-u).css({
        "border-right": "4vh solid #83b09a",
        "pointer-events":"none",
    });
    $(".taiangle3").eq(day-u).css({
        "border-right": "4vh solid #83b09a",
        "pointer-events":"none",
    });
    $(".taiangle4").eq(day-u).css({
        "border-right": "4vh solid #83b09a",
        "pointer-events":"none",
    });
}
if (wyz == 1) {
    $sfm.obdingone()
    sessionStorage.setItem("wyz", JSON.stringify(1));
}
else if (wyz == 2){
    $sfm.obdingone()
    $sfm.obdingtwo()
    sessionStorage.setItem("wyz", JSON.stringify(2));
}
else if (wyz == 3){
    $sfm.obdingone()
    $sfm.obdingtwo()
    $sfm.obdingthree()
    sessionStorage.setItem("wyz", JSON.stringify(3));
}
sessionStorage.setItem("index", JSON.stringify(index))
sessionStorage.setItem("Arr", JSON.stringify(Arr));
sessionStorage.setItem("day", JSON.stringify(day));
sessionStorage.setItem("testCopy", JSON.stringify(testCopy));//存储
sessionStorage.setItem("indexArr", JSON.stringify(indexArr))
sessionStorage.setItem("toupiaoArr", JSON.stringify(toupiaoArr))


$("#log").click(function () {
    sessionStorage.setItem("god", JSON.stringify(3));//存储
    sessionStorage.setItem("y", JSON.stringify(0))
    window.location.href="js4.2.html";
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
    sessionStorage.removeItem('dayy');
    sessionStorage.removeItem('sum');
    sessionStorage.removeItem('die');
    sessionStorage.removeItem('mie');
        sessionStorage.removeItem('wyz');
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
        sessionStorage.removeItem('wyz');
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

$("#close").click(function(){
    var r=confirm("确定结束游戏？");
    if (r==true){
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