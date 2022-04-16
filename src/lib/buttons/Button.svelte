<script>
export let label = 'Learn More';
export let href;
</script>
<a sveltekit:prefetch class="button primary-btn" href={href}>{label} <span class="icon-chevron_right"></span></a>
