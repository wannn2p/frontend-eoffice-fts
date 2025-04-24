// routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

// Dashboard children
import Dashboard from "../pages/DashboardPage.jsx";
import Inbox from "../pages/Inbox";
import Grafik from "../pages/Grafik";
import SuratInternal from "../pages/SuratInternal";
import UploadSurat from "../pages/UploadSurat";
import SuratMasuk from "../pages/SuratMasuk";
import Draft from "../pages/Draft";
import Disposisi from "../pages/Disposisi";
import SuratKeluar from "../pages/SuratKeluar.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Login layout */}
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      {/* Protected routes (dashboard and its children) */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="grafik" element={<Grafik />} />
        <Route path="surat-internal" element={<SuratInternal />} />
        <Route path="upload-surat" element={<UploadSurat />} />
        <Route path="surat-masuk" element={<SuratMasuk />} />
        <Route path="draft" element={<Draft />} />
        <Route path="disposisi" element={<Disposisi />} />
        <Route path="surat-keluar" element={<SuratKeluar />} />
      </Route>

      {/* Not found fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
