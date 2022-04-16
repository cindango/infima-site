<script context="module">

</script>
<script>
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';
	import * as prismicH from '@prismicio/helpers';
	import TextButton from './../lib/buttons/TextButton.svelte';
	import RequestDemo from './../lib/buttons/RequestDemo.svelte';
	import InsightsItem from './../lib/content/InsightsItem.svelte';
	import InsightsRow from './../lib/content/InsightsRow.svelte';
	import Button from './../lib/buttons/Button.svelte';
	export let document;

	const getInsights = async () => {
      var response = await fetch('https://cdn.contentful.com/spaces/os6xljkhzssb/environments/master/entries?access_token=4vOkJVsrvDHzcvRYEt7ID9rEiKR0Zi44rirbvVDnbrE&sys.contentType.sys.id%5Bin%5D=insights&order=-sys.createdAt');
      var data = await response.json();
      return data;
  }
  let insights = getInsights();

	const getNews = async () => {
      var response = await fetch('https://cdn.contentful.com/spaces/os6xljkhzssb/environments/master/entries?access_token=4vOkJVsrvDHzcvRYEt7ID9rEiKR0Zi44rirbvVDnbrE&sys.contentType.sys.id%5Bin%5D=news&order=-sys.createdAt');
      var data = await response.json();
      return data;
  }
  let news = getNews();
</script>

<svelte:head>
	<title>AI-based mortgage security prepayment prediction | Infima</title>
</svelte:head>

<section id="splash" style="background-image: url('{document.data.header_image.url}&q=90');">
	<div class="container">
		<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.heading)}</div>
		<span>{@html prismicH.asHTML(document.data.tagline)}</span>
		<RequestDemo />
	</div>
</section>

{#each document.data.body as slice}

	{#if slice.slice_type === "products"}

		<section class="container products">

			<div class="section-head">
				<label>{@html prismicH.asHTML(slice.primary.title)}</label>
				<h3 class="lg:w-2/3">{slice.primary.description}</h3>
			</div>

			<div class="grid lg:grid-cols-3 gap-8 w-full">

				{#each slice.items as product}
					<a sveltekit:prefetch class="box" href="/{product.link.type}s/{product.link.uid}">
						<img class="icon" src="{product.icon.url}" width="51.2" height="40" alt="{product.icon.alt}" />
						<h4>{product.name}</h4>
						<span class="sm:w-2/3 lg:w-full">{@html prismicH.asHTML(product.description)}</span>
						<TextButton />
					</a>
				{/each}

			</div>

		</section>

	{:else if slice.slice_type === "solutions"}

		<section class="container">

			<div class="section-head">
				<label>{@html prismicH.asHTML(slice.primary.title)}</label>
				{#if slice.primary.description > 0}
					<h3>{@html prismicH.asHTML(slice.primary.description)}</h3>
				{/if}
			</div>

			<div class="grid md:grid-cols-2 gap-8 w-full">

				{#each slice.items as solution}
					<a sveltekit:prefetch class="box solution" href="/{solution.link.type}s/{solution.link.uid}" style="background-image: url({solution.background.url}&q=95);">
						<img class="icon" src="{solution.icon.url}" width="60" height="60" alt="{solution.icon.alt}" />
						<h4>{solution.name}</h4>
						<span class="lg:w-3/4">{@html prismicH.asHTML(solution.description)}</span>
						<TextButton />
					</a>
				{/each}

			</div>

		</section>

	{:else}

		{#each slice.items as callout}

			<section class="container callout">

				<div class="section-head">
					<label>{@html prismicH.asHTML(callout.title)}</label>
					<h3 class="lg:w-3/4">{@html prismicH.asHTML(callout.description)}</h3>
					<Button href="/{callout.link.uid}" label="{callout.link_text}" />
				</div>

			</section>

		{/each}

	{/if}

{/each}

<section class="container">
	<div class="section-head">
		<label><h2>Insights</h2></label>
	</div>
	{#await insights}
	{:then insights}
		<div class="grid lg:grid-cols-3 gap-8 w-full" in:fade>
			{#each insights.items as insight}
				{#if insight.fields.featured === true}
					<InsightsItem post={insight} category={insight.fields.category} type={insight.sys.contentType.sys.id} />
				{/if}
			{/each}
		</div>
	{:catch err}
		<em>Error while loading insights.</em>
	{/await}
</section>

<section class="container">
	<div class="section-head">
		<label><h2>News</h2></label>
	</div>
	{#await news}
	{:then news}
		<div class="news-list flex flex-col w-full divide-y" in:fade>
			{#each news.items.slice(0, 5) as news, i}
				<InsightsRow post={news} category={news.fields.category} type={news.sys.contentType.sys.id} />
			{/each}
		</div>
	{:catch err}
		<em>Error while loading news.</em>
	{/await}
</section>

<style>
	#loading {
		margin-bottom: 4vh;
	}
	#splash, #loading  {
		height: 96vh;
		min-height: 700px;
		display: flex;
		align-items: center;
		background-size: cover;
		line-height: 1.2;
		background-color: #9776a6;
	}
	#splash .container {
		display: flex;
		gap: 20px;
		align-items: baseline;
	}
	:global(#splash .button) {
		border-width: 1px;
	}
	:global(#splash h1) {
		font-size: 2.25rem;
		font-weight: 400;
		letter-spacing: -.03rem;
		line-height: 1.2;
	}
	:global(#splash p) {
		font-size: 1.15rem;
		max-width: 600px;
		font-weight: 400;
	}
	.box .icon {
		height: 30px;
		width: auto;
	}
	.box span {
		letter-spacing: .04rem;
	}
	.box.solution {
		border: 0;
		background-size: cover;
		min-height: 350px;
		padding-bottom: 5rem;
	}
	.box.solution .icon {
		height: 45px;
		width: auto;
	}
	.callout .section-head {
		padding-bottom: 0;
	}
	.callout h3 {
		max-width: 1090px;
	}
	.callout a {
		width: fit-content;
	}
	:global(.news-list:hover a span) {
		opacity: .5;
		transition: opacity .5s ease;
	}
	:global(.news-list:hover a.insights-row) {
		border-color: rgba(255,255,255,.1);
	}
	@media (min-width: 720px) {
		:global(#splash h1) {
			font-size: 4.25rem;
		}
		:global(#splash p) {
			font-size: 1.5rem;
			font-weight: 300;
		}
		:global(#splash .button) {
			border-width: 2px;
		}
		.box.solution {
			border: 0;
			background-size: cover;
			min-height: 450px;
		}
		.box .icon {
			height: 40px;
		}
		.box.solution .icon {
			height: 60px;
		}
	}

</style>
