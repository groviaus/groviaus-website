import { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import img from "@/assets/images/footer/footerBg.jpg";
import CircularText from "../../../../yes/CircularText/CircularText";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="z-[100] relative bg-white px-5 md:px-6 py-30 rounded-3xl mx-10 -mb-10   -mt-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header with green line */}
        <div className="flex items-center mb-5">
        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full text-sm font-medium shadow-sm    animate-shimmer text-white w-fit">
          Contact Us
        </span>

        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-20 items-start ">
          {/* Left side - Form */}
          <div className="w-full lg:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 leading-tight">
              Join Us in Creating
              <br />
              Something Great
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("firstName")}
                    onBlur={() => handleBlur("firstName")}
                    className="w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.firstName || isFocused.firstName
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    }`}
                  >
                    First Name *
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("lastName")}
                    onBlur={() => handleBlur("lastName")}
                    className="w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.lastName || isFocused.lastName
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    }`}
                  >
                    Last Name *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className="w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.email || isFocused.email
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    }`}
                  >
                    Email *
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    className="w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.phone || isFocused.phone
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    }`}
                  >
                    Phone Number *
                  </label>
                </div>
              </div>

              <div className="mb-5 relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={() => handleBlur("subject")}
                  className="w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                  required
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.subject || isFocused.subject
                      ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                      : "text-gray-500 top-4"
                  }`}
                >
                  Subject *
                </label>
              </div>

              <div className="mb-8 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className="w-full p-4 bg-gray-50 shadow-md rounded-md h-48 resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.message || isFocused.message
                      ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                      : "text-gray-500 top-4"
                  }`}
                >
                  Message *
                </label>
              </div>

              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-black font-medium py-2 pl-8 pr-2 rounded-full flex items-center transition-all duration-300 hover:bg-orange-600 group"
                >
                  Send Message
                  <div className="ml-4 bg-black rounded-full p-2 group-hover:bg-gray-800 transition-all duration-300">
                    <ArrowRight size={16} color="white" />
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-full lg:w-5/12 relative">
            {/* Hire Us Badge */}
            {/* <div className="absolute -top-12 right-0">
              <div className="relative">
                <div className="w-28 h-28 bg-[#a4e22b] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black rounded-full flex items-center justify-center">
                  <div className="text-white text-xs font-bold text-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin-slow">
                        <svg width="70" height="70" viewBox="0 0 100 100">
                          <defs>
                            <path
                              id="circle"
                              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                          </defs>
                          <text fontSize="9">
                            <textPath xlinkHref="#circle" startOffset="0%">
                              HIRE US • HIRE US • HIRE US •
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      color="white"
                      className="transform rotate-45 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="hidden md:block">
              <CircularText
                text="Groviaus*Digital*Marketing*"
                onHover="goBonkers"
                spinDuration={50}
                className="custom-class bg-black !w-[100px] !h-[100px] sm:!w-[150px] sm:!h-[150px]"
                textClassName="font-semibold text-white text-base sm:text-lg"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-[url('@/assets/images/footer/footerBg.jpg')] rounded-xl p-8 mt-8">
              <div className="mb-10">
                <h3 className="text-2xl text-white font-bold mb-3">Address</h3>
                <p className="text-white/80">
                GroViaUs, 11th Floor, Bhutani City Center, Sector 32 NOIDA
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl text-white font-bold mb-3">Contact</h3>
                <p className="text-white/80 mb-1">Phone : +91 9310156995</p>
                <p className="text-white/80">Email : ugroviaus@gmail.com</p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl text-white font-bold mb-3">
                  Open Time
                </h3>
                <p className="text-white/80">Mon-Sat : 10:00-20:00</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Stay Connected</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/1G6o2mtM8U/"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} color="black" />
                  </a>
                  <a
                    href="https://www.instagram.com/groviaus?igsh=MWxqeDlINmF1OHJjNw=="
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} color="black" />
                  </a>
                  <a
                    href="https://youtube.com/@groviaus?si=Cm8zVelHR6e4QoT4"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={20} color="black" />
                  </a>
                  <a
                    href="https://x.com/groviaus?t=GxE3uKq3FexQ43fEf-7nRw&s=09"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} color="black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
