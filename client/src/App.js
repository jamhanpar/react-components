import './App.css';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Develop from './pages/Develop';
import Test from './pages/Test';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Nav />
      <section className="min-h-screen">
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/test" element={<Test />} />
        </Routes> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
