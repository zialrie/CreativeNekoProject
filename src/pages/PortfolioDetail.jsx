import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "/src/data/portfolio";

export default function PortfolioDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center pt-20">Proyek tidak ditemukan.</div>;

  const { title, desc, detail } = project;
  const { masalah, solusi, hasil, galeri, testimoni } = detail;

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
    <div className="container mx-auto px-6 py-8 pt-20">
      <section className="mb-10 bg-gray-800 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">{title}</h1>
        <p className="text-gray-300">{desc}</p>
      </section>

        {/*Masalah dll*/}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Masalah → Solusi → Hasil</h2>
          <div className="text-gray-300 space-y-4">
            <p><strong className="text-yellow-400">Masalah:</strong> {masalah}</p>
            <p><strong className="text-yellow-400">Solusi:</strong> {solusi}</p>
            <p><strong className="text-yellow-400">Hasil:</strong> {hasil}</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={project.img} alt={title} className="w-full h-80 object-cover" />
        </div>
      </section>

      {/* Galeri */}
      <section className="mb-10 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">Galeri</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galeri.map((img, index) => (
            <div
                key={index}
                className="relative overflow-hidden rounded-md break-inside-avoid group cursor-pointer"
            >
                {/* Gambar */}
                <img
                src={img}
                alt="Gallery"
                className="w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                <p className="text-white text-sm font-medium animate-fadeInUp">
                    Dokumentasi StepbyStep {index + 1}
                </p>
                </div>
            </div>
            ))}
        </div>
      </section>

      <section className="mb-10 bg-gray-800 p-6 rounded-lg">
       <h2 className="text-xl font-semibold text-yellow-400 mb-4">Testimoni Klien</h2>
       <blockquote className="bg-gray-700 px-6 py-4 rounded-lg mb-6 italic text-gray-300 inline-block max-w-xl">
        "{testimoni.quote}"
        <p className="text-yellow-400 mt-3 font-medium">— {testimoni.nama}, {testimoni.jabatan}</p>
       </blockquote>
      </section>

      {/* CTA Tanya tentang Proyek */}
      <section className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-yellow-400 text-xl font-semibold mb-4">
          Tertarik dengan Proyek Ini?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Punya pertanyaan seputar proyek ini atau ingin tahu bagaimana kami bisa
          membantu bisnis Anda dengan pendekatan serupa? Tim kami siap berdiskusi
          dengan Anda. Konsultasi gratis dan tanpa komitmen!
        </p>
        <button
          onClick={() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            const user = localStorage.getItem("user");

            if (isLoggedIn === "true" && user) {
              window.open("https://wa.me/0891234567", "_blank");
            } else {
              navigate("/login");
            }
          }}
          className="btn-hover px-8 py-3 rounded-lg font-semibold"
        >
          Tanya Tentang Proyek Ini
        </button>
      </section>
    </div>
  </>
  );
}
