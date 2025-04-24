import { FaHome, FaInbox, FaFileAlt, FaShareSquare, FaSignOutAlt } from "react-icons/fa";
import SidebarItem from "../components/SidebarItem.jsx";
import SidebarDivider from "../components/SidebarDivider.jsx";

export default function Sidebar({ isCollapsed }) {
  return (
    <div className={`bg-gray-900 text-white h-full transition-all duration-300 ease-in-out ${isCollapsed ? "w-20" : "w-64"} flex flex-col overflow-hidden`}>
      {/* Logo & Title */}
      <div className="flex items-center p-4 h-16">
        <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${isCollapsed ? "mx-auto" : "mr-3"}`}>
          <img src="/src/assets/fts-logo.png" alt="Fakultas Teknik dan Sains" className="w-full h-full object-contain" />
        </div>

        <div className={`transition-all duration-300 ${isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>
          <h1 className="font-bold text-lg whitespace-nowrap">E-OFFICE</h1>
          <p className="text-sm text-gray-500 whitespace-nowrap">Fakultas Teknik & Sains</p>
        </div>
      </div>

      <SidebarDivider isCollapsed={isCollapsed} />

      {/* Menu Container */}
      <div className="flex-1 overflow-y-auto py-2">
        {/* Dashboard Section */}
        <ul className="mb-4">
          <SidebarItem to="/dashboard" icon={FaHome} label="Dashboard" isCollapsed={isCollapsed} />
        </ul>

        <SidebarDivider isCollapsed={isCollapsed} />

        {/* TULIS SURAT Section */}
        <h3 className={`text-gray-400 uppercase text-xs font-bold px-4 my-2 ${isCollapsed ? "hidden" : "block"}`}>Tulis Surat</h3>
        <ul>
          <SidebarItem to="/dashboard/surat-internal" icon={FaFileAlt} label="Surat Internal" isCollapsed={isCollapsed} />
          <SidebarItem to="/dashboard/upload-surat" icon={FaShareSquare} label="Upload Surat Masuk" isCollapsed={isCollapsed} />
        </ul>

        <SidebarDivider isCollapsed={isCollapsed} />

        {/* KOTAK MASUK Section */}
        <h3 className={`text-gray-400 uppercase text-xs font-bold px-4 my-2 ${isCollapsed ? "hidden" : "block"}`}>Kotak Masuk</h3>
        <ul>
          <SidebarItem to="/dashboard/surat-masuk" icon={FaInbox} label="Surat Masuk" isCollapsed={isCollapsed} />
          <SidebarItem to="/dashboard/inbox" icon={FaFileAlt} label="Inbox" isCollapsed={isCollapsed} />
          <SidebarItem to="/dashboard/disposisi" icon={FaSignOutAlt} label="Disposisi" isCollapsed={isCollapsed} />
        </ul>

        <SidebarDivider isCollapsed={isCollapsed} />

        {/* KOTAK KELUAR Section */}
        <h3 className={`text-gray-400 uppercase text-xs font-bold px-4 my-2 ${isCollapsed ? "hidden" : "block"}`}>Kotak Keluar</h3>
        <ul>
          <SidebarItem to="/dashboard/surat-keluar" icon={FaShareSquare} label="Surat Keluar" isCollapsed={isCollapsed} />
          <SidebarItem to="/dashboard/draft" icon={FaFileAlt} label="Draft" isCollapsed={isCollapsed} />
        </ul>
      </div>
    </div>
  );
}
