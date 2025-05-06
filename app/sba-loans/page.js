"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function SBALoans() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SBA Loan Solutions">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">SBA LOAN SOLUTIONS</p>
                    </div>
                    <h2 className="section-title__title">
                      Government-Backed Financing
                      <br /> for Business Growth
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Elite Funders SBA Loan Solutions offer flexible, government-backed financing to help your business achieve growth goals with competitive rates.
                  </p>

                  {/* Centered Apply Now Button */}
                  <div className="about-three__btn-and-client" style={{ textAlign: 'center', margin: '30px 0' }}>
                    <div className="about-three__btn-box">
                      <Link href="/apply" className="about-three__btn thm-btn">
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  {/* Detailed Content Section */}
                  <div className="about-three__content">
                    <h3 className="about-three__sub-title">Elite Funders: Your Partner for SBA Loans</h3>
                    <p className="about-three__text">
                      Growing a small business takes vision, planning, and the right financial resources. Elite Funders SBA Loan Solutions offer flexible, government-backed financing tailored to help businesses like yours achieve growth goals with competitive rates and extended repayment terms. Whether you need working capital, funds for equipment, or support for real estate acquisition, our SBA Loan Solutions can provide the financial boost to take your business to the next level.
                    </p>

                    <h3 className="about-three__sub-title">Why Choose Elite Funders for SBA Loan Solutions?</h3>
                    <p className="about-three__text">
                      SBA Loans, guaranteed by the U.S. Small Business Administration, give your business access to affordable financing with the backing of a federal agency, making funding more accessible. Through our SBA Loan Solutions, Elite Funders matches your business with flexible financing tailored to meet your specific growth needs.
                    </p>
                    <p className="about-three__text">
                      Our team of specialists simplifies the SBA application process, helping you secure funds faster and with confidence. From low rates to long repayment terms, Elite Funders SBA Loan Solutions are designed with your business’s success in mind.
                    </p>

                    <h3 className="about-three__sub-title">Benefits of SBA Loan Solutions with Elite Funders</h3>
                    <ul className="about-three__list">
                      <li>
                        <strong>Competitive Rates and Extended Terms</strong>
                        <ul>
                          <li>Low Interest Rates: Elite Funders SBA Loan Solutions offer some of the best rates in the market, reducing the cost of borrowing.</li>
                          <li>Flexible Repayment: Terms extending up to 25 years help keep monthly payments manageable, freeing up cash flow for growth.</li>
                          <li>Options for Fixed or Variable Rates: Depending on your business’s needs, you can choose a fixed rate for stability or a variable rate for potentially lower payments.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Large Loan Amounts for Business Growth</strong>
                        <ul>
                          <li>Substantial Borrowing Power: Elite Funders SBA Loan Solutions offer amounts up to $5 million or more, perfect for businesses with big expansion plans.</li>
                          <li>Versatile Funding Use: SBA Loans can be used for working capital, business acquisition, real estate, or equipment, making them a flexible choice for almost any business goal.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Strengthen Your Business’s Financial Profile</strong>
                        <ul>
                          <li>Federal-Backed Security: The SBA’s guarantee helps you secure better rates and terms, even with moderate credit.</li>
                          <li>Boost Business Credit: Successfully securing and repaying an SBA Loan can strengthen your business credit and position you for future financing.</li>
                        </ul>
                      </li>
                    </ul>

                    <h3 className="about-three__sub-title">How Elite Funders SBA Loan Solutions Work</h3>
                    <p className="about-three__text">
                      With Elite Funders, navigating the SBA Loan process is simpler. Our team handles everything from pre-qualification to documentation, reducing the usual complexities of the application process.
                    </p>
                    <ul className="about-three__list">
                      <li>Consultation and Eligibility Review: Our team reviews your financial profile and loan needs to determine the SBA programs best suited for your business.</li>
                      <li>Streamlined Application Process: SBA Loans require detailed financial documents and tax returns, which our experts guide you through. Elite Funders prepares your application to ensure it meets SBA requirements and maximizes approval chances.</li>
                      <li>Lender Matching and Submission: Leveraging our extensive network, Elite Funders matches you with SBA lenders who understand your industry and financing needs, ensuring the best possible fit.</li>
                      <li>Quick Approval and Funding: Once approved, funds are disbursed directly to your business, and our team remains available to support you throughout the repayment process.</li>
                    </ul>

                    <h3 className="about-three__sub-title">Types of SBA Loan Solutions We Offer</h3>
                    <p className="about-three__text">
                      Elite Funders provides access to a full range of SBA loan options to meet diverse business needs:
                    </p>
                    <ul className="about-three__list">
                      <li>SBA 7(a) Loans: Ideal for working capital, acquisition, real estate, or equipment purchases, offering maximum flexibility.</li>
                      <li>SBA 504 Loans: Perfect for large asset purchases like real estate or equipment, with long repayment terms and fixed rates.</li>
                      <li>SBA Express Loans: Get faster approval on smaller loan amounts, ideal for working capital and short-term needs.</li>
                    </ul>
                    <p className="about-three__text">
                      Our team will work closely with you to determine which SBA Loan Solution aligns best with your business goals and financial profile.
                    </p>

                    <h3 className="about-three__sub-title">Is an SBA Loan Solution Right for Your Business?</h3>
                    <p className="about-three__text">
                      SBA Loan Solutions are especially suited for businesses looking to:
                    </p>
                    <ul className="about-three__list">
                        <li>Fund Expansion Plans: Perfect for opening new locations, purchasing inventory, or hiring talent.</li>
                        <li>Acquire Real Estate or Equipment: Use affordable, long-term financing to invest in assets that drive growth.</li>
                        <li>Establish a Strong Credit Profile: Building a positive credit history with an SBA Loan can open doors to future financing.</li>
                    </ul>

                    <h3 className="about-three__sub-title">Ready to Grow with Elite Funders SBA Loan Solutions?</h3>
                    <p className="about-three__text">
                      At Elite Funders, we’re committed to simplifying the SBA Loan process so that you can focus on what you do best: running your business. Our dedicated team of SBA loan specialists is here to support you at every stage, from your first inquiry through funding and beyond. Let us help you secure the financing that empowers your business’s next chapter.
                    </p>

                    <h3 className="about-three__sub-title">Talk to an SBA Loan Specialist</h3>
                    <p className="about-three__text">
                      Let us help you find the best SBA Loan for your business. Our specialists are ready to guide you through options and answer your questions.
                    </p>

                    <div className="about-three__contact">
                      <h3 className="about-three__sub-title">Contact Us</h3>
                      <p className="about-three__text">
                        <strong>📞</strong> (888) 343-1156<br />
                        <strong>📧</strong> SBALoans@EliteFunders.com<br />
                        <strong>🕒</strong> Hours: 9 am – 6 pm, Monday – Friday
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