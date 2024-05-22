import "./App.css";
// import { Home } from "./Pages/Main/Home.jsx";
// import { Explore } from "./Pages/Main/Explore.jsx";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
// import { Whythissite } from "./Pages/AllBlogs/Whythissite.jsx";
// import { Assets } from "./Pages/AllBlogs/Assetstouse.jsx";
// import { JCCard } from "./Pages/AllBlogs/Components/JasonChngCard.jsx";
// import Components from "./Pages/PageGroups/Components.jsx";
function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
