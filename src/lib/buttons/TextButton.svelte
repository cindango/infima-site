<script>
export let label = 'Learn More';
</script>
<button class="button text-btn">{label} <span class="icon-chevron_right"></span></button>

<style>
:global(.box .button.text-btn) {
  position: absolute;
  bottom: 1.4rem;
}
@media (min-width:720px) {
  :global(.box .button.text-btn) {
    bottom: 2rem;
  }
}
</style>
