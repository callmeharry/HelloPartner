// JavaScript Document
var selected_author = "所有人";

function load(){
	//获取数据
	var have_report = true;
	if(have_report){
		var content = document.getElementById("singlereport-content-tmpl").innerHTML;
		var data = {"singlereport-item-1":"1","singlereport-item-2":"2","singlereport-item-3":"3","singlereport-item-4":"4","singlereport-item-5":"5"};
		var view = Mustache.render(content,data);
		$("#report-inneritem").append(view);
	}else{
		var content = document.getElementById("no-report-tmpl").innerHTML;
		$("#report-inneritem").append(content);
	}
	//设置page-up page-down按钮可否点击
}
function send_report(){
	var item_1 = document.getElementById("report-item-1").value;
	var item_2 = document.getElementById("report-item-2").value;
	var item_3 = document.getElementById("report-item-3").value;
	var item_4 = document.getElementById("report-item-4").value;
	var item_5 = document.getElementById("report-item-5").value;
	document.getElementById("report-item-1").value = "";
	document.getElementById("report-item-2").value = "";
	document.getElementById("report-item-3").value = "";
	document.getElementById("report-item-4").value = "";
	document.getElementById("report-item-5").value = "";
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var time = year + "-" + month + "-" + day;
	alert(time);
	var editor = "";
	load();
	//item_1~item_5发送 editor time发送
}
function save_as_draft(){
	var item_1 = document.getElementById("report-item-1").value;
	var item_2 = document.getElementById("report-item-2").value;
	var item_3 = document.getElementById("report-item-3").value;
	var item_4 = document.getElementById("report-item-4").value;
	var item_5 = document.getElementById("report-item-5").value;
	var editor = "";
	//item_1~item_5发送
}