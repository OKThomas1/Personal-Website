<script>
	import Welcome from "$lib/sections/welcome.svelte";
	import About from "$lib/sections/about.svelte";
	import Skills from "$lib/sections/skills.svelte";
	import { browser } from "$app/environment";
	import * as J from "jquery";
	import { onMount, onDestroy } from "svelte";
	onMount(async () => {
		window.$ = J;
		window.$("html, body").css({
			overflow: "hidden"
		});
		await import("./jquery.pagepiling.js");
		await import("pagepiling.js/jquery.pagepiling.css");
		window.$("#pagepiling").pagepiling({
			navigation: {
				tooltips: ["Welcome", "About Me", "Skills"]
			}
		});
	});

	onDestroy(async () => {
		if (!browser) return;
		window.$("#pp-nav").remove();
		window.$("html, body").css({
			overflow: "auto"
		});
	});
</script>

<div id="pagepiling">
	<div class="section"><Welcome /></div>
	<div class="section"><About /></div>
	<div class="section"><Skills /></div>
</div>

<style>
</style>
