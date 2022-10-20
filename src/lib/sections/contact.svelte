<script>
	const submit = (event) => {};
</script>

<div class="bg-success jumbotron d-flex align-items-center h-100 mb">
	<div class="container">
		<div id="bubble">
			<h1>Contact Me</h1>
			<form on:submit|preventDefault={submit}>
				<div class="form-floating mb-3">
					<input
						type="text"
						class="form-control"
						id="name"
						placeholder="Name"
						name="name"
						autocomplete="off"
					/>
					<label for="name">Name</label>
				</div>
				<div class="form-floating mb-3">
					<input
						type="email"
						class="form-control"
						id="email"
						placeholder="name@example.com"
						name="email"
						autocomplete="off"
					/>
					<label for="email">Email</label>
				</div>
				<div class="form-floating mb-3">
					<textarea
						class="form-control"
						placeholder="Leave your message here"
						id="message"
						name="message"
					/>
					<label for="message">Message</label>
				</div>
				<button class="btn btn-primary" type="submit">Submit</button>
			</form>
		</div>
	</div>
</div>

<style>
	h1 {
		color: black;
	}
	input {
		background-color: #dee2e6;
	}
	label {
		color: black;
	}
	textarea {
		height: 300px !important;
		background-color: #dee2e6;
	}
	#bubble {
		background-color: white;
		border-radius: 10px;
		padding: 20px;
	}
</style>
