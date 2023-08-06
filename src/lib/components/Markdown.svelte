<script lang="ts">
  import { marked } from "marked";
  import hljs from "highlight.js";

  export let source: string;

  marked.use({
    renderer: {
      link(href: string, title: string | null, text: string) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text + "</a>";
        return out;
      },
      code: (code, lang) => {
        const language = hljs.getLanguage(lang || "none") ? lang : "plaintext";
        return `<pre class="hljs"><code class="hljs ${language}">${
          hljs.highlight(language || "plaintext", code).value
        }</code></pre>`;
      },
    },
  });
  $: html = marked.parse(source, {
    smartLists: true,
    smartypants: true,
  });
</script>

<div class="md-output prose">
  {@html html}
</div>

<style lang="postcss">
  .md-output :global(p) {
    @apply mb-4;
  }

  .md-output :global(strong) {
    @apply font-semibold;
  }

  .md-output :global(code) {
    @apply text-[95%];
  }
</style>
