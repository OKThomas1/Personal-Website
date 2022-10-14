<script>
	import Welcome from "$lib/sections/welcome.svelte";
	import About from "$lib/sections/about.svelte";
	import Skills from "$lib/sections/skills.svelte";
	import Projects from "$lib/sections/projects.svelte";
	import LeetCode from "$lib/sections/leetcode.svelte";
	import Blog from "$lib/sections/blog.svelte";
	import Contact from "$lib/sections/contact.svelte";
	import { browser } from "$app/environment";
	import * as J from "jquery";
	import { onMount, onDestroy } from "svelte";
	import Leetcode from "../lib/sections/leetcode.svelte";
	onMount(async () => {
		window.$ = J;
		window.$("html, body").css({
			overflow: "hidden"
		});
		await import("$lib/util/jquery.pagepiling.js");
		await import("pagepiling.js/jquery.pagepiling.css");
		window.$("#pagepiling").pagepiling({
			navigation: {
				tooltips: ["Welcome", "About Me", "Skills", "Projects", "LeetCode", "Blog", "Contact Me"]
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
	<div class="section"><Projects /></div>
	<div class="section"><LeetCode /></div>
	<div class="section"><Blog /></div>
	<div class="section"><Contact /></div>
</div>

<style>
</style>
