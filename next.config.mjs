import nextMdx from "@next/mdx";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
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
