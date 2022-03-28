<script context="module">
  import TextButton from './../../lib/buttons/TextButton.svelte';
  import InsightsItem from './../../lib/content/InsightsItem.svelte';

  export async function load({ fetch }) {
      const [{ blogs }] = await Promise.all([fetch('/insights/data.json').then((r) => r.json())]);
      return {
          props: {
              blogs
          }
      };
  }
</script>

<script>
  import { page } from '$app/stores';
  //category = $page.url.searchParams.get('category');
  export let blogs;
  let value = '';
  let selected;
  let category = '';

</script>

<section class="container">

  <div class="header flex flex-row">

    <h1 class="w-1/2 lg:w-1/3">Insights</h1>

    <div class="categories w-1/2 lg:w-2/3">
      <select bind:value={selected} class="mobile-categories">
        <option value={''}>
          All Categories
        </option>
        <option value={'News'}>
          News
        </option>
        <option value={'market-map'}>
          Market Maps
        </option>
        <option value={'research-paper'}>
          Research Papers
        </option>
        <option value={'white-paper'}>
          White Paper
        </option>
      </select>

      <input id="all" type=radio bind:group={category} name="category" value={''}>
        <label for="all"><p>All</p></label>

      <input id="news" type=radio bind:group={category} name="category" value={'News'}>
        <label for="news"><p>News</p></label>

      <input id="mm" type=radio bind:group={category} name="category" value={'market-map'}>
        <label for="mm"><p>Market Maps</p></label>

      <input id="rp" type=radio bind:group={category} name="category" value={'research-paper'}>
        <label for="rp"><p>Research Papers</p></label>

      <input id="wp" type=radio bind:group={category} name="category" value={'white-paper'}>
        <label for="wp"><p>White Papers</p></label>

    </div>

  </div>

  <div class="grid lg:grid-cols-3 gap-8 w-full">
    {#each blogs.items as post}
      {#if category || selected}
        {#if post.fields.category === category || post.fields.category === selected}
          <InsightsItem post={post} category={post.fields.category} type={post.sys.contentType.sys.id} />
        {/if}
      {:else}
        <InsightsItem post={post} category={post.fields.category} type={post.sys.contentType.sys.id} />
      {/if}
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
    color: #222;
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
