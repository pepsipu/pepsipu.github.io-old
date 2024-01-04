import { getPostBySlug, formatTime } from "$lib/utils";

export const load = async ({ params }) => {
  return {
    slug: params.slug,
    post: await getPostBySlug(params.slug),
  };
};

export const prerender = true;
