import HeroSection from "./HeroSection";
import Services from "./servicesSection/Services";
import AboutUs from "./aboutSection/AboutUs";
import Project from "./projectsSection/Project";
import Testimonials from "./testimonialSection/Testimonial";
import Footer from "../footer/Footer";
import Contact from "./contactSection/Contact";
function LandingPage() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
