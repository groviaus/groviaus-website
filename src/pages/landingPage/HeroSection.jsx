import Navbar from "../header/Navbar";
import Hero from "../hero/Hero";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function HeroSection() {
  return (
    <div
      id="home"
      className="sm:min-h-screen sticky top-0 bg-white bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover  z-10 "
    >
      {/* Main container with grid lines */}
      <div className="mx-auto px-4 sm:px-6 relative overflow-hidden">
        {/* <div className="absolute inset-0 hidden sm:grid grid-cols-12 gap-4">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-full border-l border-gray-100"></div>
            ))}
        </div> */}
        <div className="hidden sm:block">
          <div className="absolute bg-transparent rounded-full inset-0 size-[700px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[700px] border-t-1  border-violet-500 animate-spin z-[1]"
            ></div>
          </div>
          <div className="absolute bg-transparent rounded-full inset-0 size-[850px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[850px]  border-b-1 border-violet-500 animate-spin z-[1]"
            ></div>
          </div>
          <div className="absolute bg-transparent rounded-full inset-0 size-[1000px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[1000px]  border-r-1 border-violet-500 animate-spin z-[1]"
            ></div>
          </div>
          <div className="absolute bg-transparent rounded-full inset-0 size-[1150px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[1150px]  border-l-1 border-violet-500 animate-spin z-[1]"
            ></div>
          </div>
          <div className="absolute bg-transparent rounded-full inset-0 size-[1300px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[1300px]  border-t-1 border-violet-500 animate-spin z-[1]"
            ></div>
          </div>
          <div className="absolute bg-transparent rounded-full inset-0 size-[1450px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div
              style={{ animationDuration: "5s" }}
              className="absolute bg-transparent rounded-full inset-0 size-[1450px]  border-b-1 border-violet-300 animate-spin z-[1]"
            ></div>
          </div>
        </div>
        <div className="absolute bg-transparent rounded-full inset-0 size-[1600px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          <div
            style={{ animationDuration: "5s" }}
            className="absolute bg-transparent rounded-full inset-0 size-[1600px]  border-r-1 border-violet-300 animate-spin z-[1]"
          ></div>
        </div>
        <Navbar />
        <Hero />
        {/* <SmoothCursor /> */}
      </div>
    </div>
  );
}
