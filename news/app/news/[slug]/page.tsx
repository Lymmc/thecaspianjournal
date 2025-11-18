import { client } from "../../../lib/sanity.client";
import { singleNewsQuery } from "../../../lib/queries";

type Props = {
  params: { slug: string };
};

export default async function NewsArticlePage({ params }: Props) {
  const article = await client.fetch(singleNewsQuery, { slug: params.slug });

  if (!article) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-3">{article.title}</h1>

      <p className="text-sm text-gray-500 mb-4">
        {article.publishedAt
          ? new Date(article.publishedAt).toLocaleString()
          : ""}
      </p>

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded mb-6"
        />
      )}

      <p className="text-lg leading-relaxed text-gray-800">
        {article.description}
      </p>
    </main>
  );
}
