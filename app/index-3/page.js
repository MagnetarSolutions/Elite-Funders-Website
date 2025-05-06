
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Funfacts from "@/components/sections/home3/Funfacts"
import Services from "@/components/sections/home3/Services"
import Portfolio from "@/components/sections/home3/Portfolio"
import Blog from "@/components/sections/home3/Blog"
import Account from "@/components/sections/home3/Account"
import Video from "@/components/sections/home3/video"
import Testimonial from "@/components/sections/home3/Testimonial"
import Quote from "@/components/sections/home3/Quote"
import Cta from "@/components/sections/home3/Cta"
export default function Home() {

    return (
        <div className="homestyle3">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Services />
                <Funfacts />
                <Portfolio />
                <Account />
                <Video />
                <Testimonial />
                <Quote />
                <Cta />
                <Blog />
                
            </Layout>
        </div>
    )
}