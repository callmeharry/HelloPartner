// JavaScript Document
function show_detail(div){
	var id = div.id;
	var did = new Array();
	did = id.split("-")[2];
	var detail_id = "documents-item-detail-" + did;
	document.getElementById(detail_id).style.display = "block";
	div.style.background = "#fff";
}
function keep_detail(div){
	var id = div.id;
	var did = new Array();
	did = id.split("-")[3];
	var detail_id = "documents-item-detail-" + did;
	document.getElementById(detail_id).style.display = "block";
}
function hide_detail(div){
	var id = div.id;
	var did = new Array();
	did = id.split("-")[3];
	var detail_id = "documents-item-detail-" + did;
	document.getElementById(detail_id).style.display = "none";
	var background_id = "documents-background-" + did;
	document.getElementById(background_id).style.background = "#90F";
}