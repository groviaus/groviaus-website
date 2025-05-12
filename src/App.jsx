import HeroSection from "./pages/landingPage/HeroSection";
import Services from "./pages/landingPage/servicesSection/Services";
import AboutUs from "./pages/landingPage/aboutSection/AboutUs";
import Project from "./pages/landingPage/projectsSection/Project";
import Testimonials from "./pages/landingPage/testimonialSection/Testimonial";
import Footer from "./pages/footer/Footer";
function App() {
  return (
      <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Project />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
