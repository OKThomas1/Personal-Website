<script>
	const POSTS_PER_PAGE = 5;
	export let data;
	let page = 0;
</script>

<div class="container mt-4">
	{#if data.posts.length > 0}
		<div class="row">
			{#each data.posts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE) as post}
				<div class="card mb-4">
					<div class="card-body">
						<a href="/blog/{post.id}" class="name"> <h1>{post.title}</h1> </a>
						<p class="blog">{post.body}</p>
					</div>
				</div>
			{/each}
		</div>
		{#if data.posts.length > POSTS_PER_PAGE / 2}
			<div class="text-center">
				<button class="btn btn-primary" disabled={page === 0} on:click={() => page--}>Prev</button>
				<button
					class="btn btn-primary"
					disabled={(page + 1) * POSTS_PER_PAGE >= data.posts.length}
					on:click={() => page++}>Next</button
				>
			</div>
		{/if}
	{:else}
		<h2>No blog posts</h2>
	{/if}
</div>

<style>
	.blog {
		display: -webkit-box;
		-webkit-line-clamp: 8;
		-webkit-box-orient: vertical;
		overflow: hidden;
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
	}
</style>
