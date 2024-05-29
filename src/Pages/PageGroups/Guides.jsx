import pages from "../../pages.json";
import { TitleCard } from "../../components/TitleCard";
export default function Guides() {
  return (
    <div className="container">
      <h1>Guides</h1>
      <p className="subtitle">Guides for all kind of stuff</p>
      {pages
        .filter((page) => page.group.name === "guides")
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
