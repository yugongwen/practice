//addloadEvent函数
function addLoadEvent(func) {
	// body...
	var oldonload = window.onload;
	if (typeof window.onload !='function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();

		}
	}
}
//insertAfter函数
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertbefore(newElement,targetElement.nextSibling);
	}
}
//addClas函数
function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.Name;
		newClassName+= " ";
		newClassName+=value;
		element.className = newClassName;
	}
}
//highlightPage函数
function hightlightPage(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if(headers.length == 0) return false;
    var navs =headers[0].getElementsByTagName('nav');
    if(navs.length ==0) return false;
    var links = navs[0].getElementsByTagName('a');
    var linkurl;
    for(var i=0;i<links.length;i++){
    	linkurl = links[i].getAttribute("href");
    	if(window.location.href.indexOf(linkurl) != -1){
    		links[i].parentNode.className = "here"; 
    	}
    }
}
addLoadEvent(hightlightPage);

