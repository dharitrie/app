export function useMeta({
  title,
  description,
  image,
  url
}: {
  title: string;
  description?: string;
  image?: string;
  url?: string;

}) {
  useSeoMeta({
    twitterTitle: title,
    twitterDescription: description || "Default description",
    twitterImage: image || "/default-image.png",
    twitterCard: "summary",
    ogUrl: url || "https://defaulturl.com",
    ogImage: image || "/default-image.png"
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    title: title,
    meta: [
      { name: "description", content: description || "Default description" },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: description || "Default description",
      },
      { property: "og:image", content: image || "/default-image.png" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.ico",
      },
    ],
  });
}