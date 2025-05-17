import { Play, ArrowRight, Check } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex rounded-2xl px-5 sm:!px-32 !py-32  -mb-10 flex-col lg:flex-row w-full min-h-screen bg-black text-white p-4 lg:p-16 relative z-10 ">
      {/* SVG Definitions */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-another1" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(-1, -1) translate(-1, -1)"
              d="M0 0.0417599C0 0.0186966 0.0250721 0 0.056 0H0.6105C0.641428 0 0.6665 0.0186965 0.6665 0.0417599V0.148024C0.6665 0.171087 0.691572 0.189784 0.7225 0.189784H0.944C0.974928 0.189784 1 0.20848 1 0.231544V0.95824C1 0.981303 0.974928 1 0.944 1H0.056C0.0250721 1 0 0.981303 0 0.95824V0.0417599Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Left Section with Clip Path */}
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        <div
          className="relative w-full h-[500px] lg:h-[600px] overflow-hidden"
          style={{ clipPath: "url(#clip-another1)" }}
        >
          {/* <img
            src="/placeholder.svg?key=9lhvj"
            alt="Team collaboration"
            fill
            className="object-cover grayscale"
          /> */}
          <video
            src="/about.webm"
            autoPlay
            muted
            loop
            className="object-cover h-full w-full"
          />

          {/* Play Button Overlay */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full p-4">
            <div className="bg-white/80 rounded-full p-3">
              <Play className="w-8 h-8 text-gray-700 ml-1" />
            </div>
          </div> */}

          {/* Years of Experience Box */}
        </div>
        <div className="absolute bottom-2 flex gap-3 w-fit left-0 bg-violet-500 text-black px-4 py-4 font-bold rounded-tl-xl rounded-br-3xl rounded-tr-3xl rounded-bl-xl">
          <div className="text-3xl lg:text-6xl font-black w-max text-white">5</div>
          <div className="grid w-max">
            <span className="text-xl lg:text-4xl text-white">Years</span>{" "}
            <span className="text-sm text-white">of Experience</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center">
        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-300 to-violet-500 rounded-full text-sm font-medium shadow-sm mb-4 animate-shimmer text-white w-fit">
          About Us
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          We're <span className="text-violet-400">GroViaUs</span>
          <br />
          Digital Agency
        </h1>

        <p className="text-gray-400 mb-8">
        We are a creative digital agency that transforms ideas into exceptional digital experiences. With our innovative approach and cutting-edge technology, we help businesses thrive in the digital landscape.
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-violet-400 flex items-center justify-center mr-3">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span>Creative & Innovative</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-violet-400 flex items-center justify-center mr-3">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span>Experience Team Members</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-violet-400 flex items-center justify-center mr-3">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span>High Quality Services</span>
          </div>
        </div>

        <div className="flex items-center">
          <button className="flex items-center bg-violet-400 text-black pl-6 pr-3 py-2 rounded-full font-medium">
            Learn More
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ml-3">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>

          {/* <div className="ml-8">
            <div className="font-script text-2xl text-white">
              Jenny Alexander
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
