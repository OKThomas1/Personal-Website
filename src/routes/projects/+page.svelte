<script>
	const openFullscreen = () => {
		let elem = document.getElementById("portfolio");
		if (elem.requestFullscreen) elem.requestFullscreen();
		else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
	};
</script>

<div class="container">
	<iframe
		id="portfolio"
		src="https://portfolio.thomasbuchholz.dev"
		width="100%"
		height="100%"
		title="Projects"
	/>
	<p>
		This is an interactive demo of my projects, click <button
			on:click={openFullscreen}
			class="btn btn-link align-baseline p-0 m-0"
			type="button">here</button
		> to fullscreen.
	</p>
</div>

<style>
	div {
		height: calc(100vh - 138px);
	}
	p {
		margin-bottom: 0px;
	}
</style>
