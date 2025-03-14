import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Menu } from "./Components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <main style={{ width: "90%", margin: "auto" }}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
