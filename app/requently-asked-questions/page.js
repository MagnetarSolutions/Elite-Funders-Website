"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ">
        <div>
          {/* FAQ Page Start */}
          <section className="faq-page">
            <div className="container">
              <div className="faq-page__text-box">
                <div className="faq-page__text-box-shape-1">
                  <img
                    src="assets/images/shapes/faq-page-text-box-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      Our question and answer
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Frequently Asked Questions
                    <br /> & Answers Here
                  </h2>
                </div>
              </div>
              <div className="faq-page__bottom">
                <div className="row">
                  <div className="col-xl-5 col-lg-5">
                    <div className="faq-page__bottom-left">
                      <div className="faq-page__search">
                        <form action="#" className="faq-page__search-form">
                          <input type="search" placeholder="Search...." />
                          <button type="submit">
                            <i className="icon-search-1"></i>
                          </button>
                        </form>
                      </div>
                      {/* <div className="faq-page__bottom-left-img-box">
                        <div className="faq-page__bottom-left-img">
                          <img
                            src="assets/images/resources/faq-page-bottom-left-img-1.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="faq-page__bottom-left-img-text">
                          Elite Funding
                          <br /> Group
                        </h3>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="faq-page__bottom-right">
                      <div
                        className="accrodion-grp faq-one-accrodion"
                        data-grp-name="faq-one-accrodion-1">
                        <div
                          className={
                            isActive.key == 1 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(1)}>
                          <div className="accrodion-title">
                            <h4>How does business funding with EFG work?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                With no fixed payments, it’s pay as you go! We collect a predetermined percentage of your sales, so as your sales fluctuate, your payments adjust accordingly. Reconcile payments based on sales daily, weekly, or monthly for ultimate flexibility.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 2 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(2)}>
                          <div className="accrodion-title">
                            <h4>Is business funding secure?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Rest assured, your information is secure with us. Learn more in our Privacy Policy.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 3 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(3)}>
                          <div className="accrodion-title">
                            <h4>What documents are required for funding?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                All you need are a few documents showcasing your business performance and the last 4 months of business bank statements. Ready to get started? <Link href="/apply">Apply here</Link>.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 4 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(4)}>
                          <div className="accrodion-title">
                            <h4>How does credit impact my application?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                At Elite Funding Group, we don’t let credit dictate your entire story. We take a holistic approach to understand your credit history and your business’s overall performance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 5 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(5)}>
                          <div className="accrodion-title">
                            <h4>How soon will I have access to funds?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Access funds within 24 hours, sometimes even sooner, once you’ve completed the funding process.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 6 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(6)}>
                          <div className="accrodion-title">
                            <h4>How are repayments made?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Repayments are made via ACH from your Business Bank Account or through Credit Cards, delivering the specified percentage of receivables on a daily basis.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 7 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(7)}>
                          <div className="accrodion-title">
                            <h4>What can the funds be used for?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                Use the funds for various business purposes, putting you in control of your business’s growth and success—whether it’s payroll, remodeling, inventory, capital expansion, marketing, or equipment.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            isActive.key == 8 ? "accrodion active" : "accrodion"
                          }
                          onClick={() => handleToggle(8)}>
                          <div className="accrodion-title">
                            <h4>Why choose EFG over traditional banks?</h4>
                          </div>
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>
                                We offer a quick and flexible product without interest or late fees. While not the cheapest option, our process is simple—we provide cash today, and you repay as you generate revenue.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ Page End */}

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
                  <p>
                    Only a Few Minutes Away From a Better Future - Apply Now
                  </p>
                </div>
                <div className="cta-one__btn-box">
                  <Link href="/apply" className="cta-one__btn thm-btn">
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* CTA One End  */}
        </div>
      </Layout>
    </>
  );
}