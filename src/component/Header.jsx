import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onMenuClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // bersihkan data login (jika ada)
    localStorage.removeItem("isAdmin");
    // arahkan ke halaman home
    navigate("/"); // atau "/home" sesuai route kamu
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
      {/* Kiri */}
      <div className="flex items-center">
        {/* Tombol hamburger mobile */}
        <button
          onClick={onMenuClick}
          className="text-gray-300 focus:outline-none md:hidden mr-3"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
          Selamat Datang, Admin
        </h1>
      </div>

      {/* Kanan */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-yellow-400 hover:bg-gray-700 text-white rounded-lg text-sm font-medium"
      >
        Logout
      </button>
    </div>
  );
}
