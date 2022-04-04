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
			<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.heading)}</div>
			<p class="lg:w-3/4">{@html PrismicDom.RichText.asHtml(document.data.intro)}</p>
		</div>
	</section>


	{#each document.data.body as slice}

    {#if slice.slice_type === "team"}
      <section class="container team">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-y-8">

          {#each slice.items as person}

          <div class="flex flex-row gap-4 person items-start">
            <div class="headshot flex-none">
              <img src="{person.headshot.url}" />
            </div>
            <div class="info">
              <strong>{person.name[0].text}</strong>
              <p>{person.title}</p>
            </div>
          </div>

          {/each}

        </div>

      </section>
    {/if}

    {#if slice.slice_type === "logos"}

      <section class="container investors">

        <div class="section-head">
          <label>{@html prismicH.asHTML(slice.primary.title)}</label>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {#each slice.items as investor}

            <img src="{investor.logo.url}" />

          {/each}

        </div>

      </section>

    {/if}

	{/each}


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
    padding-top: 8rem;
  }

  .container.team {
    padding-top: 3rem;
  }

  .person {
    font-family: var(--font-condensed);
    align-items: center;
  }

  .person strong {
    font-weight: 500;
    color: var(--text-color);
    letter-spacing: .03rem;
    line-height: 1.2;
  }

  .info p {
    color: rgba(255,255,255,.7);
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .headshot {
    background: #eee;
    border-radius: 3px;
  }

  .headshot img {
    width: 90px;
    height: auto;
    filter: grayscale(1);
    border-radius: 3px;
  }

	@media (min-width: 720px) {
    #heading.container {
      padding-bottom: 0;
      padding-top: 10rem;
    }
    .container.team {
      padding-top: 5rem;
    }
    #heading p {
      font-size: 1.5rem;
    }
    .person strong {
      font-size: 1.25rem;
    }
    .info p {
      font-size: 1.1rem;
    }
	}

  @media (min-width: 1024px) {
    .headshot img {
      width: 120px;
    }
  }

</style>
