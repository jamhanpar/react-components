import "./App.css";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Test from "./pages/Test";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="border border-blue-400">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
