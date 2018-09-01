var Arr=JSON.parse(sessionStorage.getItem("Arr"));
var killer=JSON.parse(sessionStorage.getItem("killer"));
var killNum=JSON.parse(sessionStorage.getItem("killNum "));

$("#bn").click(function(){
    $("#clickone").toggle();
    $("#click").toggle();
    $("#picture").toggle();
});

$("#clickone").hide()