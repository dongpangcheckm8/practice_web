var log = document.querySelector(".log");
var ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
  // target이 image이면 src를 추출해서 출력
  var target = event.target;
  if(target.tagName === "IMG") {
    log.innerHTML = "IMG URL IS " + target.src;
  } else if(target.tagName === "LI") {
    log.innerHTML = "IMG URL IS " + target.firstElementChild.src;
  }
});
