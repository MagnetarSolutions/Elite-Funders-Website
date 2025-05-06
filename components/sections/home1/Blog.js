import { blogs } from "@/public/json/blog";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/* Blog One Start */}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">OUR LATEST BLOGS</p>
            </div>
            <h2 className="section-title__title">Read Our Latest Blog Post</h2>
          </div>
          <div className="row">
            {blogs
              .sort(() => 0.5 - Math.random()) // Shuffle the array
              .slice(0, 3) // Take the first 5 elements
              .map((blog, index) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInLeft"
                  data-wow-delay="100ms"
                  key={index}
                >
                  <Link href={`/blog/${blog?.slug}`}>
                    <div className="blog-one__single">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img
                            src={blog?.image}
                            alt=""
                            className=""
                            style={{
                              minHeight: "200px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__tag">
                          {blog?.tags?.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div>
                        <h3 className="blog-one__title">
                          <Link href={`/blog/${blog?.slug}`}>
                            {blog?.title?.slice(0, 35)} ...
                          </Link>
                        </h3>
                        <div className="blog-one__client-info">
                          <div className="blog-one__client-img">
                            <img
                              src={blog?.author?.profile}
                              alt=""
                              style={{ width: "40px" }}
                            />
                          </div>
                          <div className="blog-one__client-content">
                            <h3>{blog?.author?.name}</h3>
                            <p>{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Blog One End */}
    </>
  );
}
