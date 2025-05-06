import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
export default function FunnelHeader({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}) {
  return (
    <>
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="main-header__top">
          <div className="main-header__top-inner">
            <div className="main-header__top-social-box">
              <p className="main-header__top-social-title">Follow us:</p>
              <div className="main-header__top-social">
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <Image
                      width="68"
                      height="68"
                      src="/assets/images/resources/efg.svg"
                      alt=""
                    />
                    <span className="elite-funding__logo"> Elite Funders</span>
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                </div>
              </div>
              <div className="main-menu__right"></div>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} />

      <div
        className={`stricky-header stricked-menu main-menu ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                      <Image
                        width="68"
                        height="68"
                        src="/assets/images/resources/efg.svg"
                        alt=""
                      />
                      <span className="elite-funding__logo">Elite Funders</span>
                    </Link>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <Link
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                    >
                      <i className="fa fa-bars"></i>
                    </Link>
                  </div>
                </div>
                <div className="main-menu__right"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
