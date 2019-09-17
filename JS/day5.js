// Web Animation #1

// setInterval
const interval = window.setInterval(() => {
	console.log('현재시각은', new Date());
}, 1000/60);

window.clearInterval(interval);

// setTimeout
let count = 0;
function animate() {
	setTimeout(() => {
		if(count >= 20)
			return;
		console.log('현재시각은', new Date());
		count++;
		animate();
	}, 500);
}
animate();

// requesetAnimationFrame
var cnt = 0;
var el = document.querySelector(".outside");
el.style.left = "0px";

function run() {
	if(cnt > 50)
		return;
	cnt ++;
	el.style.left = parseInt(el.style.left) + cnt + "px";
	requestAnimationFrame(run);
}

requestAnimationFrame(run);
