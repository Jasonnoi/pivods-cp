"use client";

import { layoutStyles } from "../../style";
import { Footer } from "../../../components/section";
import { cn } from "../../../lib/utils";
import blogData from "../../../mockupdata.js/blogData"; // jika nanti diubah ke TS, ubah import-nya
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

// =========================
// TYPES
// =========================

interface ParagraphBlock {
    type: "paragraph";
    text: string;
}

interface HeadingBlock {
    type: "heading";
    text: string;
}

interface SubHeadingBlock {
    type: "subheading";
    text: string;
}

interface ListBlock {
    type: "list";
    items: string[];
}

interface QuoteBlock {
    type: "quote";
    text: string;
}

interface ImageBlock {
    type: "image";
    src: string;
    alt: string;
    caption?: string;
}

type ContentBlock =
    | ParagraphBlock
    | HeadingBlock
    | SubHeadingBlock
    | ListBlock
    | QuoteBlock
    | ImageBlock;

export interface BlogItem {
    Id: string;
    title: string;
    description: string;
    category: string;
    header: {
        src: string;
        alt: string;
    };
    content: ContentBlock[];
}

// =========================
// BLOG CONTENT COMPONENT
// =========================

function BlogContent({ content }: { content: ContentBlock[] }) {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4 py-12">
            {content.map((block, index) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p
                                key={index}
                                className="leading-relaxed text-gray-700 dark:text-gray-300"
                            >
                                {block.text}
                            </p>
                        );

                    case "heading":
                        return (
                            <h2
                                key={index}
                                className="text-lg font-bold mt-10 mb-4 text-gray-900 dark:text-white"
                            >
                                {block.text}
                            </h2>
                        );

                    case "subheading":
                        return (
                            <h3
                                key={index}
                                className="text-md font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200"
                            >
                                {block.text}
                            </h3>
                        );

                    case "list":
                        return (
                            <ul
                                key={index}
                                className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300"
                            >
                                {block.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        );

                    case "quote":
                        return (
                            <blockquote
                                key={index}
                                className="border-l-4 border-primary pl-4 italic text-gray-600 dark:text-gray-300 my-6"
                            >
                                {block.text}
                            </blockquote>
                        );

                    case "image":
                        return (
                            <figure key={index} className="my-6 flex flex-col items-center">
                                <Image
                                    src={block.src}
                                    alt={block.alt}
                                    width={800}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover"
                                />
                                {block.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2 text-center">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    default:
                        return null;
                }
            })}
        </article>
    );
}

// =========================
// RELATED POSTS COMPONENT
// =========================

function RelatedPosts({
    currentId,
    category,
}: {
    currentId: string;
    category: string;
}) {
    const related = (blogData as BlogItem[]).filter(
        (item) => item.Id !== currentId && item.category === category
    );

    if (!related.length) return null;

    return (
        <section className="bg-gray-50 dark:bg-background py-12 px-4">
            <h2 className="text-sm md:text-md font-bold mb-5 text-center text-gray-900 dark:text-gray-100">
                Related Posts
            </h2>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
                {related.map((post) => (
                    <Link
                        key={post.Id}
                        href={`/blog/${post.Id}`}
                        className={cn(
                            "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
                        )}
                    >
                        <div className="relative w-full h-50 md:h-full rounded-md overflow-hidden">
                            <Image
                                src={post.header.src}
                                alt={post.header.alt}
                                fill
                                className="object-cover opacity-60 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2"
                                priority
                            />
                        </div>

                        <div className="transition duration-200 group-hover/bento:translate-x-2">
                            <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                                {post.title}
                            </div>
                            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                                {post.description}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

// =========================
// MAIN BLOG POST PAGE
// =========================

export default function BlogPostDetail({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) {
    const { blogId } = use(params);

    const blog = (blogData as BlogItem[]).find((item) => item.Id === blogId);

    if (!blog) {
        return <h1 className="text-center text-2xl py-20">Blog not found</h1>;
    }

    return (
        <main>
            {/* Hero Section */}
            <section className="h-[65vh] md:h-[55vh] w-full flex justify-center items-center relative">
                <Image
                    src={blog.header.src}
                    alt={blog.header.alt}
                    fill
                    className="object-cover -z-10 opacity-20"
                    priority
                />

                <div className={`${layoutStyles.container} flex flex-col items-center relative z-10`}>
                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                        {blog.category}
                    </span>

                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center text-gray-900 dark:text-gray-100">
                        {blog.title}
                    </h1>

                    <p className="font-semibold text-center mb-14 max-w-2xl text-gray-700 dark:text-gray-300">
                        {blog.description}
                    </p>
                </div>
            </section>

            {/* Konten Utama */}
            <BlogContent content={blog.content} />

            {/* Related Posts */}
            <RelatedPosts currentId={blog.Id} category={blog.category} />

            <Footer />
        </main>
    );
}
