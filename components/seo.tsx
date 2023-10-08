import { DefaultSeo } from "next-seo";

const config = {
  title: "Galeiro's Blog",
  description: "I design & build interfaces",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.musex.my.id",
    site_name: "Galeiro's Blog",
    images: [
      {
        url: "https://blog.musex.my.id/og.jpg",
        alt: "Galeiro",
      },
    ],
  },
  twitter: {
    handle: "@samuelkraft",
    site: "@samuelkraft",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
