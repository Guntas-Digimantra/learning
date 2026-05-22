
"use client";
import Image from "next/image";
import Link from "@/components/ui/link";
import { useState } from "react";
import "../../../public/css/blog.css";
import { slugify } from "../common/common";

type BlogProps = {
  posts: any[];
};

const Blog = ({ posts }: BlogProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogData = [
    "All",
    "General",
    "Artificial Intelligence",
    "Agile",
    "Automative Industry",
    "Cyber Security",
    "Design",
    "Digital Marketing",
    "eCommerce",
  ];

  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b?.PublishDate).getTime() - new Date(a?.PublishDate).getTime()
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const filteredBlogs = sortedPosts.filter(
    (item: any) =>
      item?.Title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      item?.Description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  if (!posts || posts?.length === 0) {
    return <p className="no-posts">No blog posts available.</p>;
  }
  return (
    <section className="blog-section">
      <div className="dml-container">
        <div className="blog-container">
          <div className="blog-left-wrapper">
            <div className="blog-search">
              <input
                type="text"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="blog-search-input"
              />
            </div>
            <ul>
              {blogData.map((item, i) => (
                <li key={i} className="blog-list">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="blog-right-wrapper">
            {filteredBlogs?.length > 0 ? (
              <>
                {filteredBlogs?.slice(0, 1)?.map((item: any, i: number) => (
                  <div key={i} className="blog-right-first-section">
                    <Link href={`/blog/${slugify(item.Title)}`}>
                      <Image
                        src={
                          item?.HeaderImage
                            ? `${
                                process.env.NEXT_PUBLIC_STRAPI_API_URL?.split(
                                  "/api"
                                )[0]
                              }${item?.HeaderImage?.url}`
                            : "/whyDml.png"
                        }
                        alt={item.Title}
                        width={2000}
                        height={740}
                        className="blog-right-first-image"
                      />
                    </Link>
                    <div>
                      <p>{formatDate(item?.PublishDate)}</p>
                      <Link href={`/blog/${slugify(item?.Title)}`}>
                        <h5 className="blog-title">{item?.Title}</h5>
                      </Link>
                      <p className="latest-blog-desc">{item?.Description}</p>
                      <Link href={`/blog/${slugify(item?.Title)}`}>
                        <button className="dml-black-button">Learn more</button>
                      </Link>
                    </div>
                  </div>
                ))}

                <div className="blog-right-second-section">
                  {filteredBlogs?.slice(1)?.map((item: any, index: number) => (
                    <Link key={index} href={`/blog/${slugify(item.Title)}`}>
                      <div>
                        <Image
                          src={
                            item?.HeaderImage
                              ? `${
                                  process.env.NEXT_PUBLIC_STRAPI_API_URL?.split(
                                    "/api"
                                  )[0]
                                }${item?.HeaderImage?.url}`
                              : "/whyDml.png"
                          }
                          alt={item?.Title}
                          width={400}
                          height={304}
                          className="blog-right-below-images"
                        />
                        <div className="blog-right-second-content">
                          <p className="blog-date">
                            {formatDate(item?.PublishDate)}
                          </p>
                          <h5>{item?.Title}</h5>
                          <button className="dml-black-button">
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
