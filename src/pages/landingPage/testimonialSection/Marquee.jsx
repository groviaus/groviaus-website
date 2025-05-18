import { Marquee } from "@/components/magicui/marquee";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Mohammad Naushad",
    role: "Founder @ Resilient Grow", 
    text: "GroViaUs delivered an outstanding website that perfectly represents our brand and drives real results.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Mohammad Taskin Alam",
    role: "Founder @ Technocratic Solutions",
    text: "Their innovative approach and technical expertise helped create exactly what we needed.",
    rating: 4.5,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Mohammad Anas Malik", 
    role: "Founder @ Amcoderbits",
    text: "Exceptional service and results. The website has transformed how we do business.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Md Ajaz",
    role: "Founder @ Eagle Infratech",
    text: "Professional, responsive and delivered a modern website that drives real business growth.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Sohail Sir",
    role: "Founder @ Lakshaya Dhanbad Coaching",
    text: "The perfect blend of design and functionality. Exactly what our business needed.",
    rating: 4.8,
    avatarSrc: "/diverse-group.png",
  },
  // {
  //   name: "Michael Chen",
  //   role: "Software Engineer",
  //   text: "This tool has significantly improved my workflow. Highly recommended!",
  //   rating: 4.9,
  //   avatarSrc: "/diverse-group.png",
  // },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ children, className }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-full cursor-none   sm:p-1",
        className
      )}
    >
      {children}
    </figure>
  );
};
export default function MarqueeVertical() {
  return (
    <div className="relative grid grid-cols-2 h-[500px] w-full flex-row items-center justify-center overflow-y-hidden overflow-x-auto">
      <Marquee pauseOnHover vertical className="[--duration:20s] md:block">
        {firstRow.map((review, index) => (
          <ReviewCard className={index == 0 ? "mt-3" : ""}>
            <TestimonialCard
              rating={review.rating}
              text={review.text}
              name={review.name}
              role={review.role}
              avatarSrc={review.avatarSrc}
            />
          </ReviewCard>
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] md:block"
      >
        {secondRow.map((review, index) => (
          <ReviewCard className={index == 0 ? "mt-3" : ""}>
            <TestimonialCard
              rating={review.rating}
              text={review.text}
              name={review.name}
              role={review.role}
              avatarSrc={review.avatarSrc}
            />
          </ReviewCard>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-stone-900"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900"></div>
    </div>
  );
}
