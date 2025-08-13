import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import MenuBlack from "../../../public/assets/imgs/icon/menu-black.png";
import Image from "next/image";
// import SearchData from "../../data/searchData.json";
import { useRouter } from "next/router";
import NavItem from "../nav/NavItem";
import LogoItem from "../logo/LogoItem";

export default function Header({ navData }) {
  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();
  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let header_bg_3 = headerArea.current;
    if (header_bg_3) {
      if (topScroll > 20) {
        header_bg_3.classList.add("sticky-3");
      } else {
        header_bg_3.classList.remove("sticky-3");
      }
    }
  }

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };
  return (
    <>
      {navData && Object.keys(navData).length && (
        <>
          <header className="header__area-3 py-1" ref={headerArea}>
            <div className="header__inner-3">
              <LogoItem />
              {navData.nav && navData.nav.length && (
                <NavItem nav={navData.nav} navStyle={3} />
              )}
              <div className="header__nav-icon-3">
                <button onClick={openCanvas}>
                  <Image
                    priority
                    width={21}
                    height={15}
                    src={MenuBlack}
                    alt="Menubar Icon"
                  />
                </button>
              </div>
            </div>
          </header>
        </>
      )}
      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
}
