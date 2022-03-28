<script context="module">
	export const prerender = true;

	export async function load({ fetch, params }) {
				const { category, slug } = params;
        const url = `/insights/${params.category}/${params.slug}.json`;
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
	import Body from './../../../lib/content/Body.svelte';
	import { onMount } from 'svelte';

	let downloadField = insights_entry.fields.download;
	let downloadAllow = insights_entry.fields.allowDownload;

	onMount(() => {
		hbspt.forms.create({
			region: "na1",
			portalId: "8882403",
			formId: "39051910-1e1c-44d0-9e0f-44a12857f6ab",
			target: "#request",
			onFormSubmitted: function($form) {
				if (downloadAllow === true && downloadField !== null) {
					window.open(insights_entry.fields.download.fields.file.url, '_blank');
				}
      }
		});
	});
	console.log(insights_entry);
</script>

<section class="container insights-detail">
  <div class="lg:flex lg:flex-row gap-8">
		<div class="w-full lg:w-3/5">
			<div class="heading flex flex-col items-start">

				<span class="meow">{insights_entry.fields.category.replace(/-/g, ' ')}</span>

				<h1>{insights_entry.fields.title}</h1>

				<div class="w-full lg:grid lg:grid-cols-3 flex flex-col gap-4 lg:gap-2 contributors">
					{#each insights_entry.fields.contributors as contributor}
						<div>
							<p class="c-name">{contributor.fields.name}</p>
							<p class="c-title">{contributor.fields.professionalTitle}</p>
						</div>
					{/each}
				</div>

			</div>

			<Body content={insights_entry.fields.content} />

		</div>
		<div class="w-full lg:w-2/5">
			<div id="request"></div>
			<div class="form-consent">
			<p>Infima Technologies, Inc. is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick above to say how you would like us to contact you.</p>
			<p>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
			<p>By clicking submit below, you consent to allow infima.io to store and process the personal information submitted above to provide you the content requested.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.heading {
		margin: 2rem 0;
		gap: 2rem;
	}
	.insights-detail .heading h1 {
		font-size: 2rem;
	}
	.heading .meow {
		color: #fff;
		text-transform: lowercase;
    border-bottom: .8px solid;
    padding-bottom: 0.25rem;
    display: inline-block;
		font-size: 1.1rem;
	}
	.heading .date {
		font-weight: 400;
		opacity: 1;
		display: inline-block;
		margin-left: 2rem;
	}
	.contributors {
		padding: .9rem 0 1.1rem;
		border-top: 1px solid rgba(255,255,255,.2);
		border-bottom: 1px solid rgba(255,255,255,.2);
	}
	/*.contributors > div {
		border-left: .8px solid;
		padding-left: .75rem;
	}*/
	.contributors p {
		font-family: var(--font-condensed);
		line-height: 130%;
		font-size: 1rem;
	}
	p.c-title {
		opacity: .7;
	}
	h4 {
		font-family: var(--font-condensed);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .05rem;
    border-top: 1px solid rgba(255,255,255,.2);
    padding-top: 0.5rem;
		margin-top: 3rem;
	}
	:global(#request .submitted-message) {
		max-width: 500px;
		margin: 0 auto 2rem;
		background: rgba(255,255,255,.05);
		padding: 2rem;
	}
	:global(#request .submitted-message p strong) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		display: block;
	}
	@media (min-width:720px) {
		.container {
			padding: 8rem 2rem;
		}
		.insights-detail .heading h1 {
			font-size: 3.25rem;
		}
		:global(.insights-detail .content) {
			padding-right: 5%;
		}
		:global(.insights-detail .content p) {
			font-size: 1.15rem;
		}
		#request {
			padding: 2rem;
		}
	}
</style>
