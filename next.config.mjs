import nextMdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
