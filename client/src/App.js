import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ThreeColGrid from './layout/ThreeColGrid';
import OneTwoColGrid from './layout/OneTwoColGrid';
import TwoOneColGrid from './layout/TwoOneColGrid';
import ItemCard from './components/Item Card/ItemCard';
import OneColGrid from './layout/OneColGrid';

function App() {
  return (
    <div className="App">
      <Nav />
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
