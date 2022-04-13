<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '@fontsource/barlow/300.css';
	import '@fontsource/barlow/400.css';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow-semi-condensed/300.css';
	import '@fontsource/barlow-semi-condensed/400.css';
	import '@fontsource/barlow-semi-condensed/500.css';
	import { onMount } from 'svelte';
	import logo from './../lib/header/InfimaLogo_Thin.svg';
	import Time from "svelte-time";
	import { navigating, page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: if($page) track();

	function track() {
		// Track a new page using setPath:
		// Update the path stored in the tracker:
		var _hsq = window._hsq = window._hsq || [];
		_hsq.push(['setPath', $page.url.pathname]);
		// Track the page view for the new page
		_hsq.push(['trackPageView']);
	}

</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="container get-started">
		<div>
			<h2>Ready to get started?</h2>
			<a class="button primary-btn hover-pink" href="/contact">Talk to Us</a>
		</div>
	</div>
	<div class="container footer-links">
		<div class="grid sm:grid-cols-4 w-full gap-8">
			<div class="info">
				<strong><img class="i-logo" src={logo} alt="Infima" /></strong>
				<ul>
					<li>One Franklin Parkway, Bldg 930</li>
					<li>San Mateo, CA 94403</li>
					<li><a href="tel:650-240-4950">650.240.4950</a></li>
					<li><a href="mailto:info@infima.io">info@infima.io</a></li>
					<li><a href="https://www.linkedin.com/company/infima1/" target="_blank"><img src="/Icon_LinkedIn.svg" alt="LinkedIn" width="20" height="20" /></a>
				</ul>
			</div>
			<div class="flex gap-8 flex-col">
				<div>
					<strong>Products</strong>
					<ul>
						<li><a href="/products/infima-platform">Infima Platform</a></li>
						<li><a href="/products/infima-libraries">Infima Libraries</a></li>
						<li><a href="/products/infima-apis">Infima APIs</a></li>
					</ul>
				</div>
				<div>
					<strong>Solutions</strong>
					<ul>
						<li><a href="/solutions/asset-managers">Asset managers</a></li>
						<li><a href="/solutions/dealers">Dealers</a></li>
					</ul>
				</div>
			</div>
			<div>
				<strong>Insights</strong>
				<ul>
					<li><a rel="external" href="/insights">All Insights</a></li>
					<li><a rel="external" href="/insights?category=research-paper">Research Papers</a></li>
					<li><a rel="external" href="/insights?category=market-map">Market Maps</a></li>
					<li><a rel="external" href="/insights?category=white-paper">White Papers</a></li>
				</ul>
			</div>
			<div>
				<strong>About Us</strong>
				<ul>
					<li><a href="/tech">Technology</a></li>
					<li><a href="/about">Company</a></li>
					<li><a href="/news">News</li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="https://docs.infima.io" target="_blank">Developer</a></li>
					<li><a href="https://infima.freshteam.com/jobs" target="_blank">Careers</a></li>
				</ul>
			</div>
		</div>
		<div class="copywright flex-col sm:flex-row">
			<div class="mr-6">© <Time timestamp="{new Date()}" format="YYYY" /> Infima. All Rights Reserved.</div><div><a href="/terms">Terms of Use</a>&nbsp;&nbsp;&middot;&nbsp;&nbsp;<a href="/privacy">Privacy</a></div>
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
		margin-bottom: 20px;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*background: #5544a0;*/
		background: #694FB1;
		text-transform: lowercase;
	}

	footer .container {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	footer strong {
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: .5rem;
		display: block;
		font-weight: 500;
		font-size: 1rem;
		padding-bottom: .5rem;
		letter-spacing: .03rem;
	}

	footer .footer-links {
		gap: 8vh;
	}

	footer .info {
		display: flex;
    flex-direction: column;
    justify-content: space-between;
		text-transform: lowercase;
		color: rgba(255,255,255,.8);
	}

	footer .info li img {
		width: 20px;
		margin-top: .5rem;
		opacity: .8;
		transition: opacity .5s ease;
	}

	footer .info li img:hover {
		opacity: 1;
	}

	footer .info .i-logo {
		width: 90px;
		padding: 1rem 0;
	}

	footer li {
		font-size: 1rem;
		padding: .2rem 0;
		letter-spacing: .03rem;
		font-weight: 300;
	}

	footer a {
		color: rgba(255,255,255,.8);
		text-decoration: none;
	}

	footer a:hover {
		color: rgba(255,255,255,1);
	}

	footer .copywright {
		text-transform: initial;
		font-size: .9rem;
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: 20px;
		color: rgba(255,255,255,.8);
		display: flex;
		font-weight: 300;
		letter-spacing: .03rem;
	}

	.button.primary-btn:hover {
		border-color: rgba(0,0,0,.3);
	}

	@media (min-width: 720px) {
		footer .container {
			padding: 8vh 2rem;
		}
		footer .info .i-logo {
			width: 113px;
		}
	}
</style>
