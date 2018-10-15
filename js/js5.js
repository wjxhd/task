// // 原生
// document.getElementById("entry").onclick=function(){
//         var  name=document.getElementById("main-top").value;
//         var  bottom=document.getElementById("main-bottom").value;
//         //两个输入框的值
//     var xhr=new XMLHttpRequest();//创建请求对象
//     xhr.open('Post','/carrots-admin-ajax/a/login',true);//链接服务器
//     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
//     xhr.send("name="+name+"&pwd="+bottom);//发送数据
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4){//判断请求
//             if(xhr.status==200){//请求成功
//                 var data=xhr.responseText;
//                 data=JSON.parse(data);
//                 if(data.code==0){
//                     // window.location.href="http://www.jnshu.com/school/26313/message/daily?page=1";
//                 }
//                 else{
//                    alert(message)
//                 }
//             }
//         }
//     };
// };

//jquery
$("#entry").click(function () {
    $.ajax({
        url: '/carrots-admin-ajax/a/login',//后台
        type: 'post',//http 请求
        async: true,//异步
        contentTypt: 'application/json',
        dataType: "json",
        data:{
            name:$("#main-top").val(),
            pwd:$("#main-bottom").val(),
        },
        success:function(obj){
            console.log(obj.code);
            console.log($("#main-top").val());
            console.log($("#main-bottom").val());
            if(obj.code==0){
                window.location.href="http://www.jnshu.com/school/26313/message/daily?page=1";
            }
            else{
                $("#noun").text(obj.message);
            }
            if ($("#main-top").val() == "") {
                document.getElementById("noun").innerHTML = "请输入账号，密码.";
            }
            else if ($("#main-bottom").val() == "") {
                document.getElementById("noun").innerHTML = "请输入密码.";
            }
        }
    })
})



