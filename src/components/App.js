import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Lodging from '../pages/Lodging';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodging/:id' element={<Lodging />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App;
