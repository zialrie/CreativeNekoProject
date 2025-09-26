import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "/src/data/portfolio";
import { Pagination } from "@heroui/react";
import WaIcon from "/src/assets/img/wa.png";
import EmailIcon from "/src/assets/img/email.png";
import LogoIcon from "/src/assets/img/kucing.png";

export default function Portfolio() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentData = filteredProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const filterCategories = ["All", "Web", "Konten", "Campaign"];

  return (
    <>
      <section id="#hero" className="w-full bg-gray-900 text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Portfolio Kami
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Temukan hasil karya terbaik yang pernah kami kerjakan.
        </p>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Filter */}
        <div className="mb-6 flex flex-wrap gap-2 left">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg 
                        hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out 
                        h-full flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs bg-gray-700 text-yellow-400 px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <Link
                    to={`/portfolio/${p.id}`}
                    className="text-yellow-400 hover:underline text-sm mt-auto"
                  >
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
            />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <section className="w-full bg-gray-800 py-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo & Deskripsi */}
          <div className="flex flex-col md:flex-row md:col-span-2 md:items-center">
            <img src={LogoIcon} alt="Logo" className="w-16 h-16 mb-4 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-white text-2xl font-semibold mb-2">Creative Neko</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Creative Neko Project adalah konsultan kreatif yang mendukung UMKM
                melalui layanan konsultasi, manajemen portofolio, event, dan pelatihan
                di Creative Neko Academy.
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
