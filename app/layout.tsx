"use client";
import React, { useState, useEffect } from 'react';
import './globals.css';
import Fonts from '@/components/font';

function Layout({ children }: { children: React.ReactNode }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['iphone15pmg.png', '3iphone15s.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <html lang="en">
      <head>
        <Fonts/>
        <title>Skeleton</title>
      </head>
      <body>
        <div className="Navbar">
          <a href="/">
            <div className="navname">
              <img src="Vector.png" alt="vector" />
              <h1 className="topname">SKELETON</h1>
            </div>
          </a>  
          <button className="download-app">Download App</button>
        </div>
        <main>
          <div className="homepage">
            <div className="home-img-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className={`home-img ${currentImage === index ? 'active' : 'inactive'} ${index === 1 ? 'image-2' : ''}`}
                />
              ))}
            </div>
            {/* ... rest of the homepage content ... */}
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}

export default Layout;
