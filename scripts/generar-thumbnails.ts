import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

// Parse all video entries from postData source to find poster paths
import { postsData as posts } from "../src/data/postData.ts";

const root = new URL("..", import.meta.url).pathname;
const TIMESTAMP = "00:00:01";

let generated = 0;
let skipped = 0;

for (const post of posts) {
  for (const item of post.media) {
    if (item.type !== "video" || !item.poster) continue;

    const videoPath = join(root, "public", item.src);
    const posterPath = join(root, "public", item.poster);

    if (existsSync(posterPath)) {
      skipped++;
      continue;
    }

    if (!existsSync(videoPath)) {
      console.warn(`⚠️  Video not found: ${item.src}`);
      continue;
    }

    console.log(`🎬 Generating thumbnail: ${item.poster}`);
    execSync(
      `ffmpeg -i "${videoPath}" -ss ${TIMESTAMP} -vframes 1 -update 1 "${posterPath}" -y`,
      { stdio: "pipe" }
    );
    generated++;
  }
}

console.log(`\n✅ Done — ${generated} generated, ${skipped} already existed.`);
