import { TitleCard } from "../components/TitleCard";
export function Home() {
  return (
    <div className="container">
      <h1 className="text-9xl pt-16 font-extrabold">mahib.log</h1>
      <p className="text-xl text-gray-500 pt-5 mb-16">
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      <TitleCard
        title="Create a Blog site using react"
        dateCreated="March 10, 2023"
        to="/GotTicket"
      />
      <TitleCard title="Room Shifted " dateCreated="March 30, 2023" />
      <TitleCard title="Got a TTC Ticket of $425" dateCreated="May 1, 2024" />
      <TitleCard
        title="Learning React by creating a project"
        dateCreated="May 2, 2024"
      />
      <TitleCard
        title="Differnece Between E12 and E17 Light Bulbs"
        dateCreated="March 30, 2023"
      />
      <TitleCard
        title="Trying to manage Spending habits "
        dateCreated="March 30, 2023"
      />
      <TitleCard
        title="How to be productive and healthy"
        dateCreated="March 30, 2023"
      />
    </div>
  );
}
