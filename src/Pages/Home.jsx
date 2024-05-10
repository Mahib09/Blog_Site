import { useRef } from "react";
import { TitleCard } from "../components/TitleCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
  // const pages = [
  //   {
  //     id: "3",
  //     title: "Assets to Use",
  //     dateCreated: "May 8, 2024",
  //     to: "/Assets",
  //   },{
  //     id: "2",
  //     title: "Assets to Use",
  //     dateCreated: "May 8, 2024",
  //     to: "/Assets",
  //   },{
  //     id: "1",
  //     title: "Why This Site?",
  //     dateCreated: " May 1, 2024",
  //     to: "/Whythissite",
  //   },

  // ];

  return (
    <div className="container">
      <h1
        ref={animate2}
        className="text-4xl mt-10 sm:text-7xl dark:text-white relative "
      >
        mahib.log
      </h1>
      <p
        ref={animate1}
        className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400"
      >
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      <TitleCard
        title="Jason Chang's Simple Card"
        dateCreated="May 10, 2024"
        to="/JCCard"
      />
      <TitleCard title="Assets to Use" dateCreated="May 8, 2024" to="/Assets" />
      <TitleCard
        title="Why This Site?"
        dateCreated="May 1, 2024"
        to="/Whythissite"
      />
      {/* {pages.map((page) => (
        <TitleCard
          key={page.id}
          title={page.title}
          dateCreated={page.dateCreated}
          to={page.to}
        />
      ))} */}
    </div>
  );
}
