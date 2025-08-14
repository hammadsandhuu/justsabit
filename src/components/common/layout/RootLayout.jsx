import { useEffect, useRef, useState } from "react";
import { navData } from "../../../data/navData.js";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import ScrollTop from "../ScrollTop";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";

export default function RootLayout({ children }) {
  const cursor1 = useRef();
  const cursor2 = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render animations until component is mounted (avoid SSR issues)
  if (!isMounted) {
    return (
      <>
        <Header navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        <ScrollTop />
        <Header navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
