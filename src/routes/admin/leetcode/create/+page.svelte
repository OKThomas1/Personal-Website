<script>
	import axios from "axios";
	const save = (event) => {
		const { name, difficulty, problem, solution, testcase } = event.target.elements;
		axios
			.post("/admin/leetcode", {
				name: name.value,
				difficulty: difficulty.value,
				problem: problem.value,
				solution: solution.value,
				testcase: testcase.value
			})
			.then((res) => {
				console.log(res.data);
				event.target.reset();
			})
			.catch((err) => {
				console.error(err);
			});
	};
</script>

<div class="container mt-3">
	<h1>New leetcodet</h1>
	<form on:submit|preventDefault={save}>
		<div class="mb-3">
			<label for="name" class="h4">Name</label><input
				autocomplete="off"
				type="text"
				class="form-control"
				id="name"
				placeholder="Name"
				name="name"
			/>
		</div>

		<div class="mb-3">
			<label for="difficulty" class="h4">Difficulty</label>
			<input type="number" id="difficulty" name="difficulty" max="2" min="0" class="form-control" />
		</div>

		<div class="mb-3">
			<label for="problem" class="h4">Problem</label><textarea
				autocomplete="off"
				class="form-control"
				id="problem"
				style="height: 400px;"
				name="problem"
			/>
		</div>

		<div class="mb-3">
			<label for="solution" class="h4">Solution</label><textarea
				autocomplete="off"
				class="form-control"
				id="solution"
				style="height: 400px;"
				name="solution"
			/>
		</div>
		<div class="mb-3">
			<label for="testcase" class="h4">Test Case</label><input
				autocomplete="off"
				type="text"
				class="form-control"
				id="testcase"
				placeholder="Test Case"
				name="testcase"
			/>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
	<br />
</div>
