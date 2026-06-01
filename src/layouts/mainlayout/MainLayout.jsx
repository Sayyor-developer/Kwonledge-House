import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './MainLayout.css'; // CSS ulandi

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;