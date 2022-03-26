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
</script>

<section class="container">
  <div class="heading">
  	<h1>{news_entry.fields.title}</h1>
  </div>
</section>

<style>
	.heading {

	}
</style>
