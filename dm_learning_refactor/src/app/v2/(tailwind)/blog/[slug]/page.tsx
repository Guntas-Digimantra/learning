import Image from 'next/image';
import ContactForm from '@/components/home/ContactForm';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';
import { regexPatterns, slugify } from '@/components/common/common';
import { fetchPostsFromServer } from '@/components/lib/FetchPosts';

function extractMeta(markdown: string) {
  const meta: { metaTitle?: string; metaDescription?: string } = {};
  const titleMatch = markdown?.match(regexPatterns?.metaTitle);
  const descriptionMatch = markdown?.match(regexPatterns?.metaDescription);
  if (titleMatch) meta.metaTitle = titleMatch[1]?.trim();
  if (descriptionMatch) meta.metaDescription = descriptionMatch[1]?.trim();
  return meta;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const posts = await fetchPostsFromServer();
  const matchedPost = posts?.find((post: { Title: string }) => slugify(post?.Title) === params?.slug);

  if (!matchedPost) {
    return { title: 'Post Not Found', description: 'The requested blog post does not exist.' };
  }

  const { metaTitle, metaDescription } = extractMeta(matchedPost.Markdown || '');
  return {
    title: metaTitle || matchedPost.Title,
    description: metaDescription || matchedPost.Description || 'Read more on DMLearning blog.',
    openGraph: {
      title: metaTitle || matchedPost.Title,
      description: metaDescription || matchedPost.Description || 'Explore our latest post.',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.split('/api')[0]}${matchedPost?.HeaderImage?.url}`,
          width: 1200,
          height: 630,
          alt: matchedPost?.Title || 'OG Image',
        },
      ],
    },
  };
}

export default async function BlogDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let posts: Array<{ Title: string; Markdown?: string; Author?: string; PublishDate: string; HeaderImage?: { url: string } }> = [];

  try {
    posts = await fetchPostsFromServer();
  } catch {
    posts = [];
  }

  const matchedPost = posts?.find((post) => slugify(post?.Title) === params?.slug);

  if (!matchedPost) return <p className="mx-auto max-w-[1430px] px-[15px] py-[60px] text-[30px] font-medium text-[#333]">No blog post found for {params.slug}</p>;

  const author = matchedPost?.Author;
  const imageUrl = matchedPost?.HeaderImage?.url;
  const apiBase = process.env.NEXT_PUBLIC_STRAPI_API_URL?.split('/api')[0];

  return (
    <section className="py-20 text-[#333] max-[991px]:py-[60px] max-[991px]:pt-10">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-[60px] max-[1200px]:flex-col">
          <div className="w-full max-w-[76%] max-[1200px]:max-w-full max-[991px]:[&_h1]:text-[36px]">
            <h1>{matchedPost?.Title}</h1>
            <div className="py-5">
              <Image
                src={matchedPost?.HeaderImage && apiBase ? `${apiBase}${imageUrl}` : '/whyDml.png'}
                alt={matchedPost?.Title}
                width={1010}
                height={568}
                className="h-auto w-full"
              />
            </div>
            <div className="flex gap-[50px] pb-5 max-[991px]:flex-col max-[991px]:gap-2.5">
              <p>
                Written by: <span>{author || 'Team DMLearning'}</span>
              </p>
              <p>
                Published on:{' '}
                {new Date(matchedPost?.PublishDate)?.toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className="[&_a]:text-[#1c75ba] [&_h2]:py-5 [&_h2]:text-[40px] [&_h2]:text-[#333] [&_h3]:text-[30px] [&_li]:list-disc [&_p]:py-2.5 [&_ul]:pl-[22px] max-[991px]:[&_h2]:text-[30px] max-[991px]:[&_h3]:text-2xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {matchedPost?.Markdown?.split('\n')
                  .filter((line: string) => !line?.startsWith('metaTitle:') && !line?.startsWith('metaDescription:'))
                  .join('\n')}
              </ReactMarkdown>
            </div>
          </div>

          <div className="sticky top-[150px] shrink-0 basis-[340px] max-[1200px]:static max-[1200px]:w-full">
            <div className="overflow-hidden rounded-[10px] border border-[#d7d2d2]">
              <Image src="/blog.webp" width={384} height={238} alt="blog" className="w-full rounded-t-[10px]" />
              <div className="px-5 pb-5">
                <ContactForm isBlog={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
