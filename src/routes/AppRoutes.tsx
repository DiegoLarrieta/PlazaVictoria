import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from '../pages/Home/Home'
import Nosotros from '../pages/Nosotros/Nosotros';
import Locales from '../pages/Local/Locales';
import Agendar from '../pages/Agendar/Agendar';
import NegocioDetalle from '../pages/Directorio/NegocioDetalle';

import Directorio from '../pages/Directorio/Directorio';
// import Agendar from '../pages/Agendar';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/locales" element={<Locales />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/directorio/:slug" element={<NegocioDetalle />} />

          <Route path="/agendar" element={<Agendar />} />
        </Routes>
      </div>
      <Footer/>

    </>
  );
};

export default AppRoutes;
