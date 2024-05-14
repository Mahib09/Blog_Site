import pages from "../../pages.json";
import { TitleCard } from "../../components/TitleCard";
export default function Components() {
  return (
    <div className="container">
      <h1 className="text-4xl mt-12 sm:text-7xl dark:text-white">Components</h1>
      <p className="text-base text-gray-500 mt-2 mb-4 sm:text-xl dark:text-slate-200">
        Reusable Components Reference and Ideas.
      </p>
      {pages
        .filter((page) => page.group.name === "components")
        .map((page) => {
          return (
            <TitleCard
              key={page.id}
              title={page.title}
              dateCreated={page.dateCreated}
              to={page.to}
            />
          );
        })}
    </div>
  );
}
