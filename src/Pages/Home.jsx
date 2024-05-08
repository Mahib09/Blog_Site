import { TitleCard } from "../components/TitleCard";
export function Home() {
  return (
    <div className="container">
      <h1 className="text-4xl mt-10 sm:text-7xl dark:text-white ">mahib.log</h1>
      <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      <TitleCard
        title="Why This Site?"
        dateCreated="May 1, 2024"
        to="/Whythissite"
      />
    </div>
  );
}
