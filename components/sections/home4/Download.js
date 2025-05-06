'use client'
import Link from "next/link"
export default function Download() {
    return (
        <>
            {/* Download App Start */}
        <section className="download-app">
            <div className="download-app__shape-2 float-bob-x">
                <img src="assets/images/shapes/download-app-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="download-app__left">
                            <h3 className="download-app__title">Download Our Mobile
                                Application</h3>
                            <p className="download-app__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design, it makes your website look
                                even more attractive and impressive to downalod effective</p>
                            <div className="download-app__store">
                                <Link href="#">
                                    <div className="download-app__store-icon">
                                        <span className="icon-square"></span>
                                    </div>
                                    <div className="download-app__store-content">
                                        <p>Download On the</p>
                                        <h3>App Store</h3>
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className="download-app__store-icon">
                                        <span className="icon-square"></span>
                                    </div>
                                    <div className="download-app__store-content">
                                        <p>Get it on</p>
                                        <h3>Google Play</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="download-app__right  wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="download-app__img-1">
                                <img src="assets/images/resources/download-app-img-1.png" alt=""/>
                            </div>
                            <div className="download-app__img-2">
                                <img src="assets/images/resources/download-app-img-2.png" alt=""/>
                            </div>
                            <div className="download-app__shape-1 float-bob-y">
                                <img src="assets/images/shapes/download-app-shape-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Download App End */}


        </>
    )
}
