import { Marquee } from "@/components/magicui/marquee";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack Smith",
    role: "Product Designer",
    text: "I've never seen anything like this before. It's amazing. I love it.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Jill Johnson",
    role: "UI/UX Designer",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    rating: 4.5,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "John Davis",
    role: "Frontend Developer",
    text: "I'm at a loss for words. This is amazing. I love it.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Benjamin Evans",
    role: "Product Designer",
    text: "Pagedone, managing my portfolio has never been easier. This powerful tool provides real-time updates.",
    rating: 5.0,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Sarah Wilson",
    role: "Marketing Manager",
    text: "The interface is intuitive and the features are exactly what I needed for my projects.",
    rating: 4.8,
    avatarSrc: "/diverse-group.png",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    text: "This tool has significantly improved my workflow. Highly recommended!",
    rating: 4.9,
    avatarSrc: "/diverse-group.png",
  },
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
