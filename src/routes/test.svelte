<script>
  import createClient from '$lib/prismic' // Update the path
  import * as prismicH from "@prismicio/helpers"

  const client = createClient()
  const prismicQuery = client.getSingle('homepage', 'homepage')
</script>

<h1>Prismic Svelte App</h1>

{#await prismicQuery}
  <p>Loading...</p>
{:then document}
  {@html prismicH.asHTML(document.data.heading)}
{:catch error}
  <p>Something went wrong:</p>
  <pre>{error.message}</pre>
{/await}
