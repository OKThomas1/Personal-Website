<script>
	import '../app.scss';
</script>

<div id="parent">
	<header><h1>Nav Bar probably (remove padding)</h1></header>
	<footer><h1>Links to socials probably</h1></footer>
	<main>
		<div class="container">
			<slot />
		</div>
	</main>
</div>

<style>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10rem;
		margin-top: 20px;
		text-align: center;
		padding-top: 50px;
	}
	header {
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	#parent {
		position: relative;
		padding-bottom: 10rem;
		min-height: 100vh;
	}
</style>
