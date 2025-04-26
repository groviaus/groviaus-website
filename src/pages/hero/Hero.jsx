import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import GrowthWord from "../../components/GrowthWord";
export default function Hero() {
  return (
    <main className="relative mt-24 mb-28">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-600 tracking-widest uppercase font-medium mb-8 letter-spacing-2">
          CONSULTING, PROGRAMMING & DESIGN
        </p>

        <div className="flex items-center justify-center mb-1">
          <h1 className="text-5xl font-bold tracking-tight leading-none">
            We support
          </h1>
          <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center ml-3 flex-shrink-0">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 -mt-2 mb-4">
          <GrowthWord />
        </div>

        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6">
          of your busines
        </h1>

        <p className="text-gray-700 mb-2 text-lg leading-relaxed">
          We turn great ideas into working products
        </p>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          We focus on good communication and understanding your business
        </p>

        <div className="flex flex-col items-center gap-7">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3.5 rounded-full transition text-sm tracking-wide">
            Estimate the project
          </button>
          <Link
            to="#"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
          >
            More about us
          </Link>
        </div>
      </div>

      {/* Client logos */}
      <div className="mt-32 flex justify-center gap-16 opacity-40">
        <img
          src="/fila-logo-on-white.png"
          height={24}
          width={70}
          alt="FILA"
          className="object-contain"
        />
        <img
          src="/swoosh-icon.png"
          height={24}
          width={70}
          alt="Nike"
          className="object-contain"
        />
        <img
          src="/three-stripes-abstract.png"
          height={24}
          width={70}
          alt="Adidas"
          className="object-contain"
        />
        <img
          src="/reebok-vector-logo.png"
          height={24}
          width={70}
          alt="Reebok"
          className="object-contain"
        />
        <img
          src="/leaping-puma.png"
          height={24}
          width={70}
          alt="Puma"
          className="object-contain"
        />
      </div>

      {/* Transform badge */}
      <div className="absolute bottom-0 right-0 w-32 h-32">
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
                    className="text-[9px] font-medium tracking-[0.2em] uppercase"
                  >
                    TRANSFORM YOUR BUSINESS
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 transform -rotate-45" />
          </div>
        </div>
      </div>
    </main>
  );
}
