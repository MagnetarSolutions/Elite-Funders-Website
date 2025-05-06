import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
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
                    <img
                      src="assets/images/blog/blog-details-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">
                      Content Without Backward Data.
                    </h3>
                    <ul className="list-unstyled blog-details__meta">
                      <li>
                        <Link href="blog-details">
                          <i className="fas fa-user-circle"></i> Admin
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          <i className="fas fa-comments"></i> 2 Comments
                        </Link>
                      </li>
                    </ul>
                    <p className="blog-details__text-1">
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing, from how it works to how it
                      compares to digital marketing. Plus, get insight into the
                      benefits and risks of performance marketing and how it can
                      affect your company’s long-term success and profitability.
                      Performance marketing is an approach to digital marketing
                      or advertising where businesses only pay when a specific
                      result occurs. This result could be a new lead, sale, or
                      other outcome agreed upon by the advertiser and business.
                      Performance marketing involves channels such as affiliate
                      marketing, online advertising.
                    </p>
                  </div>
                  <div className="blog-details__img-box">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="assets/images/blog/blog-details-img-box-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="blog-details__img-box-img">
                          <img
                            src="assets/images/blog/blog-details-img-box-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="blog-details__title-2">
                    Latest Articles Updated Daily
                  </h3>
                  <p className="blog-details__text-2">
                    With worldwide annual spend on digital advertising
                    surpassing $325 billion, it’s no surprise that different
                    approaches to online marketing are becoming available. One
                    of these new approaches is performance marketing or digital
                    performance marketing. Keep reading to learn all about
                    performance marketing
                  </p>
                  <div className="blog-details__quote-box">
                    <div className="blog-details__quote-icon">
                      <span className="icon-quote-1"></span>
                    </div>
                    <p className="blog-details__quote-text">
                      Diam luctus nostra dapibus varius et semper semper rutrum
                      ad risus
                      <br /> eros. Cursus libero viverra tempus netus diam
                      vestibulum
                    </p>
                    <span className="blog-details__quote-sub-title">
                      David Backhum
                    </span>
                  </div>
                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <span>Posted in:</span>
                      <Link href="#">Development</Link>
                      <Link href="#">Digital</Link>
                      <Link href="#">Tech</Link>
                    </div>
                    <div className="blog-details__share">
                      <Link href="#">
                        <span className="icon-share"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="comment-one">
                    <h3 className="comment-one__title">01 Comment</h3>
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-1.jpg" alt="" />
                      </div>
                      <div className="comment-one__content">
                        <p className="comment-one__date">
                          September 6, 2022 at 1:28 pm{" "}
                        </p>
                        <h3>Saiful Islam</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipi
                          vestibulum lectus egestas cubilia nam sagittis, nulla
                          posuere habitant
                        </p>
                        <Link href="blog-details" className="comment-one__btn">
                          <span className="icon-reply"></span>Reply
                        </Link>
                      </div>
                    </div>
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
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            <Link href="blog-details">
                              Keep Your Business Safe Ensure High
                            </Link>
                            <span className="sidebar__post-content-meta">
                              <i className="icon-clock"></i>April 21, 2023
                            </span>
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            <Link href="blog-details">
                              We’ve Been a Strategy Thought Leader Nearly
                            </Link>
                            <span className="sidebar__post-content-meta">
                              <i className="icon-clock"></i>April 21, 2023
                            </span>
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            <Link href="blog-details">
                              This Week’s Top Stories About It
                            </Link>
                            <span className="sidebar__post-content-meta">
                              <i className="icon-clock"></i>April 21, 2023
                            </span>
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="Funding-details__catagories-list list-unstyled">
                      <li>
                        <Link href="blog-details">
                          Helalth Funding<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          Get Funding<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          Life Funding <span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          Car Funding<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          Fire Funding<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          Get Funding<span className="icon-next"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                      <Link href="#">IT Technology</Link>
                      <Link href="#">Software</Link>
                      <Link href="#">Design</Link>
                      <Link href="#">Service</Link>
                      <Link href="#">Development</Link>
                      <Link href="#">Digital</Link>
                      <Link href="#">Cyber</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Details End */}
      </Layout>
    </>
  );
}
