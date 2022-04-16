<script context="module">
	export const prerender = true;
	import createClient from '$lib/prismic';

	const client = createClient()
  const prismicQuery = client.getSingle('about', 'about');
</script>

<script>
	import { onMount } from "svelte";
	import * as prismicH from '@prismicio/helpers';

	export let document;
</script>

<svelte:head>
	<title> About Us | Infima</title>
</svelte:head>

{#await prismicQuery}
  <div id="loading"></div>
{:then document}

	<section id="heading" class="container">
		<div class="flex flex-col gap-4">
			<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.heading)}</div>
			<span class="lg:w-3/4">{@html prismicH.asHTML(document.data.intro)}</span>
		</div>
	</section>


	{#each document.data.body as slice}

	  {#if slice.slice_type === "team"}
	    <section class="container team">

				{#if slice.primary.title.length > 0}
					<div class="section-head">
						<label>{@html prismicH.asHTML(slice.primary.title)}</label>
					</div>
				{/if}

	      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-y-8">

	        {#each slice.items as person}

	        <div class="flex flex-row gap-4 person items-start">
	          <div class="headshot flex-none">
	            <label for="{person.name[0].text.replace(/ /g,'_')}" class="modal-button">
								<img src="{person.headshot.url}" />
							</label>
	          </div>
	          <div class="info">
	            <strong><label for="{person.name[0].text.replace(/ /g,'_')}" class="modal-button">{person.name[0].text}</label></strong>
	            <p>{person.title}</p>
	          </div>
	        </div>

					<input type="checkbox" id="{person.name[0].text.replace(/ /g,'_')}" class="daisy-modal-toggle">
					<label for="{person.name[0].text.replace(/ /g,'_')}" class="daisy-modal">
					  <label class="daisy-modal-box w-11/12 max-w-5xl rounded-sm relative p-6 sm:p-10" for="">
							<label for="{person.name[0].text.replace(/ /g,'_')}" class="close text-black bg-transparent border-0 absolute right-2 top-2"><a>✕</a></label>
							<div class="flex flex-row gap-4 sm:gap-8 items-start">
								<div class="headshot popup hidden sm:block flex-none w-1/5">
									<img src="{person.headshot.url}" />
								</div>
								<div class="profile w-full sm:w-4/5">
									<h3>{person.name[0].text}</h3>
									<span>{person.title}</span>
									<div class="bio w-full md:w-11/12">
										{@html prismicH.asHTML(person.bio)}
									</div>
								</div>
							</div>
					  </label>
					</label>

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

	.person label {
		transition: color .5s ease;
		cursor: pointer;
	}

	.person label:hover {
		color: var(--primary-color-link);
	}

  .person strong {
    font-weight: 500;
    color: var(--text-color);
    letter-spacing: .03rem;
    line-height: 1.2;
  }

	.daisy-modal .close a {
		text-decoration: none;
		color: #000;
		font-size: 2rem;
		padding: 1rem;
		opacity: .4;
		transition: opacity .5s ease;
	}

	.daisy-modal .close a:hover {
		opacity: 1;
	}

	.daisy-modal h3,
	.daisy-modal .profile span {
    color: #000;
		font-weight: 400;
		font-family: var(--font-condensed);
  }

	.daisy-modal .headshot img {
		width: 100%;
	}

	:global(.daisy-modal .bio p) {
		color: rgba(0,0,0,1);
		margin: 1rem 0;
		font-weight: 400;
		letter-spacing: .02rem;
		font-family: var(--font-condensed);
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
		transition: box-shadow .5s ease, background .5s ease;
  }

	.headshot:not(.popup):hover {
		box-shadow: 7px 7px 20px rgba(236,117,255,.2);
		background: #d8cfff;
	}

  .headshot img {
    width: 90px;
    height: auto;
    filter: grayscale(1);
    border-radius: 3px;
		mix-blend-mode: luminosity;
  }

	@media (min-width: 720px) {
    #heading.container {
      padding-bottom: 0;
      padding-top: 10rem;
    }
    .container.team {
      padding-top: 5rem;
    }
    :global(#heading p) {
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
