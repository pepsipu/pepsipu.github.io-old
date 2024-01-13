import { getPostBySlug, posts } from "$lib/post";
import type { EntryGenerator } from "./$types";

export const load = async ({ params }) => {
  return {
    post: getPostBySlug(params.slug),
  };
};

export const entries: EntryGenerator = () => {
  return posts.map(({ slug }) => ({
    slug,
  }));
};

export const prerender = true;
