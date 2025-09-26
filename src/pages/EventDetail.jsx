// src/pages/EventDetail.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { events } from "/src/data/event";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ambil data event berdasarkan id
  const eventData = events.find((e) => e.id === parseInt(id));

  if (!eventData) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-2xl font-bold">Event tidak ditemukan</h1>
        <Link to="/event" className="text-yellow-400 underline mt-4 block">
          Kembali ke daftar event
        </Link>
      </div>
    );
  }

  // ambil flag isPast dari data/event.js
  const isPast = eventData.isPast;

  // cek login user
  const isUserLoggedIn = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");
    return isLoggedIn === "true" && user !== null;
  };

  const handleRegister = () => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    } else {
      navigate(`/event-register/${eventData.id}`);
    }
  };

  return (
    <div className="text-white">
      <div className="bg-[#0c1b32] pt-20 pb-10 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* kiri: logo/teks */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                {eventData.logo && (
                  <img
                    src={eventData.logo}
                    alt="Logo Event"
                    className="h-14 w-auto"
                  />
                )}
                <h1 className="text-white font-bold text-2xl md:text-3xl">
                  {eventData.title}
                </h1>
              </div>
              {/* tombol daftar hanya muncul kalau belum lewat */}
              {!isPast && (
                <button
                  onClick={handleRegister}
                  className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300"
                >
                  Daftar Sekarang
                </button>
              )}
            </div>

            {/* kanan: gambar event */}
            <div className="flex justify-center">
              <img
                src={eventData.img}
                alt={eventData.title}
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === konten === */}
      <div className="container mx-auto px-6 py-10 space-y-8">
        {/* info + agenda */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* informasi acara */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Informasi Acara
            </h2>
            <div className="grid grid-cols-[150px_auto] gap-y-2">
              <div className="text-gray-300 font-semibold"><strong>Tanggal   :</strong></div>
              <div>{eventData.date}</div>

              <div className="text-gray-300 font-semibold"><strong>Waktu:</strong></div>
              <div>{eventData.time}</div>

              <div className="text-gray-300 font-semibold"><strong>Lokasi:</strong></div>
              <div>{eventData.place}</div>

              <div className="text-gray-300 font-semibold"><strong>Pembicara:</strong></div>
              <div>{eventData.detail.speaker}</div>

              <div className="text-gray-300 font-semibold"><strong>Biaya:</strong></div>
              <div>{eventData.detail.fee}</div>
            </div>
          </div>

          {/* agenda acara */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Agenda Acara
            </h2>
            <div className="divide-y divide-gray-600">
              {eventData.detail.agenda.map((a, i) => (
                <div key={i} className="py-2 text-gray-300">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* deskripsi */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-yellow-400 mb-3">
            Deskripsi Acara
          </h2>
          <p className="text-gray-300">{eventData.detail.description}</p>
        </div>

        {/* TESTIMONI (kalau event sudah lewat) */}
        {isPast && eventData.detail.testimonial && (
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-yellow-400 mb-3">
              Testimoni Peserta
            </h2>
            <p className="italic text-gray-300">
              "{eventData.detail.testimonial.quote}"
            </p>
            <p className="mt-2 text-yellow-400 font-medium">
              - {eventData.detail.testimonial.name}
            </p>
          </div>
        )}

        {/* tombol event selesai */}
        {isPast && (
          <div className="text-center">
            <button
              disabled
              className="px-8 py-3 rounded-lg font-semibold bg-gray-500 text-gray-300 cursor-not-allowed"
            >
              Event Selesai
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
