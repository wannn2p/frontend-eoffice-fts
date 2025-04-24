import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, isCollapsed }) => {
  return (
    <NavLink to={to} className={`flex items-center gap-3 mx-2 my-2 p-3 hover:bg-gray-700 rounded-md transition-all duration-300 ${isCollapsed ? "justify-center" : ""}`}>
      <Icon className="text-xl flex-shrink-0" />
      <div className={`flex-grow overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? "hidden" : "block"}`}>{label}</div>
    </NavLink>
  );
};

export default SidebarItem;
