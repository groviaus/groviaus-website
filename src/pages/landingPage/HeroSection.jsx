import Navbar from "../header/Navbar"
import Hero from "../hero/Hero"

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container with grid lines */}
      <div className="mx-auto px-6 relative">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-full border-l border-gray-100"></div>
            ))}
        </div>

        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
