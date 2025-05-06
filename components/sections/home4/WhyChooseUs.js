import Link from "next/link";
export default function WhyChooseUs() {
  return (
    <>
      {/* Why Choose Three Start */}
      <section className="why-choose-three">
        <div className="why-choose-three__shape-1">
          <img src="assets/images/shapes/why-choose-three-shape-1.png" alt="" />
        </div>
        <div className="why-choose-three__shape-2 img-bounce">
          <img src="assets/images/shapes/why-choose-three-shape-2.png" alt="" />
        </div>
        <div className="why-choose-three__shape-3 float-bob-x">
          <img src="assets/images/shapes/why-choose-three-shape-3.png" alt="" />
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
                    Through a unique coN construction and design dis nes
                    expertise Concor and delivers
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
                    Through a unique coN construction and design dis nes
                    expertise Concor and delivers
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
                    Through a unique coN construction and design dis nes
                    expertise Concor and delivers
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
                    Through a unique coN construction and design dis nes
                    expertise Concor and delivers
                  </p>
                </div>
              </div>
            </div>
            {/* Why Choose Three Single End */}
          </div>
        </div>
      </section>
      {/* Why Choose Three End */}
    </>
  );
}
