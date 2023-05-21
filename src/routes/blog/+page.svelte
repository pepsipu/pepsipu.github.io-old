<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from "svelte";
  import { updatePostList } from "$lib/utils";
  import PostList from "./PostList.svelte";
  onMount(updatePostList);
</script>

<Seo title="Sammy Hajhamid – Blog" description="blog shtuff" />

<section class="layout-md py-12">
  <h2>Blog Posts</h2>
  <PostList />
</section>
