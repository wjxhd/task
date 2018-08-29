let {log}=console;
function add() {
    var num = parseInt(document.getElementById("quantity").value);
    log(num);
    if (num < 18)
        document.getElementById("quantity").value = num + 1;
    the()
}
function sud() {
    var num = parseInt(document.getElementById("quantity").value);
    log(num);
    if (num != 4)
        document.getElementById("quantity").value = num - 1;
    the()
}
function print(){
    var a=myform.name.value;
    alert(a);
}
function aj() {
    var num = document.getElementById("playernum").value;
    if (num <= 18 && num >= 4) {
        return num;
    }
    else {
        alert("请正确输入4-18的数字");
        return false;
    }
}

function berjs() {
    aj();
    var num =document.getElementById("playernum").value;
    document.getElementById("quantity").value = num;
};

function the() {
    value=document.getElementById("quantity").value;
    log(value);
    document.getElementById("playernum").value=value;
    randarr();
}

function randarr() {
    //生成杀手人数，平民人数的数组
    var num = document.getElementById("quantity").value;
    var Arr = [];
    var  n = 1;//分配杀手的参数
    for (var i = 0; i < num; i++) {
        Arr[i] = "平民";

        if ( i+1 >= 3 * n) {

            Arr[i] = "杀手";
            n++;
        }
    }

    //数组乱序洗牌
    for (var i = 0; i < num; i++) {
        var index,
            temp;
        index = Math.floor(Math.random() * num);
        if (i != index) {
            temp = Arr[i];
            Arr[i] = Arr[index];
            Arr[index] = temp;
        }
    }
    console.log(Arr);

    let killNum=0;
    for (let i=0;i<Arr.length;i++){
        if(Arr[i]==='杀手'){
            killNum++
        }
    }
    // for (let i in Arr) {
    //     if(Arr[i]==='杀手'){
    //         killNum++
    //     }
    // }
    log('杀手人数:',killNum);
    document.getElementById("killer").innerHTML=killNum;

    return Arr
}
