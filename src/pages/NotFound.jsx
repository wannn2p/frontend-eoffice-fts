import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 mb-2 font-semibold">Halaman Tidak Ditemukan</p>
        <p className="text-gray-600 mb-6">Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
        <Link to="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <FaArrowLeft />
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
