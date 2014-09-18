// JavaScript Document
var new_quest_singlequest_item = 0;
var namelist_html = "";

function load(){
	var namelist_html_tmpl = "<input type=\"checkbox\" name={{name}}/>{{name}}";
	for(var i = 0;i<4;i++){
		var data = {"name":i};
		namelist_html += Mustache.render(namelist_html_tmpl,data);
	}
}
function show_new_quest_detail(){
	$(".new-quest-content").fadeToggle(200,null,null);
}
function add_singlequest(){
	var new_quest = document.getElementById("new-quest-singlequest-tmpl").innerHTML;
	var data = {"num":new_quest_singlequest_item};
	var view = Mustache.render(new_quest,data);
	$("#singlequest-list").append(view);
	$("#checkbox-member-"+new_quest_singlequest_item).append(namelist_html);
		new_quest_singlequest_item++;
}
function delete_singlequest(a){
	document.getElementById("singlequest-list").removeChild(document.getElementById("singlequest-"+a.name));
}
function refresh(){
	window.location.reload(true);
}
function show_previous_quest_detail(a){
	var id = "previous-quest-detail-"+a.name;
	$("#"+id).fadeToggle(200,null,null);

}
