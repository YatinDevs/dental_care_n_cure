import React, { useState } from "react";
import { useSEO } from "../../hooks/useSEO";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  useSEO("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-slate-800 mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries about our services or
            training programs.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
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
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
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
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin
                    className="text-blue-600 mt-1 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-medium text-slate-800">Address</h3>
                    <p className="text-slate-600">
                      4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                      Tilakwadi, Nashik, Maharashtra 422002
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone
                    className="text-blue-600 mt-1 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-medium text-slate-800">Phone</h3>
                    <p className="text-slate-600">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    className="text-blue-600 mt-1 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-medium text-slate-800">Email</h3>
                    <p className="text-slate-600">
                      info@richsystemsolutions.com
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-slate-800 mb-4">
                    Business Hours
                  </h3>
                  <ul className="text-slate-600 space-y-2">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
