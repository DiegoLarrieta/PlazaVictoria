//import React from "react";
import type { Post } from "../../data/postData";
import { PostMedia } from "./PostMedia";
import { ShareButton } from "./ShareButton";

export function PostCard({ post }: { post: Post }) {
  return (
    <article
      id={post.id}
      className="rounded-2xl border border-zinc-200 bg-white shadow-sm"
    >
      <div className="p-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            {post.labels.map((l) => (
              <span
                key={l}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
              >
                {capitalize(l)}
              </span>
            ))}
          </div>

          <div className="mt-2 text-xs text-zinc-500">{formatDate(post.date)}</div>
        </div>

        <ShareButton postId={post.id} />
      </div>

      <div className="px-4 pb-4">
        <PostMedia post={post} />
        <p className="mt-3 text-sm leading-relaxed text-zinc-800">
          {post.description}
        </p>
      </div>
    </article>
  );
}

function capitalize(s: string) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatDate(iso: string) {
  // formato simple (puedes cambiar luego)
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
}
