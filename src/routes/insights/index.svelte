<script context="module">
import PrismicDom from 'prismic-dom';
import TextButton from './../../lib/buttons/TextButton.svelte';
</script>
<script>
  import { onMount } from "svelte";
  import * as prismicH from '@prismicio/helpers';

  const api = "https://infima.cdn.prismic.io/api/v2"
  const endpoint = "https://infima.cdn.prismic.io/api/v2/documents/search?ref=";
  let posts = [];

  onMount(async function () {
    const api_response = await fetch(api);
    let master_ref = await api_response.json();
    master_ref = master_ref.refs[0].ref;

    const response = await fetch(endpoint + master_ref + "&q=[[any(document.type,[\"news\", \"insights\"])]]&orderings=[document.last_publication_date]");
    const data = await response.json();

    posts = data.results;
  });



</script>

<section class="container">
  <h1>insights</h1>
  <div class="grid lg:grid-cols-3 gap-8 w-full">
    {#each posts as post}
      <a class="box">
        <span class="meow">
          {#if post.data.category}
            {post.data.category}
          {:else}
            Insights
          {/if}
        </span>
        <h4>{post.data.title[0].text}</h4>
        <TextButton />
      </a>
    {/each}
  </div>
</section>

<style>
  .meow {
    text-transform: lowercase;
    color: var(--text-color);
    border-bottom: 0.8px solid rgba(255,255,255,.9);
    padding-bottom: 0.25rem;
  }
  .box {
    gap: 30px;
  }
  h1 {
    margin-bottom: 6vh;
    font-weight: 400;
  }
</style>
