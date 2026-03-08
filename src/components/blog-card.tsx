import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { PostMeta } from "@/lib/mdx";

interface BlogCardProps {
  post: PostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="space-y-3 rounded-lg border border-transparent p-5 transition-colors hover:border-border hover:bg-accent/50">
        <div className="flex items-center gap-3 text-base text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="font-serif text-2xl font-bold tracking-tight group-hover:text-foreground">
          {post.title}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
