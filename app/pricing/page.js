"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Affordable Pricing">
        {/* Pricing One Start  */}
        <section className="pricing-one">
          <div className="pricing-one__shape-2 float-bob">
            <img src="assets/images/shapes/pricing-one-shape-2.png" alt="" />
          </div>
          <div className="pricing-one__shape-3 float-bob-y">
            <img src="assets/images/shapes/pricing-one-shape-3.png" alt="" />
          </div>
          <div className="pricing-one__shape-4">
            <img src="assets/images/shapes/pricing-one-shape-4.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">SONCHOY PRICING PLANS</p>
              </div>
              <h2 className="section-title__title">
                Choose the Best Plans
                <br /> for Yourself
              </h2>
            </div>
            <div className="row">
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__single-inner">
                    <div className="pricing-one__shape-1">
                      <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="pricing-one__icon">
                      <img
                        src="assets/images/icon/pricing-one-icon-1.png"
                        alt=""
                      />
                    </div>
                    <p className="pricing-one__price">$150.99</p>
                    <ul className="pricing-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Online Payments</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Projects Time Sheet</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Invoices and Estimates</p>
                      </li>
                    </ul>
                    <div className="pricing-one__title-box">
                      <h3>Regular Plan</h3>
                      <p>Up to 10 user + 2.99 per user</p>
                    </div>
                    <div className="pricing-one__btn-box">
                      <Link href="pricing" className="pricing-one__btn thm-btn">
                        SELECT POLICY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__single-inner">
                    <div className="pricing-one__shape-1">
                      <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="pricing-one__icon">
                      <img
                        src="assets/images/icon/pricing-one-icon-2.png"
                        alt=""
                      />
                    </div>
                    <p className="pricing-one__price">$250.99</p>
                    <ul className="pricing-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Online Payments</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Projects Time Sheet</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Invoices and Estimates</p>
                      </li>
                    </ul>
                    <div className="pricing-one__title-box">
                      <h3>Diamond Pack</h3>
                      <p>Up to 10 user + 2.99 per user</p>
                    </div>
                    <div className="pricing-one__btn-box">
                      <Link href="pricing" className="pricing-one__btn thm-btn">
                        SELECT POLICY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__single-inner">
                    <div className="pricing-one__shape-1">
                      <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="pricing-one__icon">
                      <img
                        src="assets/images/icon/pricing-one-icon-3.png"
                        alt=""
                      />
                    </div>
                    <p className="pricing-one__price">$350.99</p>
                    <ul className="pricing-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Online Payments</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Projects Time Sheet</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Recurring Transations</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Invoices and Estimates</p>
                      </li>
                    </ul>
                    <div className="pricing-one__title-box">
                      <h3>Golden Plan</h3>
                      <p>Up to 10 user + 2.99 per user</p>
                    </div>
                    <div className="pricing-one__btn-box">
                      <Link href="pricing" className="pricing-one__btn thm-btn">
                        SELECT POLICY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
            </div>
          </div>
        </section>
        {/* Pricing One End  */}

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
                  Get an Instant <span>Quote</span> Right Now
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
