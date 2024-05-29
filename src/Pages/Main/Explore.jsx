import TagButton from "../../components/TagButton";
import { Link } from "react-router-dom";
export function Explore() {
  return (
    <div className="container">
      <h1>Explore</h1>
      <p className="subtitle">Navigate through the pages.</p>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
        EXPLORE BY TAG
      </p>
      <div className="flex gap-2 mt-2">
        <Link to="/">
          <TagButton name="All" />
        </Link>
        <Link to="/Components">
          <TagButton name="Components"></TagButton>
        </Link>
        <Link to="/">
          <TagButton name="Assets"></TagButton>
        </Link>
        <Link to="/Guides">
          <TagButton name="Guides"></TagButton>
        </Link>
        <Link to="/">
          <TagButton name="Cheatsheets"></TagButton>
        </Link>
      </div>
    </div>
  );
}
