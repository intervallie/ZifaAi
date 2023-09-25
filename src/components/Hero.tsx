import React from 'react';
import ExportImage from '../images/export1.jpg'
export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1">
      <svg
        width="1360"
        height="578"
        viewBox="0 0 1360 578"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="illustration-01"
          >
            <stop stopColor="#FFF" offset="0%" />
            <stop stopColor="#EAEAEA" offset="77.402%" />
            <stop stopColor="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fillRule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 text-left pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400"
                data-aos="zoom-y-out" 
              >
                Trading,
              </h1>
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400"
                data-aos="zoom-y-out"
              >
                Export,
              </h1>
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400"
                data-aos="zoom-y-out"
              >
                Import.
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out">
                  Whatever you need, we can provide you with the best industrial
                  goods and local commodities from Indonesia!
                </p>
              </div>
            </div>

            <div className="md:w-1/2 md:h-auto overflow-hidden relative">
              <img
                src={ExportImage}
                alt="Export Image 01"
                style={{
                  maxWidth: "100%", // Set the maximum width to 100% to make it responsive
                  borderRadius: "10%", // Set the radius to 10%
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
