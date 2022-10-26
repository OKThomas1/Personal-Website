<script>
	import axios from "axios";
	let sending = false;
	const submit = (event) => {
		if (sending) return;
		sending = true;
		let { name, email, message } = event.target.elements;
		const alert = document.getElementById("alert");
		window.$("#alert").show();
		alert.className = "mt-3";
		alert.innerHTML = "<p style='color: black;'>Sending...</p>";
		axios
			.post("/contact", { name: name.value, email: email.value, message: message.value })
			.then(() => {
				sending = false;
				event.target.reset();
				alert.className = "alert alert-success mt-3 mb-3";
				alert.innerText = "Successfully sent message.";
				window.$("#alert").delay(5000).hide(200);
			})
			.catch((err) => {
				sending = false;
				alert.className = "alert alert-danger mt-3 mb-3";
				alert.innerText = `Unable to send message. ${
					err?.response?.data?.error || "Something went wrong."
				}`;
				window.$("#alert").delay(5000).hide(200);
			});
	};
</script>

<div class="container">
	<div id="bubble">
		<h1 class="display-5"><strong>Contact Me</strong></h1>
		<form on:submit|preventDefault={submit}>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="name"
					placeholder="Name"
					name="name"
					autocomplete="off"
					required
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
					required
				/>
				<label for="email">Email</label>
			</div>
			<div class="form-floating mb-3">
				<textarea
					class="form-control"
					placeholder="Leave your message here"
					id="message"
					name="message"
					required
				/>
				<label for="message">Message</label>
			</div>
			<button class="btn btn-primary" type="submit">Submit</button>
			<div id="alert" />
		</form>
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
		height: 30vh !important;
		background-color: #dee2e6;
	}
	#bubble {
		background-color: white;
		border-radius: 10px;
		padding: 20px;
	}
</style>
