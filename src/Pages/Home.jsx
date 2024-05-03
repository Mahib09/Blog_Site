import { TitleCard } from "../components/TitleCard";
export function Home() {
  return (
    <div className="container">
      <h1 className="text-8xl pt-16">mahib.log</h1>
      <p className="text-xl text-gray-500 pt-5 mb-16">
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      <TitleCard
        title="Why This Site?"
        dateCreated="May 5, 2024"
        to="/Whythissite"
      />
    </div>
  );
}
