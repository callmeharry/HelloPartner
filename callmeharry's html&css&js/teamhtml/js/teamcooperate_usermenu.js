// JavaScript Document
//Author:Callmeharry Time:2014/8/4
function displaySubMenu(li) {
var subMenu = li.getElementsByTagName("ul")[0];
subMenu.style.display = "block";
}
function hideSubMenu(li) {
var subMenu = li.getElementsByTagName("ul")[0];
subMenu.style.display = "none";
}
$(document).ready(function () {
            $('.dropdown-toggle').dropdown();
        });