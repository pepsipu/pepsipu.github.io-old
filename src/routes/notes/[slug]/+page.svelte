<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import { getNoteBySlug, formatTime } from "$lib/utils";

  export let data;
  let authKey: string =
    (typeof localStorage !== "undefined" && localStorage.getItem("authKey")) ||
    "";
  const postPromise = getNoteBySlug(data.slug, authKey);
</script>

<Seo title="Sammy Hajhamid – Notes" description="waaaaat" />
<section class="layout-md py-12">
  {#await postPromise then post}
    <hr class="mb-5" />
    <div class="mb-1.5">
      <div class="text-2xl text-black sm:mb-1">
        {post.title}
      </div>
      <div class="text-lg leading-snug font-light text-black sm:mb-1">
        {post.subtitle}
      </div>
      <div class="flex justify-between items-start mb-3 sm:mb-1">
        <div class="text-sm text-neutral-400">
          {formatTime("%B %-d, %Y", post.date)}
        </div>
        <div class="text-sm text-neutral-400">
          {post.tags}
        </div>
      </div>
      <hr class="mb-6 mt-5" />
      <Markdown source={post.content} />
    </div>
  {/await}
</section>
