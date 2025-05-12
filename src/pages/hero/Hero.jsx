import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import GrowthWord from "../../components/GrowthWord";
import {Mouse, Circle, MousePointer2, TrendingUp } from 'lucide-react';
import CircleandCursor from "@/components/CircleandCursor";
export default function Hero() {
  return (
    <main className="relative mt-12 sm:mt-24 pb-16  sm:mb-28 px-4 sm:px-0 ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-600 tracking-widest uppercase font-medium mb-4 sm:mb-8 letter-spacing-2">
          CONSULTING, PROGRAMMING & DESIGN
        </p>

        <div className="flex items-center justify-center mb-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-none">
            We support
          </h1>
          <div className="bg-purple-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ml-2 sm:ml-3 flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 -mt-2 mb-4">
          <GrowthWord />
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 -mt-2 mb-4">
          <CircleandCursor />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
          of your busines
        </h1>
        </div>

        <p className="text-gray-700 mb-2 text-base sm:text-lg leading-relaxed">
          We turn great ideas into working products
        </p>
        <p className="text-gray-700 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
          We focus on good communication and understanding your business
        </p>

        <div className="flex flex-row mx-auto  w-full justify-center items-center gap-4 sm:gap-7">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition text-sm tracking-wide flex items-center justify-center cursor-none">
            Grow your business
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2 mt-1" />
          </button>
          {/* <button
            to="#"
            className="bg-slate-50 hover:bg-white text-slate-800 border border-slate-800 hover:border-slate-700 font-medium px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition text-sm tracking-wide"
          >
            More about us
          </button> */}
        </div>
      </div>


      {/* Transform badge
      <div className="hidden sm:block absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text>
                  <textPath
                    xlinkHref="#circlePath"
                    className="text-[7px] sm:text-[9px] font-medium tracking-[0.2em] uppercase"
                  >
                    TRANSFORM YOUR BUSINESS
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 transform -rotate-45" />
          </div>
        </div>
      </div> */}
    </main>
  );
}


