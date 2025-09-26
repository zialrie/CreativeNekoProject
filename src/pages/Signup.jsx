import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if (error) setError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError("");
    setSuccess("");

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Semua field harus diisi");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Format email tidak valid");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    try {
      // Ambil existing users 
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Cek email 
      const userExists = existingUsers.find(user => user.email === formData.email);
      if (userExists) {
        setError("Email sudah terdaftar");
        return;
      }

      // Tambah user baru
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      };

      // Simpan ke array users
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Tampilkan pesan sukses
      setSuccess("Akun berhasil dibuat! Silakan login dengan akun baru Anda.");
      
      // Reset form
      setFormData({ name: "", email: "", password: "" });

      // Log untuk debugging
      console.log("User berhasil didaftarkan:", newUser);

    } catch (err) {
      setError("Terjadi kesalahan saat membuat akun");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          Daftar Akun Baru
        </h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              placeholder="contoh@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Daftar
          </button>
        </div>

        <p className="text-gray-400 text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <button
            onClick={() => navigate("/Login")}
            className="text-yellow-400 hover:underline cursor-pointer focus:outline-none"
          >
            Masuk di sini
          </button>
        </p>
      </div>
    </div>
  );
}