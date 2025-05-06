"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PartnerWithUs() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Partner With Us">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">PARTNER WITH US</p>
                    </div>
                    <h2 className="section-title__title">
                      Join Hands with Elite Funders
                      <br /> for Mutual Growth
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Partner with Elite Funders to expand your business network and drive mutual success. Collaborate with us to offer tailored financing solutions to entrepreneurs and small businesses, leveraging our expertise and extensive lender network.
                  </p>

                  {/* Heyflow Iframe Section */}
                  <div className="about-three__iframe" style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <iframe
                      src="https://mini-serve.prd.heyflow.com/PBJMUnngd0Ioyd4RrdIP#start"
                      width="100%"
                      height="900"
                      frameBorder="0"
                      allowFullScreen
                      title="Partner With Us Form"
                      style={{ borderRadius: '8px' }}
                    ></iframe>
                  </div>

                  {/* Detailed Content Section */}
                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">Why Partner with Elite Funders?</h3>
                    <ul className="about-three__list">
                      <li>Expand Your Reach: Connect with a broader network of businesses seeking innovative financing solutions.</li>
                      <li>Leverage Our Expertise: Benefit from our deep knowledge of business financing and industry trends.</li>
                      <li>Streamlined Collaboration: Our partnership process is designed to be efficient, transparent, and mutually beneficial.</li>
                      <li>Revenue Opportunities: Earn commissions or referral fees by introducing businesses to our funding options.</li>
                    </ul>

                    <h3 className="about-three__sub-title">How It Works</h3>
                    <p className="about-three__text">
                      Partnering with Elite Funders is simple and rewarding. Use the form above to get started, or reach out to our team for a personalized consultation. We’ll work closely with you to integrate our financing solutions into your offerings, ensuring seamless collaboration and shared success.
                    </p>

                    <h3 className="about-three__sub-title">Benefits for Partners</h3>
                    <p className="about-three__text">
                      By partnering with Elite Funders, you gain access to:
                    </p>
                    <ul className="about-three__list">
                      <li>Competitive referral programs with attractive commission structures.</li>
                      <li>Marketing support to promote our partnership and attract potential clients.</li>
                      <li>Ongoing training and resources to enhance your understanding of our financing options.</li>
                      <li>Dedicated support from our partnership specialists to ensure your success.</li>
                    </ul>

                    <h3 className="about-three__sub-title">Get in Touch</h3>
                    <p className="about-three__text">
                      Ready to explore a partnership with Elite Funders? Contact our team to discuss how we can work together to drive growth for your business and ours.
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Contact Us</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> (888) 343-1156<br />
                        <strong>📧</strong> Partnerships@EliteFunders.com<br />
                        <strong>🕒</strong> 9 am – 6 pm (Monday – Friday)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}