<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  export let content;
  import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`
    },
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node, next) => {
        return `<a href="${node.data.target.fields.file.url}">${next(node.content)}</a>`;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return `<img src="${node.data.target.fields.file.url}" />`;
      },
    }
  };

</script>

<div class="content">
  {@html documentToHtmlString(content, options)}
</div>

<style>
  .content {
    margin: 0 auto;
  }
  :global(.content p) {
    margin: 0 0 1.5rem;
    font-size: 1rem;
  }
  :global(.content blockquote) {
    margin: 2rem;
    border-left: 1px solid rgba(255,255,255,.8);
    padding-left: 2rem;
  }
  :global(.content b, .content strong) {
  	font-weight: 600;
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
