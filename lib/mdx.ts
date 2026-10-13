// lib/mdx.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MDXFrontMatter } from "@/lib/types";

const root = process.cwd();

export const postsPath = path.join(root, "posts");

export const getMdx = (fileName: string) => {
  const fullPath = path.join(postsPath, fileName);
  const docSource = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace(".mdx", ""),
    } as MDXFrontMatter,
    content,
  };
};

export const getAllMdx = () => {
  const items = fs
    .readdirSync(postsPath)
    .filter((item) => item.endsWith(".mdx"))
    .map((item) => getMdx(item));

  // Sort by id (the guide's reading order). Dates are shared between many
  // posts, so sorting by date alone gave an unstable order.
  return items.sort((a, b) => {
    const idA = a.frontMatter.id || 0;
    const idB = b.frontMatter.id || 0;
    if (idA !== idB) return idA - idB;
    return (
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
    );
  });
};
