import { client } from "../lib/sanity.client";
import { allNewsQuery } from "../lib/queries";

export default async function Home() {
  const news = await client.fetch(allNewsQuery);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-10">Caspian Journal – Latest News</h1>

      <div className="space-y-10">
        {news.map((item: any) => (
          <div key={item._id} className="border p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>

            {item.image && (
              <img src={item.image} alt="" className="mt-3 w-full rounded" />
            )}

            <p className="text-sm text-gray-500 mt-2">
              {new Date(item.publishedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
