<script context="module">
	export const prerender = true;
	import createClient from '$lib/prismic';

	const client = createClient()
  const prismicQuery = client.getSingle('about', 'about');

</script>

<script>
	import { onMount } from "svelte";
	import * as prismicH from '@prismicio/helpers';
  import PrismicDom from 'prismic-dom';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#await prismicQuery}
  <div id="loading"></div>
{:then document}
	<section id="heading" class="container">
		<div class="flex flex-col gap-4">
			<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.title)}</div>
			<p class="lg:w-3/4">{@html PrismicDom.RichText.asHtml(document.data.intro)}</p>
		</div>
	</section>

  <section class="container">
  	{#each document.data.body as slice}

        <div class="grid grid-cols-4 gap-x-3 gap-y-8">

          {#each slice.items as person}

          <div class="flex flex-row gap-3 person items-start">
            <div class="headshot flex-none">
              <img src="/Kay_Giesecke.png" />
            </div>
            <div class="info">
              <strong>{person.name[0].text}</strong>
              <p>{person.title}</p>
            </div>
          </div>

          {/each}

      </div>

  	{/each}
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

  #heading.container {
    padding-bottom: 0;
  }

  #heading p {
    font-size: 1.5rem;
  }

  .person {
    font-family: var(--font-condensed);
  }

  .person strong {
    font-weight: 500;
    color: var(--text-color);
    letter-spacing: .03rem;
    font-size: 1.25rem;
  }

  .headshot {
    background: #ddd;
    border-radius: 3px;
  }

  .headshot img {
    width: 120px;
    height: auto;
    filter: grayscale(1);
    border-radius: 3px;
  }

  .info p {
    color: rgba(255,255,255,.7);
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.2;
    font-size: 1.1rem;
  }

	@media (min-width: 720px) {

	}

</style>
