import {getArticles} from "@/lib/articles";
import Link from "next/link";
import {Section} from "../_components/Section";

export default async function page() {
    const articles = await getArticles();
    return (
        <Section>
            <div className="mb-10">
                <h1 className="text-2xl font-bold font-heading">Articles</h1>
            </div>
            <div className="min-h-[65vh]">
                <ul className="space-y-8">
                    {articles.map((article) => (
                        <li className="py-4" key={article.slug}>
                            <h2 className="text-xl font-semibold mb-2">
                                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                            </h2>
                            <p className="text-gray-600 mb-3">
                                {article.content.substring(0, 200)}...
                            </p>
                            <Link
                                href={`/blog/${article.slug}`}
                                className="text-primary hover:text-primary/80 transition-colors duration-200"
                            >
                                Lire la suite →
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
