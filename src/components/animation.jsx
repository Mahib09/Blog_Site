import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
const SlideRight = (duration, distance, children) => {
  const elementRef = useRef(null);
  useGSAP(() => {
    const element = elementRef.current;
    gsap.from(element, {
      duration: duration,
      y: distance,
      opacity: 0,
    });
  });
  return <div ref={elementRef}>{children}</div>;
};
export default SlideRight;
