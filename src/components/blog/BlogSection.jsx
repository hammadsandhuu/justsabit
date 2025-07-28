import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BlogItem = ({ image, category, date, title, link }) => {
  return (
    <div className="col-xxl-6 col-xl-6 col-lg-6">
      <article className="blog__item-3">
        <div className="blog__img-wrapper-3">
          <Link href={link}>
            <div className="img-box">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                className="image-box__item"
                src={image}
                alt="Blog Thumbnail"
                width={1000}
                height={1000}
              />
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                className="image-box__item"
                src={image}
                alt="Blog Thumbnail"
                width={1000}
                height={1000}
              />
            </div>
          </Link>
        </div>
        <div className="blog__info-3">
          <h4 className="blog__meta">
            <Link href="/category">{category}</Link> . {date}
          </h4>
          <h5>
            <Link href={link} className="blog__title-3">
              {title}
            </Link>
          </h5>
          <Link href={link} className="blog__btn">
            Read More
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
};

const BlogSection = ({ blogs }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;
      const tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
          blogList.forEach((item) => {
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
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
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
    <section className="blog__area-3 pb-140 blog__animation">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper text-anim pt-130">
              <h2 className="sec-sub-title">The SABIT Perspectiv</h2>
              <h3 className="sec-title title-anim">
                Freight Insights That <br />
                Actually Help
              </h3>
              <p>
                We write what most logistics companies {"won't"}. Real answers.
                Global trends. Smarter ways to move cargo. No fluff — just
                clarity from 40+ years in the field.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
