<script context="module">
  import TextButton from './../../lib/buttons/TextButton.svelte';
  import InsightsItem from './../../lib/content/InsightsItem.svelte';

  export async function load({ fetch }) {
      const [{ news }] = await Promise.all([fetch('/news/data.json').then((r) => r.json())]);
      return {
          props: {
              news
          }
      };
  }
</script>

<script>
  import { page } from '$app/stores';
  //category = $page.url.searchParams.get('category');
  export let news;

</script>

<svelte:head>
	<title>News | Infima</title>
</svelte:head>

<section class="container">

  <div class="header flex flex-row">

    <h1 class="w-1/2 lg:w-1/3">News</h1>

  </div>

  <div class="grid lg:grid-cols-3 gap-8 w-full">
    {#each news.items as post}
      <InsightsItem post={post} category={post.fields.category} type={post.sys.contentType.sys.id} />
    {/each}
  </div>

</section>

<style>
  .header {
    align-items: center;
    padding-bottom: 6vh;
  }
  .categories {
    display: flex;
    gap: 25px;
    justify-content: end;
  }
  .categories input, .categories label {
    display: none;
    cursor: pointer;
  }
  .categories label p {
    text-transform: lowercase;
    font-weight: 400;
    opacity: .7;
    transition: opacity .2s ease;
    padding-top: .25rem;
  }
  .categories label:hover p {
    opacity: 1;
  }
  .categories input[type="radio"]:checked + label p {
    opacity: 1;
    border-bottom: 1px solid;
    padding-bottom: .25rem;
  }
  select {
    color: #fff;
  }
  @media (min-width:1024px) {
    h1 {
      font-size: 3.5rem;
    }
    .categories label {
      display: block;
    }
    .categories label p {
      font-size: 1.25rem;
    }
    select {
      display: none;
    }
  }
</style>
