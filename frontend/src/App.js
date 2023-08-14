import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import Explore from "./pages/Explore.js";
import Navbar from "./components/Navbar.js";
import Page404 from "./pages/Page404.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
