<script context="module">
	export const prerender = true;

	export async function load({ fetch, params }) {
        const url = `/news/${params.slug}.json`;
        const res = await fetch(url);

        if (res.ok) {
            const { news_entry } = await res.json();

            return {
                props: {
                    news_entry: news_entry.items[0]
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }
</script>

<script>
	export let news_entry;
	import { onMount } from 'svelte';
	import Time from "svelte-time";
	import Body from './../../lib/content/Body.svelte';
	import TypeMate from 'typemate';

	let heading;

	onMount(() => {
		const typeMateInstance = new TypeMate(heading, { selector: 'h1' });
		typeMateInstance.apply();
	});
</script>

<section class="container">
  <div class="heading" bind:this={heading}>
		<span class="meow">{news_entry.fields.category}</span><p class="date"><Time timestamp="{news_entry.sys.createdAt}" format="MM.DD.YYYY" /></p>
  	<h1 class="max-w-7xl">{news_entry.fields.title}</h1>
  </div>
	<div class="max-w-3xl mx-auto">
		<Body content={news_entry.fields.content} />
	</div>
</section>

<style>
	.container {
		padding-top: 7vh;
	}
	.heading {
		margin: 5rem 0;
	}
	.heading .meow {
		color: #fff;
		text-transform: lowercase;
    border-bottom: .8px solid;
    padding-bottom: 0.25rem;
    margin-bottom: 2rem;
    display: inline-block;
	}
	.heading .date {
		font-weight: 400;
		opacity: 1;
		display: inline-block;
		margin-left: 2rem;
		font-size: 1rem;
	}
	@media (min-width:720px) {
		h1 {
			font-size: 4rem;
		}
		.heading .meow {
			font-size: 1.25rem;
		}
	}
</style>
