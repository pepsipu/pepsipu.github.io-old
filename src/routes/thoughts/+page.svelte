<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PostList from "./PostList.svelte";
  import Lock from "./Lock.svelte";
  import { posts } from "./posts.yaml";
  import { onMount } from 'svelte';
  import { digestMessage } from '$lib/utils';


  let showModal = false;
  let password: string;
  let update = true;

  onMount(async () => {
    showModal = true;
  });
</script>

<Seo
  title="Sammy Hajhamid – Blog"
  description="blog shtuff"
/>



<section class="layout-md py-12">
  <h2 class="header2">Personal Notes</h2>
  {#if (update || !update) && typeof localStorage !== 'undefined' && localStorage.getItem("guess") === "b661a6fca733cdd9fa9da97d0603f6b133743a077a233ddefc8e738705fc064c"}
  <PostList posts={posts} />
  {:else}
  <Lock bind:showModal>
      <p class="text-lg">
        This section is password protected.
      </p>
      <input type="text" placeholder="Password" style="text-security:disc; -webkit-text-security:disc;" bind:value={password} on:input={() => {
            window.localStorage.setItem("guess", password);
            update = !update; // jank
      }}/>
  </Lock>
  {/if}
</section>
