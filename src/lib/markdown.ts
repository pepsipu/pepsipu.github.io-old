import hljs from "highlight.js";

import markdownit from "markdown-it";
import markdownKatex from "@vscode/markdown-it-katex";
import markdownAlerts from "markdown-it-github-alerts";

import "highlight.js/styles/atom-one-dark.css";
import "markdown-it-github-alerts/styles/github-colors-light.css";
import "markdown-it-github-alerts/styles/github-colors-dark-media.css";
import "markdown-it-github-alerts/styles/github-base.css";
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (code, language) {
    if (language && hljs.getLanguage(language)) {
      return `<pre class="hljs language-${language}"><code>${
        hljs.highlight(code, { language }, true).value
      }</code></pre>`;
    }
    return "Unsupported language.";
  },
})
  .use(markdownKatex)
  .use(markdownAlerts);

export const renderMd = md.render.bind(md);
export const renderMdInline = md.renderInline.bind(md);
