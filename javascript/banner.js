function moveBanner(argument) {
	// body...
	var banner = document.querySelector("div.bannerBlock"),
	leftButton = document.querySelector("i.leftSide"),
	rightButton = document.querySelector("i.rightSide"),
	bannerButtons = document.querySelectorAll("div.bannerButtons a"),
	count = -1920,i = 0,stop = null,lastIndex = 0;
	function bannerMoveRight(argument) {
		// body...
		if (count >= -19200) {
			count -= 1920;
			if (i < 8) {
				i++;
			}
			banner.style.transition = "500ms left";
			banner.style.left = count +"px";
			bannerButtons[lastIndex].style.background = "rgba(100,100,100,.5)";
			bannerButtons[i].style.background = "rgba(100,100,100,.9)";
			lastIndex = i;
			if (count == -19200) {
				count = -1920;
				i = 0;
				bannerButtons[lastIndex].style.background = "rgba(100,100,100,.5)";
				bannerButtons[i].style.background = "rgba(100,100,100,.9)";
				lastIndex = 0;
				setTimeout(function (argument) {
					// body...
					banner.style.transition = "0s left";
					banner.style.left = count +"px";
				},500);
			}
		}
	}
	function bannerMoveLeft(argument) {
		// body...
		if (count <= 0) {
			count += 1920;
			if (i > 0) {
				i--;
				bannerButtons[lastIndex].style.background = "rgba(100,100,100,.5)";
				bannerButtons[i].style.background = "rgba(100,100,100,.9)";
			}
			lastIndex = i;
			banner.style.transition = "500ms left";
			banner.style.left = count +"px";
			if (count == 0) {
				i = 8;
				bannerButtons[lastIndex].style.background = "rgba(100,100,100,.5)";
				bannerButtons[i].style.background = "rgba(100,100,100,.9)";
				lastIndex = 8;
				count = -17280;
				setTimeout(function (argument) {
					// body...
					banner.style.transition = "0s left";
					banner.style.left = count +"px";
				},500);
			}
		}
	}
	stop = setInterval(function (argument) {
		// body...
		bannerMoveRight();
	},3000);
	addEvent(leftButton,"click",function (argument) {
		// body...
		clearInterval(stop);
		bannerMoveLeft();
		stop = setInterval(function (argument) {
			// body...
			bannerMoveRight();
		},3000);
	})
	addEvent(rightButton,"click",function (argument) {
		// body...
		clearInterval(stop);
		bannerMoveRight();
		stop = setInterval(function (argument) {
			// body...
			bannerMoveRight();
		},3000);
	})
	addEvent(window,"focus",function (argument) {
		// body...
		clearInterval(stop);
		stop = setInterval(function (argument) {
			// body...
			bannerMoveRight();
		},3000);
	});
	addEvent(window,"blur",function (argument) {
		// body...
		clearInterval(stop);
	})
	function selectButtons(argument) {
		// body...
		for (var j = 0; j < bannerButtons.length; j++) {
			addEvent(bannerButtons[j],"click",function (num) {
				// body...
				return function (argument) {
					// body...
					clearInterval(stop);
					bannerButtons[lastIndex].style.background = "rgba(100,100,100,.5)";
					bannerButtons[num].style.background = "rgba(100,100,100,.9)";
					count = -1920 - num * 1920;
					banner.style.left = count + "px";
					lastIndex = i = num;
					stop = setInterval(function (argument) {
						// body...
						bannerMoveRight();
					},3000);
				}
			}(j));
		}
	}
	selectButtons();
}
moveBanner();
