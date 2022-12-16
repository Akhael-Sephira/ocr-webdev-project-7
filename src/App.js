import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodging from './pages/Lodging/Lodging';
import NotFound from './pages/NotFound/NotFound';

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
