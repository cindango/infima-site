<script>
  import Time from "svelte-time";
  export let post;
  export let category;
  export let type;
  export let slug;
  import { onMount } from 'svelte';

	import TypeMate from 'typemate';

	let insight;

	onMount(() => {
		const typeMateInstance = new TypeMate(insight, { selector: 'h4' });
		typeMateInstance.apply();
	});
</script>

<a bind:this={insight} class="insights-row flex flex-col sm:flex-row pt-8 pb-10 sm:pt-4 sm:pb-5 items-start gap-4" href="/{type}/{type === 'insights' ? category + '/' : ''}{post.fields.slug}">
  <span class="meow w-auto border-b sm:border-b-0 sm:w-1/6">
    {#if post.fields.category}
      {post.fields.category.replace(/-/g, ' ')}
    {:else}
      Insights
    {/if}
  </span>
  <span class="text-xl w-full block sm:w-4/6">{post.fields.title}</span>
  <span class="date w-full sm:w-1/6 text-left sm:text-right"><Time timestamp="{post.sys.createdAt}" format="MM.DD.YYYY" /></span>
</a>

<style>
  a.insights-row {
    border-color: rgba(255,255,255,.2);
    text-decoration: none;
    color: rgba(255,255,255,1);
    transition: background .5s ease, opacity .5s ease, border-color .5s ease;
  }
  a.insights-row span {
    transition: background .5s ease, opacity .5s ease, border-color .5s ease;
  }
  a.insights-row:hover span {
    opacity: 1;
  }
  .meow, .date {
    text-transform: lowercase;
    color: var(--text-color);
    letter-spacing: .03rem;
    border-color: rgba(255,255,255,.85);
  }
</style>
