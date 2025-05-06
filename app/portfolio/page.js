import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Portfolio Classic">
        {/* Portfolio Page Start */}
        <section className="portfolio-page">
          <div className="container">
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
              {/* Portfolio Three Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="portfolio-three__single">
                  <div className="portfolio-three__img-box">
                    <div className="portfolio-three__img">
                      <img
                        src="assets/images/project/portfolio-page-1-4.jpg"
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
                        href="assets/images/project/portfolio-page-1-4.jpg"
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
                        src="assets/images/project/portfolio-page-1-5.jpg"
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
                        href="assets/images/project/portfolio-page-1-5.jpg"
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
                        src="assets/images/project/portfolio-page-1-6.jpg"
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
                        href="assets/images/project/portfolio-page-1-6.jpg"
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
        {/* Portfolio Page End */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}></div>
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
}
