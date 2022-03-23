import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Download from "./pages/Download";
import Faqs from "./pages/Faqs";
import About from "./pages/About";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/upload" element={<Upload />}></Route>
      <Route exact path="/download" element={<Download />}></Route>
      <Route exact path="/faqs" element={<Faqs />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
