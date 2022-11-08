<script>
	import axios from "axios";
	export let data;
	const save = (event, id) => {
		axios
			.patch(`/admin/leetcode/${id}`, { testcase: event.target.elements.testcase.value })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const remove = (id) => {
		axios
			.delete(`/admin/leetcode/${id}`)
			.then((res) => {
				console.log(res.data);
				data = { posts: data.posts.filter((e) => e.id !== id) };
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const scrape = () => {
		axios
			.post("/admin/leetcode/scrape")
			.then(() => {
				console.log("success");
			})
			.catch((err) => {
				console.error(err);
			});
	};
</script>

<div class="container mt-4">
	<a href="/admin/leetcode/create" class="btn btn-primary mb-3">Add a new problem manually</a>
	<br />
	<button class="btn btn-primary mb-3" type="button" on:click={scrape}
		>Scrape newest problems</button
	>
	<div class="row">
		{#each data.posts as post}
			<div class="mb-4">
				<div class="card mb-4">
					<div class="card-body">
						<a href="/leetcode/{post.id}">
							<h5 class="card-title name">{post.name}</h5>
						</a>
						<h6
							class="card-subtitle text-{post.difficulty === 0
								? 'success'
								: post.difficulty === 1
								? 'warning'
								: 'danger'}"
						>
							{post.difficulty === 0 ? "Easy" : post.difficulty === 1 ? "Medium" : "Hard"}
						</h6>
						<p class="card-text problem">{@html post.problem}</p>
					</div>
				</div>
				<form on:submit|preventDefault={(event) => save(event, post.id)}>
					<div class="row g-3 align-items-center">
						<div class="col-auto">
							<label for="testCase" class="form-label h4">Test Case:</label>
						</div>
						<div class="col-auto">
							<input
								type="text"
								class="form-control m-1"
								id="testCase"
								name="testcase"
								bind:value={post.testcase}
							/>
						</div>
						<div class="col-auto">
							<button type="submit" class="btn btn-primary">Set</button>
						</div>
					</div>
				</form>
				<button class="btn btn-danger" on:click={() => remove(post.id)}>Delete</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.problem {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.name {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
