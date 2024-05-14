import pages from "../../pages.json";
import { TitleCard } from "../../components/TitleCard";
export default function Components() {
  return (
    <div className="container">
      <h1>Components</h1>
      <p className="subtitle">Reusable Components Reference and Ideas.</p>
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
