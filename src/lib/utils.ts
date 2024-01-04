import strftime from "strftime";
import type { Post } from "$lib/post";
const utc = strftime.utc(); // YAML dates are in UTC

// this can be organized so much better (i do not care)

export function formatTime(format: string, date: Date | string): string {
  return utc(format, new Date(date));
}
export function parsePostList(newPosts: any): Post[] {
  return newPosts?.data.map(
    ({ attributes }: { attributes: Post }) => attributes
  );
}

export async function getPostList() {
  const req = await fetch("https://strapi.pepsi.pw/api/posts?sort=date:DESC");
  return parsePostList(await req.json());
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const req = await fetch(
    `https://strapi.pepsi.pw/api/posts?filters[slug][$eq]=${slug}`
  );
  const newPosts = await req.json();
  return parsePostList(newPosts)[0];
}
