import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Portfolio Details">
        {/* Portfolio Details Start */}
        <section className="portfolio-details">
          <div className="container">
            <div className="portfolio-details__inner">
              <div className="portfolio-details__img-box">
                <div className="portfolio-details__img">
                  <img
                    src="assets/images/project/portfolio-details-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="portfolio-details__catagory">
                  <ul className="portfolio-details__catagory-list list-unstyled">
                    <li>
                      <span>published:</span>
                      <h4>April 20, 2023</h4>
                    </li>
                    <li>
                      <span>CATAGORY:</span>
                      <h4>Funding, Insur</h4>
                    </li>
                    <li>
                      <span>client:</span>
                      <h4>thememx</h4>
                    </li>
                  </ul>
                  <ul className="portfolio-details__social list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="icon-facebook-app-symbol"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon-instagram-1"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon-linkedin"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="portfolio-details__title-1">
                Invest Your Money for Better Future
              </h3>
              <p className="portfolio-details__text-1">
                With worldwide annual spend on digital advertising surpassing
                $325 billion, it’s no surprise that different approaches to
                online marketing are becoming available. One of these new
                approache marketing or digital performance marketing. Keep
                reading to learn all about performance marketing, from how it
                works to how it compares to digital marketing. Plus, get insight
                into the benefits and risks of performance marketing and how it
                can affect your company’s long-term success and profitability.
                Performance marketing is an approach to digital marketing or
                advertising where businesses only pay when a specific result
                occurs. This result could be a new lead, sale, or other outcome
                agreed upon by the advertiser and business. Performance
                marketing involves channels such as affiliate marketing, online
              </p>
              <p className="portfolio-details__text-2">
                The main thing that separates performance marketing from other
                types of marketing is the way businesses pay for their
                campaigns. Rather than paying up front or by month, advertisers
                pay when a specific action takes place. You might enlist a
                marketing company’s help to bring your branding to more
                individuals by having these marketers promote your business to
                prospective customers. The hope is that users will complete a
                form to learn more about your company
              </p>
              <div className="portfolio-details__tag-and-share">
                <div className="portfolio-details__tag">
                  <Link href="#">Development</Link>
                  <Link href="#">Digital</Link>
                  <Link href="#">Tech</Link>
                </div>
                <div className="portfolio-details__share">
                  <Link href="#">
                    <span className="icon-share"></span>
                  </Link>
                </div>
              </div>
              <div className="portfolio-details__pagination-box">
                <div className="portfolio-details__pagination-single">
                  <div className="portfolio-details__arrow">
                    <Link href="#">
                      <span className="icon-prev1"></span>
                    </Link>
                  </div>
                  <div className="portfolio-details__next-content">
                    <p className="portfolio-details__pagination-sub-title">
                      Previous
                    </p>
                    <Link href="#" aria-label="Previous">
                      <span className="portfolio-details__pagination-title">
                        Funding Analytics
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="portfolio-details__pagination-single portfolio-details__pagination-single-two">
                  <div className="portfolio-details__previous-content">
                    <p className="portfolio-details__pagination-sub-title">
                      Next
                    </p>
                    <Link href="#" aria-label="Next">
                      <span className="portfolio-details__pagination-title">
                        Analytics of Security
                      </span>
                    </Link>
                  </div>
                  <div className="portfolio-details__arrow">
                    <Link href="#">
                      <span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Details End */}

        {/* Related Work Start */}
        <section className="related-work">
          <div className="container">
            <h3 className="related-work__title">Related Work</h3>
            <div className="row">
              {/* Portfolio Three Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="portfolio-three__single">
                  <div className="portfolio-three__img-box">
                    <div className="portfolio-three__img">
                      <img
                        src="assets/images/project/portfolio-page-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-three__content">
                      <p className="portfolio-three__sub-title">Funding</p>
                      <h3 className="portfolio-three__title">
                        <Link href="portfolio-details">Digital Funding</Link>
                      </h3>
                    </div>
                    <div className="portfolio-three__arrow">
                      <Link
                        href="assets/images/project/portfolio-page-1-1.jpg"
                        className="img-popup">
                        <span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio Three Single End */}
              {/* Portfolio Three Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="portfolio-three__single">
                  <div className="portfolio-three__img-box">
                    <div className="portfolio-three__img">
                      <img
                        src="assets/images/project/portfolio-page-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-three__content">
                      <p className="portfolio-three__sub-title">Funding</p>
                      <h3 className="portfolio-three__title">
                        <Link href="portfolio-details">Digital Funding</Link>
                      </h3>
                    </div>
                    <div className="portfolio-three__arrow">
                      <Link
                        href="assets/images/project/portfolio-page-1-2.jpg"
                        className="img-popup">
                        <span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio Three Single End */}
              {/* Portfolio Three Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="portfolio-three__single">
                  <div className="portfolio-three__img-box">
                    <div className="portfolio-three__img">
                      <img
                        src="assets/images/project/portfolio-page-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-three__content">
                      <p className="portfolio-three__sub-title">Funding</p>
                      <h3 className="portfolio-three__title">
                        <Link href="portfolio-details">Digital Funding</Link>
                      </h3>
                    </div>
                    <div className="portfolio-three__arrow">
                      <Link
                        href="assets/images/project/portfolio-page-1-3.jpg"
                        className="img-popup">
                        <span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio Three Single End */}
            </div>
          </div>
        </section>
        {/* Related Work End */}
      </Layout>
    </>
  );
}
