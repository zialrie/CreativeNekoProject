import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

        // Admin login
        if (email === 'admin@gmail.com' && password === 'admin') {
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify({ name: 'Admin', email }));
            navigate('/dashboard');
            return;
        }

        // Regular user login
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const matchedUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
            localStorage.setItem('isAdmin', 'false');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(matchedUser));
            navigate('/');
        } else {
            alert('Email atau Password salah!');
        }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800/80 border border-gray-700 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Form Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Login
          </button>
          <p className="text-center text-gray-600 text-sm mt-4">
            Belum punya akun?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-yellow-400 hover:underline cursor-pointer"
            >
              Buat dulu
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
