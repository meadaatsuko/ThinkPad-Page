function secondMenu(argument) {
	// body...
	var productCenterButton = document.getElementById("productCenter"),
	productCenterBlock = document.querySelector("div.productCenter");
	childNodestopPropagation(productCenterBlock,"mouseover");
	addEvent(productCenterButton,"mouseenter",function (argument) {
		// body...
		productCenterBlock.style.display = "block";
	});
	addEvent(window,"mouseover",function (e) {
		// body...
		var e = e || window.event;
		if (e.target!= productCenterButton && e.target != productCenterBlock) {
			productCenterBlock.style.display = "none";
		}
	});
}
secondMenu();
function computerStyle(argument) {
	// body...
	var lastIndex = 0;
	var productTypeList = document.querySelector("div.productTypeList"),
	imageBlock = document.querySelector("div.nav div.productCenter div.productImages"),
	imageItem = document.querySelectorAll("div.productImagesItem"),
	imageItemDiscript = document.querySelectorAll("div.productImagesItem div");
	imageBlock.lastIndex = 0;
	for (var i = 0; i < imageItem.length; i++) {
		childNodestopPropagation(imageItem[i],"mouseover");
	}
	addEvent(productTypeList,"mouseover",function (e) {
		// body...
		var e = e || window.event;
		var styleTitle = document.querySelectorAll("div.productTypeListTitle span"),
		styleContent = document.querySelectorAll("div.productTypeListContent div.productTypeListContentItem");
		selectTitle(styleTitle,styleContent,e);
	});
	function selectTitle(title,content,e) {
		// body...
		for (var i = 0; i < title.length; i++) {
			if (e.target == title[i]) {
				title[lastIndex].style.color = "#8e8e8e";
				title[i].style.color = "#fff";
				content[lastIndex].style.display = "none";
				content[i].style.display = "block";
				lastIndex = i;
			}
		}
	}
	addEvent(imageBlock,"mouseenter",function (argument) {
		// body...
		this.style.height = "145px";
	});
	addEvent(imageBlock,"mouseleave",function(){
		this.style.height = "112px";
	});
	for (var i = 0; i < imageItem.length; i++) {
		addEvent(imageItem[i],"mouseenter",function (num) {
			// body...
			return function (argument) {
				// body...
				imageItemDiscript[num].style.display = "block";
			}
		}(i));
		addEvent(imageItem[i],"mouseleave",function (num) {
			// body...
			return function (argument) {
				// body...
				imageItemDiscript[num].style.display = "none";
			}
		}(i));
	}
}

computerStyle();