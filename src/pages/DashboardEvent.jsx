import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

export default function DashboardEvent() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("registrations") || "[]");
    setRegistrations(data);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleDelete = (indexToDelete) => {
  if (window.confirm("Yakin ingin menghapus pendaftaran ini?")) {
    const updated = registrations.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("registrations", JSON.stringify(updated));
    setRegistrations(updated);
    }
  };

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      {/* Content */}
      <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto">
        {/* Header */}
        <Header onMenuClick={() => setOpenSidebar(true)} onLogout={handleLogout} />

        <div className="p-6 space-y-10">
          <h1 className="text-2xl font-bold text-yellow-400">Pendaftaran Event</h1>

          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
            {registrations.length === 0 ? (
              <p className="text-gray-400">Belum ada yang mendaftar event.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr className="bg-gray-700 text-yellow-400 text-left">
                      <th className="px-4 py-2">Nama</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Event</th>
                      <th className="px-4 py-2">Waktu Daftar</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {registrations.map((reg, index) => (
                      <tr key={index} className="hover:bg-gray-700/50">
                        <td className="px-4 py-2 text-gray-200">{reg.userName}</td>
                        <td className="px-4 py-2 text-gray-200">{reg.userEmail}</td>
                        <td className="px-4 py-2 text-gray-200">{reg.eventTitle}</td>
                        <td className="px-4 py-2 text-gray-400">
                          {new Date(reg.timestamp).toLocaleString()}
                        </td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => handleDelete(index)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-md"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
