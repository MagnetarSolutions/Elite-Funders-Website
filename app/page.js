"use client";
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Feature from "@/components/sections/home1/Feature";
import Funfacts from "@/components/sections/home1/Funfacts";
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs";
import Service from "@/components/sections/home1/Service";
import Video from "@/components/sections/home1/video";
import Work from "@/components/sections/home1/Work";
import Brand from "@/components/sections/home1/Brand";
import Blog from "@/components/sections/home1/Blog";
import Faq from "@/components/sections/home1/Faq";
import Quote from "@/components/sections/home1/Quote";
import Testimonial from "@/components/sections/home1/Testimonial";
import { useFormStore } from "/public/store/FormData";
import { useEffect } from "react";
export default function Home() {
  const { setCurrentStep } = useFormStore();
  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Feature />
        <About />
        {/* <Funfacts /> */}
        <Service />
        <WhyChooseUs />
        {/* <Video /> */}
        <Work />
        <Faq />
        <Testimonial />
        <Quote />
        {/* <Brand /> */}
        {/* <Blog /> */}
      </Layout>
    </>
  );
}
