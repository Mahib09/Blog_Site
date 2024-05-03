import "./App.css";
import { GotTicket } from "./Pages/GotaTicket.jsx";
import { Home } from "./Pages/Home.jsx";
import { Explore } from "./Pages/Explore.jsx";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/GotTicket" element={<GotTicket />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
