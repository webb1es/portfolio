import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const articlesDir = path.join(process.cwd(), "src/Articles");

const ArtcileSchema = z.object({
  title: z.string().min(45).max(65),
  description: z.string(),
  publishedAt: z.string(),
  published: z.boolean().optional().default(false),
});

type Article = z.infer<typeof ArtcileSchema> & {
  slug: string;
  content: string;
};

export const getArticles = async () => {
  console.log(articlesDir);
  const files = await fs.readdir(articlesDir);
  const filesName = files.filter((file) => file.endsWith(".mdx"));
  const articles: Article[] = [];

  for await (const file of filesName) {
    const filePath = path.join(articlesDir, file);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const frontmatter = matter(fileContent);
    const safeData = ArtcileSchema.safeParse(frontmatter.data);

    if (!safeData.success) {
      console.error(`Error parsing file: ${file}`);
      safeData.error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
      });
      continue;
    }

    if (!safeData.data.published && process.env.NODE_ENV === "production") {
      continue;
    }

    articles.push({
      ...safeData.data,
      slug: file.replace(/^\d+-/, "").replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return articles;
};

export const getArticle = async (slug: string) => {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
};
