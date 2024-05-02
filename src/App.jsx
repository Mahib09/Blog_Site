import "./App.css";
import { Header } from "./components/Header";
import { TitleCard } from "./components/TitleCard.jsx";
function App() {
  return (
    <div className="p-10 mx-96 my-4 ">
      <Header />
      <h1 className="text-9xl pt-16 font-extrabold">mahib.log</h1>
      <p className="text-xl text-gray-500 pt-5 mb-16">
        Study Materials, Findings, Reusable Components, Blogs and everything in
        between.
      </p>
      <TitleCard
        title="Create a Blog site using react"
        dateCreated="March 10, 2023"
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

export default App;
