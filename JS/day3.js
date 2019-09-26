// DOM API practice

// #1
var pineapple = document.createElement("li");
var str = document.createTextNode("pineapple");
pineapple.append(str);
var base = document.querySelector("li:nth-child(2)");
var parent = document.querySelector("ul");
parent.insertBefore(pineapple, base);
// pineapple.remove();

// #2
var pineapple = document.createElement("li");
var str = document.createTextNode("pineapple");
pineapple.append(str);
var base = document.querySelector("li:nth-child(3)"); // banana
var parent = document.querySelector("ul");
parent.insertBefore(pineapple, base);
//pineapple.remove();

// #3
var base = document.querySelector("li:nth-child(3)");
base.insertAdjacentHTML("beforebegin", "<li>pineapple</li>");
//pineapple.remove();

// #4
var parent = document.querySelector("ul");
var apple = document.querySelector("li:nth-child(1)");
var strawberry = document.querySelector("li:nth-child(5)");
parent.insertBefore(apple, strawberry);

// #5
var parent = document.querySelector("ul");
var reds = document.querySelectorAll("li.red");
for(var i = 0; i < reds.length; i++){
  parent.removeChild(reds[i]);
}

// #6
var blues = document.querySelectorAll('section .blue');
for(var i = 0; i < blues.length; i++){
  var section = blues[i].closest('section');
  var h2 = section.querySelector('h2');
  section.removeChild(h2);
}
