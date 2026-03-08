import type { Metadata } from "next";
import { Section } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-10">
      <Section>
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-muted-foreground">
          Writing about software engineering, architecture, and lessons learned
          along the way.
        </p>
      </Section>

      <Section className="pt-0">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
