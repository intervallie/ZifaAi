import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode; // Specify the type as React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={"font-inter antialiased bg-white text-gray-900 tracking-tight"}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children} {/* This is where the content will be inserted */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

const Home = () => {
  return (
    <RootLayout>
      {/* Components are passed as children to RootLayout */}
      <>
        <Hero />
        <Features />
        <Newsletter />
      </>
    </RootLayout>
  );
};

export default Home;