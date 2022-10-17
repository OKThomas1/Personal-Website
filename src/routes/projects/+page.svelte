<script>
	const openFullscreen = () => {
		console.log("asd");
		let elem = document.getElementById("portfolio");
		if (elem.requestFullscreen) elem.requestFullscreen();
		else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
	};
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
	<p>
		This is an interactive demo of my projects, click <button
			on:click={openFullscreen}
			class="btn btn-link align-baseline p-0 m-0"
			type="button">here</button
		> to fullscreen.
	</p>
</div>
