import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import FemaleJourney from "./pages/FemaleJourney";
import MaleJourney from "./pages/MaleJourney";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/female" element={<FemaleJourney />} />
      <Route path="/male" element={<MaleJourney />} />
    </Routes>
  );
}

export default App;