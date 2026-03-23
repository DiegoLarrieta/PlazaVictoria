import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

import Inicio from '../pages/Inicio/Inicio';
import Tiendas from '../pages/Tiendas/Tiendas';
import TiendaDetalle from '../pages/Tiendas/TiendaDetalle';
import Novedades from '../pages/Novedades/Novedades';
import NovedadDetalle from '../pages/Novedades/NovedadDetalle';
import Ofertas from '../pages/Ofertas/Ofertas';
import AdquiereTuLocal from '../pages/AdquiereTuLocal/AdquiereTuLocal';

export default function AppRoutes() {
  return (
    <>
      <Header />

      {/* pt-16 offsets fixed header; pb-16 offsets mobile bottom nav */}
      <main className="min-h-screen pt-16 pb-16 md:pb-0">
        <Routes>
          {/* New routes */}
          <Route path="/"                  element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio"            element={<Inicio />} />
          <Route path="/tiendas"           element={<Tiendas />} />
          <Route path="/tiendas/:slug"     element={<TiendaDetalle />} />
          <Route path="/novedades"         element={<Novedades />} />
          <Route path="/novedades/:slug"   element={<NovedadDetalle />} />
          <Route path="/ofertas"           element={<Ofertas />} />
          <Route path="/adquiere-tu-local" element={<AdquiereTuLocal />} />

          {/* Redirects — old URLs stay alive */}
          <Route path="/directorio"        element={<Navigate to="/tiendas" replace />} />
          <Route path="/directorio/:slug"  element={<Navigate to="/tiendas" replace />} />
          <Route path="/nosotros"          element={<Navigate to="/inicio" replace />} />
          <Route path="/local"             element={<Navigate to="/adquiere-tu-local" replace />} />
          <Route path="/agendar"           element={<Navigate to="/adquiere-tu-local" replace />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
