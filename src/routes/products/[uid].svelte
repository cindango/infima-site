<script context="module">
	export const prerender = true;
  import RequestDemo from './../../lib/buttons/RequestDemo.svelte';
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	export let document;
  import { onMount } from 'svelte';
  import Button from './../../lib/buttons/Button.svelte';
	import TypeMate from 'typemate';

	let heading;

	onMount(() => {
		const typeMateInstance = new TypeMate(heading, { selector: 'h1,p' });
		typeMateInstance.apply();
	});
</script>

<svelte:head>
	<title>{document.data.name[0].text} | Infima</title>
</svelte:head>

<section id="heading" bind:this={heading}>
  <div class="container">
    <div class="md:w-3/5 lg:w-1/2">
      <img class="icon" src="{document.data.icon.url}">
      {@html prismicH.asHTML(document.data.name)}
      <p>{@html prismicH.asHTML(document.data.short_description)}</p>
      <RequestDemo />
    </div>
  </div>
</section>

<section id="details">
	{#each document.data.body as slice}

		{#if slice.slice_type === "main_product_image"}

      <div class="container">
        <img class="product-featured-image w-full lg:w-5/6" src="{slice.primary.image.url}&q=100" />
      </div>

    {/if}

    {#if slice.slice_type === "product_images"}

      <div class="container">
        <div class="section-head">
        </div>
        <div>
          {#each slice.items as product}
            <div class="product-feature lg:flex flex-col lg:flex-row lg:grid-cols-2 gap-16 lg:w-5/6">
              <div class="lg:w-1/3">
                <h4>{product.title}</h4>
                {#if product.description[0].text}
                  {@html prismicH.asHTML(product.description)}
                {/if}
								{#if product.link.url}
									<a href="{product.link.url}" class="button text-btn">
										{product.link_text} <span class="icon-chevron_right"></span>
									</a>
								{/if}
              </div>
              <img class="lg:w-2/3 mt-10 lg:mt-0 product-image" src="{product.image.url}" />
            </div>
          {/each}
        </div>
      </div>

    {/if}

    {#if slice.slice_type === "features"}

      <div class="container">
        <div class="section-head">
          <label>{@html prismicH.asHTML(slice.primary.title)}</label>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 w-full items-{slice.items.length} {slice.primary.title[0].text}">
          {#each slice.items as features}
            <div class="feature md:border-r">
              <h4 class="w-4/5">{features.title}</h4>
              <p>{@html prismicH.asHTML(features.description)}</p>
            </div>
          {/each}
        </div>
      </div>

    {/if}

	{/each}

</section>

<style>
  #heading {
    padding: 10vh 0 0;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  }
  #heading .container {
    align-items: center;
  }
  #heading .container > div {
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  #heading p {
    padding: 0 1rem;
  }
  #details .container {
    padding-top: 7vh;
  }
  #section-head {
    padding-bottom: 0;
  }
  .product-featured-image {
    max-width: 1400px;
    margin: 0 auto;
  }
  section.container {
    padding-top: 4vh;
  }
  .product-feature {
    align-items: center;
    padding: 7vh 0;
    margin: 0 auto;
  }
  .product-feature > div {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .product-feature:nth-child(2n) {
    flex-direction: row-reverse;
  }
	.product-feature .code {
		height: 450px;
	}
	:global(.product-feature .code pre) {
		padding: 1rem;
		overflow: hidden;
		background: rgba(255,255,255, .1);
	}
  :global(.product-feature p) {
    color: rgba(255,255,255,.7);
  }
  .feature {
		display: flex;
		gap: 20px;
		flex-direction: column;
		border-color: rgba(255,255,255,.2);
	}
	:global(.items-4 .feature:nth-child(4n)) {
		border-right: 0;
	}
  :global(.items-3 .feature:nth-child(3n)) {
		border-right: 0;
	}
  .Endpoints .feature p {
    font-family: var(--font-mono);
    font-size: .95rem;
    width: 100%;
  }
  :global(.Endpoints .feature p strong) {
    display: inline-block;
    border: 1px solid;
    padding: 0 2px;
    border-radius: 2px;
    font-size: .85rem;
    width: 40px;
    text-align: center;
    margin-right: 5px;
  }
  :global(.Endpoints .feature > p) {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  @media (min-width: 720px) {
    #heading p {
      font-size: 1.5rem;
      max-width: 720px;
    }
    .product-feature {
      padding: 14vh 0;
    }
    .product-feature h4 {
      font-size: 2.4rem;
    }
    .product-feature p {
      font-size: 1.25rem;
    }
    :global(.product-feature p) {
      color: rgba(255,255,255,.8);
    }
    .feature p {
			width: 90%;
		}
  }
  @media (max-width: 1024px) {
    .feature:nth-child(2n) {
  		border-right: 0;
  	}
  }
</style>
