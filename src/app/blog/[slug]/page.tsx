import {Mdx} from "@/app/_components/MdxLayout/Mdx";
import {Section} from "@/app/_components/Section";
import {getArticle} from "@/lib/articles";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {ViewCount} from "./ViewCount";

export const dynamic = "force-static";

export const generateMetadata = async ({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const slug = (await params).slug;
    const article = await getArticle(slug);

    if (!article) {
        return {
            title: "404 - Page Not Found",
            description: "Page not found",
        };
    }

    return {
        title: article.title,
        description: article.description,
    };
};
export default async function page({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const article = await getArticle(slug);

    if (!article) {
        return notFound();
    }

    return (
        <Section className="relative">
            <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto">
                <article className="prose prose-invert prose-sm lg:prose-base max-w-3xl">
                    <div className="border-b border-muted">
                        <div className="flex items-center gap-2 py-2">
                            <div className="flex flex-col sm:flex-row gap-2 max-w-prose">
                                <div className="text-primary">
                                    {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}
                                    {" • "}
                                </div>
                                <ViewCount slug={slug}/>
                            </div>
                        </div>
                        <div className="py-2 m-0">
                            <h1>{article.title}</h1>
                        </div>
                    </div>
                    <div className="py-4">
                        <Mdx content={article.content}/>
                    </div>
                </article>
            </div>
        </Section>
    );
}
