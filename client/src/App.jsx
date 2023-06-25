import './App.scss';
// import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

// Context
// import AppContext from './contexts/AppContext';
// import UserContext from './contexts/UserContext';
import { DarkModeProvider } from './contexts/DarkModeContext';

// Components
import Nav from './components/Navs/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Develop from './pages/Develop';
import Test from './pages/Test';

export default function App() {
  return (
    <div className='app'>
      <DarkModeProvider>
        <Nav />
        <section className='min-h-screen'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/develop' element={<Develop />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </section>
        <Footer />
      </DarkModeProvider>
    </div>
  );
}
