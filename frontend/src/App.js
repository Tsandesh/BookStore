import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import Explore from "./pages/Explore.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}
