var list = document.getElementsByClassName('dump');
function begin() {
    var one = Math.floor(Math.random()*list.length);
    var two = Math.floor(Math.random()*list.length);
    var three = Math.floor(Math.random()*list.length);
    if(one!=two&&one!=three&&two!=three){
        orange();
        list[one].style.backgroundColor = 'rgb'+ colors();
        list[two].style.backgroundColor = 'rgb'+ colors();
        list[three].style.backgroundColor = 'rgb'+ colors();
    }
    else {
        begin()
    }
}
function colors() {
    var rgb;
    var r = Math.floor(Math.random()*265);
    var g = Math.floor(Math.random()*265);
    var b = Math.floor(Math.random()*265);
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}
var int;
document.getElementsByClassName('start').onclick = function () {
    clearInterval(int);//停止定时器
    int=self.setInterval("begin()",1000)
}


var orange= function(){
    for (let i=0; i<list.length ;i++){
        list[i].style.background="#ffa600";
    }
};
document.getElementById('stop').onclick = function () {
    orange();
    clearInterval(int);//停止定时器
};
