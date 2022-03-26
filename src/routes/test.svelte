<script context="module">
    export async function load({ fetch }) {
        const [{ blogs }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
        return {
            props: {
                blogs
            }
        };
    }

</script>

<script>
    export let blogs;
    console.log(blogs)
</script>

<div class="row">
    {#each blogs.items as post}
        <div class="column">
            {post.fields.title}
        </div>
    {/each}

</div>

<style>
</style>
