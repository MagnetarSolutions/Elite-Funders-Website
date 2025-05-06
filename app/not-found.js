import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
            
                {/* Error Page Start */}
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__img img-bounce">
                                        <img src="assets/images/resources/error-page-img-1.png" alt=""/>
                                    </div>
                                    <h3 className="error-page__tagline">Sorry! Page Not Found!</h3>
                                    <p className="error-page__text">Oops! The page you are looking for does not exist. Please return
                                        to the site’s homepage.</p>
                                    <Link href="/" className="thm-btn error-page__btn">back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Error Page End */}

            </Layout>

        </>
    )
}
