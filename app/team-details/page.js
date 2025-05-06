
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Member Details">
        {/* Team Details Start */}
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="team-details__top-bg">
                        <div className="team-details__top-shape-1 float-bob">
                            <img src="assets/images/shapes/team-details-top-shape-1.png" alt=""/>
                        </div>
                        <div className="team-details__top-shape-2 float-bob-y">
                            <img src="assets/images/shapes/team-details-top-shape-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__top-img-box">
                                <div className="team-details__top-img">
                                    <img src="assets/images/team/team-details-top-img-1.jpg" alt=""/>
                                </div>
                                <span>SONCHOY</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-right">
                                <h3 className="team-details__top-right-title">Robert Broom</h3>
                                <p className="team-details__top-right-sub-title">Backend Developer</p>
                                <ul className="team-details__top-points list-unstyled">
                                    <li>
                                        <span>Department:</span>
                                        <p>Web Design</p>
                                    </li>
                                    <li>
                                        <span>Experience:</span>
                                        <p>15 Years</p>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <p><Link href="mailto:sonchoyhelp@gmail.com">sonchoyhelp@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <p><Link href="tel:+1900938495743">+1-900-938-4957-43</Link></p>
                                    </li>
                                </ul>
                                <div className="team-details__social">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#" className="team-details__social-color-2"><span
                                            className="icon-twitter"></span></Link>
                                    <Link href="#" className="team-details__social-color-3"><span
                                            className="icon-instagram"></span></Link>
                                    <Link href="#" className="team-details__social-color-4"><span
                                            className="icon-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-details__bottom">
                    <h3 className="team-details__title-1">Alen Walker’s Biography</h3>
                    <p className="team-details__text-1">A vast majority of the app marketers mainly concentrate on the
                        post-launch app marketing techniques and measures while completely missing on the pre-launch
                        campaign. This prevents the app to create buzz and hype just around the time when the app is
                        launched. As and when you launch the app, already a considerable number of people should
                        expectantly look forward to your app and this requires long-drawn marketing</p>
                    <p className="team-details__text-2">To create pre-launch buzz and hype about the app a mobile app
                        development company has an array of marketing options like social media campaign, search engine
                        ads, video ads, email campaigns, etc. Apart from online options, you can also reach out to the
                        wider audience with traditional marketing</p>
                    <div className="team-details__progress-and-company">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="team-details__progress-box">
                                    <ul className="team-details__progress-list list-unstyled">
                                        <li>
                                            <h4 className="team-details__progress-title">Web Development</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4 className="team-details__progress-title">Business Solution</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="50%" style={{ width: '50%' }}>
                                                    <div className="count-text">50%</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4 className="team-details__progress-title">Digital Marketing</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="team-details__company-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="team-details__company-list list-unstyled">
                                                <li>
                                                    <h3 className="team-details__company-title">Azent Company</h3>
                                                    <p className="team-details__company-sub-title">Web Designer, Figma</p>
                                                </li>
                                                <li>
                                                    <h3 className="team-details__company-title">Moove Ux</h3>
                                                    <p className="team-details__company-sub-title">Web Designer, Figma</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="team-details__company-list list-unstyled">
                                                <li>
                                                    <h3 className="team-details__company-title">Amazon Company</h3>
                                                    <p className="team-details__company-sub-title">Web Designer, Figma</p>
                                                </li>
                                                <li>
                                                    <h3 className="team-details__company-title">thememx Company</h3>
                                                    <p className="team-details__company-sub-title">Web Designer, Figma</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="team-details__title-2">Best Skills</h3>
                    <p className="team-details__text-3">A vast majority of the app marketers mainly concentrate on the
                        post-launch app marketing techniques and measures while completely missing on the pre-launch
                        campaign. This prevents the app to create buzz and hype just around the time when the app is
                        launched. As and when you launch the app, already a considerable number of people should
                        expectantly look forward to your app and this requires long-drawn marketing</p>
                    <div className="team-details__contact-box">
                        <h3 className="team-details__contact-title">Let’s Get in Touch</h3>
                        <p className="team-details__contact-text">Your email address will not be published. Required fields
                            are marked *</p>
                        <form action="assets/inc/sendemail.php" className="team-details__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Your Name*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="email" placeholder="Your Email*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Website*" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="team-details__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                    </div>
                                    <div className="contact-two__btn-box">
                                        <button type="submit" className="thm-btn team-details__btn">SEND YOUR
                                            MEASSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Team Details End */}

            </Layout>
        </>
    )
}