<script>
export let label = 'Learn More';
</script>
<button class="button text-btn">{label} <img src="/RightArrow.svg" /></button>

<style>
.button.text-btn {
  position: absolute;
  bottom: 1.75rem;
  font-size: .9rem;
  gap: 10px;
}
.button.text-btn img {
  width: 7px;
}
@media (min-width: 720px) {
  .button.text-btn {
    bottom: 2rem;
  }
  .button.text-btn {
    font-size: .9rem;
  }
}
</style>
