import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose max-w-none">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, { theme: "github-light" }]],
          },
        }}
      />
    </div>
  );
}
