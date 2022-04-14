import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  return (
    // <RLSProvider
    // options={{
    //   smooth: true,
    //   // ... all available Locomotive Scroll instance options
    // }}

    // // onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
    // containerRef={containerRef}
    // >
    <div ref={containerRef}>
      <Component {...pageProps} />
    </div>
    // </RLSProvider>
  );
}

export default MyApp;
