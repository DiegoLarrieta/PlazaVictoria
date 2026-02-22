import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { postsData } from "../../data/postData";
import { PostMedia } from "../../components/Home/PostMedia";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = postsData.find((p) => p.slug === slug);

  if (!post) return <div className="mx-auto max-w-2xl p-6">Post no encontrado.</div>;

  const siteUrl = "https://plazavictoria.mx"; // luego lo hacemos configurable
  const url = `${siteUrl}/novedades/${post.slug}`;
  const ogImage = `${siteUrl}${post.shareImage}`; // shareImage tipo "/feed/posada.jpg"

  return (
    <main className="mx-auto max-w-2xl p-4 md:p-6">
      <Helmet>
        <title>{post.title} | Plaza Victoria</title>
        <meta name="description" content={post.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        {/* opcional: twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{post.date}</p>

      <div className="mt-4">
        <PostMedia post={post} />
      </div>

      <p className="mt-4 text-base leading-relaxed text-zinc-800">
        {post.description}
      </p>
    </main>
  );
}
