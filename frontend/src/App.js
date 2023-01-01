import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
