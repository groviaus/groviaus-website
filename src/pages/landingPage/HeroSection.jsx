import Navbar from "../header/Navbar";
import Hero from "../hero/Hero";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function HeroSection() {
  return (
    <div className="sm:min-h-screen sticky top-0 bg-white bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover  z-10 ">
      {/* Main container with grid lines */}
      <div className="mx-auto px-4 sm:px-6 relative">
        <div className="absolute inset-0 hidden sm:grid grid-cols-12 gap-4">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-full border-l border-gray-100"></div>
            ))}
        </div>

        <Navbar />
        <Hero />
        {/* <SmoothCursor /> */}
      </div>
    </div>
  );
}
