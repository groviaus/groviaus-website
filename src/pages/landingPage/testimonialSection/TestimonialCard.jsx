/* eslint-disable no-unused-vars */
import { Star } from "lucide-react";

const TestimonialCard = ({ rating, text, name, role, avatarSrc }) => {
    return (
    //   <div className="bg-transparent rounded-xl p-3 sm:p-6 flex flex-col border-2 border-violet-400    sm:w-full">
      <div className="bg-transparent rounded-xl p-4 sm:p-6 flex flex-col border-2 border-violet-500/40 shadow-lg shadow-violet-500/50">
        {/* Rating */}
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="ml-2 text-xl font-semibold text-white">{rating.toFixed(1)}</span>
        </div>
  
        {/* Testimonial text */}
        <p className="text-gray-300 sm:mb-6 flex-grow text-sm sm:text-base ">{text}</p>
  
        {/* Divider */}
        <div className="border-t border-zinc-700 my-4"></div>
  
        {/* User info */}
        <div className="flex sm:flex-row flex-col sm:items-center">
          <div className="hidden sm:block min-w-10 min-h-10 w-10 h-10 rounded-full overflow-hidden">
            <img src={ "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/diverse-group-zWYqC8IDf1vB2UcLXHZJNFY5ssQWG2.png"} alt={`Avatar of ${name}`} className="w-full h-full object-cover" />
          </div>
          <div className="sm:ml-3">
            <p className="font-medium text-white">{name}</p>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    )
  }

export default TestimonialCard;