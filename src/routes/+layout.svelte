<script>
	import "$lib/bootstrap/app.scss";

	import { onMount } from "svelte";
	onMount(async () => {
		await import("bootstrap/dist/js/bootstrap.js");
	});

	import Nav from "$lib/components/Nav.svelte";
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons/index.js";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons/index.js";
</script>

<svelte:head>
	<title>Thomas Buchholz</title>
	<meta name="description" content="Thomas Buchholz | Fullstack Developer" />
</svelte:head>

<div id="parent">
	<header><Nav /></header>
	<footer>
		<div id="footer">
			<a href="https://github.com/OKThomas1" target="_blank" rel="noopener noreferrer"
				><Fa icon={faGithub} style="margin-left: 30px; margin-right: 30px" /></a
			>
			<a
				href="https://www.linkedin.com/in/thomas-buchholz-3b952422a/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa icon={faLinkedin} style="margin-left: 30px; margin-right: 30px" />
			</a>
			<a href="mailto:thomas.buchholz111@gmail.com" target="_blank" rel="noopener noreferrer"
				><Fa icon={faEnvelope} style="margin-left: 30px; margin-right: 30px" /></a
			>
		</div>
	</footer>
	<main>
		<slot />
	</main>
</div>

<style global>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 3.5rem;
		text-align: center;
		z-index: 100;
		display: flex;
	}
	#footer {
		margin: auto;
	}
	#parent {
		position: relative;
		padding-bottom: 3.5rem;
		min-height: 100vh;
	}
	.mb {
		padding-bottom: 3.5rem;
	}
	svg {
		font-size: 36px;
		color: black;
	}
	.test {
		height: calc(100% - 56px);
	}
	#pp-nav span,
	.pp-slidesNav li {
		box-sizing: content-box !important;
	}
</style>
