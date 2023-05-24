<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import { formatTime, getNotes } from "$lib/utils";
  import { notes as storedNotes, type Post } from "$lib/store";

  import { onMount } from "svelte";

  let posts: Post[] = [];
  export let authKey: string;
  onMount(() => getNotes(authKey));
  storedNotes.subscribe((value) => {
    posts = value;
  });
</script>

<div class="grid gap-y-4">
  {#each posts as item}
    <a
      href={`site/notes/${item.slug}`}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
    >
      <div class="mb-1.5">
        <div class="text-lg text-black">
          {item.title}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      <div class="text-md font-serif leading-snug text-black">
        {item.subtitle}
      </div>
    </a>
  {/each}
</div>
