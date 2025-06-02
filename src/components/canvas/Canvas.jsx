import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/logo1.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const router = useRouter();
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {
              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/digital-marketing">
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
                  <a href="https://www.tiktok.com/@justsabit_">Tik Tok</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/justsabit">Instagram</a>
                </li>
                <li>
                  <a href="https://facebook.com/itsSABIT">Facebook</a>
                </li>
                <li>
                  <a href="https://x.com/justsabit?s=11">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@justsabit">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="offcanvas__links">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/blog">blog</Link>
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
                      <Link href={"/"}>HOME</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/about"}>ABOUT</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service"}>SERVICES</Link>
                      <div className="accordian-btn">
                        {accordion === 3 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(3)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 3 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/service/door-to-door"}>Door-to-Door</Link>
                      </li>
                      <li>
                        <Link href={"/service/flexible-fob-shipping"}>
                          Flexible FOB Shipping
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/exw-shipping"}>EXW Shipping</Link>
                      </li>
                      <li>
                        <Link href={"/service/additional-services"}>
                          Relable custom & transpotion services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service"}>SECTORS</Link>
                      <div className="accordian-btn">
                        {accordion === 4 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(4)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 4 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/service/luxury-automotive"}>
                          Luxury Automotive
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/diplomatic-missions"}>
                          Diplomatic Missions
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/hospitality-groups"}>
                          Hospitality Groups
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/mega-projects"}>
                          Mega Projects
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/oil-and-gas"}>Oil & Gas</Link>
                      </li>
                      <li>
                        <Link href={"/service/food-and-commodities"}>
                          Food & Commodities
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/furniture-and-fixtures"}>
                          Furniture & Fixtures
                        </Link>
                      </li>
                      <li>
                        <Link href={"/service/materials-and-manufacturing"}>
                          Materials & Manufacturing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/blog"}>BLOGS</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href="https://tally.so/r/wb2851" target="_blank">
                        Pace your Shipment
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
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
                  <a href="mailto:advisory@justsabit.com">
                    advisory@justsabit.com
                  </a>
                </li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
