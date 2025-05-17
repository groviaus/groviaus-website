import MarqueeVertical from "./Marquee";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const Testimonial = () => {
  return (
    <section className="testimonial  bg-stone-900  z-[999] relative  border-2  border-purple-100 shadow-2xl rounded-4xl h-max py-18 m-1 sm:mx-10 -mt-5 px-2 sm:p-6 sm:py-10">
      <div className="sm:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col justify-center sm:items-start items-center">
          <h3 className="text-base sm:text-lg font-medium text-violet-300 rounded-full bg-violet-500/10 px-4 py-2 border-2 border-violet-500/40    shadow-sm shadow-violet-500/40">
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-6xl  text-center sm:text-left font-medium sm:font-bold  text-violet-200">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-center max-w-[300px] sm:max-w-none sm:text-left text-base sm:text-xl">
            {/* Hear firsthand how we’ve helped businesses thrive. */}
            Discover Why Industry Leaders Call Us 'The Growth Architects'
          </p>
          <p className="text-gray-400 text-2xl"></p>
          <button className="sm:mt-6 inline-flex items-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors mb-6 sm:mb-0">
            View all testimonials
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right column - Testimonials */}
        <div className="lg:col-span-6">
          {/* Testimonial 1 */}
          {/* <TestimonialCard
            rating={5.0}
            text="Pagedone, managing my portfolio has never been easier. This powerful tool provides real-time updates."
            name="Benjamin Evans"
            role="Product Designer"
            avatarSrc="/diverse-group.png"
          /> */}
          <MarqueeVertical />
        </div>
      </div>
      <div className="hidden sm:block">
        <SmoothCursor />
      </div>
    </section>
  );
};

export default Testimonial;
