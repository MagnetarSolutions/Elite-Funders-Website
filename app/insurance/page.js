import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Funding">
        {/* Insurence Page Start */}
        <section className="insurence-page">
          <div className="container">
            <div className="row">
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="life-Funding">Life Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-family-Funding"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="life-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="health-Funding">Get Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-healthcare"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="health-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="business-Funding">Get Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-risk-management"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="business-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="car-Funding">Car Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-car-1"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="car-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="home-Funding">Get Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-home-security"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="home-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="services-one__single">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="family-Funding">Family Funding</Link>
                    </h3>
                  </div>
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/insurence-1-6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-family-Funding"></span>
                    </div>
                  </div>
                  <div className="services-one__read-more">
                    <Link href="family-Funding">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
            </div>
          </div>
        </section>
        {/* Insurence Page End */}

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
