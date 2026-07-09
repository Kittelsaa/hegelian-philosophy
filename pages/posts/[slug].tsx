// pages/posts/[slug].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
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
  return (
    <>
      <Page {...frontMatter}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
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
                  "inline-flex items-center gap-2 px-4 py-2 rounded border text-sm",
                  "border-accent-blue text-accent-blue",
                  "dark:border-accent-red dark:text-gray-300",
                  "hover:bg-accent-blue hover:text-white",
                  "dark:hover:bg-accent-red dark:hover:text-white",
                  "transition-colors"
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

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
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
