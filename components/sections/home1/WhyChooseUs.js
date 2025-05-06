export default function WhyChooseUs() {
  return (
    <>
      {/* Why Choose One Start  */}
      <section className="why-choose-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-one__left">
                <div className="why-choose-one__img-box">
                  <div className="why-choose-one__img">
                    <img
                      src="assets/images/resources/why-choose-one-img-1.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="why-choose-one__img-2">
                    <img
                      src="assets/images/resources/why-choose-one-img-2.jpeg"
                      alt=""
                    />
                    <div className="why-choose-one__experience-box">
                      <div className="why-choose-one__count count-box">
                        <h3 className="count-text">24</h3>
                      </div>
                      <p>
                        YEARS OF
                        <br /> EXPERIENCE
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="why-choose-one__img-3">
                    <img
                      src="assets/images/resources/why-choose-one-img-3.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      Why choose EFG over traditional banks?
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    What Makes Us
                    <br /> Different
                  </h2>
                </div>
                <ul className="why-choose-one__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-save-money-1"></span>
                    </div>
                    <div className="content">
                      <h3>Quick and Flexible</h3>
                      <p>
                        We offer a quick and flexible solution. Funding within
                        24 Hours.
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="icon">
                      <span className="icon-cashback"></span>
                    </div>
                    <div className="content">
                      <h3>No Interest. No Late Fees</h3>
                      <p>
                        0% Interest or Late Fee. So you can have peace of mind
                        and predictable outcomes.
                      </p>
                    </div>
                  </li> */}
                  <li>
                    <div className="icon">
                      <span className="icon-bar-chart"></span>
                    </div>
                    <div className="content">
                      <h3>Our Process is Simple</h3>
                      <p>
                        We provide cash today, and you repay as you generate
                        revenue
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose One End  */}
    </>
  );
}
