import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/* Contact Page Start */}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <h3 className="contact-page__title">Get in Touch</h3>
                  {/* <p className="contact-page__text">
                    A vast majority of the app marketers mainly concent
                    post-launch app marketing techniques and measures while
                    completely missing pre-launch campaign. This prevents the
                  </p> */}
                  <div className="contact-page__contact-info">
                    <h4 className="contact-page__contact-info-title">
                      Contact Info
                    </h4>
                    <ul className="contact-page__contact-list list-unstyled">
                      <li>
                        <h5>Address</h5>
                        <p>9840 SW 77th ave Miami, FL 33156</p>
                      </li>
                      <li>
                        <h5>Phone</h5>
                        <p>
                          <Link href="tel:09354587874">888-343-1156</Link>
                          {/* <span>or</span>
                          <Link href="tel:10698852741">10 (698) 852 741</Link> */}
                        </p>
                      </li>
                      <li>
                        <h5>Email</h5>
                        <p>
                          <Link href="mailto:info@example.com">
                          Customerservice@elitefunders.com
                          </Link>
                          {/* <span>or</span>
                          <Link href="mailto:info@example.com">
                            info@example.com
                          </Link> */}
                        </p>
                      </li>
                    </ul>
                    {/* <Link href="#" className="contact-page__link">
                      www.example.com
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <div className="contact-page__img">
                    <img
                      src="assets/images/resources/contact-page-img-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page__bottom">
              <div className="comment-form">
                <h3 className="comment-one__title">Let's Get in Touch</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form
                  action="assets/inc/sendemail.php"
                  className="comment-one__form contact-form-validated">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Your Name*"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Your Email*"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Website*"
                          name="website"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Write Message*"></textarea>
                      </div>
                      <div className="comment-form__btn-box">
                        <button
                          type="submit"
                          className="thm-btn comment-form__btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Page End */}
      </Layout>
    </>
  );
}
