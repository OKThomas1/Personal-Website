<script>
	import Fa from "svelte-fa";
	import { faCode, faServer, faComputer } from "@fortawesome/free-solid-svg-icons/index.js";
</script>

<div class="container mt-5">
	<h1 class="display-1 text-center"><strong>Skills</strong></h1>
	<div class="row">
		<div class="col-lg-4 col-md-12 mb-3">
			<div class="card ">
				<div class="card-body">
					<h1 class="card-title">Frontend <Fa icon={faCode} style="color: white" /></h1>
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
		<div class="col-lg-4 col-md-12 mb-3">
			<div class="card ">
				<div class="card-body">
					<h1 class="card-title">Backend <Fa icon={faServer} style="color: white" /></h1>
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
		<div class="col-lg-4 col-md-12 mb-3">
			<div class="card ">
				<div class="card-body">
					<h1 class="card-title">Misc <Fa icon={faComputer} style="color: white" /></h1>
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
	.card {
		min-height: 360px;
		border: 2px solid black;
		border-radius: 10px !important;
		background-color: #184e77;
	}
	li {
		line-height: 1.5;
		font-size: 1.3rem;
		opacity: 0.7;
	}
</style>
