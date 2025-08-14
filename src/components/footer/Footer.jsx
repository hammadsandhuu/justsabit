import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/footer/3.png";
import FooterLogoWhite from "../../../public/assets/imgs/logo/logo1.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      width={120}
                      height={50}
                      style={{ width: "auto", height: "auto" }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>
                      Helping you choose the right agent, avoid costly mistakes,
                      and ship with confidence. 40+ years of freight advisory,
                      worldwide.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="https://facebook.com/itsSABIT">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/justsabit?s=11">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/justsabit">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@justsabit">
                          <span>
                            <i className="fa-brands fa-youtube"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@justsabit_">
                          <span>
                            <i className="fa-brands fa-tiktok"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/service/sector">Sectors</Link>
                      </li>
                      <li>
                        <Link href="/how-it-works">How It Works</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/disclaimer">Disclaimer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>
                        <a href="tel:02574328301" className="phone">
                          (+02) 574 - 328 - 301
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@buildyexample.com">
                          support@justsabit.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Talk to our advisory team. It’s free and fast <br /> no
                      pressure.
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> contact us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2010 - 2025 | All rights reserved by
                      <a href="https://www.justsabit.com/" target="_blank">
                        SABIT
                      </a>
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Subscribe our news letters"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
