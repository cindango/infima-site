<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  export let content;
</script>

<div class="content">
  {@html documentToHtmlString(content)}
</div>

<style>
  .content {
    margin: 0 auto;
  }
  :global(.content p) {
    margin: 1.5rem 0;
    font-size: 1rem;
  }
  :global(.content blockquote) {
    margin: 2rem;
    border-left: 1px solid rgba(255,255,255,.8);
    padding-left: 2rem;
  }
  @media (min-width:720px) {
    :global(.content p) {
      font-size: 1.25rem;
    }
    .heading .meow {
      font-size: 1.25rem;
    }
  }
</style>
