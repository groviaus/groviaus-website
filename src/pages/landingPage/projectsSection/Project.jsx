import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Star,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";
import resilientgrow from "@/assets/images/project/resilientgrow.webp"
import lts from "@/assets/images/project/LTS.webp"
import amcoderbit from "@/assets/images/project/amcoderbits.webp"
import lakshaya from "@/assets/images/project/lakshaya.webp"

const Project = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e, cardId) => {
    if (hoveredCard === cardId) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Resilient Grow - Share Market Institute",
      tags: ["Website"],
      image: resilientgrow,
      buttonColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconColor: "text-white",
      imagePosition: "object-left",
      rating: 4.9,
      reviews: 124,
      date: "May 2023",
      duration: "8 weeks",
      link: "https://resilientgrow.in",
    },
    {
      id: 2,
      title: "LTS - HR Management System",
      tags: ["Web App"],
      image: lts,
      buttonColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconColor: "text-white",
      imagePosition: "object-right",
      rating: 4.8,
      reviews: 98,
      date: "June 2023",
      duration: "6 weeks",
      link: "https://lts-system.vercel.app",
    },
    {
      id: 3,
      title: "Amcoderbits - Digital Marketing Agency",
      tags: ["Website"],
      image: amcoderbit,
      buttonColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconColor: "text-white",
      imagePosition: "object-left",
      rating: 4.9,
      reviews: 124,
      date: "May 2023",
      duration: "8 weeks",
      link: "https://amcoderbits.com",
    },
    {
      id: 4,
      title: "Lakshaya - Best Coaching Institute in Dhanbad",
      tags: ["Website"],
      image: lakshaya,
      buttonColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconColor: "text-white",
      imagePosition: "object-right",
      rating: 4.8,
      reviews: 98,
      date: "June 2023",
      duration: "6 weeks",
      link: "https://www.thelakshyadhanbad.com",
    },
  ];

  return (
    <div
      id="work"
      ref={containerRef}
      className="mx-auto md:mx-5 shadow-2xl z-[100] relative px-5 py-30 bg-white rounded-4xl overflow-hidden"
    >
      <div
        className={`text-center mb-20 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-300 to-violet-500 rounded-full text-sm font-medium shadow-sm mb-4 animate-shimmer text-white">
          Our Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
          <span className="inline-block animate-reveal-text">Featured</span>{" "}
          <span
            className="inline-block animate-reveal-text"
            style={{ animationDelay: "100ms" }}
          >
            Projects
          </span>
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          Explore our latest work showcasing innovative design solutions for
          digital products
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            className={`bg-violet-100 cursor-none drop-shadow-lg rounded-xl sm:rounded-3xl overflow-hidden relative transition-all duration-700 ease-out group card-3d-container ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{
              transitionDelay: `${index * 200}ms`,
              transform:
                hoveredCard === project.id
                  ? `translateY(-12px) perspective(1000px) rotateX(${
                      mousePosition.y / 25 - 10
                    }deg) rotateY(${mousePosition.x / 25 - 15}deg)`
                  : "translateY(0) perspective(1000px) rotateX(0) rotateY(0)",
              boxShadow:
                hoveredCard === project.id
                  ? "0 30px 60px -15px rgba(0, 0, 0, 0.2), 0 15px 30px -5px rgba(0, 0, 0, 0.15)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 5px 15px -5px rgba(0, 0, 0, 0.04)",
              transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
          >
            <div className="relative sm:p-5 sm:pt-4 pb-0 md:h-[380px] rounded-t-xl sm:rounded-t-3xl overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    hoveredCard === project.id
                      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0), rgba(0,0,0,0.4))`
                      : "",
                }}
              ></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full rounded-t-lg sm:rounded-t-2xl object-cover object-top transition-transform duration-1000 ease-out"
                style={{
                  transform:
                    hoveredCard === project.id ? "scale(1.08)" : "scale(1)",
                }}
              />

              {/* Floating tags on image with staggered animation */}
              <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm transition-all duration-500 ease-out"
                    style={{
                      transform:
                        hoveredCard === project.id
                          ? "translateY(0)"
                          : "translateY(-20px)",
                      opacity: hoveredCard === project.id ? 1 : 0,
                      transitionDelay: `${tagIndex * 100}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(45deg, transparent, rgba(163, 230, 53, 0.3), transparent)",
                  backgroundSize: "200% 200%",
                  animation:
                    hoveredCard === project.id
                      ? "gradient-shift 3s ease infinite"
                      : "none",
                }}
              ></div>
            </div>

            <div className="p-8 relative flex justify-between items-center z-20">

              <div className="space-y-2 mb-4">
                <h3
                  className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-900 tracking-tight transition-transform duration-500 ease-out"
                  style={{
                    transform:
                      hoveredCard === project.id
                        ? "translateX(0)"
                        : "translateX(-10px)",
                    opacity: hoveredCard === project.id ? 1 : 0.9,
                  }}
                >
                  {project.title}
                </h3>
                {/* <h4
                  className="text-2xl md:text-3xl font-bold text-gray-600 tracking-tight transition-transform duration-500 ease-out"
                  style={{
                    transform:
                      hoveredCard === project.id
                        ? "translateX(0)"
                        : "translateX(-5px)",
                    opacity: hoveredCard === project.id ? 1 : 0.9,
                    transitionDelay: "50ms",
                  }}
                >
                  {project.subtitle}
                </h4> */}
              </div>

              {/* <div
                className="h-px w-full bg-gradient-to-r from-lime-300 to-transparent my-6 transition-all duration-700 ease-out"
                style={{
                  width: hoveredCard === project.id ? "100%" : "0%",
                }}
              ></div> */}

              <button className="flex items-center justify-center !min-w-14 h-14 bg-orange-500 rounded-full text-white font-medium  transition-all duration-300  hover:bg-violet-500 group hover:drop-shadow">
                <ArrowUpRight className="w-7 h-7 transition-transform duration-800 hover:text-lime-100 group-hover:-rotate-360 group-hover:scale-110" />
              </button>
            </div>

            {/* <div
              className={`absolute bottom-8 right-8 ${project.buttonColor} rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-30 transition-all duration-500 ease-out overflow-hidden`}
              style={{
                transform:
                  hoveredCard === project.id
                    ? "rotate(45deg) scale(1.1)"
                    : "rotate(0) scale(1)",
              }}
            >
              <ArrowUpRight className={`w-5 h-5 ${project.iconColor}`} />
              <div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  animation:
                    hoveredCard === project.id
                      ? "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite"
                      : "none",
                }}
              ></div>
            </div> */}

            {/* Animated corner accent */}
            <div
              className="absolute top-0 right-0 w-20 h-20 transition-all duration-700 ease-out"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, rgba(163, 230, 53, 0.1) 50%)",
                opacity: hoveredCard === project.id ? 1 : 0,
                transform:
                  hoveredCard === project.id ? "scale(1)" : "scale(0.8)",
              }}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
