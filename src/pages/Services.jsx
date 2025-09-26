import React from "react";
import LogoIcon from "/src/assets/img/kucing.png";
import { useNavigate } from "react-router-dom";

export default function Services() {
   const navigate = useNavigate();
   
  return (
  <>
  <style>
        {`
        .hover-effect {
          position: relative;
          overflow: hidden;
        }
        .hover-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.3s ease;
        }
        .hover-effect:hover::after {
          width: 100%;
        }
        .hover-effect h3 {
          color: #FFD700;
          transition: color 0.3s ease;
        }
        .hover-effect:hover h3 {
          color: #fff;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px #000000;
        }
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
    <div className="container mx-auto pt-20 px-6 py-10 space-y-12 max-w-7xl">
      {/* Heading */}
      <section className="text-center">
        <img src={LogoIcon} alt="Creative Neko" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Layanan Creative Neko Project
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Kami menyediakan berbagai layanan design dan digital branding 
          , mulai dari logo, website, aplikasi dan strategi pemasaran digital
          hingga penyelenggaraan event dan pelatihan
          di <strong>Creative Neko Academy</strong>. Semua layanan kami dirancang untuk
          membantu bisnis kecil dan menengah berkembang lebih cepat di era digital.
        </p>
      </section>

      {/* Grid Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branding */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Branding</h2>
          <p className="text-gray-300 leading-relaxed">
            Kami membantu UMKM membangun identitas merek yang kuat dan konsisten.
            Layanan ini mencakup riset brand, strategi komunikasi, pembuatan logo
            dan identitas visual, hingga panduan implementasi brand agar bisnis Anda
            lebih dikenal dan dipercaya oleh pelanggan.
          </p>
        </section>

        {/* Digital Marketing */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Digital Marketing</h2>
          <p className="text-gray-300 leading-relaxed">
            Strategi pemasaran digital untuk meningkatkan visibilitas dan penjualan UMKM.
            Termasuk pengelolaan media sosial, konten kreatif, kampanye iklan online,
            optimasi SEO, hingga analisis kinerja agar pemasaran lebih efektif dan tepat sasaran.
          </p>
        </section>

        {/* Event Online & Offline */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Event Online & Offline</h2>
          <p className="text-gray-300 leading-relaxed">
            Kami rutin menyelenggarakan dan mengelola event kreatif, baik online maupun offline,
            untuk memperluas jejaring, meningkatkan kapasitas, dan mempromosikan produk UMKM.
            Mulai dari webinar, workshop, hingga pameran atau showcase bisnis.
          </p>
        </section>

        {/* Creative Neko Academy */}
        <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Creative Neko Academy</h2>
          <p className="text-gray-300 leading-relaxed">
            Pusat pelatihan dan pengembangan keterampilan bagi UMKM.
            Melalui kelas dan program pelatihan praktis, kami membekali pelaku usaha dengan
            pengetahuan tentang branding, pemasaran digital, dan manajemen bisnis sehingga
            mereka siap menghadapi persaingan pasar.
          </p>
        </section>
      </div>

      {/* Kenapa Terintegrasi */}
      <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg hover-effect card-hover">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4">Kenapa Terintegrasi?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Creative Neko Project menghadirkan layanan yang terintegrasi agar UMKM
          tidak perlu bekerja dengan banyak pihak berbeda. Branding, pemasaran
          digital, event, dan pelatihan kami rancang sebagai satu ekosistem
          yang saling mendukung sehingga hasil lebih cepat dan konsisten.
        </p>
      </section>

      {/* CTA */}
      <section className="p-8 bg-gray-900 border border-gray-700 rounded-lg text-center hover-effect card-hover">
        <h2 className="text-yellow-400 text-xl font-semibold mb-4">
          Siap Mengembangkan Bisnis Anda?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Hubungi Creative Neko Project sekarang untuk sesi konsultasi gratis dan
          temukan solusi kreatif yang sesuai dengan kebutuhan bisnis Anda.
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
              Konsultasi Sekarang
        </button>
      </section>
    </div>
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
