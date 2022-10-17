<script>
	import "$lib/bootstrap/app.scss";

	import { onMount } from "svelte";
	onMount(async () => {
		await import("bootstrap/dist/js/bootstrap.js");
	});

	import Nav from "$lib/components/Nav.svelte";
</script>

<div id="parent" class="d-flex flex-column h-100">
	<header><Nav /></header>
	<footer>
		<div id="footer">
			<h1>Links to socials probably</h1>
		</div>
	</footer>
	<main class="d-flex flex-column h-100 flex-grow-1">
		<slot />
	</main>
</div>

<style global>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 5rem;
		text-align: center;
		z-index: 100;
		display: flex;
	}
	#footer {
		margin: auto;
	}
	#parent {
		position: relative;
		padding-bottom: 5rem;
		min-height: 100vh;
	}
	.mb {
		margin-bottom: 5rem;
	}
</style>
