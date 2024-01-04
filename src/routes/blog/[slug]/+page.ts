import { getPostBySlug } from "$lib/post";

export const load = async ({ params }) => {
  return {
    post: getPostBySlug(params.slug),
  };
};

export const prerender = true;
