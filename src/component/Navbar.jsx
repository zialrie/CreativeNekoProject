import React, { useEffect, useState } from "react";
import logo from "/src/assets/img/kucing.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

/** Komponen alert toast supaya bisa dipakai login & logout */
const AlertToast = ({ visible, leaving, title, message }) => {
  if (!visible) return null;
  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 
        w-[90%] max-w-lg   
        transition-all duration-500 ease-in-out transform 
        bg-gray-800 px-4 py-3 rounded-md border border-gray-700 border-l-4 border-l-yellow-500 
        shadow-lg
        ${leaving ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-0.5 text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <h3 className="text-yellow-400 font-semibold text-sm">{title}</h3>
            <p className="text-gray-300 text-xs">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // state notif
  const [alert, setAlert] = useState({ visible: false, title: "", message: "" });
  const [isLeaving, setIsLeaving] = useState(false);

  const showToast = (title, message) => {
    setAlert({ visible: true, title, message });
    setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setAlert({ visible: false, title: "", message: "" });
        setIsLeaving(false);
      }, 500);
    }, 2000);
  };

  const handleLoginSuccess = (username) => {
    sessionStorage.setItem("loginToastShown", "true");
    showToast("Login Berhasil", `Selamat datang kembali, ${username}!`);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUser = localStorage.getItem("user");
    const adminStatus = localStorage.getItem("isAdmin") === "true";

    setIsAdmin(adminStatus);
    const toastAlreadyShown = sessionStorage.getItem("loginToastShown") === "true";

    if (isLoggedIn && storedUser && !adminStatus) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (!toastAlreadyShown) {
        handleLoginSuccess(parsedUser.name);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoutConfirmed = () => {
    // hapus data login
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("user");
    sessionStorage.removeItem("loginToastShown");
    setUser(null);
    setIsAdmin(false);
    setShowConfirm(false);

    // tutup menu mobile
    setIsMenuOpen(false);

    // pindah halaman dan scroll atas (smooth)
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // notif logout
    showToast("Logout Berhasil", "Anda berhasil keluar.");
  };

  const handleNavClick = (item) => {
    closeMenu();
    if (!item.isScroll) {
      navigate(item.to);
      window.scrollTo(0, 0);
    }
  };

  const menuItems = [
    { name: "Home", to: isHome ? "home" : "/", isScroll: isHome, offset: 0 },
    { name: "Services", to: isHome ? "services" : "/services", isScroll: isHome, offset: -80 },
    { name: "Portfolio", to: isHome ? "portfolio" : "/portfolio", isScroll: isHome, offset: -80 },
    { name: "Event", to: isHome ? "events" : "/event", isScroll: isHome, offset: -80 },
    { name: "Contact", to: isHome ? "contact" : "/contact", isScroll: isHome, offset: -80 },
  ];

  if (isAdmin) return null;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo + User */}
            <div className="flex items-center gap-4 relative">
              <RouterLink to="/">
                <img src={logo} alt="logo" className="h-10 cursor-pointer" />
              </RouterLink>

              {/* Dropdown user */}
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu((prev) => !prev)}
                    className="flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition"
                  >
                    Haloo! {user.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transform transition-transform ${
                        showUserMenu ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Panel dropdown */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                      <RouterLink
                        to="/profile-user"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Profil Saya
                      </RouterLink>
                      <RouterLink
                        to="/event-user"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Event Saya
                      </RouterLink>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.isScroll ? (
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      activeClass="text-yellow-400"
                      className="text-white cursor-pointer hover:text-yellow-400 transition"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      onClick={() => handleNavClick(item)}
                      className={`transition ${
                        location.pathname === item.to
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </RouterLink>
                  )}
                </div>
              ))}

              {/* tombol login/logout desktop */}
              {user ? (
                <button
                  onClick={() => setShowConfirm(true)}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold hover:from-yellow-600 hover:to-yellow-800 shadow-md transition"
                >
                  Logout
                </button>
              ) : (
                <RouterLink
                  to="/login"
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold hover:from-yellow-600 hover:to-yellow-800 shadow-md transition"
                >
                  Login
                </RouterLink>
              )}
            </div>

            {/* Hamburger */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`sm:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
            } overflow-hidden`}
          >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg border border-gray-700">
              {user && (
                <div className="px-4 pb-2 text-yellow-400 font-semibold">
                  Haloo! {user.name}
                </div>
              )}

              {menuItems.map((item, index) => (
                <div key={`${item.name}-${index}`} className="px-4 py-2">
                  {item.isScroll ? (
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      onClick={closeMenu}
                      activeClass="text-yellow-400"
                      className="block w-full text-white text-lg hover:text-yellow-400 transition cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      onClick={() => handleNavClick(item)}
                      className={`block w-full text-lg transition ${
                        location.pathname === item.to
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </RouterLink>
                  )}
                </div>
              ))}

              <div className="px-4 py-2 border-t border-gray-400">
                {user ? (
                  <button
                    onClick={() => setShowConfirm(true)}
                    className="block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold hover:from-yellow-600 hover:to-yellow-800 shadow-md transition"
                  >
                    Logout
                  </button>
                ) : (
                  <RouterLink
                    to="/login"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold hover:from-yellow-600 hover:to-yellow-800 shadow-md transition"
                  >
                    Login
                  </RouterLink>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==== Alert sukses login/logout ==== */}
        <AlertToast
          visible={alert.visible}
          leaving={isLeaving}
          title={alert.title}
          message={alert.message}
        />
        {/* ==== End Alert ==== */}
      </nav>

      {/* Modal Logout */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900/90 text-white rounded-3xl shadow-2xl ring-2 ring-yellow-400/30 p-6 w-80 animate-popIn">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400/20 rounded-full p-3 mb-3">
                <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2 text-yellow-400 text-center">Yakin mau logout?</h2>
              <p className="text-center text-gray-300 mb-6 text-sm">
                Sesi kamu akan berakhir dan kembali ke halaman utama.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 shadow-md transition"
              >
                Tidak
              </button>
              <button
                onClick={handleLogoutConfirmed}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-md transition"
              >
                Ya, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppNavbar;
