<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PostList from "./PostList.svelte";
  import Lock from "./Lock.svelte";
  import { onMount } from "svelte";
  import { LockIcon } from "lucide-svelte";
  import { decryptAuthorizationToken } from "$lib/utils";

  let showModal = true;
  let password: string;
  let authKey: string =
    (typeof localStorage !== "undefined" && localStorage.getItem("authKey")) ||
    "";
</script>

<Seo title="Sammy Hajhamid – Notes" description="what" />

<section class="layout-md py-12">
  <h2 class="header2">Personal Thoughts</h2>
  {#if authKey}
    <PostList {authKey} />
  {:else}
    {@html "<!--the password is pankocat :3-->"}
    <br />
    <div class="flex justify-center items-center w-full">
      <LockIcon size={140} strokeWidth={0.4} />
    </div>
    <Lock bind:showModal>
      <p class="text-xl">This section is password protected.</p>
      <small class="font-serif text-lg">perhaps there are other ways?</small>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        type="text"
        placeholder="Password"
        style="text-security:disc; -webkit-text-security:disc;"
        bind:value={password}
        on:input={() => {
          const newKey = decryptAuthorizationToken(password);
          if (newKey) {
            localStorage.setItem("authKey", newKey);
            authKey = newKey;
          }
        }}
      />
    </Lock>
  {/if}
</section>
