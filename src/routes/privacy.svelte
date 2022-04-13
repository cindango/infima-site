<script>
  import Privacy from './../lib/legal/Privacy.svelte'
</script>

<section id="heading">
  <div class="container">
    <div class="lg:w-full xl:w-1/2">
			<h1>Privacy</h1>
    </div>
  </div>
</section>

<section id="content" class="container text">
	<Privacy />
</section>

<style>
	#heading h1 {
		font-weight: 400;
	}
	#heading .container {
		padding-bottom: 2rem;
	}
	:global(#content h2), :global(#content h3), :global(#content h4) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	:global(#content.text p) {
		margin: .5rem 0;
		color: rgba(255,255,255,.8);
    font-weight: 400;
    letter-spacing: 0;
	}
	:global(#content.text ol), :global(#content.text ul) {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 3rem;
	}
  :global(#content.text ol), :global(#content.text ul), :global(#content.text li) {
    color: rgba(255,255,255,.85);
  }
  :global(#content.text ol) {
		list-style-type: decimal;
	}
  :global(#content.text ul) {
		list-style-type: disc;
	}
  :global(table) {
    margin: 1rem 0;
  }
  :global(th:not(:first-child)) {
    min-width: 10rem;
  }
  :global(td) {
    text-align: left;
  }
  :global(th), :global(td) {
    border: 1px solid;
    padding: .5rem;
    color: rgba(255,255,255,.85);
  }
  section.container {
    padding-top: 0;
  }
  @media (min-width: 720px) {
		#heading.header-normal .container {
			padding-bottom: 4rem;
		}
  }

</style>
