<script>
	import Welcome from "$lib/sections/welcome.svelte";
	import About from "$lib/sections/about.svelte";
	import Skills from "$lib/sections/skills.svelte";
	import Projects from "$lib/sections/projects.svelte";
	import LeetCode from "$lib/sections/leetcode.svelte";
	import Contact from "$lib/sections/contact.svelte";
	import { browser } from "$app/environment";
	import * as J from "jquery";
	import { onMount, onDestroy } from "svelte";
	onMount(async () => {
		window.$ = J;
		window.$("html, body").css({
			overflow: "hidden"
		});
		await import("$lib/util/jquery.pagepiling.js");
		await import("$lib/util/jquery.pagepiling.css");
		window.$("#pagepiling").pagepiling({
			navigation: {
				tooltips: ["Welcome", "About Me", "Skills", "Projects", "LeetCode", "Contact Me"]
			}
		});
		window.$("#pagepiling").fadeIn();
	});

	onDestroy(async () => {
		if (!browser) return;
		window.$("#pp-nav").remove();
		window.$("html").css({
			overflow: "auto"
		});
	});
</script>

<div id="pagepiling" class="hide">
	<div class="section bg-primary"><Welcome /></div>
	<div class="section bg-secondary pp-scrollable "><About /></div>
	<div class="section bg-dark pp-scrollable"><Skills /></div>
	<div class="section bg-light pp-scrollable"><Projects /></div>
	<div class="section bg-danger pp-scrollable"><LeetCode /></div>
	<div class="section bg-success"><Contact /></div>
</div>

<style>
</style>
