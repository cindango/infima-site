<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import logo from './../lib/header/InfimaLogo_Thin.svg';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="container get-started">
		<div>
			<h2>Ready to get started?</h2>
			<a class="button primary-btn">Talk to Us</a>
		</div>
	</div>
	<div class="container">
		<div class="grid sm:grid-cols-4 w-full gap-8">
			<div class="info">
				<strong><img class="i-logo" src={logo} alt="Infima" /></strong>
				<ul>
					<li>One Franklin Parkway, Bldg 930</li>
					<li>San Mateo, CA 94403</li>
					<li>(650) 240 4950</li>
					<li>info@infima.io</li>
				</ul>
			</div>
			<div class="flex gap-8 flex-col">
				<div>
					<strong>Products</strong>
					<ul>
						<li>Infima Platform</li>
						<li>Infima Libraries</li>
						<li>Infima APIs</li>
					</ul>
				</div>
				<div>
					<strong>Solutions</strong>
					<ul>
						<li>Asset managers</li>
						<li>Dealers</li>
					</ul>
				</div>
			</div>
			<div>
				<strong>Insights</strong>
				<ul>
					<li>News</li>
					<li>Research Papers</li>
					<li>Market Maps</li>
					<li>White Papers</li>
				</ul>
			</div>
			<div>
				<strong>About Us</strong>
				<ul>
					<li>Technology</li>
					<li>Company</li>
					<li>Contact</li>
					<li>Developer</li>
					<li>Sign In</li>
				</ul>
			</div>
		</div>
</footer>

<style>
	.container.get-started {
		padding-bottom: 0;
	}

	h2 {
		font-weight: 400;
		padding-bottom: 1rem;
	}

	.get-started .button {
		display: inline-block;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #403d49;
		text-transform: lowercase;
	}

	footer .container {
		padding: 8vh 1rem;
	}

	footer strong {
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: .5rem;
		display: block;
		font-weight: 500;
		color: rgba(255,255,255,.5);
		font-size: 1rem;
	}

	footer .info {
		display: flex;
    flex-direction: column;
    justify-content: space-between;
		text-transform: lowercase;
		color: rgba(255,255,255,.6);
	}

	footer strong img {
		padding: 1rem 0;
	}

	footer li {
		font-size: 1rem;
		padding: .2rem 0;
		letter-spacing: .03rem;
	}

	.button.primary-btn:hover {
		border-color: rgba(0,0,0,.3);
	}

	@media (min-width: 720px) {
		footer .container {
			padding: 8vh 2rem;
		}
		.button.primary-btn {
	    padding: 12px 30px 13px;
	    font-size: 1.15rem;
		}
	}
</style>
