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
import emailjs from "@emailjs/browser";

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

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
    if (formErrors.submit) {
      setFormErrors((prevErrors) => ({ ...prevErrors, submit: null }));
    }
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
      isValid = false;
    } else {
      const cleanedPhone = formData.phone.replace(/^(?:\+91|91|0)?/, "");
      if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
        errors.phone =
          "Phone number must be 10 digits and start with 6, 7, 8, or 9 (country code will be ignored if present).";
        isValid = false;
      }
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setFormErrors({});

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: "Groviaus Team",
      };

      const SERVICE_ID = "service_t7e5pmv";
      const TEMPLATE_ID = "template_z40r1ij";
      const PUBLIC_KEY = "3Q4Mq67c0i4Gp_GML";

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsFocused({
            firstName: false,
            lastName: false,
            email: false,
            phone: false,
            subject: false,
            message: false,
          });
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setFormErrors({
            submit: "Failed to send message. Please try again.",
          });
          alert("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <section id="contact" className="z-[100] relative bg-white px-5 md:px-6 py-30 rounded-3xl  sm:mx-5 -mb-10 -mt-16">
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

            <form onSubmit={handleSubmit} noValidate>
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
                    className={`w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                      formErrors.firstName ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.firstName || isFocused.firstName
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    } ${formErrors.firstName ? "text-red-600" : ""}`}
                  >
                    First Name *
                  </label>
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1 px-1">
                      {formErrors.firstName}
                    </p>
                  )}
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
                    className={`w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                      formErrors.lastName ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.lastName || isFocused.lastName
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    } ${formErrors.lastName ? "text-red-600" : ""}`}
                  >
                    Last Name *
                  </label>
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1 px-1">
                      {formErrors.lastName}
                    </p>
                  )}
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
                    className={`w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                      formErrors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.email || isFocused.email
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    } ${formErrors.email ? "text-red-600" : ""}`}
                  >
                    Email *
                  </label>
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1 px-1">
                      {formErrors.email}
                    </p>
                  )}
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
                    className={`w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                      formErrors.phone ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.phone || isFocused.phone
                        ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                        : "text-gray-500 top-4"
                    } ${formErrors.phone ? "text-red-600" : ""}`}
                  >
                    Phone Number *
                  </label>
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1 px-1">
                      {formErrors.phone}
                    </p>
                  )}
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
                  className={`w-full p-4 bg-gray-50 shadow-md rounded-md outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                    formErrors.subject ? "ring-2 ring-red-500" : ""
                  }`}
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.subject || isFocused.subject
                      ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                      : "text-gray-500 top-4"
                  } ${formErrors.subject ? "text-red-600" : ""}`}
                >
                  Subject *
                </label>
                {formErrors.subject && (
                  <p className="text-red-500 text-xs mt-1 px-1">
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div className="mb-8 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className={`w-full p-4 bg-gray-50 shadow-md rounded-md h-48 resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500 ${
                    formErrors.message ? "ring-2 ring-red-500" : ""
                  }`}
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    formData.message || isFocused.message
                      ? "text-xs text-gray-500 -top-2.5 bg-white px-1"
                      : "text-gray-500 top-4"
                  } ${formErrors.message ? "text-red-600" : ""}`}
                >
                  Message *
                </label>
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1 px-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 text-black font-medium py-2 pl-8 pr-2 rounded-full flex items-center transition-all duration-300 hover:bg-orange-600 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <div
                    className={`ml-4 bg-black rounded-full p-2 ${
                      isSubmitting ? "" : "group-hover:bg-gray-800"
                    } transition-all duration-300`}
                  >
                    <ArrowRight size={16} color="white" />
                  </div>
                </button>
              </div>
              {formErrors.submit && (
                <p className="text-red-500 text-sm mt-4">{formErrors.submit}</p>
              )}
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-full lg:w-5/12 relative group">
            {/* Hire Us Badge */}
           
            <div className="hidden md:block -mt-10">
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
                <p className="text-white/80">
                  Monday - Saturday : 10:00 - 20:00
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Stay Connected
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Facebook size={20}  className="group-hover:text-white" />,
                      href: "https://www.facebook.com/groviaus",
                    },
                    {
                      icon: <Twitter size={20}  className="group-hover:text-white" />,
                      href: "https://x.com/groviaus",
                    },
               
                    {
                      icon: <Instagram size={20}  className="group-hover:text-white" />,
                      href: "https://www.instagram.com/groviaus/",
                    },
                    {
                      icon: <Youtube size={20}  className="group-hover:text-white" />,
                      href: "https://www.youtube.com/@groviaus",
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      target="_blank"
                      href={item.href}
                      className="bg-white cursor-none rounded-full p-3 hover:bg-violet-100 transition-all duration-300 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white "
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
