// Web Animation #2 - CSS

var target = document.querySelector(".outside");
var btn = document.querySelector("button");

btn.addEventListener("click", function(){
	var pre = parseInt(target.style.left);
	target.style.left = pre + 50 + "px";
	//var base = document.querySelector(".outside");
	//base.style.transform = "scale(2)";
	//base.style.left = "300px";
});

// hoverTest
var hoverTgt = document.querySelector(".hoverTest");
hoverTgt.addEventListener("mouseenter", function(){
  var left = parseInt(hoverTgt.style.left);
  var top = parseInt(hoverTgt.style.top);
  hoverTgt.style.left = left + 200 + "px";
  hoverTgt.style.top = top + 200 + "px";
  hoverTgt.style.transform = "scale(4)";
});
