import { ChevronRight, ChevronLeft } from "lucide-react";
import TagButton from "../../../components/TagButton";
export default function Algorithms() {
  return (
    <div className="container">
      <h1>Algorithms Cheatsheet</h1>
      <p className="subtitle">May 31, 2024</p>
      <p>Algorithm cheatsheet for future references.</p>
      <div className="relative flex max-w-max">
        <button className="flex items-center absolute w-24 h-[100%] hide bg-gradient-to-r from-white from-60% to-transparent text-gray-500 ">
          <ChevronLeft size={40} strokeWidth={1} />
        </button>

        <ul className=" m-auto hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap max-w-[95%]">
          <li>
            <TagButton name="Math Algorithms" className="active" />
          </li>
          <li>
            <TagButton name="Bit Manupulation" />
          </li>
          <li>
            <TagButton name="Hashes" />
          </li>
          <li>
            <TagButton name="Math Algorithms" />
          </li>
          <li>
            <TagButton name="Bit Manupulation" />
          </li>
          <li>
            <TagButton name="Hashes" />
          </li>
          <li>
            <TagButton name="Math Algorithms" />
          </li>
          <li>
            <TagButton name="Bit Manupulation" />
          </li>
          <li>
            <TagButton name="Hashes" />
          </li>
          <li>
            <TagButton name="Math Algorithms" />
          </li>
          <li>
            <TagButton name="Bit Manupulation" />
          </li>
          <li>
            <TagButton name="Hashes" />
          </li>
        </ul>
        <button className="flex items-center absolute w-24 h-[100%] right-0 bg-gradient-to-l from-white dark:from-neutral-900 from-60% to-transparent justify-end text-gray-500 transition-all ease-in-out ">
          <span className="rounded-full h-max hover:text-black dark:hover:text-white transition-all ease-in-out">
            <ChevronRight size={40} strokeWidth={1} />
          </span>
        </button>
      </div>
    </div>
  );
}
