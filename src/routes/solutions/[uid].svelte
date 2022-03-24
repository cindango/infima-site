<script context="module">
	export const prerender = true;
	import PrismicDom from 'prismic-dom';
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	export let document;
</script>

<section id="heading" class="{document.uid}" style="background-image: url('{document.data.header_image.url}&q=100');">
	<div class="container">
		<div class="md:w-3/5 lg:w-1/2">
			<h1>Infima for {document.data.name[0].text}</h1>
			<p>{@html PrismicDom.RichText.asHtml(document.data.short_description)}</p>
			<a href="/{document.data.related_product.type}s/{document.data.related_product.uid}" class="button primary-btn">Explore {document.data.related_product.data.name[0].text} <img src="/RightArrow.svg" /></a>
		</div>
	</div>
</section>

<section class="container">
	{#each document.data.body as slice}

		<div class="section-head">
			<label>{@html prismicH.asHTML(slice.primary.title)}</label>
		</div>

		<div class="grid md:grid-cols-3 gap-16 w-full">
			{#each slice.items as features}
				<div class="feature md:border-r">
					<h4 class="w-4/5">{features.title}</h4>
					<p class="lg:pr-16">{@html PrismicDom.RichText.asHtml(features.description)}</p>
				</div>
			{/each}
		</div>

	{/each}
</section>

<style>
	#heading {
		height: 90vh;
		min-height: 700px;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
	}
	#heading h1 {
		font-weight: 400;
	}
	#heading .container > div {
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: baseline;
	}
	section.container {
		padding-top: 0;
	}
	.feature {
		display: flex;
		gap: 20px;
		flex-direction: column;
		border-color: rgba(255,255,255,.2);
	}
	.feature:nth-child(3n) {
		border-right: 0;
	}
	@media (min-width:720px) {
		#heading p {
			font-size: 1.5rem;
			max-width: 720px;
		}
		.feature p {
			width: 90%;
		}
	}
</style>
