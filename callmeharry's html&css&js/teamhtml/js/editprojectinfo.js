// JavaScript Document
function initMember()
{
	var div = document.getElementById("memberdiv");
	var dele=document.createElement("input");
	dele.type="button";
  	dele.value="newmember";
	document.body.appendChild(dele);
	div.appendChild(dele);
	dele.onclick="alert()";
}