import { Helmet } from 'react-helmet-async';
import { postsData } from '../../data/postData';
import PostCard from './components/PostCard';

const SITE_URL = 'https://plazavictoria.mx';

export default function Novedades() {

  return (
    <>
      <Helmet>
        <title>Novedades | Plaza Victoria Ixmiquilpan</title>
        <meta
          name="description"
          content="Entérate de los últimos eventos, aperturas y promociones de Plaza Victoria en Ixmiquilpan, Hidalgo."
        />
        <link rel="canonical" href={`${SITE_URL}/novedades`} />
        <meta property="og:title"       content="Novedades | Plaza Victoria" />
        <meta property="og:description" content="Eventos, aperturas y promociones en Plaza Victoria Ixmiquilpan." />
        <meta property="og:url"         content={`${SITE_URL}/novedades`} />
        <meta property="og:type"        content="website" />
      </Helmet>

      <div className="mx-auto max-w-2xl px-4 py-10 md:px-6">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">Novedades</h1>
          <p className="mt-2 text-zinc-500">
            Eventos, aperturas y promociones en Plaza Victoria.
          </p>
        </div>

        {/* Feed — excludes promociones (those live in /ofertas) */}
        <div className="flex flex-col gap-5">
          {postsData
            .filter((p) => !p.labels.includes('promociones'))
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </>
  );
}
