import React, { useState } from "react";
import Image from "/src/assets/img/kucing.png";
import { Link, useNavigate } from "react-router-dom";
import Wa from "/src/assets/img/wa.png";
import Email from "/src/assets/img/email.png";
import Testimonials from "./Testi";
import { projects } from "/src/data/portfolio";

const Home = () => {
  const navigate = useNavigate();
  const [showBranding, setShowBranding] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);

  const brandingText = `
Creative Neko Project membantu UMKM membangun identitas merek (branding)
yang kuat dan berkesan. Kami mendampingi mulai dari perencanaan strategi brand,
pembuatan identitas visual, hingga implementasi komunikasi merek agar bisnis
Anda semakin dikenal dan dipercaya oleh pasar.
`;

  const marketingText = `
Kami juga menghadirkan layanan Digital Marketing untuk UMKM agar lebih mudah
menjangkau pelanggan melalui media online. Mulai dari pengelolaan media sosial,
pembuatan kampanye digital, hingga optimasi pemasaran online agar penjualan meningkat.
`;

  const closeMenu = () => {
    // Placeholder untuk close menu
  };

  const handleNavClick = (item) => {
    closeMenu();
    if (!item.isScroll) {
      navigate(item.to);
      window.scrollTo(0, 0);
    }
  };

  const handleClick = (id) => {
    handleNavClick({ to: `/portfolio/${id}`, isScroll: false });
  };

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

      <div className="w-full bg-gray-900 text-white">
        {/* Hero Section */}
        <section id="home" className="w-full min-h-screen flex items-center pt-20 sm:pt-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                Creative Neko Project
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Creative Neko Project adalah startup yang menyediakan jasa untuk membuat
                berbagai jenis design baik itu untuk keperluan pribadi ataupun untuk bisnis anda.
                Tapi tidaj hanya itu, kami juga menyediakan layanan dalam digital branding sebagai bentuk
                nyata kami dalam usaha membantu bisnis anda menjadi lebih berkembang dan Kami juga
                memiliki <strong>Creative Neko Academy</strong> sebagai pusat
                pelatihan dan pengembangan kapasitas UMKM. <br />
                <br />Itu saja? Tentu tidak selain menyediakan layanan jasa kami juga akan selalu berbagai pengetahuan
                terkait branding dan literasi digital untuk menyikapi perkembangan zaman ini
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
              Hubungi via WhatsApp
            </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={Image} alt="Logo Creative Neko" className="py-2" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Branding */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Branding
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {showBranding
                    ? brandingText
                    : brandingText.substring(0, 100) + "..."}
                </p>
                <button
                  onClick={() => setShowBranding(!showBranding)}
                  className="text-yellow-400 underline mb-4"
                >
                  {showBranding ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
                </button>
                <br />
                <button
                  onClick={() =>
                    handleNavClick({ to: "/services", isScroll: false })
                  }
                  className="btn-hover px-6 py-2 rounded-lg font-semibold"
                >
                  Learn More
                </button>
              </div>

              {/* Marketing */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {showMarketing
                    ? marketingText
                    : marketingText.substring(0, 100) + "..."}
                </p>
                <button
                  onClick={() => setShowMarketing(!showMarketing)}
                  className="text-yellow-400 underline mb-4"
                >
                  {showMarketing ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
                </button>
                <br />
                <button
                  onClick={() =>
                    handleNavClick({ to: "/services", isScroll: false })
                  }
                  className="btn-hover px-6 py-2 rounded-lg font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {projects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleClick(project.id)}
                  className="relative border border-gray-700 h-64 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-400 transition-colors duration-300"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-yellow-400">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() =>
                  handleNavClick({ to: "/portfolio", isScroll: false })
                }
                className="btn-hover px-6 py-2 rounded-lg font-semibold"
              >
                Lihat portfolio lainnya
              </button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="w-full py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">
              Event Creative Neko Academy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Webinar: Strategi Digital UMKM 2024
                </h3>
                <p className="text-gray-400 mb-4">
                  15 April 2025 | 19:00 - 21:00 WIB — Pelajari bagaimana
                  memanfaatkan media sosial dan kampanye online untuk meningkatkan penjualan produk UMKM Anda.
                </p>
                <button
                  onClick={() => navigate("/events/1")}
                  className="px-6 py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg transition-all"
                >
                  Daftar Sekarang
                </button>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 card-hover hover-effect">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Workshop Offline: Branding & Identitas Visual
                </h3>
                <p className="text-gray-400 mb-4">
                  22 April 2025| 09:00 - 16:00 WIB (Jakarta) — Workshop intensif untuk membantu UMKM menyusun strategi branding dan desain visual agar bisnis terlihat lebih profesional.
                </p>
                <button
                  onClick={() => navigate("/events/2")}
                  className="px-6 py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg transition-all"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
            <div className="text-center">
              <button
                  onClick={() =>
                    handleNavClick({ to: "/event", isScroll: false })
                  }
                  className="btn-hover px-6 py-2 rounded-lg font-semibold"
                >
                  Lihat event lainnya
                </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Informasi Kontak
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin berdiskusi tentang proyek Anda? Jangan
              ragu untuk menghubungi kami dan terhubung ke Media Sosial kami!
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-6">
            <a href="https://wa.me/0891234567" target="_blank" rel="noopener noreferrer">
              <img
                src={Wa}
                alt="WhatsApp icon"
                className="w-12 h-12 hover:scale-110 transition-transform duration-300 center"
              />
            </a>
            <a href="mailto:infonekoproject@gmail.com">
              <img
                src={Email}
                alt="Email icon"
                className="w-12 h-12 hover:scale-110 transition-transform duration-300 center"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
