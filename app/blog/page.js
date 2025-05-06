import Layout from "@/components/layout/Layout";
import { blogs } from "@/public/json/blog";
import Link from "next/link";

const Home = async () => {
  // const res = await fetch("/api/blog");
  const data = blogs;
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
        {/* Blog Page Start */}
        <section className="blog-page">
          <div className="container">
            <div className="row">
              {data?.map((blog) => (
                <div className="col-xl-4 col-lg-4" key={blog?.title}>
                  <Link href={`/blog/${blog?.slug}`}>
                    <div className="blog-one__single">
                      <div className="blog-one__img-box">
                        <div className="blog-one__img">
                          <img
                            src={
                              blog?.image
                                ? blog?.image
                                : "assets/images/blog/blog-1-1.jpg"
                            }
                            alt=""
                            className=""
                            style={{
                              width: "100%",
                              height: "100%",
                              minHeight: "200px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__tag">
                          {blog?.tags?.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <h3 className="blog-one__title">
                          <Link href={`/blog/${blog?.slug}`}>
                            {blog?.title?.slice(0, 30)}...
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
                            <p>{blog?.date}</p>
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
        {/* Blog Page End */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get <span>Peace of Mind</span> Right Now
                </h3>
                <p>Only a Few Minutes Away From a Better Future - Apply Now</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="contact" className="cta-one__btn thm-btn">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA One End  */}
      </Layout>
    </>
  );
};

export default Home;
