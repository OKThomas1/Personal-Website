<script>
	export let data;
</script>

<div class="container mt-4">
	<div class="row">
		{#each Object.values(data) as post}
			<div class="col-md-4 mb-3">
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
