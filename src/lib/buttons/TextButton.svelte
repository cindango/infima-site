<script>
export let label = 'Learn More';
</script>
<button class="button text-btn">{label} <span class="material-icons">chevron_right</span></button>

<style>
:global(.box .button.text-btn) {
  position: absolute;
  bottom: 2rem;
}
span {
  font-size: 22px;
}
</style>
