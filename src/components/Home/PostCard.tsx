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

          <div className="mt-2 text-xs text-zinc-500">
            {formatDate(post.date)}
          </div>
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

function formatDate(dateStr: string) {
  // Esperamos "YYYY-MM-DD" desde postData.ts
  // Lo convertimos a Date local para evitar el desfase por UTC.
  try {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);

    if (match) {
      const year = Number(match[1]);
      const monthIndex = Number(match[2]) - 1; // 0-11
      const day = Number(match[3]);

      const localDate = new Date(year, monthIndex, day); // LOCAL timezone
      return localDate.toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // Fallback: si algún día llega con hora ("2024-12-15T..."), lo mostramos normal.
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;

    return d.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
