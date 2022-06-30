const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
	mousemove.style.left = e.pageX - 20 + "px";
	mousemove.style.top = e.pageY - 20 + "px";
});
