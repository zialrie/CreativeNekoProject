import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { events } from "../data/event";

export default function DashboardAdmin() {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Hitung statistik
  const total = events.length;
  const online = events.filter((e) => e.category === "Online").length;
  const offline = events.filter((e) => e.category === "Offline").length;

  const handleLogout = () => {
    // hapus status login
    localStorage.removeItem("isAdmin");
    window.location.href = "/"; // atau navigate("/home")
  };

  return (
    <div className="flex bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      {/* Content */}
      <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto">
        {/* Header */}
        <Header
          onMenuClick={() => setOpenSidebar(true)}
          onLogout={handleLogout}
        />

        {/* dashboard */}
        <div className="p-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-300 text-sm">Total Event</h2>
              <p className="text-3xl font-bold text-yellow-400">{total}</p>
            </div>
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-300 text-sm">Online Event</h2>
              <p className="text-3xl font-bold text-blue-400">{online}</p>
            </div>
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow">
              <h2 className="text-gray-300 text-sm">Offline Event</h2>
              <p className="text-3xl font-bold text-green-400">{offline}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
