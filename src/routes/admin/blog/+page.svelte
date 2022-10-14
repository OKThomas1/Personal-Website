<script>
	import axios from "axios";
	export let data;
	const save = (event, id) => {
		const { title, body } = event.target.elements;
		axios
			.patch(`/admin/blog/${id}`, { title: title.value, body: body.value })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const remove = (id) => {
		axios
			.delete(`/admin/blog/${id}`)
			.then((res) => {
				console.log(res.data);
				data = { posts: data.posts.filter((e) => e.id !== id) };
			})
			.catch((err) => {
				console.error(err);
			});
	};
</script>

<div class="container mt-4">
	<a class="btn btn-primary mb-3" href="/admin/blog/create">Create new blog post</a>
	{#if data.posts.length > 0}
		<div class="row">
			{#each data.posts as post}
				<form class="mb-4" on:submit|preventDefault={(event) => save(event, post.id)}>
					<div class="card mb-4">
						<div class="card-body">
							<div class="mb-3">
								<label for={"title" + post.id}>Title</label>
								<input
									type="text"
									bind:value={post.title}
									name="title"
									class="form-control"
									id={"title" + post.id}
								/>
							</div>
							<div class="mb-3">
								<label for={"body" + post.id}>Body</label>
								<textarea
									bind:value={post.body}
									name="body"
									class="form-control"
									id={"body" + post.id}
								/>
							</div>
						</div>
					</div>
					<button class="btn btn-primary" type="submit">Edit</button>
					<button class="btn btn-danger" on:click={() => remove(post.id)} type="button"
						>Delete</button
					>
				</form>
			{/each}
		</div>
	{:else}
		<h2>No blog posts</h2>
	{/if}
</div>
