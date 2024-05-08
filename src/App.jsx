import "./App.css";
import { Home } from "./Pages/Home.jsx";
import { Explore } from "./Pages/Explore.jsx";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Whythissite } from "./Pages/Whythissite.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/Whythissite" element={<Whythissite />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
