//import React from "react";
import type { Post } from "../../data/postData";
import { PostCard } from "./PostCard";

export function PostFeed({
  posts,
  activeFilter,
}: {
  posts: Post[];
  activeFilter: string | null;
}) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <p className="text-sm text-zinc-600">
          No hay publicaciones para{" "}
          <span className="font-medium">{activeFilter}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
