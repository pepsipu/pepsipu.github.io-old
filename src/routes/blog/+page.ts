import { posts } from "$lib/post";

export const load = async ({ params }) => {
  return {
    posts,
  };
};

export const prerender = true;
