import { useEffect, useRef, useMemo, lazy, Suspense } from "react";
import { navData } from "../../../data/navData.js";
import CommonAnimation from "../CommonAnimation";
import ScrollTop from "../ScrollTop";
import Header1 from "@/components/header/Header1";

// Lazy load heavy components
const Preloader = lazy(() => import("@/components/preloader/Preloader"));
const ScrollSmootherComponents = lazy(() =>
  import("../ScrollSmootherComponents")
);
const CursorAnimation = lazy(() => import("../CursorAnimation"));
const Footer3 = lazy(() => import("@/components/footer/Footer3"));

// Memoized header component
const HeaderContent = ({ navData }) => {
  return <Header1 navData={navData} />;
};

// Optimized footer component with memoization
const FooterContent = ({ footer }) => {
  const FooterComponent = useMemo(() => {
    if (footer === "none") return null;
    return <Footer3 />;
  }, [footer]);

  return FooterComponent;
};

// Simple device detection function (no state)
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export default function RootLayout({ children, footer = "footer3" }) {
  const cursor1 = useRef();
  const cursor2 = useRef();
  const isMobile = isMobileDevice();

  // Memoize navigation data to prevent unnecessary re-renders
  const memoizedNavData = useMemo(() => navData, []);

  // Set dark mode only - runs once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.add("dark");
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Preload critical fonts or assets
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      // Add your critical CSS here
      document.head.appendChild(link);

      // Cleanup
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, []);

  // Loading fallback component
  const LoadingFallback = () => (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      Loading...
    </div>
  );

  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        {/* Cursor effects - load on all devices but can be controlled via CSS */}
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Suspense fallback={null}>
          <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Preloader />
        </Suspense>
        <ScrollTop />
        <HeaderContent navData={memoizedNavData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Suspense fallback={null}>
              <FooterContent footer={footer} />
            </Suspense>
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}
