
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Cta from "@/components/sections/home2/Cta"
import Funfacts from "@/components/sections/home2/Funfacts"
import Portfolio from "@/components/sections/home2/Portfolio"
import Pricing from "@/components/sections/home2/Pricing"
import Quote from "@/components/sections/home2/Quote"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Whychoose from "@/components/sections/home2/Whychoose"
export default function Home() {

    return (
        <div className="homestyle2">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Brand />
                <About />
                <Services />
                <Funfacts />
                <Portfolio />
                <Pricing />
                <Whychoose />
                <Team />
                <Quote />
                <Blog />
                <Cta />
            </Layout>
        </div>
    )
}