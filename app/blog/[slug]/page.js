import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { blogs } from "@/public/json/blog";

// single project get by slug
async function getBlog(slug) {
  const blog = blogs;
  const singleBlog = blog.find((blog) => blog.slug === slug);
  return singleBlog;
}

export async function generateStaticParams() {
  const blog = blogs;

  const slugs = blog.map((blog) => blog.slug);
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);
  if (blog) {
    return { title: blog.title };
  } else {
    return { title: "Unknown Author" };
  }
}

const SingleBlog = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlog(slug);

  // const tags = [];
  // const categories = [];

  // blogs?.map((blog) => {
  //   if (blog.tags) {
  //     blog.tags.map((tag) => {
  //       if (!tags.includes(tag)) {
  //         tags.push(tag);
  //       }
  //     });
  //   }
  // });

  // blogs?.map((blog) => {
  //   if (blog.categories) {
  //     blog.categories.map((tag) => {
  //       if (!categories.includes(tag)) {
  //         categories.push(tag);
  //       }
  //     });
  //   }
  // });

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
        {/* Blog Details Start */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img-1">
                    <img src={blog?.image || ""} alt="" />
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">{blog?.title}</h3>
                    <ul className="list-unstyled blog-details__meta">
                      <li>
                        <Link href={`/blog/${blog?.slug}`}>
                          <i className="fas fa-user-circle"></i>{" "}
                          {blog?.author?.name}
                        </Link>
                      </li>
                      <li>
                        <Link href={`/blog/${blog?.slug}`}>
                          <i className="fas fa-comments"></i>{" "}
                          {blog?.comments?.count} Comments
                        </Link>
                      </li>
                    </ul>

                    <>
                      {blog?.description?.map((content, index) => (
                        <p className="blog-details__text-1 mt-1" key={index}>
                          {content}
                        </p>
                      ))}
                    </>
                  </div>

                  <div className="blog-details__quote-box">
                    <div className="blog-details__quote-icon">
                      <span className="icon-quote-1"></span>
                    </div>
                    <p className="blog-details__quote-text">
                      {blog?.info?.text}
                    </p>
                    <span className="blog-details__quote-sub-title">
                      {blog?.info?.author}
                    </span>
                  </div>
                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <span>Posted in:</span>
                      {blog?.tags?.map((tag, index) => (
                        <Link href="#" key={index}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <div className="blog-details__share">
                      <Link href="#">
                        <span className="icon-share"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="comment-one">
                    <h3 className="comment-one__title">
                      {blog?.comments?.count} Comment
                    </h3>
                    {blog?.comments?.users.map((comment, index) => (
                      <div className="comment-one__single mt-4" key={index}>
                        <div className="comment-one__image">
                          <img src="/assets/user.png" alt="" />
                        </div>
                        <div className="comment-one__content">
                          <p className="comment-one__date">
                            {new Date(comment?.date).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                          <h3>{comment?.username}</h3>
                          <p>{comment?.comment}</p>
                          <Link
                            href={`/blog/${blog?.slug}`}
                            className="comment-one__btn"
                          >
                            <span className="icon-reply"></span>Reply
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__search">
                    <h3 className="sidebar__title">Search</h3>
                    <form action="#" className="sidebar__search-form">
                      <input type="search" placeholder="Keywords here...." />
                      <button type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <ul className="sidebar__post-list list-unstyled">
                      {blogs
                        .sort(() => 0.5 - Math.random()) // Shuffle the array
                        .slice(0, 5) // Take the first 5 elements
                        .map((blog, index) => (
                          <li key={index}>
                            <div className="sidebar__post-image">
                              <img src={blog?.image} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                              <h3>
                                <Link href={`/blog/${blog?.slug}`}>
                                  {blog.title?.slice(0, 40)}
                                </Link>
                                <span className="sidebar__post-content-meta">
                                  <i className="icon-clock"></i>
                                  {blog.date}
                                </span>
                              </h3>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="Funding-details__catagories-list list-unstyled">
                      {categories.map((category, index) => (
                        <li>
                          <Link href="blog-details">
                            {category}
                            <span className="icon-next"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                      {tags.map((tag, index) => (
                        <Link href="#" key={index}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Details End */}
      </Layout>
    </>
  );
};

export default SingleBlog;
