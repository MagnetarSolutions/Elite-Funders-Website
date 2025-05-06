import Link from "next/link";
export default function Cta() {
  return (
    <>
      {/* CTA One Start  */}
      <section className="cta-one cta-three">
        <div className="container">
          <div className="cta-one__inner">
            <div
              className="cta-one__bg"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/cta-three-bg-shape.png)",
              }}></div>
            <div className="cta-one__title-box">
              Get <span>Peace of Mind</span> Right Now
              <p>Only a Few Minutes Away From a Better Future - Apply Now</p>
            </div>
            <div className="cta-one__btn-box">
              <Link href="contact" className="cta-one__btn thm-btn">
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA One End  */}
    </>
  );
}
