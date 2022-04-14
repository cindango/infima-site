<script context="module">
	export const prerender = true;
	import createClient from '$lib/prismic';

	const client = createClient()
  const prismicQuery = client.getSingle('about', 'about');

</script>

<script>
	import { onMount } from "svelte";
	import * as prismicH from '@prismicio/helpers';
  import PrismicDom from 'prismic-dom';
	import 'tw-elements';
</script>

<svelte:head>
	<title> About Us | Infima</title>
</svelte:head>

{#await prismicQuery}
  <div id="loading"></div>
{:then document}
	<section id="heading" class="container">
		<div class="flex flex-col gap-4">
			<div class="lg:w-2/3">{@html prismicH.asHTML(document.data.heading)}</div>
			<p class="lg:w-3/4">{@html PrismicDom.RichText.asHtml(document.data.intro)}</p>
		</div>
	</section>


	{#each document.data.body as slice}

    {#if slice.slice_type === "team"}
      <section class="container team">

				{#if slice.primary.title.length > 0}
					<div class="section-head">
						<label>{@html prismicH.asHTML(slice.primary.title)}</label>
					</div>
				{/if}

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-y-8">

          {#each slice.items as person}

          <div class="flex flex-row gap-4 person items-start">
            <div class="headshot flex-none">
              <a data-bs-toggle="modal" data-bs-target="#{person.name[0].text.replace(/ /g,'_')}">
								<img src="{person.headshot.url}" />
							</a>
            </div>
            <div class="info">
              <strong><a data-bs-toggle="modal" data-bs-target="#{person.name[0].text.replace(/ /g,'_')}">{person.name[0].text}</a></strong>
              <p>{person.title}</p>
            </div>
          </div>

					<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
					  id="{person.name[0].text.replace(/ /g,'_')}" aria-hidden="true">
					  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
					    <div
					      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					      <div
					        class="modal-header absolute w-full flex flex-shrink-0 items-center justify-between p-4 pb-0 rounded-t-md">
					        <button type="button"
					          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
					          data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body relative p-4 lg:p-12">
								<div class="flex flex-row gap-8 items-start">
									<div class="headshot flex-none w-1/5">
										<img src="{person.headshot.url}" />
									</div>
									<div class="profile w-4/5">
										<h3>{person.name[0].text}</h3>
										<span>{person.title}</span>
										<div class="bio">
											{@html prismicH.asHTML(person.bio)}
										</div>
									</div>
								</div>
					      </div>
					    </div>
					  </div>
					</div>

          {/each}

        </div>

      </section>
    {/if}

    {#if slice.slice_type === "logos"}

      <section class="container investors">

        <div class="section-head">
          <label>{@html prismicH.asHTML(slice.primary.title)}</label>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {#each slice.items as investor}

            <img src="{investor.logo.url}" />

          {/each}

        </div>

      </section>

    {/if}

	{/each}


{:catch error}
  <p>Something went wrong:</p>
  <pre>{error.message}</pre>
{/await}

<style>
	#loading {
		height: 96vh;
		width: 100%;
	}

  #heading.container {
    padding-bottom: 0;
    padding-top: 8rem;
  }

  .container.team {
    padding-top: 3rem;
  }

  .person {
    font-family: var(--font-condensed);
    align-items: center;
  }

	.person a {
		text-decoration: none;
		color: #fff;
	}

	.person a:hover {
		color: var(--primary-color-link);
	}

  .person strong {
    font-weight: 500;
    color: var(--text-color);
    letter-spacing: .03rem;
    line-height: 1.2;
  }

	.modal h3,
	.modal .profile span {
    color: #000;
		font-weight: 400;
		font-family: var(--font-condensed);
  }

	.modal .headshot img {
		width: 100%;
	}

	:global(.modal .bio p) {
		color: #000;
		margin: 1rem 0;
	}

  .info p {
    color: rgba(255,255,255,.7);
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.2;
  }

  .headshot {
    background: #eee;
    border-radius: 3px;
		transition: box-shadow .5s ease, background .5s ease;
  }

	.headshot:hover {
		box-shadow: 7px 7px 20px rgba(236,117,255,.2);
		background: #ebdaff;
	}

  .headshot img {
    width: 90px;
    height: auto;
    filter: grayscale(1);
    border-radius: 3px;
		mix-blend-mode: multiply;
  }

	@media (min-width: 720px) {
    #heading.container {
      padding-bottom: 0;
      padding-top: 10rem;
    }
    .container.team {
      padding-top: 5rem;
    }
    #heading p {
      font-size: 1.5rem;
    }
    .person strong {
      font-size: 1.25rem;
    }
    .info p {
      font-size: 1.1rem;
    }
	}

  @media (min-width: 1024px) {
    .headshot img {
      width: 120px;
    }
  }

</style>
