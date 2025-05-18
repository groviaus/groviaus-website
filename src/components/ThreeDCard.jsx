"use client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export default function ThreeDCard({ content = {} }) {
  const {
    image = "https://via.placeholder.com/400x300.png?text=Default+Image",
    heading = "Default Heading",
    description = "This is a fallback description. Customize it by passing the 'content' prop.",
    tags = ["Default", "Tag1", "Tag2"],
    buttonText = "Get Started"
  } = content;

  return (
    <CardContainer className="inter-var  ">
      <CardBody className="bg-white sm:bg-white/10  relative group/card dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.1] w-auto sm:w-full h-auto rounded-3xl p-5 sm:p-6 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-right bg-cover border sm:border-none ">
        
        {/* Top illustration section */}
        <CardItem translateZ="60" className="w-full relative h-40 sm:h-60">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={image}
              alt="card"
              className="w-full rounded-xl h-full object-cover hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
            />
          </div>
        </CardItem>

        {/* Heading */}
        <CardItem translateZ="60" className="text-3xl font-medium sm:font-bold sm:text-white mt-6 mb-2">
          {heading}
        </CardItem>

        {/* Description */}
        <CardItem translateZ="50" className="text-sm sm:text-white/90 mb-4">
          {description}
        </CardItem>

        {/* Tags */}
        <CardItem translateZ="50" className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 hover:bg-gray-200 hover:text-black transition-all duration-300 bg-gray-100 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </CardItem>

        {/* CTA Button */}
        <CardItem translateZ="70" className="w-full">
          <button className="w-full py-3 bg-orange-500 text-white font-medium rounded-full text-sm uppercase tracking-wide hover:bg-violet-500 transition-all duration-300 hover:cursor-none hover:shadow-2xl hover:drop-shadow-black/80">
            {buttonText}
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
