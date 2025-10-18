import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="container-std py-8 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
