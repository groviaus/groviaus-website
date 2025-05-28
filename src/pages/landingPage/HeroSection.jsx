import Navbar from "../header/Navbar";
import Hero from "../hero/Hero";
import Orbits from "../hero/Orbits";
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
        <Orbits size={700} border="!border-t-1" />
        <Orbits size={850} border="!border-b-1" />
        <Orbits size={1000} border="!border-r-1" />
        <Orbits size={1150} border="!border-l-1" />
        <Orbits size={1300} border="!border-t-1" />
        <Orbits size={1450} border="!border-b-1" />
        <Orbits size={1600} border="!border-r-1" />
        <Navbar />
        <Hero />
        {/* <SmoothCursor /> */}
      </div>
    </div>
  );
}
