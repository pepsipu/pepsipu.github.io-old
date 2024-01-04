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
      I secure the blockchain at <a class="link" href="https://osec.io"
        >OtterSec</a
      >
      and develop the future of finance at
      <a class="link" href="https://zellic.io">Zellic</a>'s Quantitative
      Research Lab.
    </p>

    <p>
      I'd like to see as much computer science and pure mathematics as I can.
      Embedded systems, where programmers have creative freedom over hardware,
      software, and the bridge between the two, are my favorite.
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
    I currently focus on cybersecurity. As a member of the
    <a class="link" href="https://ctftime.org/stats/2022/US"
      >United States' #1 competitive cybersecurity team</a
    >, <a class="link" href="https://dicega.ng">DiceGang</a>, I work with
    government organizations like the
    <a
      class="link"
      href="https://www.wpafb.af.mil/News/Article-Display/Article/2872772/daf-declares-hack-a-sat-challenge-winners-aims-to-reduce-space-vulnerability/"
      >United States AFA</a
    >,
    <a class="link" href="https://en.wikipedia.org/wiki/Groupe_ADP"
      >Aéroports de Paris</a
    >,
    <a class="link" href="https://safcsp.org.sa/en/">Saudi FCSP</a>, and
    <a
      class="link"
      href="https://u.ae/ar-AE/information-and-services/justice-safety-and-the-law/cyber-safety-and-digital-security"
      >UAE Cybersecurity Council</a
    >
    and blockchain organizations like the
    <a class="link" href="https://solana.com">Solana Foundation</a>, the
    <a class="link" href="https://sui.io/">Sui Blockchain</a>, and
    <a class="link" href="https://aptoslabs.com/">Aptos Labs</a>
    to make the internet safer.
  </p>
  <p>
    As an academic researcher, I've done guest lectures on exploitation at the
    <a class="link" href="https://www.youtube.com/watch?v=VYr0Ut8n0bg"
      >HOPE Security Symposium</a
    >, Carnegie Mellon University, and EPFL Innovation Park. Check out this
    piece on
    <a class="link" href="https://blog.pepsipu.com/posts/nightmare"
      >exploiting one-byte writes in standard libraries</a
    >!
  </p>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
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
