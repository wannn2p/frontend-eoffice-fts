import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Navbar({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      console.log("Searching for:", searchTerm);
      // Tambahkan logic pencarian sesuai kebutuhanmu
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <nav className="bg-gray-800 text-white flex items-center px-6 py-3 shadow-md">
      {/* Sidebar Toggle */}
      <button
        onClick={() => {
          setIsSidebarCollapsed(!isSidebarCollapsed);
          setIsOpen(!isOpen);
        }}
        className="flex-shrink-0 p-2 transition-all duration-500 ease-in-out"
      >
        {isSidebarCollapsed ? <FaChevronRight className="text-xl hover:text-gray-400 transition-all duration-300" /> : <FaChevronLeft className="text-xl hover:text-gray-400 transition-all duration-300" />}
      </button>

      {/* Search Bar */}
      <div className="relative w-full max-w-sm mx-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="w-full p-2 pl-10 bg-gray-700 rounded-md focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Icon Right */}
      <div className="flex items-center gap-x-4 ml-auto relative">
        {/* Fullscreen */}
        <FaExpand className="cursor-pointer hover:text-gray-400" onClick={toggleFullscreen} />

        {/* Notifikasi */}
        <FaBell className="cursor-pointer hover:text-gray-400" onClick={() => alert("Belum ada notifikasi.")} />

        {/* Profil */}
        <div className="relative">
          <div onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle className="text-2xl" />
            <div className="hidden sm:block">
              <p className="text-sm">Administrator</p>
              <p className="text-xs text-gray-400">SUPER ADMIN</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
              <p className="hover:bg-gray-200 p-2 cursor-pointer">Profil</p>
              <p className="hover:bg-gray-200 p-2 cursor-pointer" onClick={() => alert("Logout belum diimplementasikan")}>
                Keluar
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
