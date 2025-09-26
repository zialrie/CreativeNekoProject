import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { events } from "/src/data/event";

export default function EventRegister() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState(null);
  const [user, setUser] = useState(null);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  useEffect(() => {
    const event = events.find((e) => e.id === parseInt(id));
    setEventData(event);

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (isLoggedIn !== "true" || !currentUser) {
      navigate("/login");
      return;
    }

    setUser(currentUser);

    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    const isRegistered = registrations.some(
      (reg) => reg.eventId === parseInt(id) && reg.userEmail === currentUser.email
    );

    setIsAlreadyRegistered(isRegistered);
  }, [id, navigate]);

  const handleRegister = () => {
  const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");

  const newRegistration = {
    eventId: parseInt(id),
    userEmail: user.email,
    userName: user.name, 
    eventTitle: eventData.title, 
    timestamp: new Date().toISOString(),
  };

  registrations.push(newRegistration);
  localStorage.setItem("registrations", JSON.stringify(registrations));

  setIsAlreadyRegistered(true);
  alert("Pendaftaran berhasil!");
  navigate("/event");
  };


  if (!eventData || !user) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400 mb-4">
          Pendaftaran Event
        </h1>

        <div className="mb-6">
          <p><strong>Nama Event:</strong> {eventData.title}</p>
          <p><strong>Tanggal:</strong> {eventData.date}</p>
          <p><strong>Waktu:</strong> {eventData.time}</p>
          <p><strong>Lokasi:</strong> {eventData.place}</p>
        </div>

        <div className="mb-6">
          <p><strong>Nama Anda:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {isAlreadyRegistered ? (
          <div className="text-green-400 font-semibold">
            Anda sudah terdaftar pada event ini.
          </div>
        ) : (
          <button
            onClick={handleRegister}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold"
          >
            Konfirmasi Daftar
          </button>
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
