<script>
	export let data;
	let testcase = data.testcase;
	let output = "";

	const runCode = () => {
		let code = data.solution.split(" = ");
		code.shift();
		code = code.join(" = ");
		code = code.substring(8);
		try {
			output = JSON.stringify(
				new Function("return function test" + code)()(...JSON.parse(`[${testcase}]`))
			);
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
		<div class="col-md-6 border border-primary overflow-hidden">
			<h5>Problem:</h5>
			{@html data.problem}
		</div>
		<div class="col-md-6 ">
			<h5>My Solution:</h5>
			<pre>{data.solution}</pre>
		</div>
	</div>
	{#if !data.name.includes("Design")}
		<form on:submit|preventDefault={runCode}>
			<div class="mb-3">
				<label for="testCase" class="form-label h4">Test Case:</label>
				<input type="text" class="form-control" id="testCase" bind:value={testcase} />
			</div>
			<button class="btn btn-primary" type="submit">Run</button>
		</form>
		<div class="mb-3">
			<label for="output" class="form-label h4">Output:</label>
			<textarea class="form-control" id="output" disabled rows="1" bind:value={output} />
		</div>
	{:else}
		<h1>Cannot set test case for design question</h1>
	{/if}
</div>
