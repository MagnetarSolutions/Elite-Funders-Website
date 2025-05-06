
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Blog from "@/components/sections/home4/Blog"
import Brand from "@/components/sections/home4/Brand"
import Cta from "@/components/sections/home4/Cta"
import Download from "@/components/sections/home4/Download"
import FeaturesTwo from "@/components/sections/home4/FeaturesTwo"
import Funfacts from "@/components/sections/home4/Funfacts"
import Help from "@/components/sections/home4/Help"
import Portfolio from "@/components/sections/home4/Portfolio"
import Pricing from "@/components/sections/home4/Pricing"
import Services from "@/components/sections/home4/Services"
import Team from "@/components/sections/home4/Team"
import WhyChooseUs from "@/components/sections/home4/WhyChooseUs"
export default function Home() {

    return (
        <div className="homestyle4">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner />
                <Help />
                <Services />
                <Brand />
                <About />
                <Portfolio />
                <Download />
                <WhyChooseUs />
                <FeaturesTwo />
                <Pricing />
                <Team />
                <Funfacts />
                <Blog />
                <Cta />
            </Layout>
        </div>
    )
}