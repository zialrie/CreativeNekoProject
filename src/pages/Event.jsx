
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "@heroui/react";
import { events as initialEvents } from "../data/event";
import LogoIcon from "../assets/img/kucing.png";

export default function Event() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const allEvents = [...initialEvents];
    storedEvents.forEach((newEvent) => {
      if (!allEvents.some((e) => e.id === newEvent.id)) {
        allEvents.push(newEvent);
      }
    });
    setEvents(allEvents);
  }, []);

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.category === activeFilter);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const currentData = filteredEvents.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const filterCategories = ["All", "Online", "Offline"];

  const handleViewDetail = (id) => {
    navigate(`/events/${id}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
    
      <style>
        {`
        .btn-hover {
          background-color: #FFD700;
          color: black;
          transition: all 0.3s ease;
        }
        .btn-hover:hover {
          background-color: #fbbf24;
          box-shadow: 0 0 15px #fbbf24;
        }
      `}
      </style>

      {/* Hero Section */}
      <section
        id="#hero"
        className="w-full bg-gray-900 text-white py-16 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Event Kami
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Berbagai macam event menarik dari kami
        </p>
      </section>

      {/* Main Content */}
      <div className="bg-gray-900 text-white px-6 font-sans">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          {/* Filter */}
          <div className="mb-6 flex flex-wrap gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded text-sm ${
                  activeFilter === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Events */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.length > 0 ? (
                currentData.map((e) => (
                  <div
                    key={e.id}
                    className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg 
                      hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out 
                      h-full flex flex-col"
                  >
                    <img
                      src={e.img}
                      alt={e.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-yellow-400">
                        {e.title}
                      </h3>

                      {/* Tambahan: Tanggal + ikon */}
                      <p className="text-gray-400 text-sm mt-2 flex items-center gap-1">
                        <span role="img" aria-label="calendar" className="text-yellow-400">
                          📅
                        </span>
                        {e.date} {e.time && `| ${e.time}`}
                      </p>

                      {/* Tambahan: Tempat + ikon */}
                      <p className="text-gray-400 text-sm mt-1 flex items-center gap-1 mb-10">
                        <span role="img" aria-label="location" className="text-yellow-400">
                          📍
                        </span>
                        {e.place}
                      </p>

                      {/* tombol lihat detail */}
                      <button
                        onClick={() => handleViewDetail(e.id)}
                        className="btn-hover px-6 py-2 rounded-lg font-semibold"
                      >
                        Lihat Detail →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-400 py-10">
                  Tidak ada event yang ditemukan.
                </p>
              )}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center pb-20">
              <Pagination
                total={totalPages}
                page={page}
                onChange={setPage}
                color="warning"
                showShadow
                size="lg"
                showControls={true}
                siblings={1}
                boundaries={1}
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <section className="w-full bg-gray-800 py-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo & Deskripsi */}
          <div className="flex flex-col md:flex-row md:col-span-2 md:items-center">
            <img
              src={LogoIcon}
              alt="Logo"
              className="w-16 h-16 mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <h2 className="text-white text-2xl font-semibold mb-2">
                Creative Neko
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Creative Neko Project adalah konsultan kreatif yang mendukung
                UMKM melalui layanan konsultasi, manajemen portofolio, event,
                dan pelatihan di Creative Neko Academy.
              </p>
            </div>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Social</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
