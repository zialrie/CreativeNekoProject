import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kebutuhan: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const topPageRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleCloseAlert = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsAlertVisible(false);
      setIsLeaving(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nama harus diisi";
    if (!formData.email.trim()) newErrors.email = "Email harus diisi";
    if (!formData.kebutuhan.trim()) newErrors.kebutuhan = "Pilih kebutuhan";
    if (!formData.pesan.trim()) newErrors.pesan = "Pesan harus diisi";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");

    
    if (isLoggedIn !== "true" || !user) {
      navigate("/login");
      return;
    }

    
    const pesanWhatsapp = `Halo, saya ${formData.name}.\n\nSaya tertarik dengan layanan: ${formData.kebutuhan}.\n\nPesan:\n${formData.pesan}`;
    const encodedPesan = encodeURIComponent(pesanWhatsapp);
    const nomorWhatsapp = "0899990000";
    const waUrl = `https://wa.me/${nomorWhatsapp}?text=${encodedPesan}`;
    window.open(waUrl, "_blank");

    // alert dan scroll
    setIsAlertVisible(true);
    setTimeout(() => {
      if (topPageRef.current) {
        topPageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);

    // reset form
    setFormData({
      name: "",
      email: "",
      kebutuhan: "",
      pesan: "",
    });
    setErrors({});

    //tutup otomatis alert 
    setTimeout(() => {
      handleCloseAlert();
    }, 3000);
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

      <div ref={topPageRef} className="bg-gray-900 text-white px-6 font-sans">
        <main className="container mx-auto px-4 py-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Form Kontak */}
            <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                Hubungi Kami
              </h2>

              {isAlertVisible && (
                <div
                  className={`transition-all duration-500 ease-in-out transform mb-6 
                  bg-gray-800 p-4 rounded-lg border border-gray-700 border-l-4 border-l-yellow-500
                  ${isLeaving ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8.02 8.02a1 1 0 01-1.414 0l-3.02-3.02a1 1 0 111.414-1.414l2.313 2.313 7.313-7.313a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-semibold">
                          Pesan Berhasil Dikirim
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Pesanmu berhasil terkirim! Kami akan segera menghubungi Anda kembali.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleCloseAlert}
                      className="text-gray-400 hover:text-yellow-400 ml-4"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@example.com"
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Kebutuhan */}
                <div>
                  <label htmlFor="kebutuhan" className="block text-gray-300 mb-2">
                    Kebutuhan Anda
                  </label>
                  <select
                    id="kebutuhan"
                    value={formData.kebutuhan}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.kebutuhan ? "border-red-500" : "border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                  >
                    <option value="">Pilih jenis kebutuhan</option>
                    <option value="web">Desain & Pengembangan Web</option>
                    <option value="mobile">Aplikasi Mobile</option>
                    <option value="branding">Branding & Identitas Visual</option>
                    <option value="marketing">Marketing Digital & Konten</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  {errors.kebutuhan && (
                    <p className="text-red-500 text-sm mt-1">{errors.kebutuhan}</p>
                  )}
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="pesan" className="block text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    rows="5"
                    value={formData.pesan}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan Anda secara singkat..."
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.pesan ? "border-red-500" : "border-gray-600"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white`}
                  ></textarea>
                  {errors.pesan && (
                    <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
                  )}
                </div>

                {/* Tombol Submit */}
                <button
                  type="submit"
                  className="w-full btn-hover px-8 py-3 rounded-lg font-semibold"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Informasi Kontak */}
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg mt-3 border border-gray-700">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Kontak Langsung
                </h3>
                <p className="text-gray-300 mb-4">
                  Butuh bantuan cepat? Hubungi tim kami melalui metode berikut:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>Senin - Jumat</strong>: 08:00 - 17:00 WIB
                  </li>
                  <li>
                    <strong>Sabtu - Minggu</strong>: Tutup
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  WhatsApp & Email
                </h3>
                <p className="text-gray-300 mb-4">
                  Hubungi kami langsung melalui saluran berikut:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>WhatsApp</strong>: +62 897-625-343
                  </li>
                  <li>
                    <strong>Email</strong>: info@creativenekoproject.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-6 bg-gray-900 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Creative Neko Project. Semua hak dilindungi.</p>
        </footer>
      </div>
    </>
  );
}
