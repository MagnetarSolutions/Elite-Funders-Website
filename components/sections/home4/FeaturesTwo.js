import Link from "next/link";
export default function FeaturesTwo() {
  return (
    <>
      {/* Feature Two Start */}
      <section className="feature-two">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-delay="100ms">
              <div className="feature-two__left">
                <h3 className="feature-two__title">Find an Agent Now</h3>
                <div className="feature-two__left-content">
                  <div className="icon">
                    <span className="icon-phone-1"></span>
                  </div>
                  <div className="content">
                    <p>Call Us Free</p>
                    <Link href="tel:+99932565894561">+1 888-343-1156 4561</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="200ms">
              <div className="feature-two__right">
                <h3 className="feature-two__title">Sign Up for Email</h3>
                <form
                  className="feature-two__form mc-form"
                  data-url="MC_FORM_URL">
                  <div className="feature-two__form-input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="EMAIL"
                    />
                    <button type="submit" className="feature-two__btn thm-btn">
                      SUBMIT NOW
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Two End */}
    </>
  );
}
