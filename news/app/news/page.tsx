import Link from "next/link";
import { client } from "../../lib/sanity.client";
import { allNewsQuery } from "../../lib/queries";

export default async function NewsPage() {
  const news = await client.fetch(allNewsQuery);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-10">All News – Caspian Journal</h1>

      <div className="space-y-8">
        {news.map((item: any) => (
          <article key={item._id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold">
              <Link href={`/news/${item.slug.current}`}>
                {item.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">
              {item.publishedAt
                ? new Date(item.publishedAt).toLocaleString()
                : ""}
            </p>
            <p className="mt-2 text-gray-700 line-clamp-3">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
