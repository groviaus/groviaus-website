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
    <section className="z-[100] relative bg-white px-4 py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header with green line */}
        <div className="flex items-center mb-2">
          <div className="w-8 h-0.5 bg-orange-500 mr-3"></div>
          <span className="text-gray-600 font-medium">Contact Us</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-end mt-4">
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
                    className="w-full p-4 bg-gray-50 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
                    className="w-full p-4 bg-gray-50 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
                    className="w-full p-4 bg-gray-50 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
                    className="w-full p-4 bg-gray-50 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
                  className="w-full p-4 bg-gray-50 rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
                  className="w-full p-4 bg-gray-50 rounded-md h-48 resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-[#a4e22b]/30"
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
            <div className="">
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
                  4517 Washington Ave. Manchester,
                  <br />
                  Kentucky 39495
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl text-white font-bold mb-3">Contact</h3>
                <p className="text-white/80 mb-1">Phone : +0123-456-789</p>
                <p className="text-white/80">Email : example@gmail.com</p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl text-white font-bold mb-3">
                  Open Time
                </h3>
                <p className="text-white/80">Monday - Friday : 10:00 - 20:00</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Facebook size={20} color="black" />
                  </a>
                  <a
                    href="#"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Twitter size={20} color="black" />
                  </a>
                  <a
                    href="#"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.827 7.5c.597 0 1.078.48 1.078 1.078 0 .597-.48 1.078-1.078 1.078-.597 0-1.077-.48-1.077-1.078 0-.597.48-1.078 1.077-1.078zm-9.654 12.54c-.199.133-.445.146-.663.034-.242-.125-.33-.42-.205-.663l3.935-7.605c.124-.24.419-.328.662-.204.243.125.33.42.205.662l-3.934 7.776zm9.095-4.376c-.125.242-.42.33-.662.205l-7.934-4.105c-.243-.125-.33-.42-.206-.663.125-.242.42-.33.663-.205l7.934 4.105c.242.125.33.42.205.663z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Instagram size={20} color="black" />
                  </a>
                  <a
                    href="#"
                    className="bg-white rounded-full p-3 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Youtube size={20} color="black" />
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
