"use client";
import { useState } from "react";

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
      {/* FAQ One Start  */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="faq-one__shape-1 float-bob-x">
                  <img
                    src="assets/images/shapes/open-account-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="faq-one__img-box">
                  <div className="faq-one__img">
                    <img
                      src="assets/images/resources/faq-one-img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="faq-one__quick-box">
                    <div className="faq-one__quick-icon">
                      <span className="icon-check"></span>
                    </div>
                    <h4 className="faq-one__quick-text">
                      Quick, Easy and
                      <br /> Hassle Free
                    </h4>
                  </div>
                  <div className="faq-one__policy">
                    <div className="faq-one__policy-icon">
                      <span className="icon-check"></span>
                    </div>
                    <h4 className="faq-one__policy-text">
                      Funding Within
                      <br /> 24 Hours
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      PEOPLE ASK QUESTION
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Offering Great
                    <br /> Funding Solutions
                  </h2>
                </div>
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1">
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}>
                    <div className="accrodion-title">
                      <h4>How does Get Funding with EFG work?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          With no fixed payments, it’s pay as you go! We collect
                          a predetermined percentage of your sales, so as your
                          sales fluctuate, your payments adjust accordingly.
                          Reconcile payments based on sales daily, weekly, or
                          monthly for ultimate flexibility.
                        </p>
                      </div>
                      {/*  /.inner  */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}>
                    <div className="accrodion-title">
                      <h4>Is Get Funding secure?</h4>
                    </div>
                    <div
                      className="accrodion-content"
                      onClick={() => handleToggle(2)}>
                      <div className="inner">
                        <p>
                          Rest assured, your information is secure with us.
                          Learn more in our Privacy Policy.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          All you need are a few documents showcasing your
                          business performance and the last 4 months of business
                          bank statements. Ready to get started? Apply here.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          At Elite Funding Group, we don’t let credit dictate
                          your entire story. We take a holistic approach to
                          understand your credit history and your business’s
                          overall performance.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          Access funds within 24 hours, sometimes even sooner,
                          once you’ve completed the funding process.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          Repayments are made via ACH from your Business Bank
                          Account or through Credit Cards, delivering the
                          specified percentage of receivables on a daily basis.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          Use the funds for various business purposes, putting
                          you in control of your business’s growth and success –
                          whether it’s payroll, remodeling, inventory, capital
                          expansion, marketing, or equipment.
                        </p>
                      </div>
                      {/*  /.inner  */}
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
                          We offer a quick and flexible product without interest
                          or late fees. While not the cheapest option, our
                          process is simple – we provide cash today, and you
                          repay as you generate revenue.
                        </p>
                      </div>
                      {/*  /.inner  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ One End  */}
    </>
  );
}
