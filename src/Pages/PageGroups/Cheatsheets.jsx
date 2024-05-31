import pages from "../../pages.json";
import { TitleCard } from "../../components/TitleCard";
export default function Cheatsheets() {
  return (
    <div className="container">
      <h1>Cheatsheets</h1>
      <p className="subtitle">Cheatsheets for all kind of stuff</p>
      {pages
        .filter((page) => page.group.name === "cheatsheets")
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
