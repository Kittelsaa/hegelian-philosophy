// pages/posts/[slug].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "next-mdx-remote-client/serialize";
import { MDXClient } from "next-mdx-remote-client/csr";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";
import remarkGfm from "remark-gfm";

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  frontMatter: MDXFrontMatter;
  mdx: any;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
  if (mdx && "error" in mdx) {
    return <p>Error rendering content: {String(mdx.error)}</p>;
  }
  return (
    <>
      <Page {...frontMatter}>
        <Prose>
          <MDXClient {...mdx} components={components} />
        </Prose>
        {previous || next ? (
          <nav
            className={cx(
              "mt-12 pt-10 grid grid-cols-3 gap-4 items-center border-t",
              "border-gray-200",
              "dark:border-gray-700"
            )}
          >
            <div>
              {previous ? (
                <>
                  <p
                    className={cx(
                      "mb-1  tracking-wider text-sm",
                      "text-gray-500",
                      "dark:text-gray-400"
                    )}
                  >
                    Previous
                  </p>
                  <Link href={`/posts/${previous.slug}`}
                    style={{ fontFamily: "Syne Mono, monospace" }}>
                    {previous.title}
                  </Link>
                </>
              ) : null}
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                style={{ fontFamily: "Syne Mono, monospace" }}
                className={cx(
                  "inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold",
                  "bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm",
                  "border border-white/20 dark:border-gray-700/30",
                  "text-accent-blue dark:text-accent-red",
                  "hover:bg-accent-blue hover:text-white ",
                  "dark:hover:bg-accent-red dark:hover:text-white"
                )}
              >
                View All Notes
              </Link>
            </div>

            <div className="text-right">
              {next ? (
                <>
                  <p
                    className={cx(
                      "mb-1  tracking-wider text-sm",
                      "text-gray-500",
                      "dark:text-gray-400"
                    )}
                  >
                    Next
                  </p>
                  <Link href={`/posts/${next.slug}`} 
                    style={{ fontFamily: "Syne Mono, monospace" }}>
                    {next.title}
                  </Link>
                </>
              ) : null}
            </div>
          </nav>
        ) : null}
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextProps;
  const mdxFiles = getAllMdx();

  const sortedMdxFiles = mdxFiles.sort((a, b) => {
    const idA = a.frontMatter.id || 0;
    const idB = b.frontMatter.id || 0;
    return idA - idB;
  });

  const postIndex = sortedMdxFiles.findIndex(
    (p) => p.frontMatter.slug === slug
  );
  const post = sortedMdxFiles[postIndex];
  const { frontMatter, content } = post;

  const mdxContent = await serialize({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
      },
      scope: frontMatter,
    },
  });
  
  return {
    props: {
      frontMatter,
      mdx: mdxContent,
      previous: sortedMdxFiles[postIndex - 1]?.frontMatter || null,
      next: sortedMdxFiles[postIndex + 1]?.frontMatter || null,
    },
  };
};

export default Post;
