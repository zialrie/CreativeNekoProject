import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "/src/assets/img/kucing.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <img
        src={Image}
        alt="Logo Creative Neko"
        className="w-28 h-28 mb-6 animate-bounce"
      />
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Sepertinya halaman yang kamu cari tidak tersedia. 
        Kembali ke halaman utama untuk melanjutkan eksplorasi Creative Neko Project.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg transition-all"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFound;
