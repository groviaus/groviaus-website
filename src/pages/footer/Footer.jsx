"use client";
import { Facebook, Instagram, Twitter, Youtube, ArrowBigUp } from "lucide-react";
import CircularText from "../../../yes/CircularText/CircularText";
import img from "@/assets/images/footer/footerBg.jpg";
export default function Footer() {
  return (
    <div className="sm:min-h-screen flex py-10 flex-col justify-between relative overflow-hidden z-[110] rounded-t-3xl">
      {/* Textured background overlay */}
      <div
        className="absolute inset-0 z-10 "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 container max-w-7xl mx-auto px-6 sm:pt-20  sm:pb-10 flex flex-col justify-center">
        <div className="flex  justify-between items-start">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-7xl font-bold tracking-wider leading-tight">
              LET'S DISCUSS A<br />
              PROJECT TOGETHER
            </h1>
          </div>

          <div>
            <CircularText
              text="Groviaus*Digital*Marketing*"
              onHover="goBonkers"
              spinDuration={50}
              className="custom-class bg-white !w-[150px] !h-[150px] sm:!w-[200px] sm:!h-[200px]"
              textClassName="font-semibold text-stone-800 text-lg sm:text-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-3xl font-bold tracking-widest">
              Groviaus
            </h2>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-white hover:text-violet transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-violet transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-violet transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-violet transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                <path d="M12 16a4 4 0 0 1-4-4c0-1.1.9-2 2-2s2 .9 2 2c0 1.1.9 2 2 2s2-.9 2-2a4 4 0 0 0-4-4" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-violet transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <nav>
            <ul className="flex flex-wrap space-x-8">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-violet transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-violet transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-violet transition-colors"
                >
                  Blog
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="text-white hover:text-violet transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-6 md:mt-0 text-gray-400 text-sm">
            © Groviaus 2025. All rights reserved
            
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="w-14 h-14 rounded-full bg-violet-400 flex items-center justify-center shadow-lg transition-colors animate-bounce">
          <ArrowBigUp className="stroke-white fill-white " size={35} />
        </button>
      </div>
    </div>
  );
}
