// JavaScript Document
function load(){
	var member_item = document.getElementById("member-item-tmpl").innerHTML;
	var add_href = member_item.replace("#","要替换的链接");
	var add_name = add_href.replace("*","成员名字");
	var converter = document.createElement("DIV");
	document.getElementById("memberlist").appendChild(member_item);
	alert(document.getElementById("memberlist").innerHTML);
}