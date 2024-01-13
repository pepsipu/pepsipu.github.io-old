<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PostList from "$lib/components/PostList.svelte";
  import type { Post } from "$lib/post";

  export let data: {
    posts: Post[];
  };

  const allChips = new Set(data.posts.map((post) => post.tags).flat());

  let activeChips: Set<string> = new Set();
  let defaultActiveChips: Set<string> = new Set(allChips);
  defaultActiveChips.delete("notes");

  const getFilteredPosts = (activeChips: Set<string>) => {
    return data.posts.filter(
      (post) =>
        post.published &&
        post.tags.some((tag) =>
          (activeChips.size ? activeChips : defaultActiveChips).has(tag)
        )
    );
  };

  const getChipStyle = (activeChips: Set<string>, tag: string) => {
    const colors: any = {
      default: {
        inactive: "cursor-pointer hover:bg-gray-300 text-gray-700 bg-gray-200",
        active: "cursor-pointer bg-gray-300 text-gray-700",
      },
      notes: {
        inactive: "cursor-help transition hover:bg-yellow-400 text-white",
        active: "cursor-help bg-yellow-400 text-white",
      },
    };

    return colors[colors[tag] ? tag : "default"][
      activeChips.has(tag) ? "active" : "inactive"
    ];
  };
</script>

<Seo
  title="Sammy Hajhamid – Blog"
  description="My blog on cybersecurity and computer science."
/>

<section class="layout-md py-12">
  <div class="flex justify-between mb-1">
    <div class="flex text-lg">Blog Posts</div>
    <div class="flex gap-2">
      {#each [...allChips] as tag}
        <!-- svelte-ignore a11y-click-events-have-key-events im sorry my screenreader friends -->
        <span
          class={"px-2 py-1 text-sm rounded " + getChipStyle(activeChips, tag)}
          on:click={() => {
            activeChips.has(tag)
              ? activeChips.delete(tag)
              : activeChips.add(tag);
            // i love svelte
            activeChips = activeChips;
          }}
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>

  <PostList posts={getFilteredPosts(activeChips)} />
</section>
