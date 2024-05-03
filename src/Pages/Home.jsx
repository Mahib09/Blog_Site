import { TitleCard } from "../components/TitleCard";
export function Home() {
  return (
    <div className="container">
      <h1 className="text-8xl pt-16">mahib.log</h1>
      <p className="text-xl text-gray-500 mb-10">
        Study Materials, Findings, Reusable Components,
        <br /> Blogs and everything in between.
      </p>
      <TitleCard
        title="Why This Site?"
        dateCreated="May 1, 2024"
        to="/Whythissite"
      />
    </div>
  );
}
