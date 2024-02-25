<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "xinOS",
      href: "https://github.com/pepsipu/xinOS",
      desc: "hyperfast operating system for retro games",
    },
    {
      name: "aski",
      href: "https://github.com/pepsipu/aski",
      desc: "high abstraction assembler with types",
      aside: "Replit Language Jam finalist",
    },
    {
      name: "OSpaint",
      href: "https://github.com/pepsipu/OSpaint",
      desc: "MSpaint as an operating system",
      aside: "CodeDayLA best in class winner",
    },
    {
      name: "warpalloc",
      href: "https://github.com/pepsipu/warpalloc",
      desc: "portable memory allocator in assembly",
    },
    {
      name: "ramenbox",
      href: "https://github.com/pepsipu/ramenbox",
      desc: "6502 emulator + game console",
      aside: "CodeDay best hardware winner",
    },
  ];
</script>

<Seo title="Sammy Hajhamid" description="unfathomably based" />

<p
  class="layout-md text-xl leading-tight font-light mb-12 text-black"
  id="eric-is"
>
  <span class="g">likes </span> computers <span class="g">&</span> math
</p>

<div class="layout-md text-lg space-y-8">
  <div class="space-y-5">
    <p>
      I'm currently the course instructor of <a
        class="link"
        href="https://cs595.seclab.cs.ucsb.edu/"
        >595G, Seminar in Computer Security</a
      >
      at the University of California, Santa Barbara. Previously, I was a founding
      member and blockchain security auditor at
      <a class="link" href="https://osec.io">OtterSec</a>
      and a quantitative researcher at
      <a class="link" href="https://zellic.io">Zellic</a>.
    </p>

    <p>
      I'd like to explore as much computer science and pure mathematics as I
      can. Embedded systems, where programmers have creative freedom over
      hardware, software, and the bridge between the two, are my favorite.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p>Some of my favorite personal projects include:</p>
    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>
  <p>
    I play Capture-the-Flag competitions with the
    <a class="link" href="https://ctftime.org/stats/2022/US"
      >United States' #1 competitive cybersecurity team</a
    >, <a class="link" href="https://dicega.ng">DiceGang</a>, and practice for
    the
    <a
      class="link"
      href="https://en.wikipedia.org/wiki/International_Cybersecurity_Challenge"
      >International Cybersecurity Competition</a
    >
    with the U.S. Cybersecurity Team. I also work with government organizations like
    the United States AFA, Aéroports de Paris, Saudi FCSP and UAE Cybersecurity Council
    and blockchain organizations like the
    <a class="link" href="https://solana.com">Solana Foundation</a>, the
    <a class="link" href="https://sui.io/">Sui Blockchain</a>, and
    <a class="link" href="https://aptoslabs.com/">Aptos Labs</a>
    to make the internet safer.
  </p>
  <p>
    As a researcher, I've done guest lectures on exploitation at the
    <a class="link" href="https://www.youtube.com/watch?v=VYr0Ut8n0bg"
      >HOPE Conference</a
    >, Carnegie Mellon University, and EPFL Innovation Park. I hope to be a
    professor.
  </p>
  <p>
    I write about interesting technical problems and ideas on <a
      class="link"
      href="/blog">my blog</a
    >.
  </p>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
