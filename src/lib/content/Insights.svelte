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
    export let blogs;
</script>

<section class="container">
  <h1>insights</h1>
  <div class="grid lg:grid-cols-3 gap-8 w-full">
    {#each blogs.items as post}
      <InsightsItem post={post} />
    {/each}
  </div>
</section>

<style>
</style>
