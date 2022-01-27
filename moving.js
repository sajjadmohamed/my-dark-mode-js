// h1
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".ml7 .letter",
		translateY: ["1.1em", 0],
		translateX: ["0.55em", 0],
		translateZ: 0,
		rotateZ: [180, 0],
		duration: 10000,
		easing: "easeOutExpo",
		delay: (el, i) => 50 * i,
	})
	.add({
		targets: ".ml7",
		opacity: 0,
		duration: 100000,
		easing: "easeOutExpo",
		delay: 1000000,
	});
// h2

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/([^\x00-\x80]|\w)/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".ml11 .line",
		scaleY: [0, 1],
		opacity: [0.5, 1],
		easing: "easeOutExpo",
		duration: 700,
	})
	.add({
		targets: ".ml11 .line",
		translateX: [
			0,
			document.querySelector(".ml11 .letters").getBoundingClientRect()
				.width + 10,
		],
		easing: "easeOutExpo",
		duration: 700,
		delay: 100,
	})
	.add({
		targets: ".ml11 .letter",
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 10000,
		offset: "-=775",
		delay: (el, i) => 34 * (i + 1),
	})
	.add({
		targets: ".ml11",
		opacity: 0,
		duration: 100000,
		easing: "easeOutExpo",
		delay: 1000000,
	});
