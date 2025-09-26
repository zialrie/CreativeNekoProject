import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { events } from "/src/data/event";

export default function EventUser() {
  const [user, setUser] = useState(null);
  const [userRegistrations, setUserRegistrations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // cek login
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (isLoggedIn !== "true" || !currentUser) {
      navigate("/login");
      return;
    }

    setUser(currentUser);

    // ambil data registrasi user
    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    const filtered = registrations.filter(reg => reg.userEmail === currentUser.email);

    // urutkan berdasarkan tanggal event dari terkecil ke terbesar
    const sorted = filtered.sort((a, b) => {
      const eventA = events.find(e => e.id === a.eventId);
      const eventB = events.find(e => e.id === b.eventId);
      if (!eventA || !eventB) return 0;
      const dateA = new Date(eventA.date);
      const dateB = new Date(eventB.date);
      return dateA - dateB;
    });

    setUserRegistrations(sorted);
  }, [navigate]);

  const handleCancelRegistration = (eventId) => {
    let registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    registrations = registrations.filter(
      reg => !(reg.eventId === eventId && reg.userEmail === user.email)
    );
    localStorage.setItem("registrations", JSON.stringify(registrations));
    setUserRegistrations(prev => prev.filter(reg => reg.eventId !== eventId));
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Event yang Saya Ikuti
        </h1>

        {userRegistrations.length === 0 ? (
          <p className="text-gray-300">Anda belum mendaftar pada event manapun.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {userRegistrations.map((reg, idx) => {
              const eventData = events.find(e => e.id === reg.eventId);
              return (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-5 hover:shadow-yellow-400 transition relative"
                >
                  <div className="absolute top-3 right-3 text-yellow-400 font-bold text-lg">
                    #{idx + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                    {reg.eventTitle || eventData?.title}
                  </h2>
                  <p className="text-gray-300"><strong>Tanggal:</strong> {eventData?.date || "-"}</p>
                  <p className="text-gray-300"><strong>Waktu:</strong> {eventData?.time || "-"}</p>
                  <p className="text-gray-300"><strong>Lokasi:</strong> {eventData?.place || "-"}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Terdaftar pada: {new Date(reg.timestamp).toLocaleString()}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/events/${reg.eventId}`}
                      className="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded-lg font-semibold text-black"
                    >
                      Detail
                    </Link>
                    <button
                      onClick={() => handleCancelRegistration(reg.eventId)}
                      className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded-lg font-semibold text-black"
                    >
                      Batal Daftar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6">
          <Link to="/event" className="text-yellow-300 underline">
            ← Kembali ke daftar event
          </Link>
        </div>
      </div>
    </div>
  );
}
