import "./App.css";
import { Home } from "./Pages/Main/Home.jsx";
import { Explore } from "./Pages/Main/Explore.jsx";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { Whythissite } from "./Pages/AllBlogs/Whythissite.jsx";
import { Assets } from "./Pages/AllBlogs/Assetstouse.jsx";
import { JCCard } from "./Pages/AllBlogs/Components/EthanChngCard.jsx";
import Components from "./Pages/PageGroups/Components.jsx";
import HowToDeployOnVercel from "./Pages/AllBlogs/Guides/HowToDeployOnVercel.jsx";
import Guides from "./Pages/PageGroups/Guides.jsx";
import Cheatsheets from "./Pages/PageGroups/Cheatsheets.jsx";
import Algorithms from "./Pages/AllBlogs/Cheatsheets/Algorithms.jsx";
function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>

        {/* groups */}
        <Route path="/Components" element={<Components />}></Route>
        <Route path="/Guides" element={<Guides />}></Route>
        <Route path="/Cheatsheets" element={<Cheatsheets />}></Route>

        {/* pages */}
        <Route path="/Whythissite" element={<Whythissite />}></Route>
        <Route path="/ReactAssetstouse" element={<Assets />}></Route>
        <Route path="/Components/JCCard" element={<JCCard />}></Route>
        <Route
          path="/Guides/DeployViteReactAppToVercel"
          element={<HowToDeployOnVercel />}
        ></Route>
        <Route
          path="/Cheatsheets/AlgorithmCheatsheet"
          element={<Algorithms />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
