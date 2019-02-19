function addEvent(element,type,method) {
	// body...
	if (element.addEventListener) {
		element.addEventListener(type,method,false)
	}else{
		element["on" + type] = method;
	}
}
function childNodestopPropagation(element,type) {
	// body...
	var childNodes = element.childNodes;
	for (var i = 0; i < childNodes.length; i++) {
		addEvent(childNodes[i],type,function (e) {
			// body...
			var e = e || window.event;
			e.stopPropagation();
		})
	}
}