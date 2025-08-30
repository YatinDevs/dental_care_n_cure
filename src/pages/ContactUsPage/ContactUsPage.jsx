import React, { useState } from "react";
import { useSEO } from "../../hooks/useSEO";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsPage = () => {
  useSEO("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your Google Apps Script URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxT4Rp9AL5pOV5D406nT8ODKTLKEp8oiqFpV4jNbsJQ1N-Osbl8-7luyyElmpYfJV5T/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20">
      <section className="py-16 px-4 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Contact Us
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get in touch with our team for any inquiries about our services or
              training programs.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  Thank You for Your Message!
                </h2>
                <p className="text-slate-600 mb-6">
                  We've received your inquiry and our team will get back to you
                  within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.name ? "border-red-500" : "border-slate-300"
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.message ? "border-red-500" : "border-slate-300"
                        }`}
                        required
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-blue-100">
                          4th Floor, Akravi Disha, 401, opposite Hotel City
                          Pride, Tilakwadi, Nashik, Maharashtra 422002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-blue-100">+91-XXXXXXXXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-blue-100">
                          info@richsystemsolutions.com
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-blue-500/30">
                      <h3 className="font-medium mb-4 flex items-center">
                        <Clock size={18} className="mr-2" />
                        Business Hours
                      </h3>
                      <ul className="text-blue-100 space-y-2">
                        <li className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday</span>
                          <span>9:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;

// import React, { useState } from "react";
// import { useSEO } from "../../hooks/useSEO";
// import { Mail, Phone, MapPin } from "lucide-react";

// const ContactUsPage = () => {
//   useSEO("contact");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h1 className="text-4xl font-bold text-slate-800 mb-2 text-center">
//             Contact Us
//           </h1>
//           <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
//             Get in touch with our team for any inquiries about our services or
//             training programs.
//           </p>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-6">
//                 Contact Information
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <MapPin
//                     className="text-blue-600 mt-1 mr-4 flex-shrink-0"
//                     size={24}
//                   />
//                   <div>
//                     <h3 className="font-medium text-slate-800">Address</h3>
//                     <p className="text-slate-600">
//                       4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
//                       Tilakwadi, Nashik, Maharashtra 422002
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <Phone
//                     className="text-blue-600 mt-1 mr-4 flex-shrink-0"
//                     size={24}
//                   />
//                   <div>
//                     <h3 className="font-medium text-slate-800">Phone</h3>
//                     <p className="text-slate-600">+91-XXXXXXXXXX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <Mail
//                     className="text-blue-600 mt-1 mr-4 flex-shrink-0"
//                     size={24}
//                   />
//                   <div>
//                     <h3 className="font-medium text-slate-800">Email</h3>
//                     <p className="text-slate-600">
//                       info@richsystemsolutions.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h3 className="font-medium text-slate-800 mb-4">
//                     Business Hours
//                   </h3>
//                   <ul className="text-slate-600 space-y-2">
//                     <li className="flex justify-between">
//                       <span>Monday - Friday</span>
//                       <span>9:00 AM - 6:00 PM</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span>Saturday</span>
//                       <span>9:00 AM - 4:00 PM</span>
//                     </li>
//                     <li className="flex justify-between">
//                       <span>Sunday</span>
//                       <span>Closed</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUsPage;
