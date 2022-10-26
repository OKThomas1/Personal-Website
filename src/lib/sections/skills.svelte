<script>
	import Fa from "svelte-fa";
	import { faCode, faServer, faComputer } from "@fortawesome/free-solid-svg-icons/index.js";
</script>

<div class="container mt-5">
	<h1 class="display-1"><strong>Skills</strong></h1>
	<div class="row">
		<div class="col-md-4">
			<div class="card bg-dark">
				<div class="card-body">
					<h1 class="card-title">Frontend<Fa icon={faCode} /></h1>
					<ul>
						<li>React</li>
						<li>Redux</li>
						<li>Svelte</li>
						<li>WPF</li>
						<li>Bootstrap</li>
						<li>MaterialUI</li>
						<li>Phaser</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card bg-dark">
				<div class="card-body">
					<h1 class="card-title">Backend<Fa icon={faServer} /></h1>
					<ul>
						<li>Express</li>
						<li>Firebase</li>
						<li>SocketIO</li>
						<li>Django</li>
						<li>NextJS</li>
						<li>SvelteKit</li>
						<li>MySQL</li>
						<li>Prisma</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card bg-dark">
				<div class="card-body">
					<h1 class="card-title">Misc<Fa icon={faComputer} /></h1>
					<ul>
						<li>Typescript</li>
						<li>Git</li>
						<li>Linux</li>
						<li>Google Cloud Platform</li>
						<li>Github Actions</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.col-md-4 {
		padding: 0px;
	}
	.card {
		height: 350px;
	}
	li {
		line-height: 1.5;
		font-size: 1.3rem;
		opacity: 0.7;
	}
</style>
