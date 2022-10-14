<script>
	import axios from "axios";
	const save = (event) => {
		const { title, body } = event.target.elements;
		axios
			.post("/admin/blog", { title: title.value, body: body.value })
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
	<h1>New blog post</h1>
	<form on:submit|preventDefault={save}>
		<div class="mb-3">
			<label for="title" class="h4">Title</label><input
				autocomplete="off"
				type="text"
				class="form-control"
				id="title"
				placeholder="Title"
				name="title"
			/>
		</div>

		<div class="mb-3">
			<label for="body" class="h4">Post</label><textarea
				autocomplete="off"
				class="form-control"
				id="body"
				style="height: 400px;"
				name="body"
			/>
		</div>

		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
	<br />
</div>
