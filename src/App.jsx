import "./App.css";
import { GotTicket } from "./Pages/GotaTicket.jsx";
import { Home } from "./Pages/Home.jsx";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/GotTicket" element={<GotTicket />}></Route>
      </Routes>
    </>
  );
}

export default App;
