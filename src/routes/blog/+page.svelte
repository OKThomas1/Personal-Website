<script>
	export let data;
</script>

<div class="container mt-4">
	{#if data.posts.length > 0}
		<div class="row">
			{#each data.posts as post}
				<div class="card mb-4">
					<div class="card-body">
						<a href="/blog/{post.id}"> <h1>{post.title}</h1> </a>
						<p>{post.body}</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<h2>No blog posts</h2>
	{/if}
</div>
