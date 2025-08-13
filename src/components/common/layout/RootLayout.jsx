import { useEffect, useRef, useState } from "react";
import { navData } from "../../../data/navData.js";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import Switcher from "../Switcher";
import ScrollTop from "../ScrollTop";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";

export default function RootLayout({ children, defaultMode = "dark" }) {
  const [mode, setMode] = useState(defaultMode);

  const cursor1 = useRef();
  const cursor2 = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);

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
        <Switcher
          setMode={setMode}
          mode={mode}
          cursor1={cursor1}
          cursor2={cursor2}
        />
        <ScrollTop />
        <Header navData={navData} />;
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />;
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
