import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { postsData } from "../src/data/postData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const SITE_URL = "https://plazavictoria.mx/"; // tu dominio final

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function main() {
  // 1) Leemos el index.html de dist para reutilizar los mismos assets (css/js)
  const indexHtmlPath = path.join(DIST_DIR, "index.html");
  const indexHtml = await fs.readFile(indexHtmlPath, "utf-8");

  // Links CSS
  const headAssets = [...indexHtml.matchAll(/<link\s+[^>]*rel=["']stylesheet["'][^>]*>/g)].map(
    (m) => m[0]
  );

  // Scripts del bundle (type="module" src="...")
  const moduleScripts = [
    ...indexHtml.matchAll(/<script\s+[^>]*type=["']module["'][^>]*src=["'][^"']+["'][^>]*><\/script>/g),
  ].map((m) => m[0]);

  // 2) Generamos un index.html por post en /dist/novedades/<slug>/
  for (const post of postsData) {
    const url = `${SITE_URL}/novedades/${post.slug}`;
    const ogImage = `${SITE_URL}${post.shareImage}`;

    const title = `${post.title} | Plaza Victoria`;
    const description = post.description;

    const pageHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(url)}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeHtml(post.title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(url)}" />
  <meta property="og:image" content="${escapeHtml(ogImage)}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImage)}" />

  ${headAssets.join("\n  ")}
</head>
<body>
  <div id="root"></div>
  ${moduleScripts.join("\n  ")}
</body>
</html>`;

    const outDir = path.join(DIST_DIR, "novedades", post.slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), pageHtml, "utf-8");
  }

  console.log(`✅ OG pages generadas: ${postsData.length}`);
}

main().catch((err) => {
  console.error("❌ Error generando OG pages:", err);
  process.exit(1);
});
