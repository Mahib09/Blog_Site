import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export function TitleCard(props) {
  const animate1 = useRef(null);
  useGSAP(() => {
    gsap.from(animate1.current, {
      scrollTrigger: {
        trigger: animate1.current,
        toggleActions: "play pause none reverse",
      },
      duration: 1,
      y: 30,
      opacity: 0,
    });
  }, []);
  return (
    <Link to={props.to}>
      <div ref={animate1}>
        <div className="h-16 flex flex-col group cursor-pointer sm:flex-row">
          <p className="self-start pt-0 mt-3 mb-0 text-base font-bold sm:text-2xl sm:content-center sm:mt-6 dark:text-white">
            {props.title}
          </p>
          <p className=" text-sm mt-0 text-gray-500 group-hover:text-black transition ease-in-out delay-25 self-start cursor-pointer sm:ml-auto sm:text-lg sm:mt-7 dark:text-neutral-400 dark:group-hover:text-white">
            {props.dateCreated}
          </p>
        </div>
        <hr className="h-2" />
      </div>
    </Link>
  );
}
