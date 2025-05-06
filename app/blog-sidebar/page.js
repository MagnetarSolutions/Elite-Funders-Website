import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Blog With Sidebar">
        {/* Blog Sidebar Start */}
        <section className="blog-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-sidebar__left">
                  {/* Blog Sidebar Single Start */}
                  <div className="blog-sidebar__single">
                    <div className="blog-sidebar__img-box">
                      <div className="blog-sidebar__img">
                        <img
                          src="assets/images/blog/blog-sidebar-1-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-sidebar__content">
                      <div className="blog-sidebar__meta">
                        <p>
                          <span className="icon-calendar"></span>April 21, 2023
                        </p>
                        <p>
                          <span className="icon-user"></span>Saiful Islam
                        </p>
                      </div>
                      <h3 className="blog-sidebar__title">
                        <Link href="blog-details">
                          What We are Capable to Usually Discovered.
                        </Link>
                      </h3>
                      <div className="blog-sidebar__btn-box">
                        <Link
                          href="blog-details"
                          className="blog-sidebar__btn thm-btn">
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar Single End */}
                  {/* Blog Sidebar Single Start */}
                  <div className="blog-sidebar__single">
                    <div className="blog-sidebar__img-box">
                      <div className="blog-sidebar__img">
                        <img
                          src="assets/images/blog/blog-sidebar-1-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-sidebar__content">
                      <div className="blog-sidebar__meta">
                        <p>
                          <span className="icon-calendar"></span>April 21, 2023
                        </p>
                        <p>
                          <span className="icon-user"></span>Saiful Islam
                        </p>
                      </div>
                      <h3 className="blog-sidebar__title">
                        <Link href="blog-details">
                          Strategy for Norway’s Peion to Fund Global.
                        </Link>
                      </h3>
                      <div className="blog-sidebar__btn-box">
                        <Link
                          href="blog-details"
                          className="blog-sidebar__btn thm-btn">
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar Single End */}
                  {/* Blog Sidebar Single Start */}
                  <div className="blog-sidebar__single">
                    <div className="blog-sidebar__img-box">
                      <div className="blog-sidebar__img">
                        <img
                          src="assets/images/blog/blog-sidebar-1-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-sidebar__content">
                      <div className="blog-sidebar__meta">
                        <p>
                          <span className="icon-calendar"></span>April 21, 2023
                        </p>
                        <p>
                          <span className="icon-user"></span>Saiful Islam
                        </p>
                      </div>
                      <h3 className="blog-sidebar__title">
                        <Link href="blog-details">
                          Aliquam hendrerit a augue insuscipit.
                        </Link>
                      </h3>
                      <div className="blog-sidebar__btn-box">
                        <Link
                          href="blog-details"
                          className="blog-sidebar__btn thm-btn">
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar Single End */}
                  <div className="blog-sidebar__pagination">
                    <ul className="pg-pagination list-unstyled">
                      <li className="count">
                        <Link href="#">1</Link>
                      </li>
                      <li className="count">
                        <Link href="#">2</Link>
                      </li>
                      <li className="count">
                        <Link href="#">3</Link>
                      </li>
                      <li className="next">
                        <Link href="#" aria-label="Next">
                          <i className="icon-next"></i>
                        </Link>
                      </li>
                    </ul>
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
        {/* Blog Sidebar End */}
      </Layout>
    </>
  );
}
