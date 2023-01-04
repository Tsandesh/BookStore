import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
