<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/post";

  export let data;
  const post = data.post;
</script>

<Seo
  title={post?.title || "Sammy Hajhamid - Blog"}
  description={post?.description || "this post does not exist dawg"}
/>
{#if post}
  <section class="layout-md py-12">
    <hr class="mb-5" />
    <div class="mb-1.5">
      <div class="text-2xl text-black sm:mb-1">
        {post.title}
      </div>
      <div class="text-lg leading-snug font-light text-black sm:mb-1">
        {post.description}
      </div>
      <div class="flex justify-between items-start mb-3 sm:mb-1">
        <div class="text-sm text-neutral-400">
          {formatTime("%B %-d, %Y", post.date)}
        </div>
        <div class="text-sm text-neutral-400">
          {post.tags.join(" ")}
        </div>
      </div>
      <hr class="mb-6 mt-5" />
      <Markdown source={post.content} />
    </div>
  </section>
{:else}
  <div class="layout-md">
    <div
      class="pt-14 pb-40 sm:pt-20 sm:pb-80 text-xl flex justify-center items-center"
    >
      <span class="font-medium">404</span>
      <div class="mx-4 h-8 border-l border-black" />
      This post does not exist.
    </div>
  </div>
{/if}
