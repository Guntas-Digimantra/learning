
import Image from "next/image";
import ContactForm from "@/components/home/ContactForm";
import "/public/css/home-page.css";
import "/public/css/blog.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { regexPatterns, slugify } from "@/components/common/common";
import { fetchPostsFromServer } from "@/components/lib/FetchPosts";

function extractMeta(markdown: string) {
  const meta: { metaTitle?: string; metaDescription?: string } = {};

  const titleMatch = markdown?.match(regexPatterns?.metaTitle);
  const descriptionMatch = markdown?.match(regexPatterns?.metaDescription);

  if (titleMatch) meta.metaTitle = titleMatch[1]?.trim();
  if (descriptionMatch) meta.metaDescription = descriptionMatch[1]?.trim();

  return meta;
}

export async function generateMetadata(
  props: {
    params: Promise<any>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const posts = await fetchPostsFromServer();

  const matchedPost = posts?.find(
    (post: any) =>
     slugify(post?.Title) === params?.slug
  );

  if (!matchedPost) {
    return {
      title: "Post Not Found",
      description: "No blog post found with the given slug.",
    };
  }
  const { metaTitle, metaDescription } = extractMeta(
    matchedPost.Markdown || ""
  );

  return {
    title: metaTitle || matchedPost.Title,
    description:
      metaDescription ||
      matchedPost.Description ||
      "Read more on DMLearning blog.",
    openGraph: {
      title: metaTitle || matchedPost.Title,
      description:
        metaDescription ||
        matchedPost.Description ||
        "Explore our latest post.",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.split("/api")[0]}${
            matchedPost?.HeaderImage?.url
          }`,
          width: 1200,
          height: 630,
          alt: matchedPost?.Title || "OG Image",
        },
      ],
    },
  };
}

export default async function BlogDetailPage(props: { params: Promise<any> }) {
  const params = await props.params;
  const posts = await fetchPostsFromServer();

  const matchedPost = posts?.find(
    (post: any) =>
      slugify(post?.Title) === params?.slug
  );

  if (!matchedPost) return <p>No blog post found for {params?.slug}</p>;

  const author = matchedPost?.Author;
  const imageUrl = matchedPost?.HeaderImage?.url;

  return (
    <section className="blog-detail-page-section">
      <div className="dml-container">
        <div className="blog-detail-wrapper">
          <div className="blog-detail-left-wrapper">
            <h1>{matchedPost?.Title}</h1>
            <div className="blog-detail-image-wrapper">
              <Image
                src={
                  matchedPost?.HeaderImage
                    ? `${
                        process.env.NEXT_PUBLIC_STRAPI_API_URL?.split("/api")[0]
                      }${imageUrl}`
                    : "/whyDml.png"
                }
                alt={matchedPost?.Title}
                width={1010}
                height={568}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="author-wrapper">
              <p>
                Written by: <span>{author ? author : "Team DMLearning"}</span>
              </p>
              <p>
                Published on:{" "}
                {new Date(matchedPost?.PublishDate)?.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {matchedPost?.Markdown?.split("\n")
                .filter(
                  (line: string) =>
                    !line?.startsWith("metaTitle:") &&
                    !line?.startsWith("metaDescription:")
                )
                .join("\n")}
            </ReactMarkdown>
          </div>

          <div className="blog-detail-right-wrapper">
            <div className="blog-detail-inner-wrapper">
              <Image src="/blog.webp" width={384} height={238} alt="blog" />
              <div className="contact-blog">
                <ContactForm isBlog={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
