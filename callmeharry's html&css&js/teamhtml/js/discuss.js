﻿// JavaScript Document
function init(uid)
{
	function do_verify() {
    //    alert(segment10)
    xmlHttp = createXMLHttpRequest();
	//url
    var url = null;
    xmlHttp.onreadystatechange = handleReadyStateChange;
    xmlHttp.open("post", url, true);　必须写
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlHttp.send(null);
}
function handleReadyStateChange() {
    //加载页面
}
}
function createXMLHttpRequest() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
    } catch(e) {
        try {
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        } catch(e) {
            try {
                xmlhttp = new XMLHttpRequest();
            } catch(e) {
                alert("创建XMLHttpRequest对象失败！");
            }
        }
    }
    return xmlhttp;
}
function show_new_reply(a){
	var array = new Array();
	array = a.name.split("-")
	var mid = array[4];
	var id = "news-reply-new-main-" + mid;
	document.getElementById(id).style.display = "block";
	var hide_id = "news-reply-new-tab-div-" + mid;
	document.getElementById(hide_id).style.display = "none";
}
function reply_adduser(a){
	var array = new Array();
	array = a.name.split("-");
	var name = array[0];
	var id = array[1];
	document.getElementById("news-reply-new-input-"+id).innerText="回复" + name+"：";
	var show_id = "news-reply-new-main-" + id;
	document.getElementById(show_id).style.display = "block";
	var hide_id = "news-reply-new-tab-div-" + id;
	document.getElementById(hide_id).style.display = "none";
}