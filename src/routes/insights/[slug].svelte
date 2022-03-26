<script context="module">
	export const prerender = true;

	export async function load({ fetch, params }) {
        const url = `/insights/${params.slug}.json`;
        const res = await fetch(url);

        if (res.ok) {
            const { insights_entry } = await res.json();

            return {
                props: {
                    insights_entry: insights_entry.items[0]
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
	export let insights_entry;
</script>

<section class="container">
  <div class="heading">
  	<h1>{insights_entry.fields.title}</h1>
  </div>
</section>

<style>
	.heading {

	}
</style>
