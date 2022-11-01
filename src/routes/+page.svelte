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
		if (window.$.default) window.$ = window.$.default;
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
	<div class="section pg-1"><Welcome /></div>
	<div class="section pg-2 pp-scrollable"><About /></div>
	<div class="section pg-3 pp-scrollable"><Skills /></div>
	<div class="section pg-4 pp-scrollable"><Projects /></div>
	<div class="section pg-5 pp-scrollable"><LeetCode /></div>
	<div class="section pg-6"><Contact /></div>
</div>

<style>
	.hide {
		display: none;
	}
	.pg-1 {
		background-color: #184e77;
	}
	.pg-2 {
		background-color: #1e6091;
	}
	.pg-3 {
		background-color: #1a759f;
	}
	.pg-4 {
		background-color: #168aad;
	}
	.pg-5 {
		background-color: #34a0a4;
	}
	.pg-6 {
		background-color: #52b69a;
	}
</style>
