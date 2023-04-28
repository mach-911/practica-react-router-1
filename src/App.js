import "./styles.css";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Personajes from "./pages/Personajes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/personajes" element={<Personajes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
