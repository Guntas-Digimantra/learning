'use client';
import Image from 'next/image';
import Link from '@/components/ui/link';
import { useState } from 'react';
import { slugify } from '../common/common';

type BlogProps = {
  posts: any[];
};

const btnBlack =
  'inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-[#2E2E2E] bg-[#2E2E2E] px-[38px] py-3 text-base font-semibold leading-6 text-white no-underline transition-[linear_0.3s] hover:border-[#2E2E2E] hover:bg-white hover:text-[#2E2E2E]';

const Blog = ({ posts }: BlogProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogData = [
    'All',
    'General',
    'Artificial Intelligence',
    'Agile',
    'Automative Industry',
    'Cyber Security',
    'Design',
    'Digital Marketing',
    'eCommerce',
  ];

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b?.PublishDate).getTime() - new Date(a?.PublishDate).getTime()
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  const filteredBlogs = sortedPosts.filter(
    (item: any) =>
      item?.Title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      item?.Description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  if (!posts || posts?.length === 0) {
    return (
      <p className="mx-auto max-w-[1430px] px-[15px] py-[60px] text-[30px] font-medium text-[#333]">
        No blog posts available.
      </p>
    );
  }
  return (
    <section className="pt-[100px] max-[767px]:pt-[60px]">
      <div className="mx-auto max-w-[1440px] px-[15px]">
        <div className="flex gap-[60px]">
          <div className="hidden w-full max-w-[20%] max-[1200px]:hidden">
            <div>
              <input
                type="text"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="mb-5 w-full max-w-[400px] rounded-lg border border-[#ccc] p-2.5"
              />
            </div>
            <ul className="max-h-[350px] overflow-y-scroll [scrollbar-color:#333_#f0f0f0] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-[#333] [&::-webkit-scrollbar-track]:rounded-[10px] [&::-webkit-scrollbar-track]:bg-[#f0f0f0] [&::-webkit-scrollbar]:w-0.5">
              {blogData.map((item, i) => (
                <li key={i} className="pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-full">
            {filteredBlogs?.length > 0 ? (
              <>
                {filteredBlogs?.slice(0, 1)?.map((item: any, i: number) => (
                  <div key={i} className="flex gap-[60px] max-[991px]:gap-5 max-[767px]:flex-col">
                    <Link href={`/blog/${slugify(item.Title)}`}>
                      <Image
                        src={
                          item?.HeaderImage
                            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.split('/api')[0]}${item?.HeaderImage?.url}`
                            : '/whyDml.png'
                        }
                        alt={item.Title}
                        width={2000}
                        height={740}
                        className="h-[390px] w-[2000px] max-w-full rounded-xl max-[767px]:h-auto max-[767px]:w-full"
                      />
                    </Link>
                    <div>
                      <p>{formatDate(item?.PublishDate)}</p>
                      <Link href={`/blog/${slugify(item?.Title)}`}>
                        <h5 className="text-[30px] text-[#333] max-[640px]:text-xl">{item?.Title}</h5>
                      </Link>
                      <p className="max-[640px]:hidden">{item?.Description}</p>
                      <Link href={`/blog/${slugify(item?.Title)}`}>
                        <button type="button" className={`${btnBlack} my-5`}>
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-3 gap-[30px] py-[60px] max-[991px]:grid-cols-2 max-[640px]:grid-cols-1">
                  {filteredBlogs?.slice(1)?.map((item: any, index: number) => (
                    <Link key={index} href={`/blog/${slugify(item.Title)}`}>
                      <div>
                        <Image
                          src={
                            item?.HeaderImage
                              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.split('/api')[0]}${item?.HeaderImage?.url}`
                              : '/whyDml.png'
                          }
                          alt={item?.Title}
                          width={400}
                          height={304}
                          className="h-60 w-[400px] max-w-full rounded-xl max-[640px]:h-auto max-[640px]:w-full max-[767px]:w-full"
                        />
                        <div>
                          <p className="py-5">{formatDate(item?.PublishDate)}</p>
                          <h5 className="text-xl text-[#333]">{item?.Title}</h5>
                          <button type="button" className={`${btnBlack} my-5`}>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p>No blogs found for {searchQuery}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
