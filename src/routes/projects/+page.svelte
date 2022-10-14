<script>
	import { browser } from "$app/environment";
	import { onDestroy } from "svelte";
	let fs = false;
	if (browser)
		document.addEventListener("keydown", (event) => {
			if (event.code === "KeyM") fs ? openFullscreen() : closeFullscreen();
		});
	const openFullscreen = () => {
		fs = true;
		let elem = document.getElementById("portfolio");
		if (elem.requestFullscreen) elem.requestFullscreen();
		else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
	};
	const closeFullscreen = () => {
		fs = false;
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
	};
	onDestroy(() => {
		if (browser) document.removeEventListener("keydown", openFullscreen);
	});
</script>

<iframe
	id="portfolio"
	src="https://thomas-buchholz.web.app"
	width="100%"
	height="100%"
	title="Projects"
	class="flex-grow-1 container"
/>
<div class="container">
	<p>This is an interactive demo of my projects, press the M key to fullscreen,</p>
</div>
