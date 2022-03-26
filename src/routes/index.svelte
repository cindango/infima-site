<script context="module">
	export const prerender = true;

	import createClient from '$lib/prismic';
	import PrismicDom from 'prismic-dom';
	import TextButton from './../lib/buttons/TextButton.svelte';
	import RequestDemo from './../lib/buttons/RequestDemo.svelte';
	import InsightsItem from './../lib/content/InsightsItem.svelte';

	const client = createClient()
  const prismicQuery = client.getSingle('homepage', 'homepage');

	export async function load({ fetch }) {
      const [{ blogs }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
      return {
          props: {
              blogs
          }
      };
  }

</script>

<script>
	import { onMount } from "svelte";
	import * as prismicH from '@prismicio/helpers';
	import { fade } from 'svelte/transition';
	export let blogs;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#await prismicQuery}
  <div id="loading"></div>
{:then document}
	<section id="splash" style="background-image: url('{document.data.header_image.url}&q=100');">
		<div class="container">
			<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.heading)}</div>
			<p>{@html PrismicDom.RichText.asHtml(document.data.tagline)}</p>
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
						<a class="box" href="/{product.link.type}s/{product.link.uid}">
							<img class="icon" src="{product.icon.url}" />
							<h4>{product.name}</h4>
							<span class="sm:w-2/3 lg:w-full">{@html PrismicDom.RichText.asHtml(product.description)}</span>
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
						<h3>{@html PrismicDom.RichText.asHtml(slice.primary.description)}</h3>
					{/if}
				</div>

				<div class="grid md:grid-cols-2 gap-8 w-full">

					{#each slice.items as solution}
						<a class="box solution" href="/{solution.link.type}s/{solution.link.uid}" style="background-image: url({solution.background.url});">
							<img class="icon" src="{solution.icon.url}" />
							<h4>{solution.name}</h4>
							<span class="lg:w-3/4">{@html PrismicDom.RichText.asHtml(solution.description)}</span>
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
						<h3 class="lg:w-3/4">{@html PrismicDom.RichText.asHtml(callout.description)}</h3>
						<a href="/{callout.link.uid}" class="button primary-btn">{callout.link_text} <img src="/RightArrow.svg" /></a>
					</div>

				</section>

			{/each}

		{/if}

	{/each}


	<section class="container">
		<div class="section-head">
			<label><h2>Featured Insights</h2></label>
			<div class="grid lg:grid-cols-3 gap-8 w-full">
				{#each blogs.items as post}
					{#if post.fields.featured === true}
						<InsightsItem post={post} type={post.sys.contentType.sys.id} />
					{/if}
				{/each}
			</div>
		</div>
	</section>
{:catch error}
  <p>Something went wrong:</p>
  <pre>{error.message}</pre>
{/await}

<style>
	#loading {
		height: 96vh;
		width: 100%;
	}
	#splash {
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
		border-width: 2px;
	}
	:global(#splash h1) {
		font-size: 2.5rem;
		font-weight: 400;
		letter-spacing: -.03rem;
	}
	#splash p {
		font-size: 1.2rem;
		max-width: 600px;
	}
	.box .icon {
		height: 40px;
	}
	.box span {
		letter-spacing: .04rem;
	}
	.box.solution {
		border: 0;
		background-size: cover;
		min-height: 375px;
		padding-bottom: 5rem;
	}
	.box.solution .icon {
		height: 60px;
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
	@media (min-width: 720px) {
		:global(#splash h1) {
			font-size: 4.25rem;
		}
		#splash p {
			font-size: 1.5rem;
		}
		.box.solution {
			border: 0;
			background-size: cover;
			min-height: 450px;
		}
	}

</style>
