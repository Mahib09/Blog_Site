import TagButton from "../../../components/TagButton";
export default function Algorithms() {
  return (
    <div className="container">
      <h1>Algorithms Cheatsheet</h1>
      <p className="subtitle">May 31, 2024</p>
      <p>Algorithm cheatsheet for future references.</p>
      <div className="hide-scrollbar flex flex-row gap-2 overflow-x-auto ">
        <TagButton name="Math Algorithms" />
        <TagButton name="Bit Manupulation" />
        <TagButton name="Hashes" />
        <TagButton name="Math Algorithms" />
        <TagButton name="Bit Manupulation" />
        <TagButton name="Hashes" />
        <TagButton name="Math Algorithms" />
        <TagButton name="Bit Manupulation" />
        <TagButton name="Hashes" />
        <TagButton name="Math Algorithms" />
        <TagButton name="Bit Manupulation" />
        <TagButton name="Hashes" />
      </div>
    </div>
  );
}
