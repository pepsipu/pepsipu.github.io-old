import { getPostList } from "$lib/utils";

export const load = async ({ params }) => {
  return {
    posts: await getPostList(),
  };
};

export const prerender = true;
