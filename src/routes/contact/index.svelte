<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

	let visible = false;
	onMount(() => {
		visible = true;
		hbspt.forms.create({
			region: "na1",
			portalId: "8882403",
			formId: "6534a80c-bb94-423b-a03a-2c610139c674",
			target: "#request"
		});
	});
</script>

<svelte:head>
	<title>Contact Us | Infima</title>
</svelte:head>

<section id="heading" class="container">
	<div class="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto">
		<div class="lg:w-1/2 w-full">
			<h1>Talk to Us</h1>
			<p class="info mt-4 lg:max-w-xs">Tell us how we can help and we’ll get in touch shortly.</p>
		</div>
		<div class="lg:w-1/2 w-full">
			{#if visible}
				<div id="request" in:fade="{{duration: 150, delay: 150}}"></div>
				<div class="form-consent mt-8" in:fade="{{delay: 300}}">
					<p>By clicking submit above, you consent to allow infima.io to store and process the personal information submitted above to provide you the content requested.</p>
					<p>Infima Technologies, Inc. is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.</p>
					<p>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.container {
		min-height: 1000px;
	}

  #heading.container {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

	#request {
		width: 100%;
		max-width: 410px;
	}

	@media (min-width: 720px) {
    #heading.container {
      padding-bottom: 8rem;
      padding-top: 10rem;
    }
		#heading p.info {
      font-size: 1.25rem;
    }
	}

	@media (min-width:768px) {
    h1 {
      font-size: 3.5rem;
    }
  }

</style>
