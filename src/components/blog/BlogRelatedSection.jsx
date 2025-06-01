import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Blog31 from "../../../public/assets/imgs/blogs/7.png";
import Blog32 from "../../../public/assets/imgs/blogs/5.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BlogRelatedSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__related blog__animation">
        <div className="container g-0 line pt-130 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">Related Aricles</h2>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog31}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog31}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  <h4 className="blog__meta">
                    <Link href="/category">Sabit Does</Link> . 02 May 2019
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                      Why Traditional Freight Forwarders Fail — And What SABIT
                      Does Differently
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog32}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog32}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                  <h4 className="blog__meta">
                    <Link href="/category">Our Services</Link> . 02 May 2019
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                      FOB, EXW, or Door-to-Door: Which Shipping Option Is Right
                      for You?
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    Read More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogRelatedSection;
