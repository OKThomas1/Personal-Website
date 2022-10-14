<script>
	import { browser } from "$app/environment";
	let admin = browser ? document.cookie.includes("admin") : false;
</script>

<nav class="navbar navbar-expand-lg navbar-dark ">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/projects">Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/leetcode">Leetcode</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/blog">My Blog</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/resume">Resume</a>
				</li>
				{#if admin}
					<li class="nav-item dropdown">
						<a
							class="nav-link active dropdown-toggle"
							href="/"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Admin
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item" href="/admin/leetcode">Leetcode</a></li>
							<li><a class="dropdown-item" href="/admin/blog">Blog</a></li>
						</ul>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		z-index: 100;
		background-color: #212529;
	}
</style>
