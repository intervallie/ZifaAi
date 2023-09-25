import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import IndustrialImage from "../images/industrial.png"
import NaturalImage from "../images/natural_goods.png";
import NaturalSVG from "../images/nature-svgrepo-com.svg"

export default function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef<HTMLDivElement | null>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-gray-600">
              PT Zifa Andalan Indonesia is a company engaged in trading, export, and import, which established on October 21st, 2013. At this time, the products traded are included spare part Industrial products, instrument, mechanical oil and gas, and local commodities from Indonesia.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                Vision
              </h3>
              <p className="text-xl text-gray-600">
                To become a leading trading company that is recognized globally for excellence in ensuring product quality, high competence, dominance in resources and marketing networks at home and abroad and is determined to be a reliable partner and make a positive contribution to society and the environment.
              </p>
            </div>
            <div className="md:col-span-1 md:mt-6 hidden md:block">
              <div className="h-full border-l border-gray-300"></div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-5 md:mt-6" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                Mission
              </h3>
              <ul className="list-disc text-xl text-gray-600 pl-4">
                <li>Ensure Product Quality</li>
                <li>Develop Competency</li>
                <li>Mastering Marketing Resources and Networks Competitively</li>
                <li>Provide Superior Customer Service</li>
              </ul>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 md:mt-6">
                <h3 className="text-2xl font-bold mb-3">Our Product</h3>
                <p className="text-xl text-gray-600">
                  We serve the best product to trade with you!
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Industrial Goods
                    </div>
                    <div className="text-gray-600">
                      At Zifa Andalan, we are your gateway to a world of industrial solutions. With a steadfast commitment to quality and precision, we've been at the forefront of the export-import trading industry for years. Our comprehensive range of industrial goods is engineered to empower your business and drive success. We provide you various of industrial goods, such as:
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Commodities
                    </div>
                    <div className="text-gray-600">
                      Zifa Andalan is also your trusted source for premium commodities from the heart of nature. With a commitment to quality and sustainability, we bring you the finest seaweed and cloves, harvested and curated to perfection.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <image href={NaturalSVG} width="12" height="12" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 md:mt-6">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="md:max-w-none mx-auto rounded"
                        src={IndustrialImage}
                        alt="Features bg"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="md:max-w-none mx-auto rounded"
                        src={NaturalImage}
                        alt="Features bg"
                        style={{ maxWidth: "90%", height: "auto" }}
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
