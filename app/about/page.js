"use client";
import CounterUp from "@/components/elements/CounterUp";
import BrandSlider from "@/components/slider/BrandSlider";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company">
        {/* Feature One Start  */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              {/* Feature One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms">
                <div className="feature-one__single">
                  <div
                    className="feature-one__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}></div>
                  <div
                    className="feature-one__hover-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-hover-shape-1.png)",
                    }}></div>
                  <div className="feature-one__icon">
                    <span className="icon-protection"></span>
                  </div>
                  <div className="feature-one__content">
                    <p className="feature-one__sub-title">
                      Elite Funding Group
                    </p>
                    <h3 className="feature-one__title">
                      <Link href="about">First & Reliable</Link>
                    </h3>
                    <Link href="about" className="feature-one__read-more">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Feature One Single End */}
              {/* Feature One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms">
                <div className="feature-one__single">
                  <div
                    className="feature-one__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}></div>
                  <div
                    className="feature-one__hover-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-hover-shape-1.png)",
                    }}></div>
                  <div className="feature-one__icon">
                    <span className="icon-investment"></span>
                  </div>
                  <div className="feature-one__content">
                    <p className="feature-one__sub-title">
                      Elite Funding Group
                    </p>
                    <h3 className="feature-one__title">
                      <Link href="about">Invest Your Money</Link>
                    </h3>
                    <Link href="about" className="feature-one__read-more">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Feature One Single End */}
              {/* Feature One Single Start */}
              <div
                className="col-xl-4 col-lg-6 wow fadeInRight"
                data-wow-delay="100ms">
                <div className="feature-one__single">
                  <div
                    className="feature-one__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}></div>
                  <div
                    className="feature-one__hover-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-hover-shape-1.png)",
                    }}></div>
                  <div className="feature-one__icon">
                    <span className="icon-risk-management"></span>
                  </div>
                  <div className="feature-one__content">
                    <p className="feature-one__sub-title">
                      Elite Funding Group
                    </p>
                    <h3 className="feature-one__title">
                      <Link href="about">Get Your Funding</Link>
                    </h3>
                    <Link href="about" className="feature-one__read-more">
                      READ MORE<span className="icon-next"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Feature One Single End */}
            </div>
          </div>
        </section>
        {/* Feature One End  */}

        {/* About Three Start  */}
        <section className="about-three about-six">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="about-three__left">
                  <div
                    className="about-three__img-box  wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms">
                    <div className="about-three__img">
                      <img
                        src="assets/images/resources/about-three-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-three__img-2">
                      <img
                        src="assets/images/resources/about-three-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-three__img-3">
                      <img
                        src="assets/images/resources/about-three-img-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-three__shape-1">
                      <img
                        src="assets/images/shapes/about-three-shape-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">KNOW ABOUT EFG</p>
                    </div>
                    <h2 className="section-title__title">
                      Get Funding
                      <br /> Within 24 hours
                    </h2>
                  </div>
                  <p className="about-three__text">
                    We believe that flourishing businesses are essential to our
                    economy and Elite Funding Group provides and alternative to
                    traditional banks so you can have peace of mind and unleash
                    your businesses potential.
                  </p>
                  <div className="about-three__award-box">
                    <div className="icon">
                      <span className="icon-trophy"></span>
                    </div>
                    <div className="content">
                      <h3>Award Winning</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <br /> sed eiustempor incididunt ut labore et dolore
                        magna
                        <br /> aliqua. Quis ipsum suspendisse
                      </p>
                    </div>
                  </div>
                  <div className="about-three__progress">
                    <h4 className="about-three__progress-title">
                      Service Expereince
                    </h4>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="90%"
                        style={{ width: "90%" }}>
                        <div className="count-text">90%</div>
                      </div>
                    </div>
                  </div>
                  <div className="about-three__btn-and-client">
                    <div className="about-three__btn-box">
                      <Link href="about" className="about-three__btn thm-btn">
                        Apply Now
                      </Link>
                    </div>
                    <div className="about-three__client-img">
                      <img
                        src="assets/images/resources/about-three-client-img.jpg"
                        alt=""
                      />
                      <div className="about-three__client-signature">
                        <img
                          src="assets/images/shapes/about-three-client-signature.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Three End  */}

        {/* Counter One Start  */}
        <section className="counter-one">
          <div className="counter-one__shape-1 float-bob-x">
            <img src="assets/images/shapes/counter-one-shape-1.png" alt="" />
          </div>
          <div className="counter-one__shape-2 float-bob-y">
            <img src="assets/images/shapes/counter-one-shape-2.png" alt="" />
          </div>
          <div className="counter-one__shape-3 float-bob-x">
            <img src="assets/images/shapes/counter-one-shape-3.png" alt="" />
          </div>
          <div className="counter-one__shape-4 float-bob-y">
            <img src="assets/images/shapes/counter-one-shape-4.png" alt="" />
          </div>
          <div className="counter-one__shape-5 img-bounce">
            <img src="assets/images/shapes/counter-one-shape-5.png" alt="" />
          </div>
          <div className="counter-one__shape-6 float-bob-y">
            <img src="assets/images/shapes/counter-one-shape-6.png" alt="" />
          </div>
          <div className="counter-one__shape-7 float-bob-x">
            <img src="assets/images/shapes/counter-one-shape-7.png" alt="" />
          </div>
          <div className="container">
            <div className="counter-one__inner">
              <ul className="counter-one__count-list list-unstyled">
                <li className="wow fadeInLeft" data-wow-delay="100ms">
                  <div className="counter-one__icon">
                    <span className="icon-team"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={250} />
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Active Team Members</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay="200ms">
                  <div className="counter-one__icon">
                    <span className="icon-insurance"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={90} />
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">GiveFunding</p>
                </li>
                <li className="wow fadeInDown" data-wow-delay="300ms">
                  <div className="counter-one__icon">
                    <span className="icon-rating"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={2.56} />
                    <span>k</span>
                  </div>
                  <p className="counter-one__text">Satisfied Customers</p>
                </li>
                <li className="wow fadeInRight" data-wow-delay="400ms">
                  <div className="counter-one__icon">
                    <span className="icon-team"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={99} />
                    <span>%</span>
                  </div>
                  <p className="counter-one__text">Awards Winning</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Counter One End  */}

        {/* Why Choose Three Start */}
        <section className="why-choose-three why-choose-five">
          <div className="why-choose-three__shape-1">
            <img
              src="assets/images/shapes/why-choose-five-shape-1.png"
              alt=""
            />
          </div>
          <div className="why-choose-three__shape-2 img-bounce">
            <img
              src="assets/images/shapes/why-choose-five-shape-2.png"
              alt=""
            />
          </div>
          <div className="why-choose-three__shape-3 float-bob-x">
            <img
              src="assets/images/shapes/why-choose-five-shape-3.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">WHY CHOOSE EFG</p>
              </div>
              <h2 className="section-title__title">
                What Makes Us
                <br /> Different From Others
              </h2>
            </div>
            <div className="row">
              {/* Why Choose Three Single Start */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms">
                <div className="why-choose-three__single">
                  <div className="why-choose-three__icon">
                    <span className="icon-save-money-1"></span>
                  </div>
                  <div className="why-choose-three__content">
                    <h3>
                      <Link href="about">Full Safety Money</Link>
                    </h3>
                    <p>
                      We provide flexible options to suit your financial needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Why Choose Three Single End */}
              {/* Why Choose Three Single Start */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInRight"
                data-wow-delay="300ms">
                <div className="why-choose-three__single">
                  <div className="why-choose-three__icon">
                    <span className=" icon-cashback"></span>
                  </div>
                  <div className="why-choose-three__content">
                    <h3>
                      <Link href="about">Money Back Gurantee</Link>
                    </h3>
                    <p>
                      We provide flexible options to suit your financial needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Why Choose Three Single End */}
              {/* Why Choose Three Single Start */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInLeft"
                data-wow-delay="600ms">
                <div className="why-choose-three__single">
                  <div className="why-choose-three__icon">
                    <span className="icon-bar-chart"></span>
                  </div>
                  <div className="why-choose-three__content">
                    <h3>
                      <Link href="about">Fast Processing System</Link>
                    </h3>
                    <p>
                      We provide flexible options to suit your financial needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Why Choose Three Single End */}
              {/* Why Choose Three Single Start */}
              <div
                className="col-xl-6 col-lg-6 wow fadeInRight"
                data-wow-delay="900ms">
                <div className="why-choose-three__single">
                  <div className="why-choose-three__icon">
                    <span className="icon-save-money-1"></span>
                  </div>
                  <div className="why-choose-three__content">
                    <h3>
                      <Link href="about">Deposite Money</Link>
                    </h3>
                    <p>
                      We provide flexible options to suit your financial needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Why Choose Three Single End */}
            </div>
          </div>
        </section>
        {/* Why Choose Three End */}

        {/* Testimonial One Start  */}
        <section className="testimonial-one testimonial-four">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">
                  OUR CLIENT AWESOME REVIEWS
                </p>
              </div>
              <h2 className="section-title__title">
                Why Customers Love
                <br /> Working With Us
              </h2>
            </div>
            <div className="testimonial-one__bottom">
              <Swiper
                {...swiperOptions}
                className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">Ononto Khan</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">Smith S.R</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">Alisha Martin</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-4.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">David Koper</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-5.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">Jecika Brown</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
                {/* Testimonial One Single Start */}
                <SwiperSlide>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-2.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          Pension schemes ensu security during retirement years
                          for eligible individua. Retirement pensions provide
                          financ security for qualifying individu
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-6.jpg"
                            alt=""
                          />
                        </div>
                        <h3 className="testimonial-one__client-name">
                          <Link href="testimonial">Harbert Spenser</Link>
                        </h3>
                        <p className="testimonial-one__client-sub-title">
                          Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial One Single Start */}
              </Swiper>
            </div>
          </div>
        </section>
        {/* Testimonial One End  */}

        {/* Video One Start  */}
        <section className="video-one">
          <div
            className="video-one__bg jarallax"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/video-one__bg.jpg)",
            }}></div>
          <div className="video-one__shape-1">
            <img src="assets/images/shapes/video-one__shape-1.png" alt="" />
          </div>
          <div className="video-one__shape-2">
            <img src="assets/images/shapes/video-one__shape-2.png" alt="" />
          </div>
          <div className="video-one__shape-3">
            <img src="assets/images/shapes/video-one__shape-3.png" alt="" />
          </div>
          <div className="video-one__shape-4">
            <img src="assets/images/shapes/video-one__shape-4.png" alt="" />
          </div>
          <div className="video-one__shape-5">
            <img src="assets/images/shapes/video-one__shape-5.png" alt="" />
          </div>
          <div className="container">
            <div className="video-one__inner">
              <div className="video-one__icon-box">
                <a
                  onClick={() => setOpen(true)}
                  className="video-one__icon video-popup">
                  <span className="icon-play-2"></span>
                </a>
                <a
                  onClick={() => setOpen(true)}
                  className="video-one__curved-circle-box">
                  <div className="curved-circle">
                    <span className="curved-circle--item">
                      <ReactCurvedText
                        width="240"
                        height="240"
                        cx="120"
                        cy="120"
                        rx="90"
                        ry="90"
                        startOffset="0"
                        reversed={true}
                        text="QUALITY INSURACE SERVICE COMAPY FOR YOUR FUTURE"
                        textProps={{ style: { fontSize: "20" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </span>
                  </div>
                  {/*  /.curved-circle  */}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Video One End  */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />

        {/* Team Two Start  */}
        <section className="team-four">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">OUR TEAM MEMBER</p>
              </div>
              <h2 className="section-title__title">
                Our Talented Team
                <br /> Member Behind Sonchoy
              </h2>
            </div>
            <div className="row">
              {/* Team Two Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms">
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img src="assets/images/team/team-2-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="team-two__content">
                    <h3 className="team-two__title">
                      <Link href="team-details">William Hender</Link>
                    </h3>
                    <p className="team-two__sub-title">CEO of Company</p>
                    <div className="team-two__share-and-social">
                      <div className="team-two__share">
                        <Link href="team-details">
                          <span className="icon-share"></span>
                        </Link>
                      </div>
                      <div className="team-two__social">
                        <Link href="team-details">
                          <span className="icon-google-plus-logo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-vimeo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-instagram-1"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-facebook"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Two Single End */}
              {/* Team Two Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms">
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img src="assets/images/team/team-2-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="team-two__content">
                    <h3 className="team-two__title">
                      <Link href="team-details">Janes Cooper</Link>
                    </h3>
                    <p className="team-two__sub-title">Designer</p>
                    <div className="team-two__share-and-social">
                      <div className="team-two__share">
                        <Link href="team-details">
                          <span className="icon-share"></span>
                        </Link>
                      </div>
                      <div className="team-two__social">
                        <Link href="team-details">
                          <span className="icon-google-plus-logo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-vimeo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-instagram-1"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-facebook"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Two Single End */}
              {/* Team Two Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="600ms">
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img src="assets/images/team/team-2-3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="team-two__content">
                    <h3 className="team-two__title">
                      <Link href="team-details">Jonas Blueyar</Link>
                    </h3>
                    <p className="team-two__sub-title">FundingManager</p>
                    <div className="team-two__share-and-social">
                      <div className="team-two__share">
                        <Link href="team-details">
                          <span className="icon-share"></span>
                        </Link>
                      </div>
                      <div className="team-two__social">
                        <Link href="team-details">
                          <span className="icon-google-plus-logo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-vimeo"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-instagram-1"></span>
                        </Link>
                        <Link href="team-details">
                          <span className="icon-facebook"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Two Single End */}
            </div>
          </div>
        </section>
        {/* Team Two End  */}

        {/* Brand One Start */}
        <section className="brand-one brand-three">
          <div className="container">
            <BrandSlider />
          </div>
        </section>
        {/* Brand One End */}
      </Layout>
    </>
  );
}
