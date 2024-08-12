"use client";
import React, { useState, useEffect } from 'react';
import './globals.css';
import Fonts from '@/components/font';

export default function Layout({ children }: { children: React.ReactNode }) {
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
            <div className="clearfix">
              <div className="whatisskeleton">
                <h1>What is Skeleton?</h1>
                <h3>Everyone has skeletons in their cupboard. This is where you reveal yours. Speak your truth, find your tribe, retain your privacy.<br/> Eager to get started?</h3>
              </div>
              <div className="stores">
                <a href="https://www.google.com"><img src="playstore.png" alt='playstore' className="playstore"/></a>
                <a href="https://www.google.com"><img src="appstore.png" alt='appstore' className="appstore"/></a>
              </div>
            </div>
          </div>
          <div className="need">
          <div className="why-you-need">
            <div className="first-half-left">
              <div className="first-half-up">
                <h3>Have you ever wanted to share an intrusive thought without fear or shame? Here you can and no one would ever know it was you.</h3>
                <h2>Why you need Skeleton</h2>
              </div>
              <div className="first-half-down">
                <h3>We want people to tell their stories, unburden their mind and find a community of people that they can be themselves with.</h3>
                <h2>What we are doing with Skeleton?</h2>
              </div>
            </div>
            <div className="second-half-phone">
              <img src="2ndhalf.png" alt="2ndhalf"/>
            </div>
          </div>
          </div>
          <div className="new-world">
            <div className="newhead1">
            <h1 className="new-head">Welcome to a whole new world.</h1>
            </div>
            <div className="cards">
              <div className="card1-2">
                <div className="card1">
                  <div className="card1text">
                    <h2>Be completely anonymous</h2>
                    <h4>No profiles, no photos, just real conversations!!!</h4>
                  </div>
                  <img src="card1img.png" alt="card1img" />
                </div>
                <div className="card2">
                  <img src="card2img.png" alt="card2img" />
                  <div className="card2text">
                    <h2>Connect with your tribe</h2>
                    <h4>Here you can say what you mean and vibe with people who think so too</h4>
                  </div>
                </div>
              </div>
              <div className="card3-4">
                <div className="card3">
                  <img src="card3img.png" alt="" />
                  <div className="card3text">
                    <h2>Find your perfect match</h2>
                    <h4>Whatever you are looking for: fun, <span>love </span>or friendship. Match with someone that wants you too</h4>
                  </div>
                </div>
                <div className="card4">
                  <div className="card4text">
                    <h2>Say it with your chest!!!</h2>
                    <h4>Share your secrets, no matter how weird, raw or unfiltered.</h4>
                  </div>
                  <img src="card4img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="closing">
            <div className="closingcontent">
              <div className="closingtext">
                <h1>Connect with hundreds of people</h1>
                <h4>Join Skeleton, where hundreds share your interests. Create your account today and find your perfect match!</h4>
              </div>
              <div className="closingdowload">
                <a href="https://www.google.com"><img src="playstore.png" alt='playstore' className="playstore1"/></a>
                <a href="https://www.appstore.com"><img src="appstore.png" alt='appstore' className="appstore2"/></a>
              </div>
            </div>
            <div className="closingphoto">
            <img src="closingphoto.png" alt="closingphoto"/>
            </div>
          </div>
          <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
        <div className="logo-section">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="links-section">
          <div className="link-column1">
            <p>About Us</p>
            <p>FAQs</p>
            <p>How it works?</p>
          </div>
          </div>
          <div className="links-section2">
          <div className="link-column2">
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
            <p>Support</p>
          </div>
        </div>
        <div className="subscribe-section">
          <p>Subscribe to our Newsletter</p>
          <div className="buttonsection">
          <input type="email" placeholder="Enter your email address" className="newsletter" />
          <button className="button-style">Subscribe</button>
        </div>
        </div>
        </div>
        <div className="footer-bottom">
        <div className="social-section">
          <p>Social Accounts</p>
          <div className="social-icons">
            <img src="whatsapp.png" alt="WhatsApp" width={50} height={50} className="s1"/>
            <img src="facebook.png" alt="Facebook" width={50} height={50} className="s2"/>
            <img src="instaimg.png" alt="Instagram" width={50} height={50} className="s3"/>
            <img src="twitter.png" alt="Twitter" width={50} height={50}className="s4" />
            <img src="telegram.png" alt="Telegram" width={50} height={50} className="s5"/>
          </div>
        </div>
        <div className="download-section">
          <p>Download Skeleton Now</p>
          <div>
            <img src="playstore.png" alt="Google Play" width={150} height={50} className="img1"/>
            <img src="appstore.png" alt="App Store" width={150} height={50} className="img2"/>
          </div>
        </div>
        </div>
      </div>
    </footer>
        </main>
        {children}
      </body>
    </html>
  );
}
