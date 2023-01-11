import './App.scss';
import { Routes, Route } from 'react-router-dom';
import SkipToMain from './components/SkipToMain/SkipToMain';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodging from './pages/Lodging/Lodging';
import NotFound from './pages/NotFound/NotFound';

import lodgings from './data/logements.json'

function App() {
  return (
    <>
      <SkipToMain></SkipToMain>
      <Header className="large-block"></Header>
      <Routes>
        <Route path='/' element={<Home lodgings={lodgings} />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodging/:id' element={<Lodging />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App;
