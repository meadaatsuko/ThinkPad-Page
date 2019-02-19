function moveProductList(element,startPos,endPos) {
	// body...
	var posX = parseInt(element.style.left);
	if (posX == startPos) {
		element.style.left = endPos+ "px";
	}
}

function loadProductMove(argument) {
	// body...
	var leftButton = document.querySelectorAll("div.contentCenter i.leftSide");
	var rightButton = document.querySelectorAll("div.contentCenter i.rightSide");
	var brandList = document.querySelector("div.brandBlock");
	var productList = document.querySelector("div.productBlock");
	addEvent(leftButton[0],"click",function (argument) {
		// body...
		moveProductList(productList,-800,0);
	});
	addEvent(leftButton[1],"click",function (argument) {
		// body...
		moveProductList(brandList,-1067,0);
	});
	addEvent(rightButton[0],"click",function (argument) {
		// body...
		moveProductList(productList,0,-800);
		console.log(1);
	});
	addEvent(rightButton[1],"click",function (argument) {
		// body...
		moveProductList(brandList,0,-1067);
		console.log(1);
	});
}
function loadBrandImg(argument) {
	// body...
	var bottomImgList = document.querySelectorAll("div.bottom");
	for (var i = 0; i < bottomImgList.length; i++) {
		bottomImgList[i].style.background = "url(images/productList/brandBottom/" + i + ".jpg";
	}
}
loadBrandImg();
loadProductMove();