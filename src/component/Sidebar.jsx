import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("id-ID");

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-40 w-64 
        bg-gray-800 border-r border-gray-700 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-yellow-400">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-yellow-400 transition"
            onClick={onClose}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboardevent"
            className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-yellow-400 transition"
            onClick={onClose}
          >
            Event
          </Link>
          <Link
            to="/dashboarduser"
            className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-yellow-400 transition"
            onClick={onClose}
          >
            Users
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700 text-center bg-gray-900">
          <p className="text-sm font-medium text-yellow-400">{formattedTime}</p>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </aside>
    </>
  );
}
