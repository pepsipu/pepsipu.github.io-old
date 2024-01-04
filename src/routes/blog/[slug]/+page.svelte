<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import { getPostBySlug, formatTime } from "$lib/utils";

  export let data;
  const post = data.post;
</script>

<Seo title="Sammy Hajhamid – Blog" description="blog shtuff" />
<section class="layout-md py-12">
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
</section>
