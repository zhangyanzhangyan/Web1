/**
 * Created by lenovo on 2016/6/3.
 * @author jackwang <wdmzjjm@163.com>
 * @blog http://www.notalent.cn
 */
//简易实现分页，自己可以想出更好的写法
var newsData = [
    {"title": "新闻1：有关张岩", "url": "javascript:void(0);"},
    {"title": "新闻2：有关尹琨绍", "url": "javascript:void(0);"},
    {"title": "新闻3：有关李文婷", "url": "javascript:void(0);"},
    {"title": "新闻4：有关于尧", "url": "javascript:void(0);"},
    {"title": "新闻5：有关钱圳彬", "url": "javascript:void(0);"},
    {"title": "新闻6：有关钱圳彬", "url": "javascript:void(0);"},
    {"title": "新闻7：有关张岩", "url": "javascript:void(0);"},
    {"title": "新闻8：有关李涛", "url": "javascript:void(0);"},
    {"title": "新闻9：有关刘文彬", "url": "javascript:void(0);"},
    {"title": "新闻10：有关刘旭", "url": "javascript:void(0);"},
    {"title": "新闻11：有关卫斌", "url": "javascript:void(0);"},
    {"title": "新闻12：有关小寻", "url": "javascript:void(0);"},
    {"title": "新闻13：有关刘玲", "url": "javascript:void(0);"},
    {"title": "新闻14：有关田英俊", "url": "javascript:void(0);"}
];

var len = newsData.length;
var ul = document.getElementById('newsList');
var last = document.getElementById("last");
var next = document.getElementById("next");
var j = 0;

if(len < 5){
    last.style.display = "none";
    next.style.display = "none";
}

function contentDisplay(j){
    ul.innerHTML = "";
    var z = j + 5;
    if(j + 5 >= len){
        z = len;
    }
    for(var i = j; i < z; i++){
        var li = document.createElement('li');
        var a = document.createElement('a');
        var text = document.createTextNode(newsData[i]["title"]);
        a.href = newsData[i]["url"];
        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
    }
}

contentDisplay(j);

next.addEventListener("click", function(){
    if(j >= len - 5){
        return;
    }
    j = j + 5;
    contentDisplay(j);
}, false);
last.addEventListener("click", function(){
    if(j <= 0){
        return;
    }
    j = j - 5;
    contentDisplay(j);
}, false);

