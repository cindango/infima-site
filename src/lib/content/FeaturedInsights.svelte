<script context="module">
  import TextButton from './../buttons/TextButton.svelte';
  import InsightsItem from './InsightsItem.svelte';

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
  <div class="grid lg:grid-cols-3 gap-8 w-full">

  </div>
</section>

<style>
</style>
