const SidebarDivider = ({ isCollapsed }) => {
  return <div className={`border-t border-gray-800 mx-2  ${isCollapsed ? "opacity-30" : ""}`}></div>;
};

export default SidebarDivider;
