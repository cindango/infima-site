<script>
	import { page } from '$app/stores';
	import logo from './InfimaLogo_Thin.svg';
	export let document;
	let y;
</script>

<svelte:window bind:scrollY={y}/>

<header class={y > 200 ? "nav-s" : ""}>
	<div class="inner">

		<nav>
			<ul>
				<li>
					<a sveltekit:prefetch href="/">
						<img class="i-logo" src={logo} alt="Infima" />
					</a>
				</li>
			</ul>
			<ul class="links">
				<li>
					<a>Products</a>
				</li>
				<li>
					<a>Solutions</a>
				</li>
				<li>
					<a sveltekit:prefetch href="/insights">Insights</a>
				</li>
				<li>
					<a>Company</a>
				</li>
				<li>
					<a>Sign In</a>
				</li>
			</ul>
		</nav>

	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		position: fixed;
		width: 100%;
		z-index: 99;
		transition: background-color .5s ease, backdrop-filter .5s ease;

	}
	header.nav-s {
		background-color: rgba(var(--background-color-rgb), .85);
    backdrop-filter: saturate(180%) blur(20px);
		transition-property: background-color, backdrop-filter;
		transition: background-color 2s ease, backdrop-filter 3s ease;
	}
	.i-logo {
		opacity: 1;
		transition: all 1s linear;
	}
	header.nav-s .i-logo {
		opacity: .8;
	}
	.inner {
		width: 100%;
		max-width: 1600px;
		padding: 1rem 1rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	ul.links {
		display: flex;
    justify-content: end;
    gap: 30px;
	}

	li {
		position: relative;
		height: 100%;
		line-height: 100%;
	}

	header.nav-s nav a {
		opacity: .7;
	}

	nav a {
		height: 100%;
		color: var(--heading-color);
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: all 0.2s linear;
		text-transform: lowercase;
	}

	.nav-s a:hover {
		opacity: 1;
	}

	@media (min-width:720px) {
		.inner {
			padding: 1.5rem 2rem;
		}
	}
</style>
