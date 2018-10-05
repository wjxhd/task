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
//                     window.location.href="http://www.jnshu.com/school/26313/message/daily?page=1";
//                 }
//                 else{
//                    alert("账号错误")
//                 }
//             }
//         }
//     };
// };



