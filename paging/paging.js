/**
 * Created by 岩 on 2016/6/2.
 */

var last = document.getElementById("last");
var next = document.getElementById("next");
var news = document.getElementById("newDate");
var m = 0;//用于标记消息的位置
var num = 5;//每页显示的消息数量

var newDate = [
    {"title":"消息1",},
    {"title":"消息2",},
    {"title":"消息3",},
    {"title":"消息4",},
    {"title":"消息5",},
    {"title":"消息6",},
    {"title":"消息7",},
    {"title":"消息8",},
    {"title":"消息9",},
    {"title":"消息10",},
    {"title":"消息11",},
    {"title":"消息12",},
];
var len = newDate.length;

news.addEventListener("click",function(){
    alert("让你点你就点啊！！！");
},false);
last.addEventListener("click",function(){
    if (m>=num){
        m -= num;
        changePag(m);
    }
},false);
next.addEventListener("click",function(){

    if ((m+num)<(len)){
        m+= num;
        changePag(m);
    }
},false);

changePag(0);
function changePag(k){
    news.innerHTML = "";
    var p = k+num;
    for (k;k < p;k++){
        if (newDate[k]){
            var li = document.createElement('li');
            var a = document.createTextNode(newDate[k]["title"]);
            var title = "这是"+a.nodeValue+"，  点点看！！！";
            //alert(a.nodeValue);
            li.appendChild(a);
            li.setAttribute("id","everyPag");
            li.setAttribute("title",title);
            //li.setAttribute("everyPag","hover");
            //li.addEventListener("click",function(){
            //    alert(a.nodeValue);
            //},false);
            news.appendChild(li);
        }
    }
}

//var pag1 = document.createElement("p");
