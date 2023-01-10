<script>
	const POSTS_PER_PAGE = 18;
	export let data;
	let page = 0;
</script>

<div class="container mt-4">
	<p class="text-center h4 mb-3">
		Click on a problem to see my solution, input custom test cases, and run my solution in the
		browser.
	</p>
	<div class="row">
		{#each data.posts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE) as post}
			<div class="col-xl-4 col-lg-6 col-md-12 mb-3">
				<div class="card">
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
			</div>
		{/each}
		<style>
			p {
				margin: 0px !important;
			}
		</style>
	</div>
	<div class="text-center mb-3">
		<button class="btn btn-primary" disabled={page === 0} on:click={() => page--}>Prev</button>
		<button
			class="btn btn-primary"
			disabled={(page + 1) * POSTS_PER_PAGE >= data.posts.length}
			on:click={() => page++}>Next</button
		>
	</div>
</div>

<style>
	.problem {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 72px;
	}
	.name {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.card {
		border-radius: 10px !important;
		border: 2px solid black;
		background-color: #184160;
	}
</style>
