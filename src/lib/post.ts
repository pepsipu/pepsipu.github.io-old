import { writable, type Writable } from "svelte/store";

export type Post = {
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subtitle: string;
  date: string;
  tags: string[];
  slug: string;
};
