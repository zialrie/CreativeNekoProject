import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// component
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

// pages
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Event from '../pages/Event.jsx';
import EventDetail from '../pages/EventDetail.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import PortfolioDetail from '../pages/PortfolioDetail.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/Login.jsx';
import DashboardAdmin from '../pages/DashboardAdmin.jsx';
import DashboardUser from '../pages/DashboardUser.jsx';
import DashboardEvent from '../pages/DashboardEvent.jsx';
import Signup from '../pages/Signup.jsx';
import EventRegister from "../pages/EventRegister";
import NotFound from "../pages/NotFound.jsx";

//menu dropdown
import EventUser from "../dropdown/EventUser.jsx";
import ProfileUser from "../dropdown/ProfileUser.jsx";

export default function AppContent() {
  const location = useLocation();

  const knownPaths = [
    "/", "/services", "/event",
    "/portfolio", "/contact",
    "/dashboard", "/dashboarduser", "/dashboardevent",
    "/login", "/signup", "/home", "/profile-user", "/event-user"
  ];

  const isKnownPath = knownPaths.some(path => location.pathname === path) ||
    location.pathname.startsWith("/events/") ||
    location.pathname.startsWith("/portfolio/") ||
    location.pathname.startsWith("/event-register/");

  const is404 = !isKnownPath; 

  const hideNavbarOn = ["/login", "/signup", "/dashboard","/dashboarduser", "/dashboardevent"];
  const hideFooterOn = ["/login", "/signup", "/contact", "/dashboard", "/dashboarduser", "/dashboardevent"];

  return (
    <div className="min-h-screen bg-gray-900">
      {!hideNavbarOn.includes(location.pathname.toLowerCase()) && !is404 && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/event-register/:id" element={<EventRegister />} />
        <Route path="/event-user" element={<EventUser />} />
        <Route path="/profile-user" element={<ProfileUser />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path="/dashboardevent" element={<DashboardEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute role="user">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboarduser"
          element={
            <ProtectedRoute role="admin">
              <DashboardUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboardevent"
          element={
            <ProtectedRoute role="admin">
              <DashboardEvent />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideFooterOn.includes(location.pathname.toLowerCase()) && !is404 && <Footer />}
    </div>
  );
}
