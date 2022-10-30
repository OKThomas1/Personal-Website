<script>
	import { onMount } from "svelte";
	import _ from "lodash";
	import { MinPriorityQueue, MaxPriorityQueue } from "@datastructures-js/priority-queue";
	export let data;
	let testcase = data.testcase;
	let output = "";
	onMount(
		() =>
			(document.getElementById("test").innerHTML = document
				.getElementById("test")
				.innerHTML.replace(/&nbsp;/g, ""))
	);
	const runCode = () => {
		let code = data.solution.split("*/").at(-1).split(" = ");
		code.shift();
		code = code.join(" = ");
		code = code.substring(8);
		let fn = "";
		try {
			eval("fn = function test" + code);
			output = JSON.stringify(fn(...JSON.parse(`[${testcase}]`)));
		} catch (err) {
			console.error(err);
			output = "Error, make sure you entered the test case correctly.";
		}
	};
</script>

<div class="container mt-4">
	<h1 class="text-center">{data.name}</h1>
	{#if data.difficulty === 0}
		<h3 class="text-center text-success">Easy</h3>
	{:else if data.difficulty === 1}
		<h3 class="text-center text-warning">Medium</h3>
	{:else}
		<h3 class="text-center text-danger">Hard</h3>
	{/if}
	<div class="row mb-3">
		<div class="col-md-12 col-lg-6 bg-dark overflow-hidden p-4">
			<h5>Problem:</h5>
			{@html data.problem}
		</div>
		<div class="col-md-12 col-lg-6 p-4 border border-primary">
			<h5>My Solution:</h5>
			<pre id="test">{data.solution}</pre>
		</div>
	</div>
	{#if !data.name.includes("Design") && data.testcase !== "false"}
		<div class="row">
			<div class="col-md-12 col-lg-6">
				<div class="mb-3 ">
					<label for="testCase" class="form-label h4">Test Case:</label>
					<input type="text" class="form-control" id="testCase" bind:value={testcase} />
				</div>
			</div>
			<div class="col-md-12 col-lg-6">
				<div class="mb-3">
					<label for="output" class="form-label h4">Output:</label>
					<textarea class="form-control" id="output" disabled rows="1" bind:value={output} />
				</div>
			</div>
		</div>
		<button class="btn btn-primary" type="button" on:click={runCode}>Run</button>
	{:else}
		<h1>Cannot run test case for this question</h1>
	{/if}
</div>

<style>
	button {
		text-align: center;
	}
</style>
