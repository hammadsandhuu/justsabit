import { useEffect, useRef, useState } from "react";
import { navData } from "../../../data/navData.js";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import Switcher from "../Switcher";
import ScrollTop from "../ScrollTop";
import Header1 from "@/components/header/Header1";
import Header3 from "@/components/header/Header3";
import Footer3 from "@/components/footer/Footer3";

const HeaderContent = ({ header, navData }) => {
  if (header === "header1") {
    return <Header1 navData={navData} />;
  } else if (header === "header3") {
    return <Header3 />;
  } else {
    return <Header3 />;
  }
};

const FooterContent = ({ footer }) => {
  if (footer === "footer3") {
    return <Footer3 />;
  } else if (footer === "none") {
    return null;
  } else {
    return <Footer3 />;
  }
};

export default function RootLayout({
  children,
  header = "",
  footer = "",
  defaultMode = "",
}) {
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
        <HeaderContent header={header} navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterContent footer={footer} />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
