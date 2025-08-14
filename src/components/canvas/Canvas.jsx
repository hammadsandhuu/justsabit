import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/logo1.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { servicesData } from "@/data/services";
import { sectorsData } from "@/data/sectors";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const router = useRouter();
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // Memoized text animation function
  const animateHeaderTitles = useCallback(() => {
    if (!headerTitle.current) return;

    try {
      const rootParent = headerTitle.current.children;
      if (!rootParent || rootParent.length === 0) return;

      for (let i = 0; i < rootParent.length; i++) {
        const firstParent = rootParent[i]?.children;
        if (!firstParent) continue;

        for (let j = 0; j < firstParent.length; j++) {
          const element = firstParent[j];
          if (!element || !element.className?.includes("header_title"))
            continue;

          const textElement = element.children?.[0];
          if (!textElement || !textElement.textContent) continue;

          const textContent = textElement.textContent.trim();
          if (!textContent) continue;

          const spans = textContent
            .split("")
            .map((char) => {
              if (char === " ") {
                return `<span style='width:2vw; display:inline-block;'>${char}</span>`;
              }
              return `<span>${char}</span>`;
            })
            .join("");

          const result = `<div class="menu-text">${spans}</div>`;
          textElement.innerHTML = result;
        }
      }
      setIsAnimationReady(true);
    } catch (error) {
      console.warn("Header animation failed:", error);
      setIsAnimationReady(true); // Still set to ready to prevent infinite loading
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use a more robust approach with multiple checks
    const initializeAnimation = () => {
      if (headerTitle.current && headerTitle.current.children.length > 0) {
        animateHeaderTitles();
      } else {
        // Retry after a short delay if elements aren't ready
        setTimeout(initializeAnimation, 50);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeAnimation, 100);

    return () => clearTimeout(timer);
  }, [animateHeaderTitles]);

  // Memoized accordion handlers
  const openData = useCallback((data) => {
    setAccordion(data);
  }, []);

  const openSubData = useCallback((data) => {
    setSubAccordion(data);
  }, []);

  const closeCanvas = useCallback(() => {
    if (!ofCanvasArea?.current) return;

    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";

    if (bladeMode) {
      const header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  }, [bladeMode, ofCanvasArea]);

  // Search handler
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("search");
    if (searchQuery) {
      // Implement your search logic here
      console.log("Search query:", searchQuery);
    }
  }, []);

  return (
    <div className="offcanvas__area" ref={ofCanvasArea}>
      <div className="offcanvas__body">
        <div className="offcanvas__left">
          <div className="offcanvas__logo">
            <Link href="/">
              <Image
                priority
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                src={logoWhite2}
                alt="Offcanvas Logo"
              />
            </Link>
          </div>
          <div className="offcanvas__social">
            <h3 className="social-title">Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.tiktok.com/@justsabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                >
                  Tik Tok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/justsabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/itsSABIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/justsabit?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@justsabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas__links">
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="offcanvas__mid">
          <div className="offcanvas__menu-wrapper">
            <nav className="offcanvas__menu">
              <ul className="menu-anim title" ref={headerTitle}>
                <li>
                  <div className="header_title">
                    <Link href="/">HOME</Link>
                  </div>
                </li>
                <li>
                  <div className="header_title">
                    <Link href="/about">ABOUT</Link>
                  </div>
                </li>
                <li>
                  <div className="header_title d-flex">
                    <Link href="/service">SERVICES</Link>
                    <div className="accordian-btn">
                      <button
                        type="button"
                        onClick={() => openData(accordion === 3 ? 0 : 3)}
                        aria-expanded={accordion === 3}
                        aria-label={
                          accordion === 3
                            ? "Collapse services menu"
                            : "Expand services menu"
                        }
                      >
                        {accordion === 3 ? "-" : "+"}
                      </button>
                    </div>
                  </div>
                  <ul
                    className="sub_title"
                    style={{
                      display: accordion === 3 ? "block" : "none",
                    }}
                  >
                    {servicesData?.map((service) => (
                      <li key={service.id}>
                        <Link href={`/service/${service.slug}`}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="header_title d-flex">
                    <Link href="/service/sector">SECTORS</Link>
                    <div className="accordian-btn">
                      <button
                        type="button"
                        onClick={() => openData(accordion === 4 ? 0 : 4)}
                        aria-expanded={accordion === 4}
                        aria-label={
                          accordion === 4
                            ? "Collapse sectors menu"
                            : "Expand sectors menu"
                        }
                      >
                        {accordion === 4 ? "-" : "+"}
                      </button>
                    </div>
                  </div>
                  <ul
                    className="sub_title"
                    style={{
                      display: accordion === 4 ? "block" : "none",
                    }}
                  >
                    {sectorsData?.map((sector) => (
                      <li key={sector.id}>
                        <Link href={`/service/sector/${sector.slug}`}>
                          {sector.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="header_title">
                    <Link href="/blog">BLOGS</Link>
                  </div>
                </li>
                <li>
                  <div className="header_title">
                    <Link
                      href="https://ship-with-sabit.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Place your Shipment
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="offcanvas__right">
          <div className="offcanvas__search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search keyword"
                aria-label="Search"
              />
              <button type="submit" aria-label="Search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <div className="offcanvas__contact">
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a href="tel:02094980547">+(02) - 094 980 547</a>
              </li>
              <li>
                <a href="mailto:support@justsabit.com">support@justsabit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="offcanvas__close">
          <button
            type="button"
            onClick={closeCanvas}
            aria-label="Close navigation menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
