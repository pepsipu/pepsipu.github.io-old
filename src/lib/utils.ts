import strftime from "strftime";
import { posts, notes, type Post } from "$lib/store";
import { type Writable } from "svelte/store";
import CryptoJS from "crypto-js";
const utc = strftime.utc(); // YAML dates are in UTC

// this can be organized so much better (i do not care)

export function formatTime(format: string, date: Date | string): string {
  return utc(format, new Date(date));
}

export async function digestMessage(message: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

export function parsePostList(newPosts: any): Post[] {
  return newPosts?.data.map(
    ({ attributes }: { attributes: Post }) => attributes
  );
}

export function updatePostList() {
  fetch("https://strapi.pepsi.pw/api/posts?sort=date:DESC")
    .then((request) => request.json())
    .then((newPosts) => {
      posts.set(parsePostList(newPosts));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const req = await fetch(
    `https://strapi.pepsi.pw/api/posts?filters[slug][$eq]=${slug}`
  );
  const newPosts = await req.json();
  return parsePostList(newPosts)[0];
}

export function decryptAuthorizationToken(password: string): string | null {
  try {
    return CryptoJS.AES.decrypt(
      "U2FsdGVkX19uEGkzODQ8SKIjOfziBTSIhk8+TMbmDvbL2PtQqPlHgpM9Rf3lrNfUhQ51oui5qGpHc18vWY8tVfU4Tx0Lu3NEY5bMKBz1SYCeV0WANwVcz4ixmgir0iF5RX7q8OxaIaddEX8GWipqTCmXivM7q0tD2Jr/v1BuERtx7wlh4Dl9NY1XkqZSnghu461j38UU19/NIck6NNFK6OxzQWJZY8cbSAe+Iycj1gi+/hZVUfz24xp9plpGicJjcB8j36MagXo+6r8oved+R+pz8CdSypromW4B9ZuxfvAyJh/RLlu9wv6y2vuD/7WzNPu1zvjk66mrUp0gT6WGrMKw0bBktLbFZWw+6ANX9Pv6FWk0/JdkoXVC16XEsIJd",
      password
    ).toString(CryptoJS.enc.Utf8);
  } catch {
    return null;
  }
}

export function getNotes(authKey: string) {
  fetch("https://strapi.pepsi.pw/api/notes", {
    headers: {
      Authorization: `Bearer ${authKey}`,
    },
  })
    .then((request) => request.json())
    .then((newPosts) => {
      console.log(newPosts);
      notes.set(parsePostList(newPosts));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getNoteBySlug(
  slug: string,
  authKey: string
): Promise<Post> {
  const req = await fetch(
    `https://strapi.pepsi.pw/api/notes?filters[slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${authKey}`,
      },
    }
  );
  const newPosts = await req.json();
  console.log(newPosts);
  return parsePostList(newPosts)[0];
}
