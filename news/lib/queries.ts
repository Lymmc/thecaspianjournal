export const allNewsQuery = `*[_type == "news"] | order(publishedAt desc){
  _id,
  title,
  description,
  "image": image.asset->url,
  slug,
  publishedAt
}`;
export const singleNewsQuery = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  description,
  "image": image.asset->url,
  slug,
  publishedAt
}`;
