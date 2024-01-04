<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PostList from "./PostList.svelte";

  export let data;
</script>

<Seo
  title="Sammy Hajhamid – Blog"
  description="My blog on cybersecurity and computer science."
/>

<section class="layout-md py-12">
  <h2>Blog Posts</h2>
  <PostList posts={data.posts} />
</section>
