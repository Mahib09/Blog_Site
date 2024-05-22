import { useRef } from "react";
import { TitleCard } from "../../components/TitleCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import pages from "../../pages.json";
gsap.registerPlugin(useGSAP);
export function Home() {
  const animate1 = useRef(null);
  const animate2 = useRef(null);
  useGSAP(() => {
    gsap.from(animate1.current, {
      duration: 1,
      y: 30,
      opacity: 0,
    });
    gsap.from(animate2.current, {
      duration: 1,
      y: -30,
      opacity: 0,
    });
  }, []);

  return (
    <div className="container">
      <h1 ref={animate2} className="relative ">
        mahib.fyi
      </h1>
      <p ref={animate1} className="subtitle">
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      {pages.map((page) => (
        <TitleCard
          key={page.id}
          title={page.title}
          dateCreated={page.dateCreated}
          to={page.to}
        />
      ))}
    </div>
  );
}
