import './App.css';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown/Dropdown';

// Layouts
import ThreeColGrid from './layout/ThreeColGrid';
import OneTwoColGrid from './layout/OneTwoColGrid';
import TwoOneColGrid from './layout/TwoOneColGrid';
import OneColGrid from './layout/OneColGrid';

function App() {
  return (
    <div className="App">
      <Nav />
      <Dropdown />
      <main className="mx-6 md:mx-16">
        <ThreeColGrid />
      </main>
      <OneTwoColGrid />
      <TwoOneColGrid />
      <OneColGrid />
      <Footer />
    </div>
  );
}

export default App;
