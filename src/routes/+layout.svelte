<script>
	import "../app.scss";
	import Nav from "$lib/components/Nav.svelte";
</script>

<div id="parent">
	<header><Nav /></header>
	<footer><h1>Links to socials probably</h1></footer>
	<main>
		<slot />
	</main>
</div>

<style>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10rem;
		margin-top: 20px;
		text-align: center;
		padding-top: 50px;
		z-index: 100;
	}
	#parent {
		position: relative;
		padding-bottom: 10rem;
		min-height: 100vh;
	}
</style>
