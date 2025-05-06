
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home5/About"
import Banner from "@/components/sections/home5/Banner"
import Blog from "@/components/sections/home5/Blog"
import Brand from "@/components/sections/home5/Brand"
import Cta from "@/components/sections/home5/Cta"
import Feature from "@/components/sections/home5/Feature"
import Funfacts from "@/components/sections/home5/Funfacts"
import Question from "@/components/sections/home5/Question"
import Services from "@/components/sections/home5/Services"
import Team from "@/components/sections/home5/Team"
import Testimonial from "@/components/sections/home5/Testimonial"
import WhyChooseUs from "@/components/sections/home5/WhyChooseUs"
export default function Home() {

    return (
        <div className="homestyle5">
            <Layout headerStyle={5} footerStyle={5}>
                <Banner />
                <About />
                <Feature />
                <Services />
                <WhyChooseUs />
                <Cta />
                <Team />
                <Funfacts />
                <Testimonial />
                <Question />
                <Brand />
                <Blog />
            </Layout>
        </div>
    )
}