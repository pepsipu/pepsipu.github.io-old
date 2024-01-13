import strftime from "strftime";
import fs from "fs";
import { parse } from "yaml";
import slug from "slug";

export type Post = {
  content: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  published: true;
};

const utc = strftime.utc(); // YAML dates are in UTC
slug.defaults.mode = "pretty";

export const posts: Post[] = Object.values(
  import.meta.glob("/posts/*.md", {
    as: "raw",
    eager: true,
  })
)
  .map(parsePost)
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export function formatTime(format: string, date: Date | string): string {
  return utc(format, new Date(date));
}

function parsePost(post: string): Post {
  const sections = post.split("---\n");
  const meta = parse(sections[1]);
  meta.slug = slug(meta.title);
  meta.date = new Date(meta.date);
  // certainly not the prettiest code i've written
  const content = sections.slice(2).join("---\n");

  return {
    ...meta,
    content,
  };
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
