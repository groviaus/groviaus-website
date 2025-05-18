import ThreeDCard from "../../../components/ThreeDCard";
import CircleandCursor from "../../../components/CircleandCursor";
import shape from "@/assets/images/ourService/shape.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import SplashCursor from "../../../../yes/SplashCursor/SplashCursor";
const Services = () => {
  // Animation controls
  const [cardsInView, setCardsInView] = useState({});
  const cardRefs = useRef([]);

  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg",
      heading: "Design",
      description:
        "Craft stunning and user-centric designs — from modern landing pages to complex SaaS interfaces.",
      tags: [
        "Brand Identity",
        "Product Design",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "User Testing",
      ],
      buttonText: "Launch a design project",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg",
      heading: "Development",
      description:
        "Build fast, responsive, and scalable digital products — from web apps to mobile-first platforms.",
      tags: [
        "Frontend Development",
        "Backend APIs",
        "Cross-Platform Apps",
        "Performance Optimization",
      ],
      buttonText: "Launch a development project",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg",
      heading: "Marketing",
      description:
        "Accelerate your brand's growth with custom digital marketing strategies tailored to your audience.",
      tags: ["SEO", "SEM", "SMM", "Email Marketing", "Lead Generation"],
      buttonText: "Start a marketing campaign",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294503.jpg",
      heading: "Performance Marketing",
      description:
        "Drive measurable results with data-driven advertising strategies and campaign optimization.",
      tags: ["PPC Campaigns", "Conversion Tracking", "A/B Testing", "Retargeting", "Analytics"],
      buttonText: "Run a performance campaign",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/3d-seo-optimization-with-rocket-marketing-social-media-concept-interface-web-analytics-strategy-research-planing-laptop-3d-seo-strategy-vector-icon-render-illustration_776674-491248.jpg",
      heading: "Content & SEO",
      description:
        "Boost organic traffic and engagement with high-quality content marketing and on-page SEO.",
      tags: [
        "Content Strategy",
        "Blog Writing",
        "Keyword Research",
        "Technical SEO",
        "Backlink Building",
      ],
      buttonText: "Start a content project",
    },
  ];
  

  // Setup intersection observer for each card
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, serviceCards.length);

    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a slight delay based on card index
              setTimeout(() => {
                setCardsInView((prev) => ({
                  ...prev,
                  [index]: true,
                }));
              }, index * (window.innerWidth > 768 ? 200 : 0)); // 200ms delay between each card animation

              // Unobserve after it's in view
              observer.unobserve(ref);
            }
          });
        },
        { threshold: 0.3 } // Trigger when at least 30% of the card is visible
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    // Cleanup
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [serviceCards.length]);

  // Card animations
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: window.innerWidth > 768 ? 50 : 0,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-stone-900 flex justify-center items-center z-[999] relative -mt-5 border-2  border-purple-100 shadow-2xl rounded-4xl h-max pb-20 pt-1 m-1 sm:mx-10 -mb-10">
      <div className="grid sm:grid-cols-3 grid-cols-1 pt-10 items-center justify-center gap-6 px-5 sm:px-10">
        {/* First column with title and first card */}
        <div className="sm:row-span-2 row-span-1 grid items-center justify-center gap-6 sm:gap-10 md:static sticky top-5">
          <div className="sm:ml- w-full">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-violet-200 text-5xl sm:text-[100px] flex items-center ml-8 sm:ml-0 justify-center text-center gap-2 font-medium "
            >
              Services{" "}
              <CircleandCursor
                circleClassName="w-5 h-5 sm:w-10 sm:h-10 fill-white stroke-1 !stroke-stone-900"
                cursorClassName="w-5 h-5 sm:w-10 sm:h-10 fill-violet-500 stroke-2 sm:left-3 sm:top-3 left-2 top-2 !stroke-stone-900"
                className="mt-5 sm:mt-14"
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-200 text-center sm:text-left font-light text-base max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              From landing pages to SaaS platforms, we specialize in
              design-first solutions.
            </motion.p>
          </div>

          {/* First card */}
          <motion.div
            ref={(el) => (cardRefs.current[0] = el)}
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView[0] ? "visible" : "hidden"}
          >
            <ThreeDCard content={serviceCards[0]} />
          </motion.div>

          {/* Shape image - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:block rounded-full mx-auto overflow-hidden w-80 h-80 hover:rotate-12 hover:scale-90 transition-all duration-300 animate-bounce mt-10"
          >
            <img
              src={shape}
              alt=""
              className="w-full drop-shadow-2xl h-full object-cover "
            />
          </motion.div>
        </div>

        {/* Map the remaining cards */}
        {serviceCards.slice(1).map((card, i) => (
          <motion.div
            key={card.id}
            className={`sticky top-36 md:static`}
            ref={(el) => (cardRefs.current[i + 1] = el)}
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView[i + 1] ? "visible" : "hidden"}
          >
            <ThreeDCard content={card} />
          </motion.div>
        ))}
      </div>
      {/* <SplashCursor /> */}
    </section>
  );
};

export default Services;
