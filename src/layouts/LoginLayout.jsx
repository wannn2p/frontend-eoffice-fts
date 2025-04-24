import React from "react";
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <Outlet />
      </div>
    </div>
  );
}
