import ThreeDCard from "../../../components/ThreeDcard";
import CircleandCursor from "../../../components/CircleandCursor";
import shape from "@/assets/images/ourService/shape.png";

const Services = () => {
  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      image: "https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg",
      heading: "Design",
      description: "We are a design-first agency handling everything from landing pages to SaaS platforms.",
      tags: ["Branding", "App Design", "Web Design", "UX Research", "Enterprise", "Prototype"],
      buttonText: "Start a design project",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1746277313~exp=1746280913~hmac=50c7982b93f771b071fd92c74a3af9415a6d9f48fba3bd026393268188a7eb3e&w=1380",
      heading: "Development",
      description: "we are a development-first agency handling everything from landing pages to SaaS platforms.",
      tags: ["Web Development", "Mobile Development", "UI/UX Design", "API Development"],
      buttonText: "Start a Development project",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1746277473~exp=1746281073~hmac=59becfbff40b0b4f0790cf775fd54230192567caf4b21b0b023c93b4f9d3f604&w=1380",
      heading: "Marketing",
      description: "We are a marketing-first agency handling everything from landing pages to SaaS platforms.",
      tags: ["SEO", "SEM", "SMM", "Email Marketing", "Social Media Marketing"],
      buttonText: "Start a Marketing project",
    },
    {
      id: 4,
      image: "https://img.freepik.com/premium-photo/assortment-desk-elements-with-empty-notebook_636537-217483.jpg",
      heading: "Marketing",
      description: "We are a marketing-first agency handling everything from landing pages to SaaS platforms.",
      tags: ["SEO", "SEM", "SMM", "Email Marketing", "Social Media Marketing"],
      buttonText: "Start a Marketing project",
    },
    {
      id: 5,
      image: "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1746277473~exp=1746281073~hmac=59becfbff40b0b4f0790cf775fd54230192567caf4b21b0b023c93b4f9d3f604&w=1380",
      heading: "Marketing",
      description: "We are a marketing-first agency handling everything from landing pages to SaaS platforms.",
      tags: ["SEO", "SEM", "SMM", "Email Marketing", "Social Media Marketing"],
      buttonText: "Start a Marketing project",
    },
  ];

  return (
    <section className="bg-stone-900 flex justify-center items-center z-[99] relative -mt-5 border-2  border-purple-100 shadow-2xl rounded-4xl h-max pb-20 pt-1 m-1 sm:m-10">
      <div className="grid sm:grid-cols-3 grid-cols-1 pt-10 items-center justify-center gap-6 px-5 sm:px-10">
        {/* First column with title and first card */}
        <div className="sm:row-span-2 row-span-1 grid items-center justify-center gap-6 sm:gap-10 md:static sticky top-5">
          <div className="sm:ml-7">
            <h1 className="text-violet-200 text-5xl sm:text-[100px] flex items-center ml-8 sm:ml-0 justify-center text-center gap-2">
              Services{" "}
              <CircleandCursor
                circleClassName="w-8 h-8 sm:w-10 sm:h-10 fill-white stroke-1 !stroke-stone-900"
                cursorClassName="w-8 h-8 sm:w-10 sm:h-10 fill-white stroke-1 !stroke-stone-900"
                className="mt-5 sm:mt-14"
              />
            </h1>
            <p className="text-slate-200 text-center sm:text-left font-light text-base max-w-xs sm:max-w-none mx-auto sm:mx-0">
              From landing pages to SaaS platforms, we specialize in
              design-first solutions.
            </p>
          </div>

          {/* First card */}
          <ThreeDCard content={serviceCards[0]} />
          
          {/* Shape image - hidden on mobile */}
          <div className="hidden sm:block rounded-full mx-auto overflow-hidden w-96 h-96 hover:rotate-45 hover:scale-90 transition-all duration-300">
            <img
              src={shape}
              alt=""
              className="w-full drop-shadow-2xl h-full object-cover"
            />
          </div>
        </div>
        
        {/* Map the remaining cards */}
        {serviceCards.slice(1).map((card, index) => (
          <div 
            key={card.id} 
            className={`sticky top-36 md:static`} 
          >
            <ThreeDCard content={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;