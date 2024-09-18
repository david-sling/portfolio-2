import { BlogCard } from "@/components/blog/BlogCard";
import { Section } from "@/components/common/Section";
import { formatMetadata } from "@/utils/metadata";

export const metadata = formatMetadata({
  title: "David Sling | Blogs",
  description: "The practical developer's mind",
  image: "/blogs-cover.svg",
});

const Blogs = () => (
  <Section className="py-10">
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      <BlogCard
        cover="/blog-covers/consistent-randomness.svg"
        title="Randomness is beautifully consistent"
        link="/blogs/consistent-randomness"
      />
    </div>
  </Section>
);

export default Blogs;
