var objs = document.querySelectorAll("input[value='0']");//objs是每题0分选项
for(i=0,len=objs.length;i<len;i++){
var objs1 = document.getElementsByName(objs[i].name);//objs1是第i题的所有选项
objs1[objs1.length-1].click();//点击最后一个选项（给满分）
}
var objs2=document.getElementsByTagName('textarea');//objs2是第i题的评语文本框
var comments=new Array('good','well done','excellent','marvelous','good job','okay','cool');
for(j=0,len=objs2.length;j<len;j++){
objs2[j].value=comments[Math.floor(Math.random()*comments.length)];
}

//暂不支持自动提交，以防封号。仅仅是自动填写。操作频率过快了半自动也不行
//使用方法：互评界面->右键->检查->console->复制粘贴代码->回车->手动点击提交按钮

/*
0分选项是用来获取每题所有选项的共用name的，因为每题满分不确定，但每题一定有0分
第三行如果用var objs = document.querySelectorAll("input[value=objs[i].name]");会报错
*/