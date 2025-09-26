import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeIcon from "/src/assets/img/eye.png";
import userAvatar from "/src/assets/img/user.png";

export default function ProfileUser() {
  const [user, setUser] = useState(null);

  // Email
  const [email, setEmail] = useState("");
  const [editEmailMode, setEditEmailMode] = useState(false);

  // Username
  const [username, setUsername] = useState("");
  const [editUsernameMode, setEditUsernameMode] = useState(false);

  // Password
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn !== "true" || !currentUser) {
      navigate("/login");
      return;
    }
    setUser(currentUser);
    setEmail(currentUser.email || "");
    setUsername(currentUser.name || "");
  }, [navigate]);

  // simpan email
  const handleSaveEmail = () => {
    if (!email) {
      alert("Email tidak boleh kosong!");
      return;
    }
    const updatedUser = { ...user, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditEmailMode(false);
    alert("Email berhasil diperbarui!");
  };

  // simpan username
  const handleSaveUsername = () => {
    if (!username) {
      alert("Username tidak boleh kosong!");
      return;
    }
    const updatedUser = { ...user, name: username };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditUsernameMode(false);
    alert("Username berhasil diperbarui!");
  };

  // simpan password
  const handleSavePassword = () => {
    if (!newPassword || !confirmPassword) {
      alert("Password baru dan konfirmasi tidak boleh kosong!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Password baru dan konfirmasi tidak cocok!");
      return;
    }
    const updatedUser = { ...user, password: newPassword };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setPasswordMode(false);
    setNewPassword("");
    setConfirmPassword("");
    alert("Password berhasil diperbarui!");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 px-6 pb-10">
      <div className="max-w-3xl mx-auto">
        {/* Header Profil */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4">
            <img src={userAvatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-yellow-400">{user.name}</h1>
          <p className="text-gray-300 mt-1 text-center">Selamat datang di profil Anda</p>
        </div>

        {/* Card Profil */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400 border-b border-gray-700 pb-2 mb-4">
            Informasi Akun
          </h2>

          {/* Username */}
          <div className="mb-4">
            <p className="text-gray-300 mb-1">
              <strong>Username:</strong>
            </p>
            {editUsernameMode ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            ) : (
              <p className="text-white">{user.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <p className="text-gray-300 mb-1">
              <strong>Email:</strong>
            </p>
            {editEmailMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            ) : (
              <p className="text-white">{user.email}</p>
            )}
          </div>

          {/* Password Info */}
          {!passwordMode && (
            <div className="mb-4 relative">
              <p className="text-gray-300 mb-1">
                <strong>Password:</strong>
              </p>
              <div className="flex items-center">
                <p className="text-white mr-3">
                  {showCurrentPassword ? user.password : "•".repeat(8)}
                </p>
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="focus:outline-none"
                  title={showCurrentPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  <img src={eyeIcon} alt="Toggle Password" className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Form ubah password */}
          {passwordMode && (
            <div className="space-y-4">
              <div className="mb-4 relative">
                <p className="text-gray-300 mb-1">
                  <strong>Password Baru:</strong>
                </p>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-2.5 focus:outline-none"
                  >
                    <img src={eyeIcon} alt="Toggle Password" className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mb-4 relative">
                <p className="text-gray-300 mb-1">
                  <strong>Konfirmasi Password:</strong>
                </p>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-2.5 focus:outline-none"
                  >
                    <img src={eyeIcon} alt="Toggle Confirm Password" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tombol */}
          <div className="flex gap-4 mt-6 justify-center flex-wrap">
            {/* Username */}
            {editUsernameMode ? (
              <>
                <button
                  onClick={handleSaveUsername}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Simpan Username
                </button>
                <button
                  onClick={() => setEditUsernameMode(false)}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-white font-semibold transition transform hover:scale-105"
                >
                  Batal
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditUsernameMode(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
              >
                Ubah Username
              </button>
            )}

            {/* Email */}
            {editEmailMode ? (
              <>
                <button
                  onClick={handleSaveEmail}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Simpan Email
                </button>
                <button
                  onClick={() => setEditEmailMode(false)}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-white font-semibold transition transform hover:scale-105"
                >
                  Batal
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditEmailMode(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
              >
                Ubah Email
              </button>
            )}

            {/* Password */}
            {passwordMode ? (
              <>
                <button
                  onClick={handleSavePassword}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Simpan Password
                </button>
                <button
                  onClick={() => {
                    setPasswordMode(false);
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-white font-semibold transition transform hover:scale-105"
                >
                  Batal
                </button>
              </>
            ) : (
              <button
                onClick={() => setPasswordMode(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
              >
                Ubah Password
              </button>
            )}
          </div>

          {/* Tombol kembali ke Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => (window.location = "/")}
              className="text-yellow-300 underline hover:text-yellow-200 transition"
            >
              ← Kembali ke Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
