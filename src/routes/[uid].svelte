<script context="module">
	export const prerender = true;
	import PrismicDom from 'prismic-dom';
</script>

<script>
	import * as prismicH from '@prismicio/helpers';
	export let document;
</script>

<section id="heading" style="background-image: url('{document.data.header_image.url}');">
	<div id="gradient" />
  <div class="container">
    <div class="lg:w-full xl:w-1/2">
			<h1>{document.data.title[0].text}</h1>
			<p>{document.data.short_description}</p>
    </div>
  </div>
</section>

<section id="content" class="{document.uid}">
	{#each document.data.body as slice}

    {#if slice.slice_type === "product_images"}

      <div class="container">

        {#each slice.items as product}
          <div class="product-feature lg:flex flex-col lg:flex-row lg:grid-cols-2 gap-16 lg:w-full xl:w-5/6">
            <div class="lg:w-2/5">
              <h4>{product.title}</h4>
              {@html PrismicDom.RichText.asHtml(product.description)}
							{#if product.link.url}<a href="{product.link.url}" class="button text-btn">{product.link_text} <img src="/RightArrow.svg" /></a>{/if}
            </div>
            <img class="lg:w-3/5 pt-10 lg:pt-0 product-image" src="{product.image.url}&q=100" />
          </div>
        {/each}
      </div>

    {/if}

	{/each}
</section>

<style>
  #heading {
		height: 100vh;
		min-height: 700px;
    padding: 0vh 0 0;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  }
	#heading h1 {
		font-weight: 400;
	}
	#gradient {
		height: 100vh;
		width: 100%;
		background: radial-gradient( 50% 50% at 50% 50%, rgba(26,25,28,1) 0%, rgba(0,0,0, 0) 100% );
    position: absolute;
		top: 0;
	}
  #heading .container {
    align-items: center;
		z-index: 1;
  }
  #heading .container > div {
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  #content .container {
    padding-top: 10vh;
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
    padding: 14vh 0;
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
		:global(#heading h1) {
	    font-size: 5rem;
		}
    #heading p {
      font-size: 1.75rem;
      max-width: 720px;
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
