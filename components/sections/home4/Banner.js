
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    return (
        <>
            
    {/*  Main Sllider Start  */}
        <section className="main-slider-four">
            <Swiper {...swiperOptions} className="main-slider-four__carousel owl-carousel owl-theme thm-owl__carousel">

                <SwiperSlide className="item main-slider-four__slide-1">
                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-1.jpg)' }} >
                    </div>{/*  /.slider-one__bg  */}
                    <div className="main-slider-four__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-four__shape-2"></div>
                    <div className="main-slider-four__shape-3"></div>
                    <div className="main-slider-four__shape-4"></div>
                    <div className="main-slider-four__shape-5"></div>
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="main-slider-four__icon">
                                <img src="assets/images/icon/main-slider-four-icon.png" alt=""/>
                            </div>
                            <h2 className="main-slider-four__title">Do Insure & <br/>
                                Secure your Future.
                            </h2>
                            <div className="main-slider-four__btn-box">
                                <Link href="about" className="main-slider-four__btn thm-btn">get started</Link>
                                <Link href="contact" className="main-slider-four__btn-2 thm-btn">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item main-slider-four__slide-1">
                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-2.jpg)' }} >
                    </div>{/*  /.slider-one__bg  */}
                    <div className="main-slider-four__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-four__shape-2"></div>
                    <div className="main-slider-four__shape-3"></div>
                    <div className="main-slider-four__shape-4"></div>
                    <div className="main-slider-four__shape-5"></div>
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="main-slider-four__icon">
                                <img src="assets/images/icon/main-slider-four-icon.png" alt=""/>
                            </div>
                            <h2 className="main-slider-four__title">Do Insure & <br/>
                                Secure your Future.
                            </h2>
                            <div className="main-slider-four__btn-box">
                                <Link href="about" className="main-slider-four__btn thm-btn">get started</Link>
                                <Link href="contact" className="main-slider-four__btn-2 thm-btn">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item main-slider-four__slide-1">
                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-4-3.jpg)' }} >
                    </div>{/*  /.slider-one__bg  */}
                    <div className="main-slider-four__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-four__shape-2"></div>
                    <div className="main-slider-four__shape-3"></div>
                    <div className="main-slider-four__shape-4"></div>
                    <div className="main-slider-four__shape-5"></div>
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="main-slider-four__icon">
                                <img src="assets/images/icon/main-slider-four-icon.png" alt=""/>
                            </div>
                            <h2 className="main-slider-four__title">Do Insure & <br/>
                                Secure your Future.
                            </h2>
                            <div className="main-slider-four__btn-box">
                                <Link href="about" className="main-slider-four__btn thm-btn">get started</Link>
                                <Link href="contact" className="main-slider-four__btn-2 thm-btn">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>
        {/* Main Sllider Start  */}
        </>
    )
}
